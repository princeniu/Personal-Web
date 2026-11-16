import http from 'node:http';
import path from 'node:path';
import { stat } from 'node:fs/promises';
import { createReadStream } from 'node:fs';
import { Readable } from 'node:stream';
import { createGzip } from 'node:zlib';
import { fileURLToPath } from 'node:url';
import { registerHooks } from 'node:module';
import { createRequestHandler } from '@remix-run/cloudflare';

// The Cloudflare build uses web streams; keep other dependencies on Node's
// normal exports while selecting React's web-stream renderer for this preview.
registerHooks({
  resolve(specifier, context, nextResolve) {
    return nextResolve(specifier === 'react-dom/server' ? 'react-dom/server.browser' : specifier, context);
  },
});
const build = await import('../build/server/index.js');

const root = path.resolve(fileURLToPath(new URL('../build/client/', import.meta.url)));
const port = Number(process.env.PORTFOLIO_PREVIEW_PORT || 7777);
const handleRequest = createRequestHandler(build, 'production');
const types = {
  '.js': 'text/javascript', '.css': 'text/css', '.html': 'text/html',
  '.json': 'application/json', '.xml': 'application/xml', '.txt': 'text/plain',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.webp': 'image/webp',
  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.ico': 'image/x-icon',
  '.woff2': 'font/woff2', '.wasm': 'application/wasm', '.mp4': 'video/mp4',
  '.pdf': 'application/pdf',
};

// This preview intentionally provides no email credentials or cloud bindings.
// It can validate form failures and draft retention without sending messages.
const context = { cloudflare: { env: {} } };

const server = http.createServer(async (incoming, outgoing) => {
  try {
    const url = new URL(incoming.url, `http://127.0.0.1:${port}`);
    const file = path.resolve(root, `.${decodeURIComponent(url.pathname)}`);
    if ((incoming.method === 'GET' || incoming.method === 'HEAD') && file.startsWith(root + path.sep)) {
      const info = await stat(file).catch(() => null);
      if (info?.isFile()) {
        outgoing.setHeader('Content-Type', types[path.extname(file)] || 'application/octet-stream');
        outgoing.setHeader('Cache-Control', 'no-store');
        if (incoming.method === 'HEAD') { outgoing.end(); return; }
        const acceptsGzip = (incoming.headers['accept-encoding'] || '').split(',').some(value => {
          const [encoding, quality] = value.trim().split(';');
          return encoding === 'gzip' && (!quality || Number(quality.trim().replace(/^q=/, '')) > 0);
        });
        const compress = /\b(?:javascript|css|json|xml|svg|plain)\b/.test(types[path.extname(file)] || '') && acceptsGzip;
        if (compress) {
          outgoing.setHeader('Content-Encoding', 'gzip');
          outgoing.setHeader('Vary', 'Accept-Encoding');
          createReadStream(file).pipe(createGzip()).pipe(outgoing);
        } else {
          outgoing.setHeader('Content-Length', info.size);
          createReadStream(file).pipe(outgoing);
        }
        return;
      }
    }

    const init = { method: incoming.method, headers: incoming.headers };
    if (incoming.method !== 'GET' && incoming.method !== 'HEAD') {
      init.body = Readable.toWeb(incoming);
      init.duplex = 'half';
    }
    const response = await handleRequest(new Request(url, init), context);
    outgoing.statusCode = response.status;
    for (const [key, value] of response.headers) {
      if (key !== 'set-cookie') outgoing.setHeader(key, value);
    }
    const cookies = response.headers.getSetCookie();
    if (cookies.length) outgoing.setHeader('Set-Cookie', cookies);
    if (!response.body || incoming.method === 'HEAD') outgoing.end();
    else Readable.fromWeb(response.body).pipe(outgoing);
  } catch (error) {
    console.error('Local preview request failed:', error.message);
    if (!outgoing.headersSent) outgoing.writeHead(500, { 'Content-Type': 'text/plain' });
    outgoing.end('Local preview could not render this page.');
  }
});

server.listen(port, '127.0.0.1', () => console.log(`Local preview: http://127.0.0.1:${port} (email sending disabled)`));
process.once('SIGINT', () => server.close(() => process.exit(0)));
