# All Work directory — 2026-10-14

The bilingual directory now supports browsing all ten projects by type. Every project has an existing visual preview, concise task description, project context and stage, evidence, and two design-focus labels. The five homepage selections are marked without changing their homepage order.

## Changes

- Four GET filters: All (10), Products & Systems (5), Industry Work (1), Research & Prototypes (4). The query survives refresh and browser history; unknown values fall back to All. Server rendering supports the same links and filters without JavaScript.
- Existing image assets in consistent preview frames; phone screenshots remain uncropped. Development-stage, review-diagram, and illustrative-data labels remain visible on mobile.
- Shorter directory header; two columns on desktop/tablet and compact image/text rows on mobile.
- One contact invitation at the end of the directory.
- Detailed bilingual cases and homepage content are preserved. The existing Porsche result is retained.

## Validation

- 11 tests passed: directory SSR/filter interaction, project content, and bilingual parity.
- Production build passed.
- Local SSR: both locales, all categories, invalid-category fallback; 10 requests passed.
- All 24 bilingual preview-image references return 200 and match their declared intrinsic dimensions.
- Browser inspection: 1280, 940, 390, and 320 px; tablet two columns, mobile compact rows, no horizontal overflow. English/Chinese, dark/light appearance, native keyboard filter activation, refresh, browser back, case links, and mobile source labels checked.
- SHA-256 comparison: all 23 protected content files, including the 20 detailed cases, unchanged from this task's baseline.
- Production browser: ten projects and source labels visible; 940 px two-column layout without overflow; Industry filter returns the Porsche case. The user's original tab is refreshed and temporary viewport overrides removed.
- Production read-back: 12 bilingual directory requests show 10/10/5/1/4/10 results for default/All/Products/Industry/Research/invalid queries. All 20 case routes and both homepages return 200 and their complete loader data matches the local build; homepage selection order is unchanged.
- All 17 unique preview-image resources and 29 directory CSS/JS resources return 200, match local build hashes, and retain intended cache headers. The Pages deployment URL remains noindex.

## Deployment

- Cloudflare Pages project: `personal-web`, production branch `main`, Direct Upload.
- Deployment URL: https://6c5f40dc.personal-web-3g9.pages.dev
- Canonical/latest production deployment: `6c5f40dc-d5be-4acf-9bd8-dbfd3d562625`, success; redacted deployment configuration matches the predeploy snapshot exactly.
- Public directory: https://princeniu.com/zh/projects/all-work and https://princeniu.com/projects/all-work
- Previous production deployment (rollback reference): `befc9bf0-d72e-4e34-9ae5-2268ac14ad54`.
- No Git commit or push performed. No email submissions or changes to credentials, bindings, or unrelated services.

Evidence: `/Users/prince/.codex/visualizations/2026/10/14/01a13bc5-fa3c-7b40-97f2-89659ee2838a/portfolio-all-work-20261014/`.
