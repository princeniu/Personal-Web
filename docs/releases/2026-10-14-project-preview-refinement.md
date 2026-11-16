# Project preview refinement — 2026-10-14

Eight directory previews now focus on the interactions that distinguish each project. Shengjian and Clipmori keep their existing complete cover images and preview data. All original image files, directory copy, detailed cases, and homepage selections remain intact.

| Project | Preview focus |
| --- | --- |
| Helmline | Approval choices first, session context second; remove unused lower-screen space |
| TrekAssist | Weather warning and outdoor task entries, with map context |
| Porsche | Navigation confirmation and persistent task/voice access |
| SayIt | Stop-and-transcribe, timer, audio level, recording state |
| KnowledgeOS | Knowledge layers and Markdown directory structure |
| Posture Checker | Immediate posture feedback, reminders and trends |
| E-Tongue | Sample decision, evidence and machine/panelist profiles |
| Little Lemon | Party size, date/time and availability, with restaurant browsing context |

Cropping uses existing source pixels through CSS, preserving aspect ratios and leaving the source files untouched. Desktop compositions show a primary and, where useful, a secondary image; mobile shows only the primary image. The 16:10 frame is reserved independently of image intrinsic size, fixing the previous portrait-image height expansion. Development-stage, structure-diagram and illustrative-data labels remain visible in both locales.

## Validation

- Four related tests passed: real SSR filtering/links, crop bounds and actual image dimensions, and excluded covers remaining complete.
- Production build passed.
- Scope read-back confirms all eight requested mappings changed in English and Chinese; Shengjian and Clipmori mappings equal this task's baseline.
- SHA-256 read-back confirms 28 protected source files unchanged, including directory copy, both homepages and all detailed cases.
- Browser inspection at 1280, 940, 390 and 320 px: ten frames consistently 16:10, no horizontal overflow, tablet two columns, mobile secondary images hidden and source labels visible. All eight Chinese desktop compositions and the English approval composition inspected.

## Production

- Cloudflare Pages project: `personal-web`; Direct Upload to production branch `main`.
- Previous production / rollback reference: `6c5f40dc-d5be-4acf-9bd8-dbfd3d562625`.
- Public directory: https://princeniu.com/zh/projects/all-work
- Deployment URL: https://884cb72b.personal-web-3g9.pages.dev
- Production browser confirmed ten equal 16:10 frames at desktop width, the updated approval and recording compositions, and mobile primary-image/source-label behavior without horizontal overflow. The original user tab is refreshed; the temporary tab and viewport override are cleaned up.
- Canonical/latest production deployment: `884cb72b-af73-4c63-8172-f31c381d4482`, success. Complete redacted Cloudflare configuration matches this task's predeploy snapshot.
- Production read-back passed with zero failures: both locales have ten cards, six paired/four single previews, 32 image references and 20 unique image resources. Complete loader/crop data and rendered image styles match local preview; excluded project preview payloads match the prior release.
- All 20 image resources and 29 CSS/JS resources return 200 with matching build hashes and intended cache headers; deployment URL remains noindex. Only the two requested case-regression routes were checked and match local payloads.
- No Git commit/push, email submissions, credential/binding changes, or unrelated service changes.

Evidence directory: `/Users/prince/.codex/visualizations/2026/10/14/01a13bc5-fa3c-7b40-97f2-89659ee2838a/portfolio-preview-refinement-20261014/`.
