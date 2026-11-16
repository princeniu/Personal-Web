import { json } from '@remix-run/cloudflare';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
import { contactContent as enContact } from '../../data/site-content.js';
import { contactContent as zhContact } from '../../data/content/zh/site-content.js';
import { MAX_CONTACT_BODY_BYTES, validateContactFields } from './contact-validation.js';

const localHosts = new Set(['localhost', '127.0.0.1', '0.0.0.0', '[::1]']);
const localReservations = new Map();

async function readFormData(request) {
  const advertisedLength = Number(request.headers.get('Content-Length'));
  if (advertisedLength > MAX_CONTACT_BODY_BYTES) return { tooLarge: true };
  if (!request.body) return { malformed: true };

  const reader = request.body.getReader();
  const chunks = [];
  let size = 0;
  try {
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > MAX_CONTACT_BODY_BYTES) {
        await reader.cancel();
        return { tooLarge: true };
      }
      chunks.push(value);
    }
    const body = new Uint8Array(size);
    let offset = 0;
    for (const chunk of chunks) {
      body.set(chunk, offset);
      offset += chunk.byteLength;
    }
    const parsedRequest = new Request(request.url, {
      method: 'POST',
      headers: request.headers,
      body,
    });
    return { formData: await parsedRequest.formData() };
  } catch {
    return { malformed: true };
  } finally {
    reader.releaseLock();
  }
}

async function reserveContactSlot(env, request) {
  const ip = request.headers.get('CF-Connecting-IP');
  if (env.CONTACT_RATE_LIMITER) {
    // The edge-provided address is the only production identity we trust.
    if (!ip) return { unavailable: true };
    const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(ip));
    const key = Array.from(new Uint8Array(digest), byte => byte.toString(16).padStart(2, '0')).join('');
    const id = env.CONTACT_RATE_LIMITER.idFromName(key);
    const limiter = env.CONTACT_RATE_LIMITER.get(id);
    const response = await limiter.fetch('https://contact-limiter.internal/reserve', { method: 'POST' });
    if (response.status === 429) return { limited: true };
    if (!response.ok) return { unavailable: true };
    const result = await response.json();
    return result.allowed === true ? { allowed: true } : { unavailable: true };
  }

  if (!localHosts.has(new URL(request.url).hostname)) return { unavailable: true };
  // A synchronous reservation is sufficient for a single local preview process.
  // Production always requires the durable, transactional binding above.
  const now = Date.now();
  const key = ip || 'local-preview';
  if ((localReservations.get(key) || 0) > now) return { limited: true };
  for (const [address, expiresAt] of localReservations) {
    if (expiresAt <= now) localReservations.delete(address);
  }
  localReservations.set(key, now + 60000);
  return { allowed: true };
}

async function sendContactEmail(env, { email, message }) {
  const ses = new SESClient({
    region: 'us-east-1',
    credentials: {
      accessKeyId: env.AWS_ACCESS_KEY_ID,
      secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
    },
  });
  try {
    await ses.send(new SendEmailCommand({
      Destination: { ToAddresses: [env.EMAIL] },
      Message: {
        Body: { Text: { Data: `From: ${email}\n\n${message}` } },
        Subject: { Data: `Portfolio message from ${email}` },
      },
      Source: `Portfolio <${env.FROM_EMAIL}>`,
      ReplyToAddresses: [email],
    }));
  } finally {
    ses.destroy();
  }
}

// Injecting the sender keeps regression tests local; the normal action uses SES.
export function createContactAction({ sendMail = sendContactEmail } = {}) {
  return async ({ context = {}, request }) => {
    const url = new URL(request.url);
    const content = url.pathname === '/zh' || url.pathname.startsWith('/zh/') ||
      (url.pathname === '/api/contact' && url.searchParams.get('locale') === 'zh') ? zhContact : enContact;
    const env = context.cloudflare?.env || {};
    const reply = (data, status = 200, headers = {}) => json(data, {
      status,
      headers: { 'Cache-Control': 'no-store', ...headers },
    });
    if (request.method !== 'POST') return reply({ errors: { form: content.malformedMessage } }, 405, { Allow: 'POST' });

    const parsed = await readFormData(request);
    if (parsed.tooLarge) return reply({ errors: { form: content.tooLargeMessage || content.failedMessage } }, 413);
    if (parsed.malformed) return reply({ errors: { form: content.malformedMessage || content.failedMessage } }, 400);

    const { formData } = parsed;
    const honeypot = formData.get('name');
    if (typeof honeypot === 'string' && honeypot.trim()) return reply({ success: true });

    const fields = validateContactFields(formData, content);
    const { values, errors } = fields;
    if (Object.keys(errors).length) return reply({ values, errors }, 400);

    if ([env.AWS_ACCESS_KEY_ID, env.AWS_SECRET_ACCESS_KEY, env.EMAIL, env.FROM_EMAIL].some(value => !value)) {
      return reply({ values, errors: { form: content.unconfiguredMessage } }, 503);
    }

    try {
      const slot = await reserveContactSlot(env, request);
      if (slot.limited) return reply({ values, errors: { form: content.rateLimitedMessage } }, 429, { 'Retry-After': '60' });
      if (!slot.allowed) return reply({ values, errors: { form: content.unconfiguredMessage } }, 503);
      await sendMail(env, fields);
    } catch {
      // Avoid logging message content, addresses, credentials, or supplier errors.
      console.error('Contact message delivery failed.');
      return reply({ values, errors: { form: content.failedMessage } }, 503);
    }
    return reply({ success: true });
  };
}

export const action = createContactAction();
