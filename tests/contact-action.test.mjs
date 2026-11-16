import test from 'node:test';
import assert from 'node:assert/strict';
import { createContactAction } from '../app/routes/contact/contact-action.server.js';
import { contactContent as enContact } from '../app/data/site-content.js';
import { contactContent as zhContact } from '../app/data/content/zh/site-content.js';
import { ContactRateLimiter } from '../workers/contact-rate-limiter/index.js';

class TransactionalStorage {
  values = new Map();
  queue = Promise.resolve();

  transaction(callback) {
    const operation = this.queue.then(() => callback({
      get: async key => this.values.get(key),
      put: async (key, value) => this.values.set(key, value),
    }));
    this.queue = operation.catch(() => {});
    return operation;
  }
}

function environment() {
  const instances = new Map();
  return {
    AWS_ACCESS_KEY_ID: 'local-test',
    AWS_SECRET_ACCESS_KEY: 'local-test',
    EMAIL: 'owner@example.com',
    FROM_EMAIL: 'sender@example.com',
    CONTACT_RATE_LIMITER: {
      idFromName: value => value,
      get(id) {
        if (!instances.has(id)) instances.set(id, new ContactRateLimiter({ storage: new TransactionalStorage() }));
        return { fetch: (url, options) => instances.get(id).fetch(new Request(url, options)) };
      },
    },
  };
}

function request(fields = { email: 'reader@example.com', message: 'Hello' }, url = 'https://princeniu.com/contact') {
  const body = new FormData();
  for (const [key, value] of Object.entries(fields)) body.set(key, value);
  return new Request(url, { method: 'POST', headers: { 'CF-Connecting-IP': '192.0.2.1' }, body });
}

function setup() {
  const sent = [];
  const env = environment();
  const action = createContactAction({ sendMail: async (_env, fields) => sent.push(fields) });
  return { sent, env, run: req => action({ context: { cloudflare: { env } }, request: req }) };
}

test('a missing honeypot is not success without delivery; accepted text is trimmed', async () => {
  const { run, sent } = setup();
  const response = await run(request({ email: ' reader@example.com ', message: '  Hello\n世界  ' }));
  assert.equal(response.status, 200);
  assert.equal((await response.json()).success, true);
  assert.equal(sent.length, 1);
  assert.equal(sent[0].email, 'reader@example.com');
  assert.equal(sent[0].message, 'Hello\n世界');
});

test('empty, missing, file, and whitespace-only message fields never reach the sender', async () => {
  for (const fields of [
    { email: 'reader@example.com' },
    { email: 'reader@example.com', message: ' \n\t ' },
    { message: 'Hello' },
    { email: new File(['text'], 'email.txt'), message: 'Hello' },
    { email: 'reader@example.com', message: new File(['text'], 'message.txt') },
  ]) {
    const { run, sent } = setup();
    const response = await run(request(fields));
    assert.equal(response.status, 400);
    assert.equal(sent.length, 0);
    assert.ok(Object.keys((await response.json()).errors).length);
  }
});

test('invalid fields retain text and do not consume the rate limit', async () => {
  const { run, sent } = setup();
  const response = await run(request({ email: 'bad', message: '  Keep my draft  ' }));
  assert.equal(response.status, 400);
  assert.deepEqual((await response.json()).values, { email: 'bad', message: '  Keep my draft  ' });
  assert.equal((await run(request())).status, 200);
  assert.equal(sent.length, 1);
});

test('concurrent valid requests reserve one slot and send one email', async () => {
  const { run, sent } = setup();
  const responses = await Promise.all(Array.from({ length: 20 }, () => run(request())));
  assert.equal(responses.filter(response => response.status === 200).length, 1);
  assert.equal(responses.filter(response => response.status === 429).length, 19);
  assert.equal(sent.length, 1);
  const limited = responses.find(response => response.status === 429);
  assert.equal(limited.headers.get('Retry-After'), '60');
  assert.equal((await limited.json()).values.message, 'Hello');
});

test('an absent or failing production limiter fails closed and retains the draft', async () => {
  for (const binding of [undefined, { idFromName() { throw new Error('Unavailable'); } }]) {
    const { run, sent, env } = setup();
    env.CONTACT_RATE_LIMITER = binding;
    const response = await run(request());
    assert.equal(response.status, 503);
    assert.equal((await response.json()).values.message, 'Hello');
    assert.equal(sent.length, 0);
  }
});

test('a supplier failure returns an error with the draft instead of success', async () => {
  const action = createContactAction({ sendMail: async () => { throw new Error('Local supplier stub'); } });
  const response = await action({ context: { cloudflare: { env: environment() } }, request: request() });
  assert.equal(response.status, 503);
  const result = await response.json();
  assert.equal(result.success, undefined);
  assert.equal(result.values.message, 'Hello');
  assert.equal(result.errors.form, enContact.failedMessage);
});

test('the API locale comes from the explicit route, without Referer', async () => {
  const { run } = setup();
  const response = await run(request({ email: 'bad', message: '你好' }, 'https://princeniu.com/api/contact?locale=zh'));
  assert.equal((await response.json()).errors.email, zhContact.errorEmailInvalid);
});

test('malformed, oversized, and duplicate-field requests are rejected locally', async () => {
  const { run, sent } = setup();
  const malformed = new Request('https://princeniu.com/contact', { method: 'POST', body: '{}', headers: { 'Content-Type': 'application/json' } });
  assert.equal((await run(malformed)).status, 400);
  const oversized = new Request('https://princeniu.com/contact', { method: 'POST', body: 'x'.repeat(40000), headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });
  assert.equal((await run(oversized)).status, 413);
  const body = new FormData();
  body.append('email', 'reader@example.com');
  body.append('email', 'other@example.com');
  body.append('message', 'Hello');
  assert.equal((await run(new Request('https://princeniu.com/contact', { method: 'POST', body }))).status, 400);
  assert.equal(sent.length, 0);
});

test('the honeypot does not call the sender', async () => {
  const { run, sent } = setup();
  assert.equal((await run(request({ name: 'bot', email: 'reader@example.com', message: 'Hello' }))).status, 200);
  assert.equal(sent.length, 0);
});
