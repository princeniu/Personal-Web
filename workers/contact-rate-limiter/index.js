export class ContactRateLimiter {
  constructor(state) {
    this.storage = state.storage;
  }

  async fetch(request) {
    if (request.method !== 'POST' || new URL(request.url).pathname !== '/reserve') {
      return new Response(null, { status: 404 });
    }
    const allowed = await this.storage.transaction(async transaction => {
      const now = Date.now();
      const nextAllowedAt = (await transaction.get('nextAllowedAt')) || 0;
      if (nextAllowedAt > now) return false;
      await transaction.put('nextAllowedAt', now + 60000);
      return true;
    });
    return Response.json({ allowed }, {
      status: allowed ? 200 : 429,
      headers: { 'Cache-Control': 'no-store', ...(allowed ? {} : { 'Retry-After': '60' }) },
    });
  }
}

// The limiter is available through its binding only, with no public endpoint.
export default { fetch: () => new Response(null, { status: 404 }) };
