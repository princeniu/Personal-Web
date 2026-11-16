import { createPagesFunctionHandler } from '@remix-run/cloudflare-pages';

import * as build from '../build/server';
import { applyPreviewRobotsHeader } from '../app/utils/response-headers.js';

const handleRequest = createPagesFunctionHandler({ build });

export async function onRequest(context) {
  const response = await handleRequest(context);
  return applyPreviewRobotsHeader(response, context.request.url);
}
