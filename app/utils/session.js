const localHostnames = new Set(['localhost', '127.0.0.1', '0.0.0.0']);

export function getSessionSecrets(request, env = {}) {
  if (env.SESSION_SECRET) {
    return [env.SESSION_SECRET];
  }

  const { hostname } = new URL(request.url);

  if (localHostnames.has(hostname)) {
    return ['dev-session-secret'];
  }

  throw new Error('SESSION_SECRET is required outside local development.');
}
