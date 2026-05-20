import { defaultLocale } from './locales';

export function getLocaleFromPathname(pathname = '/') {
  return pathname === '/zh' || pathname.startsWith('/zh/') ? 'zh' : defaultLocale;
}

export function stripLocaleFromPathname(pathname = '/') {
  if (pathname === '/zh') return '/';
  if (pathname.startsWith('/zh/')) return pathname.slice(3) || '/';
  return pathname || '/';
}

export function localizePath(pathname = '/', locale = defaultLocale) {
  const [pathPart, hashPart] = pathname.split('#');
  const basePath = stripLocaleFromPathname(pathPart || '/');
  const hash = hashPart ? `#${hashPart}` : '';

  if (locale === defaultLocale) return `${basePath}${hash}`;
  if (basePath === '/') return `/${locale}${hash}`;

  return `/${locale}${basePath}${hash}`;
}

export function getPathnameWithoutTrailingSlash(pathname = '/') {
  return pathname !== '/' && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
}
