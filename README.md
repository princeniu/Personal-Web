<p align="center">
  <img src="/public/favicon.svg" width="50" alt="Logo" />
</p>
<h1 align="center">Zhuo (Prince) Niu Portfolio</h1>

<p align="center">
  <img src="/public/social-image.png" alt="Site preview" width="600" />
</p>

Personal portfolio for product design, mobile development, and frontend engineering work. Built with [Remix](https://remix.run/), [Three.js](https://threejs.org/), and [Framer Motion](https://www.framer.com/motion/). Typeset in [Inter](https://rsms.me/inter/) (variable, Latin subset).

## Project Structure

Portfolio content is data-driven:

- `app/data/project-content.js` — project copy, slugs, roles, summaries, and section structure. Also defines `legacyProjectSlugRedirects` for permanent slug renames.
- `app/data/projects.js` — binds project content to imported assets (`app/assets/`).
- `app/routes/projects.$slug/route.jsx` — single dynamic route that handles every project, including 301 redirects for legacy slugs.
- `app/routes/projects/project-case.jsx` — maps each section `type` (`hero-image`, `gallery`, `image`, `image-text`, `comparison-columns`, `timeline`, `metrics`, `project-grid`, `outcome`, default text) to the right layout component.

### Asset naming convention

Assets are prefixed by project slug (`porsche-…`, `posture-…`, `trekassist-…`, `little-lemon-…`, `sayit-…`). Each visual ships in three variants — base (`name.jpg`), `name-large.jpg` for retina/desktop, and `name-placeholder.jpg` for the LQIP fade-in. New assets should follow the same convention.

### Adding a new project

1. Add assets to `app/assets/` using the `<slug>-<purpose>` naming convention.
2. Add the project entry to `portfolioProjects` in `app/data/project-content.js`.
3. Bind its images and homepage preview textures in `app/data/projects.js`.
4. Add the slug to `featuredProjectSlugs` only if it should appear on the homepage.
5. If the project should be excluded from the public sitemap, add the slug to `SITEMAP_EXCLUDED_SLUGS` in `scripts/generate-sitemap.cjs`.
6. Run `npm test` and `npm run build` (build also regenerates `public/sitemap.xml`).

## Install & Run

Use the Node version declared in `.node-version`, then install dependencies:

```bash
nvm use
npm install
```

Start the local development server:

```bash
npm run dev
```

Run the data contract tests:

```bash
npm test
```

Build for production:

```bash
npm run build
```

## Deployment

The project is configured for Cloudflare Pages:

```bash
npm run deploy
```

The contact form uses AWS SES through Cloudflare environment variables. Copy `.dev.vars.example` to `.dev.vars` for local development and configure the same variables in Cloudflare Pages for production.
