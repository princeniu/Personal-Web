export function applyPreviewRobotsHeader(response, url) {
  const hostname = new URL(url).hostname;
  if (!hostname.endsWith('.pages.dev')) return response;
  const headers = new Headers(response.headers);
  headers.set('X-Robots-Tag', 'noindex, nofollow');
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}
