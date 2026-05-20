export const defaultLocale = 'en';
export const supportedLocales = ['en', 'zh'];

export const localeLabels = {
  en: 'English',
  zh: '中文',
};

export const localeMeta = {
  en: {
    htmlLang: 'en',
    ogLocale: 'en_US',
    schemaLanguage: 'en-US',
  },
  zh: {
    htmlLang: 'zh-CN',
    ogLocale: 'zh_CN',
    schemaLanguage: 'zh-CN',
  },
};

export function isSupportedLocale(locale) {
  return supportedLocales.includes(locale);
}
