# Bilingual Portfolio Optimization Implementation Plan

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task after Phase 0 audit is complete.

**Goal:** Convert Prince's portfolio into a bilingual English/Chinese site while keeping English as the default experience and preserving existing production URLs.

**Architecture:** English remains at the current canonical routes. Chinese content is added under `/zh` routes. Content is moved into lightweight locale-aware modules instead of introducing a heavy i18n framework. Project assets remain shared so images, videos, placeholders, and carousel behavior are not duplicated.

**Tech Stack:** Remix 2, Vite, React, Cloudflare Pages/Wrangler, existing portfolio data modules.

---

## Product Decision

Use English as the default language and add Chinese under `/zh`.

### Default routes

- `/`
- `/contact`
- `/uses`
- `/projects/sayit`
- `/projects/trekassist`
- `/projects/all-work`

### Chinese routes

- `/zh`
- `/zh/contact`
- `/zh/uses`
- `/zh/projects/sayit`
- `/zh/projects/trekassist`
- `/zh/projects/all-work`

### Rationale

- Existing English URLs remain stable for recruiters, resumes, LinkedIn, GitHub, and search results.
- Chinese becomes easy to share without query parameters.
- `/zh` is better for SEO than `?lang=zh`.
- Avoid browser-language redirects because the site is primarily recruiter-facing and should default to English.
- Avoid `/en` initially because English is the canonical/default language.

---

## Recommended Technical Direction

### Use lightweight locale modules

Do not start with `i18next`, `react-intl`, or another large i18n framework. The portfolio is a content-heavy site, not a complex application dashboard. A local content module approach is lower-maintenance and easier to review.

Recommended structure:

```txt
app/
  i18n/
    locales.js
    route.js
    links.js
    content.js

  data/
    content/
      en/
        config.js
        site-content.js
        nav-data.js
        project-content.js
        projects/
          sayit.js
          knowledgeos.js
          trekassist.js
          porsche-digital-interface.js
          posture-checker.js
          etongue.js
          little-lemon.js
      zh/
        config.js
        site-content.js
        nav-data.js
        project-content.js
        projects/
          sayit.js
          knowledgeos.js
          trekassist.js
          porsche-digital-interface.js
          posture-checker.js
          etongue.js
          little-lemon.js

  data/
    project-assets.js
```

### Keep slugs stable

Project slugs should not be translated.

Good:

```txt
/zh/projects/sayit
/zh/projects/knowledgeos
/zh/projects/porsche-digital-interface
```

Avoid:

```txt
/zh/projects/语音输入工具
/zh/projects/知识系统
```

Stable slugs reduce maintenance, avoid broken links, and preserve a clean portfolio structure.

---

## i18n Utility Design

### `app/i18n/locales.js`

```js
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
  },
  zh: {
    htmlLang: 'zh-CN',
    ogLocale: 'zh_CN',
  },
};
```

### `app/i18n/route.js`

```js
export function getLocaleFromPathname(pathname) {
  return pathname === '/zh' || pathname.startsWith('/zh/') ? 'zh' : 'en';
}

export function stripLocaleFromPathname(pathname) {
  if (pathname === '/zh') return '/';
  if (pathname.startsWith('/zh/')) return pathname.slice(3);
  return pathname;
}

export function localizePath(pathname, locale) {
  const basePath = stripLocaleFromPathname(pathname);

  if (locale === 'en') return basePath;
  if (basePath === '/') return '/zh';

  return `/zh${basePath}`;
}
```

### `app/i18n/content.js`

```js
import * as enContent from '~/data/content/en';
import * as zhContent from '~/data/content/zh';

export function getContent(locale) {
  return locale === 'zh' ? zhContent : enContent;
}
```

---

## Content Model

### Global content

Centralize common strings:

```js
export const commonContent = {
  skipToMain: 'Skip to main content',
  scrollToProjects: 'Scroll to projects',
  pauseDisciplines: 'Pause rotating disciplines',
  resumeDisciplines: 'Resume rotating disciplines',
  backToHome: 'Back to homepage',
  notFoundTitle: 'Page not found',
};
```

Chinese equivalent:

```js
export const commonContent = {
  skipToMain: '跳到主要内容',
  scrollToProjects: '查看项目',
  pauseDisciplines: '暂停领域轮播',
  resumeDisciplines: '继续领域轮播',
  backToHome: '返回首页',
  notFoundTitle: '页面未找到',
};
```

### Page content

Move existing page-level content into locale modules:

- Home intro
- Profile/About
- Contact
- Uses
- All Work
- Footer
- Error / 404 states

### Project metadata

Each localized project should preserve the same slug and asset keys:

```js
{
  slug: 'sayit',
  title: 'SayIt',
  role: 'Product Designer + Swift Developer',
  year: '2026',
  description: '...',
  disciplines: ['AI Product', 'macOS', 'Voice Interface'],
}
```

Chinese:

```js
{
  slug: 'sayit',
  title: 'SayIt',
  role: '产品设计 + Swift 开发',
  year: '2026',
  description: '...',
  disciplines: ['AI 产品', 'macOS', '语音交互'],
}
```

### Project case studies

Split current large `project-content.js` into project-specific modules so translation and review are manageable.

Do this before translating every project.

---

## Asset Strategy

Do not duplicate images or videos between languages.

Shared asset module should own:

- image imports
- video imports
- `src`
- `srcSet`
- `placeholder`
- dimensions

Localized content should only reference asset keys.

Important existing pitfall: gallery/carousel images must include `srcSet`. The carousel renders via Three.js canvas and uses `srcSet`, not just `src`. Do not break the existing image asset pipeline during i18n refactoring.

---

## Language Toggle UX

### Placement

Add a minimal language toggle in the navbar, near the existing theme toggle.

Recommended label:

```txt
EN / 中文
```

or:

```txt
English / 中文
```

Current language should be visually active. The other language should link to the equivalent page.

### Behavior

- `/projects/sayit` → click 中文 → `/zh/projects/sayit`
- `/zh/projects/sayit` → click English → `/projects/sayit`
- `/` → click 中文 → `/zh`
- `/zh` → click English → `/`

### Avoid

- Do not use flags.
- Do not use a dropdown for only two languages.
- Do not hide language switching on mobile.

---

## SEO Requirements

### Dynamic HTML lang

Current `root.jsx` hardcodes `<html lang="en">`. This must become locale-aware.

- English: `<html lang="en">`
- Chinese: `<html lang="zh-CN">`

### Dynamic Open Graph locale

Current `baseMeta` uses `og:locale = en_US`. This must become locale-aware.

- English: `en_US`
- Chinese: `zh_CN`

### Canonical URLs

Each language should canonicalize to itself.

- English: `https://princeniu.com/projects/sayit`
- Chinese: `https://princeniu.com/zh/projects/sayit`

Do not canonicalize Chinese pages to English pages.

### hreflang

Every bilingual page should include:

```html
<link rel="alternate" hreflang="en" href="https://princeniu.com/projects/sayit" />
<link rel="alternate" hreflang="zh-CN" href="https://princeniu.com/zh/projects/sayit" />
<link rel="alternate" hreflang="x-default" href="https://princeniu.com/projects/sayit" />
```

### Sitemap

`sitemap.xml` should include both English and Chinese URLs. Ideally add alternate language links in the sitemap as well.

---

## Translation Strategy

Do not direct-translate the English portfolio. Chinese should be localized.

### Style

Chinese should be:

- professional but natural
- concise
- not resume-cliche heavy
- not machine-translated
- comfortable with Chinese-English mixed terminology when appropriate

### Terms to preserve or use bilingually

- SayIt
- KnowledgeOS
- TrekAssist
- E-Tongue
- Porsche Asia Pacific
- Tufts
- Purdue
- Human Factors Engineering / 人因工程
- Usability Testing / 可用性测试
- Design Engineering / 设计工程
- Voice Interface / 语音交互
- Information Architecture / 信息架构

### Example localization principle

English:

> I’m Zhuo (Prince) Niu, a designer-builder working across UI/UX, AI products, and human factors.

Avoid stiff direct translation:

> 我是 牛拙Prince，一个工作在 UI/UX、AI 产品和人因领域的设计建造者。

Prefer localized Chinese:

> 我是 牛拙Prince，关注 UI/UX、AI 产品与人因工程交叉方向的 designer-builder。我习惯从真实问题出发，把模糊想法推进到可测试、可使用的产品形态。

---

## Project Translation Priority

### Batch 1

1. SayIt
2. KnowledgeOS

Reason: strongest current AI-first builder signal.

### Batch 2

3. Porsche Digital Interface
4. Posture Checker

Reason: career credibility + engineering/HFE credibility.

### Batch 3

5. TrekAssist
6. E-Tongue
7. Little Lemon

Reason: HFE/course case-study depth and full archive completion.

---

## Implementation Phases

## Phase 0: Content and Route Audit

**Objective:** Understand all routes, content sources, hardcoded English strings, SEO points, and migration risk before changing architecture.

**Files to inspect:**

- `app/root.jsx`
- `app/utils/meta.js`
- `app/config.json`
- `app/data/site-content.js`
- `app/data/project-content.js`
- `app/data/projects.js`
- `app/layouts/navbar/nav-data.js`
- `app/layouts/navbar/navbar.jsx`
- `app/components/footer/footer.jsx`
- `app/routes/**/*.jsx`
- sitemap and robots routes/files

**Deliverable:**

- `docs/plans/2026-05-19-bilingual-content-audit.md`

**Acceptance criteria:**

- All public routes are listed.
- All hardcoded user-facing English strings are categorized.
- All content modules are mapped.
- SEO/i18n changes are listed.
- Phase 1 MVP scope is finalized.

---

## Phase 1: Locale Foundation MVP

**Objective:** Add `/zh` route support and language awareness without rewriting all content.

**Tasks:**

1. Create `app/i18n/locales.js`.
2. Create `app/i18n/route.js`.
3. Create `app/i18n/links.js` for localized path and hreflang helper functions.
4. Update root loader to derive locale from pathname.
5. Make `<html lang>` dynamic.
6. Make canonical URL locale-aware.
7. Add minimal `/zh` home route reusing the existing Home component with Chinese content stub or injected locale.
8. Add language toggle to navbar.

**Acceptance criteria:**

- `/` works.
- `/zh` works.
- English homepage remains visually unchanged.
- Language toggle switches `/` ↔ `/zh`.
- `<html lang>` is correct for both pages.
- Build passes.

---

## Phase 2: Global Page Content Migration

**Objective:** Move global user-facing text into localized content modules.

**Pages/components:**

- Home intro
- About/profile
- Featured project labels
- Contact
- Uses
- Navbar
- Footer
- Common accessibility labels
- Error/404 messages

**Acceptance criteria:**

- `/zh` homepage is meaningfully localized.
- `/zh/contact` is localized.
- `/zh/uses` is localized.
- English pages remain unchanged.
- No obvious hardcoded English remains in global Chinese pages except proper nouns and technical names.

---

## Phase 3: Project Content Modularization

**Objective:** Split project content into per-project modules before translating all case studies.

**Tasks:**

1. Extract shared project asset mapping.
2. Split English project content into one file per project.
3. Preserve existing export shape.
4. Verify all English project pages are unchanged.
5. Add Chinese project modules progressively.

**Acceptance criteria:**

- All English project pages still render.
- Gallery/carousel still works.
- `srcSet` remains intact.
- Tests, lint, and build pass.

---

## Phase 4: High-Value Chinese Case Studies

**Objective:** Translate and polish the most valuable project pages first.

**Batch 1:**

- SayIt
- KnowledgeOS

**Batch 2:**

- Porsche Digital Interface
- Posture Checker

**Batch 3:**

- TrekAssist
- E-Tongue
- Little Lemon

**Acceptance criteria per project:**

- Title, role, description, disciplines, sections, metrics, and alt text localized.
- Chinese reads naturally, not like direct translation.
- Project names and technical terms are preserved where appropriate.
- Layout remains stable on mobile and desktop.

---

## Phase 5: SEO, Sitemap, and Structured Data

**Objective:** Make the bilingual site search-engine friendly.

**Tasks:**

1. Add locale-aware `baseMeta` support.
2. Add dynamic `og:locale`.
3. Add `hreflang` links.
4. Add localized canonical URLs.
5. Update sitemap with Chinese URLs.
6. Review JSON-LD `personSchema` and `websiteSchema` for locale handling.

**Acceptance criteria:**

- View-source confirms correct canonical and hreflang.
- `/sitemap.xml` contains English and Chinese URLs.
- Chinese pages do not canonicalize to English.
- No structured data errors introduced.

---

## Phase 6: Visual, Accessibility, and Route QA

**Objective:** Verify bilingual content does not break the interface.

**Smoke-test routes:**

```txt
/
/zh
/contact
/zh/contact
/uses
/zh/uses
/projects/sayit
/zh/projects/sayit
/projects/knowledgeos
/zh/projects/knowledgeos
/projects/porsche-digital-interface
/zh/projects/porsche-digital-interface
/projects/posture-checker
/zh/projects/posture-checker
/projects/all-work
/zh/projects/all-work
/sitemap.xml
/robots.txt
```

**QA checks:**

- Desktop, tablet, and mobile layout.
- No horizontal overflow.
- Navbar language toggle works with keyboard.
- Mobile language toggle visible.
- Gallery/carousel images load.
- Contact form states localized.
- Accessibility labels are localized where useful.
- Build/test/lint pass.

---

## Phase 7: Deployment

**Objective:** Deploy only after local content and visual QA pass.

**Branch:**

```bash
git checkout -b feature/bilingual-portfolio
```

**Verification commands:**

```bash
cd /Users/prince/Desktop/portfolio
export NVM_DIR="$HOME/.nvm"; . "$NVM_DIR/nvm.sh"; nvm use 20.19.2
npm test
npx eslint app tests --ext .js,.jsx,.mjs
npm run build
npm run start
```

**Deploy command after approval:**

```bash
npx wrangler pages deploy build/client --project-name personal-web --branch main --commit-dirty=true
```

Do not deploy immediately after build success. First perform local browser QA and ask Prince to review the local page.

---

## Risk Register

### Risk: Content doubles and becomes hard to maintain

Mitigation:

- Split content per locale and per project.
- Keep project slugs stable.
- Share assets.
- Avoid giant bilingual files.

### Risk: Chinese SEO becomes duplicate content

Mitigation:

- Locale-specific canonical URLs.
- `hreflang` links.
- sitemap includes both languages.

### Risk: Existing English links break

Mitigation:

- Do not move English URLs.
- Add `/zh` as new routes only.
- Preserve legacy redirects.

### Risk: Translation reads like AI output

Mitigation:

- Localize rather than direct-translate.
- Preserve English terms where appropriate.
- Review each project manually.

### Risk: Layout breaks due to Chinese text

Mitigation:

- QA every batch.
- Check desktop/mobile.
- Keep button labels concise.

### Risk: Gallery/carousel breaks during content migration

Mitigation:

- Preserve shared asset module.
- Keep `srcSet` for gallery images.
- Verify canvas-based carousel by visual QA.

---

## Work Estimate

### MVP bilingual framework + homepage + two key projects

Estimated: 1.5-2.5 focused days.

Includes:

- `/zh` route foundation
- language toggle
- homepage Chinese
- Contact/Uses Chinese
- SayIt Chinese
- KnowledgeOS Chinese
- basic SEO

### Full high-quality bilingual portfolio

Estimated: 4-7 focused days.

Includes:

- all case studies
- full SEO/sitemap/hreflang
- mobile QA
- visual polish
- production deploy

---

## Recommended First Delivery Slice

Start with this MVP:

```txt
- English default unchanged
- /zh route foundation
- language toggle
- homepage Chinese
- Contact Chinese
- Uses Chinese
- SayIt Chinese
- KnowledgeOS Chinese
- baseline SEO
```

This gives the bilingual version real value quickly without blocking on every older project.

---

## Final Decision

Use:

```txt
Default English routes unchanged
Chinese under /zh
Lightweight custom i18n layer
Locale-specific content modules
Project-by-project content split
Shared asset pipeline
Phased rollout
```

This optimizes for production safety, recruiter-facing clarity, SEO correctness, and long-term maintainability.
