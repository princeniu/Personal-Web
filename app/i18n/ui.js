// Localized strings for interface chrome (aria-labels, control text) that
// lives outside the per-page content modules.
const strings = {
  en: {
    skipToMain: 'Skip to main content',
    menu: 'Menu',
    toggleTheme: 'Toggle theme',
    pause: 'Pause',
    play: 'Play',
    previousSlide: 'Previous slide',
    nextSlide: 'Next slide',
    jumpToSlide: index => `Jump to slide ${index}`,
    switchLanguage: language => `Switch language to ${language}`,
    craftedBy: 'Crafted by yours truly',
    resumeLabel: 'Resume (PDF)',
  },
  zh: {
    skipToMain: '跳到主要内容',
    menu: '菜单',
    toggleTheme: '切换主题',
    pause: '暂停',
    play: '播放',
    previousSlide: '上一张',
    nextSlide: '下一张',
    jumpToSlide: index => `跳到第 ${index} 张`,
    switchLanguage: language => `切换语言为${language === 'English' ? '英文' : language}`,
    craftedBy: '本站由我亲手打造',
    resumeLabel: '简历（PDF）',
  },
};

export function getUiStrings(locale) {
  return locale === 'zh' ? strings.zh : strings.en;
}
