# Modular Portfolio Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Convert the borrowed portfolio template into Zhuo (Prince) Niu's modular personal portfolio without changing the original visual design language.

**Architecture:** Move portfolio content into a project data layer, render project detail pages through a shared renderer, and generate homepage cards, metadata, and sitemap entries from the same source. Keep the existing Remix, Three.js, Framer Motion, CSS Modules, and project layout components.

**Tech Stack:** Remix 2, Vite, React 18, CSS Modules, Cloudflare Pages, Node test runner.

### Task 1: Project Data Contract

**Files:**
- Create: `app/data/project-content.js`
- Create: `tests/project-content.test.mjs`
- Modify: `package.json`

**Steps:**
1. Write Node tests proving every project has a unique slug, required metadata, a homepage preview, and at least one content section.
2. Run `npm test` and verify the tests fail because the data module does not exist.
3. Add the minimal project content module for Porsche Digital Interface, Posture Checker, Little Lemon, and a future-ready More Work entry.
4. Add a `test` script using `node --test`.
5. Run `npm test` and verify the tests pass.

### Task 2: Asset-Bound Project Data

**Files:**
- Create: `app/data/projects.js`

**Steps:**
1. Import existing image/model assets.
2. Attach asset references to each project without changing the design assets themselves.
3. Export helpers: `projects`, `featuredProjects`, `getProjectBySlug`, `getProjectUrl`.
4. Run `npm test`.

### Task 3: Generic Project Renderer

**Files:**
- Create: `app/routes/projects/project-case.jsx`
- Create: `app/routes/projects.$slug/route.jsx`

**Steps:**
1. Build a renderer using existing `ProjectContainer`, `ProjectBackground`, `ProjectHeader`, `ProjectImage`, `ProjectSection`, `ProjectTextRow`, and `Image` components.
2. Support section types needed by current work: `hero-image`, `text`, `image`, `image-grid`, `comparison-columns`, `gallery`, and `outcome`.
3. Keep all visual styling sourced from existing layout components or narrowly scoped renderer CSS if needed.
4. Add a dynamic route that returns 404 for unknown slugs.
5. Run route manifest/build verification.

### Task 4: Homepage From Project Data

**Files:**
- Modify: `app/routes/home/home.jsx`
- Modify: `app/routes/home/profile.jsx`

**Steps:**
1. Replace hardcoded project summaries with `featuredProjects`.
2. Keep current `ProjectSummary` component and model rendering.
3. Update profile alt text and copy without changing layout.
4. Run syntax/build verification.

### Task 5: Remove Borrowed Content Surface

**Files:**
- Delete or stop routing old project route folders.
- Modify: `app/layouts/navbar/nav-data.js`
- Modify: `public/sitemap.xml`
- Modify: `public/manifest.json`
- Modify: `public/humans.txt`
- Modify: `README.md`
- Modify: `package.json`
- Modify: `.gitignore`

**Steps:**
1. Remove old Volkihar, Smart Sparrow, Slice, and article surfaces from navigation/sitemap.
2. Keep `Articles` reserved as a future work page or remove it from navigation for now.
3. Replace Hamish metadata with Prince metadata.
4. Ignore macOS junk files and remove tracked junk files from the working tree.
5. Run verification.

### Task 6: Runtime Fixes and Validation

**Files:**
- Modify: `app/root.jsx`
- Modify: `app/utils/meta.js`
- Modify: `app/routes/contact/contact.jsx`

**Steps:**
1. Fix canonical URL generation.
2. Make social metadata robust when optional handles are missing.
3. Improve contact action failure handling while preserving the existing form design.
4. Run `npm test`.
5. Run build/lint checks with a Node version compatible with the project, or document the blocker precisely.
