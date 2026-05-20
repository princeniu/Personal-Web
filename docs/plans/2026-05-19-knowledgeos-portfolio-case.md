# KnowledgeOS Portfolio Case Study Implementation Plan

> **For Hermes:** Implement this plan in phases. Do not deploy before local content/visual QA. Keep KnowledgeOS positioned as a system/product design case study, not as a generic Obsidian vault, RAG demo, or SaaS landing page.

**Goal:** Add a polished `/projects/knowledgeos` case study to Prince's portfolio that presents KnowledgeOS as an agent-maintained, local-first personal knowledge operating system.

**Architecture:** Reuse the existing Remix portfolio project and the current generic project-case renderer. Add KnowledgeOS content through `app/data/project-content.js`, wire visual assets through `app/data/projects.js`, and integrate the project into `All Work` first. Only add it to homepage `featuredProjectSlugs` after the visual assets are strong enough.

**Tech Stack:** Remix 2, React, Vite, Cloudflare Pages, local image assets, Markdown/Obsidian/Hermes/Python/Cron/Git as the case-study subject matter.

---

## Strategic Positioning

### Recommended title

**KnowledgeOS — Agent-Maintained Personal Knowledge System**

### One-line framing

A local-first, Markdown-based personal knowledge system where AI agents classify, deduplicate, synthesize, audit, and maintain long-term project, career, learning, and decision context.

### What this case should prove

- Prince can design AI-native systems, not just UI screens.
- Prince understands information architecture, workflow design, automation, and human-AI collaboration.
- Prince can turn vague personal pain into running infrastructure.
- Prince can explain product/technical tradeoffs clearly.

### What this case should avoid

- Do not frame it as just an Obsidian vault.
- Do not frame it as a Notion replacement.
- Do not frame it as a generic RAG/vector-search demo.
- Do not over-productize it into a SaaS pitch.
- Do not expose private KnowledgeOS contents in screenshots.

---

## Source Material

Primary local sources:

- `/Users/prince/KnowledgeOS/02-projects/knowledgeos.md`
- `/Users/prince/KnowledgeOS/04-product-ideas/personal-knowledge-os.md`
- `/Users/prince/KnowledgeOS/04-product-ideas/productization-and-ip-strategy.md`
- `/Users/prince/KnowledgeOS/90-reviews/audits/`
- `~/.hermes/skills/note-taking/knowledgeos/SKILL.md`

Portfolio implementation sources:

- `/Users/prince/Desktop/portfolio/app/data/project-content.js`
- `/Users/prince/Desktop/portfolio/app/data/projects.js`
- `/Users/prince/Desktop/portfolio/app/routes/projects/project-case.jsx`
- `/Users/prince/Desktop/portfolio/app/routes/home/home.jsx`
- `/Users/prince/Desktop/portfolio/app/assets/`

Current metrics from latest audit/context:

- 100+ Markdown knowledge files; latest observed: 116 `.md` files.
- 450+ internal wikilinks; latest observed: 459 wikilinks.
- 0 broken Obsidian wikilinks at latest audit.
- 4 active scheduled workflows: daily capture, weekly review, weekly maintenance audit, Git backup.
- Local-first Git-backed backup loop.
- Source-backed compiled wiki layer.
- Daily / weekly / audit review loop.

Use rounded public-safe metrics in the page to avoid staleness:

- `100+` Markdown files
- `450+` internal links
- `0` broken links at latest audit
- `4` scheduled workflows

---

## Case Study Information Architecture

### 1. Hero

**Title:** KnowledgeOS

**Description:** A local-first personal knowledge operating system maintained by AI agents — turning scattered conversations, project updates, research, and decisions into structured Markdown knowledge that can be searched, reviewed, audited, and reused.

**Roles:**

- AI System Design
- Knowledge Architecture
- Agent Workflow Design
- Local-First Tools
- Automation
- Personal Infrastructure

**Hero image:** `knowledgeos-system-card` or `knowledgeos-architecture`.

### 2. Overview

Explain KnowledgeOS as a live system, not a prototype. Core angle: AI conversations and fast project work create valuable context, but without maintenance, that context disappears. KnowledgeOS makes the maintenance layer explicit.

### 3. Problem Context

Recommended heading: **The Problem: Knowledge Maintenance, Not Knowledge Storage**

Cover:

- Context fragmentation across AI chats, project updates, research, career material, and product decisions.
- Manual note upkeep does not scale.
- Ordinary AI memory is too small and too compressed for structured long-term knowledge.
- The real design problem is deciding what deserves to persist and how it stays useful.

### 4. Design Principles

Recommended heading: **Design Principles**

Include:

- Agent-maintained, not user-maintained.
- Markdown as source of truth.
- Save less, maintain better.
- Current judgment over raw archive.
- Automation with auditability.

### 5. Process Timeline

Use existing `timeline` section type.

Items:

1. Knowledge Audit — identified recurring context loss across projects, AI conversations, learning notes, and career material.
2. Information Architecture — designed a stable vault structure for projects, AI workflows, product ideas, UX/HFE, career, trading, learning, research, and reviews.
3. Capture Protocol — defined what should be saved, ignored, merged, anonymized, or turned into long-term project memory.
4. Agent Automation — connected Hermes Agent with daily capture, weekly synthesis, maintenance audit, and backup workflows.
5. Compiled Knowledge Layer — added source-backed wiki pages, entity relations, current judgments, and evidence timelines.
6. Operational Hardening — added Git backup, cron verification, broken-link checks, audit checklists, and HTML review generation.

### 6. System Architecture

Recommended heading: **System Architecture: Local Source of Truth, Agent Maintenance Layer**

Architecture diagram content:

```text
Inputs
- Hermes / Telegram conversations
- Project updates
- Research sources
- Learning notes
- Career material
- Product ideas

Agent Maintenance Layer
- Capture protocol
- Memory rules
- Deduplication
- Classification
- Privacy filtering
- Weekly synthesis
- Maintenance audit

Knowledge Layer
- Markdown vault
- Project memory
- AI workflows
- Product ideas
- Research wiki
- Reviews / audits

Derived Outputs
- Obsidian graph
- Weekly HTML artifacts
- Portfolio material
- Resume bullets
- Future starter vault
- Git backup
```

### 7. Agent Workflow Design

Recommended heading: **Designing the Agent Workflow**

Workflow:

```text
User says something valuable
→ Agent evaluates long-term value
→ Checks privacy and sensitivity
→ Searches existing notes
→ Updates an existing page or creates a new note
→ Adds review/log references
→ Weekly review synthesizes patterns
→ Maintenance audit checks structure health
```

### 8. Evidence / Metrics Snapshot

Use existing `metrics` section type.

Metrics:

- `100+` Markdown knowledge files
- `450+` internal wikilinks
- `0` broken links at latest audit
- `4` scheduled workflows
- `Git-backed` local recovery layer

Evidence items:

- Knowledge quality — capture protocol filters for reusable knowledge, project decisions, career material, workflows, and long-term patterns instead of saving raw transcript dumps.
- Operational reliability — daily capture, weekly review, maintenance audit, HTML artifact generation, and Git backup run through scheduled automation.
- System evolution — evolved from simple capture into source-backed compiled knowledge with current judgments, evidence timelines, relations, and retrieval benchmarks.

### 9. Visual Artifacts

Required for v1:

1. Architecture diagram — highest priority.
2. Vault structure screenshot — file tree or Obsidian view, sanitized.
3. Compiled Truth / project memory screenshot — crop of `knowledgeos.md` structure, sanitized.
4. Weekly review or audit artifact screenshot — showing review loop without private details.

Optional later:

- Homepage summary tile.
- Animated system loop graphic.
- Starter vault mockup.

### 10. Key System Decisions

Recommended heading: **Key System Decisions**

Decisions:

- Markdown over database.
- Rules before automation.
- Review loop over passive archive.
- Hermes memory and KnowledgeOS separation.

### 11. Reflection

Close on the lesson:

KnowledgeOS changed the role of a personal knowledge system from a place where notes are stored into an infrastructure layer that maintains judgment. The hard part of AI-native knowledge work is not generation; it is maintenance, boundaries, trust, and review loops.

---

## Implementation Scope

### v1 target

Add a complete project case page and All Work entry, but do not put it on homepage featured yet.

### v1 route

- `/projects/knowledgeos`

### v1 files to create/modify

Create:

- `docs/plans/2026-05-19-knowledgeos-portfolio-case.md`
- `docs/plans/2026-05-19-knowledgeos-case-copy-v1.md`
- New assets in `app/assets/`:
  - `knowledgeos-architecture.webp`
  - `knowledgeos-architecture-placeholder.jpg`
  - `knowledgeos-vault-structure.webp`
  - `knowledgeos-vault-structure-placeholder.jpg`
  - `knowledgeos-compiled-truth.webp`
  - `knowledgeos-compiled-truth-placeholder.jpg`
  - `knowledgeos-weekly-review.webp`
  - `knowledgeos-weekly-review-placeholder.jpg`

Modify later:

- `app/data/project-content.js`
- `app/data/projects.js`

Do not modify yet unless visual assets and copy are ready.

---

## Execution Phases

### Phase 0: Production domain sanity check

**Objective:** Confirm the main portfolio domain is healthy before final deploy.

Current finding:

- `https://princeniu.com` returns Cloudflare Error 1000 / 403.
- `https://personal-web-3g9.pages.dev` returns 200 and shows the portfolio.

Tasks:

1. Check DNS records for `princeniu.com` and `www.princeniu.com`.
2. Check Cloudflare Pages custom domain binding.
3. Restore apex and www to `personal-web-3g9.pages.dev`.
4. Verify homepage and project routes on `princeniu.com`.

This can run after content implementation; it does not block local case work.

### Phase 1: Content draft

**Objective:** Produce complete page copy and data-shape draft before code edits.

Files:

- Create: `docs/plans/2026-05-19-knowledgeos-case-copy-v1.md`

Steps:

1. Draft project metadata: title, description, roles, summary quick facts.
2. Draft all case sections in English to match current portfolio tone.
3. Draft All Work card copy.
4. Keep metrics public-safe and rounded.
5. Review for privacy and overclaiming.

Verification:

- File exists.
- Section order matches this implementation plan.
- Copy avoids private details and does not frame the project as a generic notes app.

### Phase 2: Visual asset production

**Objective:** Create or capture sanitized visual artifacts.

Steps:

1. Generate a dark minimal architecture diagram matching portfolio style.
2. Capture/sanitize vault structure screenshot.
3. Capture/sanitize Compiled Truth page screenshot.
4. Capture/sanitize weekly review or audit artifact screenshot.
5. Convert to `.webp` and create lightweight placeholders.
6. Verify dimensions and file sizes.

Verification:

- All expected assets exist in `app/assets/`.
- No private information visible.
- Images are readable in dark theme.

### Phase 3: Implement case page

**Objective:** Wire KnowledgeOS into the portfolio project data.

Files:

- Modify: `app/data/project-content.js`
- Modify: `app/data/projects.js`

Steps:

1. Import KnowledgeOS assets in `projects.js`.
2. Add image assets to `imageAssets`.
3. Add KnowledgeOS project object in `project-content.js`.
4. Add `/projects/knowledgeos` to All Work `Selected Work`.
5. Do not add to `featuredProjectSlugs` in v1.

Verification commands:

```bash
cd /Users/prince/Desktop/portfolio
export NVM_DIR="$HOME/.nvm"; . "$NVM_DIR/nvm.sh"; nvm use 20.19.2
npm test
npx eslint app tests --ext .js,.jsx,.mjs
npm run build
```

Expected:

- tests pass
- ESLint has 0 errors
- build succeeds or, if sandbox EAGAIN occurs, use `/tmp` build workaround from portfolio skill

### Phase 4: Local QA

**Objective:** Verify the new page visually before deployment.

Steps:

1. Start local preview.
2. Check `/projects/knowledgeos`.
3. Check `/projects/all-work`.
4. Check desktop and mobile viewport.
5. Check image loading and carousel sections if used.
6. Ask Prince for visual/content confirmation before deploy.

Do not deploy until Prince confirms local QA.

### Phase 5: Deploy

**Objective:** Deploy after approval.

Commands:

```bash
cd /Users/prince/Desktop/portfolio
npm run build
npx wrangler pages deploy build/client --project-name personal-web --branch main --commit-dirty=true
```

Verification:

```bash
curl -s -o /dev/null -w '%{http_code}\n' https://personal-web-3g9.pages.dev/projects/knowledgeos
curl -s -o /dev/null -w '%{http_code}\n' https://personal-web-3g9.pages.dev/projects/all-work
```

If domain is fixed:

```bash
curl -s -o /dev/null -w '%{http_code}\n' https://princeniu.com/projects/knowledgeos
```

---

## Privacy QA Checklist

Before using any screenshot:

- [ ] No Telegram IDs.
- [ ] No VPS hostnames or secrets.
- [ ] No GitHub tokens, env vars, API keys, or file credentials.
- [ ] No private psychological notes.
- [ ] No trading account details.
- [ ] No private repository names that should remain private.
- [ ] No personal emails beyond already-public portfolio email.
- [ ] No raw conversation transcript dumps.

---

## Content QA Checklist

- [ ] The case reads like system/product design, not a notes app showcase.
- [ ] The first 10 seconds explain the problem and why it matters.
- [ ] Metrics are accurate and public-safe.
- [ ] The case shows tradeoffs, not just features.
- [ ] The reflection strengthens Prince's designer-builder / AI-HFE positioning.
- [ ] It fits the current dark editorial portfolio style.

---

## Future Phase: Homepage Featured

Only add KnowledgeOS to homepage after v1 visual QA.

If added, modify:

```js
export const featuredProjectSlugs = [
  'trekassist',
  'etongue-sensory-platform',
  'knowledgeos',
  'porsche-digital-interface',
  'sayit',
  'posture-checker',
];
```

But this is not part of v1 unless Prince explicitly approves.
