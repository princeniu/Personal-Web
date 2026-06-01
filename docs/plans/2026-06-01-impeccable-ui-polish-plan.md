# Impeccable UI Polish Implementation Plan

> **For Hermes:** Implement task-by-task with minimal CSS changes, then verify with build, Impeccable scans, and browser visual checks.

**Goal:** Improve portfolio readability and polish based on Impeccable findings without changing the content strategy, brand system, routes, or deployment configuration.

**Architecture:** Low-risk CSS-only pass. Strengthen project hero readability, constrain case-study reading width, and refine the SayIt homepage mockup spacing/clipping. Ignore subjective warnings that do not materially harm the portfolio, such as Inter usage and uppercase labels.

**Tech Stack:** Remix 2, Vite, React, CSS modules, Cloudflare Pages.

---

## Non-goals

- Do not replace fonts.
- Do not rewrite content.
- Do not redesign homepage/project pages.
- Do not edit Cloudflare/Wrangler/deployment settings.
- Do not deploy without explicit confirmation.
- Do not use `git add -A`; stage only explicit files.

---

## Task 1: Improve project hero readability

**Objective:** Reduce low-contrast warnings on project hero pages, especially KnowledgeOS and TrekAssist.

**Files:**
- Modify: `app/layouts/project/project.module.css`

**Steps:**
1. Inspect existing `.backgroundImage`, `.backgroundScrim`, and `.header` rules.
2. Strengthen the background scrim with a more protective dark gradient over image/video underlays.
3. Keep the hero visually dark/editorial. Do not add visible cards, borders, or boxed text panels.
4. Build and scan:
   - `npm run build`
   - `npx impeccable detect http://127.0.0.1:<port>/projects/knowledgeos --json`
   - `npx impeccable detect http://127.0.0.1:<port>/projects/trekassist --json`
5. Visually verify the title/subtitle remain readable without looking over-darkened.

**Success:** Hero text on KnowledgeOS and TrekAssist is clearer; low-contrast warnings reduce or disappear; visual style remains consistent.

---

## Task 2: Improve case-study reading width

**Objective:** Reduce `line-length` warnings and improve long-form reading comfort.

**Files:**
- Modify: `app/routes/projects/project-case.module.css`

**Steps:**
1. Identify long-form text containers such as `.gridText`, `.columns`, and paragraph/list rules.
2. Add max-width constraints to reading text only, not metric cards, timelines, galleries, or project grids.
3. Preserve responsive behavior on tablet/mobile.
4. Build and scan KnowledgeOS/TrekAssist again.
5. Visually verify desktop, tablet, and mobile widths.

**Success:** Body copy reads more editorial; line-length warnings reduce; no layout regression in visual sections.

---

## Task 3: Polish SayIt homepage preview

**Objective:** Reduce cramped/clipped feel in the SayIt homepage mockup while preserving the macOS preview style.

**Files:**
- Modify: `app/routes/home/project-summary.module.css`

**Steps:**
1. Add vertical padding to `.sayitMenuBar` and slightly increase its min-height.
2. Increase `.sayitCanvas` breathing room on desktop without over-expanding mobile.
3. Move floating elements inward enough to avoid clipping: `.sayitHotkey`, `.sayitPopover`, `.sayitRecordingCard`, `.sayitTranscript`.
4. Reduce inner-card heaviness by softening transcript border/shadow.
5. Slightly increase `.sayitHotkey small` font size/line-height if it is the source of tiny text.
6. Build and scan homepage English and Chinese.
7. Visually verify `/` and `/zh`.

**Success:** SayIt preview feels less compressed; cramped-padding warning disappears; clipped/nested-card warnings reduce where practical.

---

## Task 4: Verification gate

**Objective:** Confirm the site still builds and the targeted findings improved.

**Commands:**

```bash
cd /Users/prince/Desktop/portfolio
export NVM_DIR="$HOME/.nvm"; . "$NVM_DIR/nvm.sh"; nvm use 20.19.2
npm run build
```

If local preview is needed:

```bash
npm run dev -- --host 127.0.0.1
```

Core Impeccable scans:

```bash
npx impeccable detect http://127.0.0.1:<port> --json
npx impeccable detect http://127.0.0.1:<port>/zh --json
npx impeccable detect http://127.0.0.1:<port>/projects/knowledgeos --json
npx impeccable detect http://127.0.0.1:<port>/projects/trekassist --json
npx impeccable detect http://127.0.0.1:<port>/projects/all-work --json
```

**Success:** Build passes; targeted warnings decrease; visual inspection confirms no regression.
