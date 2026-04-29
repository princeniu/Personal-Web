<p align="center">
  <img src="/public/favicon.svg" width="50" alt="Logo" />
</p>
<h1 align="center">Zhuo (Prince) Niu Portfolio</h1>

Personal portfolio for product design, mobile development, and frontend engineering work. Built with [Remix](https://remix.run/), [Three.js](https://threejs.org/), and [Framer Motion](https://www.framer.com/motion/).

## Project Structure

Portfolio content is data-driven:

- `app/data/project-content.js` contains project copy, slugs, roles, summaries, and section structure.
- `app/data/projects.js` binds that content to imported assets.
- `app/routes/projects.$slug/route.jsx` renders every project route from the shared data.
- `app/routes/projects/project-case.jsx` maps project section types to the existing visual layout components.

To add a new project:

1. Add assets to `app/assets/`.
2. Add the project entry to `portfolioProjects` in `app/data/project-content.js`.
3. Bind its images and homepage preview textures in `app/data/projects.js`.
4. Add the slug to `featuredProjectSlugs` only if it should appear on the homepage.
5. Run `npm test` and `npm run build`.

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
