import test from 'node:test';
import assert from 'node:assert/strict';
import { applyPreviewRobotsHeader } from '../app/utils/response-headers.js';

test('Pages SSR previews receive noindex on project and version hosts', async () => {
  for (const host of ['personal-web-3g9.pages.dev', 'cc630b73.personal-web-3g9.pages.dev']) {
    const response = applyPreviewRobotsHeader(new Response('Rendered page', {
      status: 404,
      headers: { 'Content-Type': 'text/html', 'Set-Cookie': 'theme=dark', 'X-Custom': 'preserved' },
    }), `https://${host}/projects/missing`);
    assert.equal(response.status, 404);
    assert.equal(response.headers.get('X-Robots-Tag'), 'noindex, nofollow');
    assert.equal(response.headers.get('Set-Cookie'), 'theme=dark');
    assert.equal(response.headers.get('X-Custom'), 'preserved');
    assert.equal(await response.text(), 'Rendered page');
  }
});

test('production responses are unchanged and do not get preview noindex', () => {
  const response = new Response('Production');
  assert.equal(applyPreviewRobotsHeader(response, 'https://princeniu.com/'), response);
  assert.equal(response.headers.get('X-Robots-Tag'), null);
});
