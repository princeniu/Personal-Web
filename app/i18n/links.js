import config from '~/config.json';
import { defaultLocale, supportedLocales } from './locales';
import { localizePath, stripLocaleFromPathname } from './route';

export function getLocalizedUrl(pathname, locale) {
  return `${config.url}${localizePath(pathname, locale)}`;
}

export function getAlternateLinks(pathname) {
  const basePath = stripLocaleFromPathname(pathname);

  return [
    ...supportedLocales.map(locale => ({
      rel: 'alternate',
      hrefLang: locale === 'zh' ? 'zh-CN' : locale,
      href: getLocalizedUrl(basePath, locale),
    })),
    {
      rel: 'alternate',
      hrefLang: 'x-default',
      href: getLocalizedUrl(basePath, defaultLocale),
    },
  ];
}
