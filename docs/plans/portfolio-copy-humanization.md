# Portfolio Copy Humanization Plan

> **For Hermes:** Use this plan when improving copy across Prince's bilingual portfolio. Preserve professional language. The goal is not to make the site casual; the goal is to remove AI packaging, template rhythm, mechanical dash usage, and translationese while keeping portfolio-level precision.

**Goal:** Make both English and Chinese portfolio copy sound professional, specific, credible, and human-written.

**Architecture:** This is a content-first optimization across locale content modules in `app/data/site-content.js`, `app/data/content/zh/site-content.js`, and `app/data/content/{en,zh}/projects/*.js`. The site structure should stay stable; changes should be copy-only unless a QA script is added.

**Tech Stack:** Remix 2 + Vite + React + Cloudflare Pages; content stored in JS modules.

---

## 1. Core decision

Professional language is not the problem.

This is a portfolio site. It should keep terms such as Human Factors, UI/UX, HMI, BLE, RAG, AI agent, multimodal interaction, usability testing, decision-support UX, safety-critical UX, local-first, real-time, end-to-end, design systems, prototyping, accessibility, and interaction model when they are accurate.

The problem to remove is AI packaging:

- repetitive em dashes and en dashes
- generic portfolio polishing
- template sentences such as `designed to`, `built to`, `focused on` when repeated too often
- abstract claims not backed by concrete project evidence
- English-to-Chinese translationese
- paragraphs with overly even rhythm
- vague positive conclusions
- unnecessary significance inflation

The final tone should be:

> professional, specific, credible, and grounded in real project experience.

Not:

> casual blog voice, over-simplified wording, or de-professionalized copy.

---

## 2. English voice rules

### Keep

- professional portfolio terminology
- specific project nouns and systems
- first-person framing where it clarifies contribution
- designer-builder / HFE / AI product positioning
- measurable outcomes when already truthful
- technical constraints that prove real work

### Reduce

- `designed to` / `built to` / `focused on` when used as sentence scaffolding
- `end-to-end`, `real-time`, `long-term`, `high-fidelity`, `cross-platform` when repeated mechanically
- abstract words such as `broader`, `complex`, `clear`, `thoughtful`, `seamless`, `valuable`, `key` without concrete follow-through
- em dash dependency
- three-part AI sentence rhythm

### Good rewrite pattern

Before:

```text
A human-centered decision-support platform designed to transform complex sensory data into actionable insights for food development teams.
```

Better:

```text
A decision-support platform for food development teams using E-Tongue sensor data and semi-trained panel feedback to compare prototypes and decide whether to Go, Tweak, or Stop.
```

Why: still professional, but more concrete and less template-like.

---

## 3. Chinese voice rules

### Keep

- 人因工程
- UI/UX
- 车载 HMI
- 多模态交互
- 决策支持
- 可用性测试
- 信息架构
- 交互模型
- 本地优先
- 低功耗交互
- 感官数据
- agent / AI agent where appropriate

### Reduce

- 打造
- 赋能
- 沉淀
- 链路
- 闭环
- 旨在
- 转化为 when repeated
- 真正可以
- overly frequent `端到端`
- `——` as a default connector

### Chinese rewrite principle

Do not translate the English line by line. Preserve the same factual content, but write the Chinese as a native Chinese portfolio page.

Before:

```text
一个由 AI agent 维护的本地优先个人知识操作系统——将散落在日常对话、项目更新、研究和决策中的信息，转化为结构化 Markdown 知识，可被搜索、审查、审计和复用。
```

Better:

```text
KnowledgeOS 是我给自己做的本地知识系统。它用 agent 自动整理对话、项目记录、研究和决策，把有用的信息写进 Markdown，之后可以搜索、回顾和继续使用。
```

This keeps the professional concept but removes translationese.

---

## 4. Dash rules

### English

- Keep em dash only when it adds real rhythm or contrast.
- Replace most `—` with periods, commas, parentheses, or split sentences.
- Target: 0-3 em dashes per full project page.
- Avoid using dash inside every summary sentence.

### Chinese

- Keep `——` only for strong conceptual turns.
- Avoid in project descriptions, card summaries, and short labels.
- Replace with sentence split, comma, colon, or parentheses.
- Target: 0-2 Chinese em dashes per full project page.

---

## 5. Priority order

### P0: standards and audit

- Add or maintain a copy audit checklist.
- Optionally add `scripts/audit-copy.mjs` to scan for dash usage and high-risk phrases.

### P1: homepage and site-level copy

Files:

- `app/data/site-content.js`
- `app/data/content/zh/site-content.js`
- `app/config.json`
- `app/routes/home/home.jsx`
- `app/routes/contact/contact.jsx`

Focus:

- About me
- Uses page
- contact copy
- homepage labels
- meta descriptions

### P2: homepage project summaries and All Work

Files:

- `app/data/content/en/projects/*.js`
- `app/data/content/zh/projects/*.js`
- especially `summary.description`, project `description`, quick facts, and All Work item descriptions

Focus:

- first impression
- recruiter scanability
- preserving professional terms with stronger specificity

### P3: core case studies

Priority:

1. SayIt
2. KnowledgeOS
3. Porsche Digital Interface
4. Posture Checker

Why:

- SayIt proves shipped 0→1 product ability.
- KnowledgeOS proves AI agent / automation direction but is most vulnerable to AI-sounding concept language.
- Porsche proves professional UX/HFE internship credibility.
- Posture Checker proves RN/BLE/hardware/product implementation ability.

### P4: remaining case studies

1. TrekAssist
2. E-Tongue Sensory Decision Support Platform
3. Little Lemon
4. All Work cleanup pass if needed

---

## 6. Project-specific direction

### SayIt

Keep professional focus on:

- shipped macOS menu bar app
- global hotkey
- local Whisper support
- signed/notarized GitHub release
- minimal workflow
- system utility feel

Avoid making it sound like generic AI dictation marketing.

English direction:

```text
A macOS menu bar app I designed, built, signed, and released. It turns speech into text from a global hotkey, with local Whisper support and a small HUD that stays out of the way.
```

Chinese direction:

```text
我独立做完并发布的 macOS 菜单栏语音转文字工具。按下全局快捷键就能说话转文字，支持本地 Whisper，也有一个不打扰当前工作的 HUD。
```

### KnowledgeOS

Keep professional focus on:

- local knowledge system
- Hermes agents
- cron jobs
- Obsidian / Markdown
- Git backup
- durable project context

Avoid concept-heavy “personal knowledge operating system” language when unsupported by concrete mechanics.

English direction:

```text
KnowledgeOS is my local knowledge system. It uses Hermes agents, cron jobs, Obsidian, and Git backup to keep useful project context from disappearing inside chat threads.
```

Chinese direction:

```text
KnowledgeOS 是我给自己做的本地知识系统。它用 Hermes agent、定时任务、Obsidian 和 Git 备份，把聊天、项目记录和研究里有用的内容留下来。
```

### Porsche Digital Interface

Keep professional focus on:

- Porsche Communication Management
- navigation flows
- voice interaction
- automotive HMI
- design specs and prototypes
- real internship context

Avoid overclaiming AI assistance or making it sound like a full product ownership story.

English direction:

```text
UX/UI internship work for Porsche Communication Management. I worked on navigation and voice interaction flows, then translated design decisions into prototypes and specs the team could use.
```

Chinese direction:

```text
Porsche Communication Management 的 UX/UI 实习项目。我主要做导航和语音交互流程，把设计判断落到原型和可交付规范里。
```

### Posture Checker

Keep professional focus on:

- React Native
- BLE sensor
- pairing
- live feedback
- trends
- reminders
- not annoying users

English direction:

```text
A React Native app paired with a BLE posture sensor. I worked on pairing, live posture feedback, progress views, and reminders that had to be useful without becoming annoying.
```

Chinese direction:

```text
一个配合 BLE 坐姿传感器使用的 React Native App。我做了配对流程、实时反馈、趋势查看和提醒机制，重点是不打扰但真的有用。
```

### TrekAssist

Keep professional focus on:

- solar-powered e-ink guide
- Yellowstone visitors
- outdoor safety
- 800×600 e-ink constraints
- 9 participants
- 6 tasks
- Low Power Mode discoverability

Avoid generic “designed through a human-centered process” phrasing.

### E-Tongue

Keep professional focus on:

- food development teams
- E-Tongue sensor data
- semi-trained panel feedback
- Go / Tweak / Stop decision support
- sensor evidence made readable

Avoid repeating “human-centered decision-support platform” everywhere.

### Little Lemon

Keep professional focus on:

- Google UX Design Certificate capstone
- restaurant booking and ordering
- responsive design
- accessibility
- usability testing

Do not over-inflate the project.

---

## 7. Execution phases

### Phase 1: Save plan and add audit support

Tasks:

1. Save this plan under `docs/plans/portfolio-copy-humanization.md`.
2. Add optional `scripts/audit-copy.mjs` to scan text-heavy modules.
3. Run the audit and capture current baseline.

Verification:

```bash
node scripts/audit-copy.mjs
```

### Phase 2: Homepage and site-level copy

Tasks:

1. Rewrite English About me in `app/data/site-content.js`.
2. Rewrite Chinese About me in `app/data/content/zh/site-content.js`.
3. Lightly edit Uses descriptions in both locales.
4. Lightly edit homepage labels in `app/routes/home/home.jsx` only if needed.
5. Avoid structural or visual changes.

Verification:

```bash
npm test
npm run build
```

Routes to review:

- `/`
- `/zh`
- `/uses`
- `/zh/uses`

### Phase 3: Homepage project summaries and All Work

Tasks:

1. Update `summary.description` across featured projects.
2. Update All Work descriptions in English and Chinese.
3. Preserve professional terms and specific technologies.
4. Remove mechanical dash usage.

Routes to review:

- `/`
- `/zh`
- `/projects/all-work`
- `/zh/projects/all-work`

### Phase 4: Core case studies

Tasks per project:

1. Update project `description` and `summary.description`.
2. Rewrite opening section.
3. Rewrite process sections for specificity.
4. Rewrite outcome/reflection sections to avoid generic conclusions.
5. Repeat for English and Chinese as separate native-language passes.

Routes:

- `/projects/sayit`
- `/zh/projects/sayit`
- `/projects/knowledgeos`
- `/zh/projects/knowledgeos`
- `/projects/porsche-digital-interface`
- `/zh/projects/porsche-digital-interface`
- `/projects/posture-checker`
- `/zh/projects/posture-checker`

### Phase 5: Remaining case studies

Routes:

- `/projects/trekassist`
- `/zh/projects/trekassist`
- `/projects/etongue-sensory-platform`
- `/zh/projects/etongue-sensory-platform`
- `/projects/little-lemon`
- `/zh/projects/little-lemon`

### Phase 6: Final QA and deployment prep

Commands:

```bash
npm test
npx eslint app tests --ext .js,.jsx,.mjs
npm run build
node scripts/audit-copy.mjs
```

Manual review:

- homepage card text length
- Chinese line density
- mobile card wrapping
- project headers
- All Work grid scanability
- `sitemap.xml` unchanged unless routes changed

Do not deploy until Prince reviews the copy locally or via preview.

---

## 8. Acceptance criteria

A page passes when:

- professional terms are retained where accurate
- copy sounds specific to Prince's actual project work
- summary text is short enough for scanning
- AI-sounding scaffolding is reduced
- dash usage is intentional, not mechanical
- Chinese reads like native Chinese portfolio writing, not translated English
- claims are grounded in project facts
- no visual layout is harmed by longer text
- tests and build pass

---

## 9. Important repository notes

- Project root: `/Users/prince/Desktop/portfolio`
- Node version: `.node-version` is `20.19.2`; use `nvm use 20.19.2` before verification.
- Do not use `git add -A`; stage specific files only.
- Deployment requires separate approval. Copy edits can be implemented locally, but do not deploy without review.
