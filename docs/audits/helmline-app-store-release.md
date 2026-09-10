# Helmline App Store portfolio update

Status: published and verified on princeniu.com. Final deployment: https://cc630b73.personal-web-3g9.pages.dev, source commit 344f380f7c5ec9d509f4ccc16f0417feac9bd909. Website case change: 3b6097c. First deployment exposed a missing prior-production privacy route; restored verbatim from prior deployment source d63502a and verified both live languages against the original policy text. Changes are committed locally on the feature branch, not pushed or merged into main.
Branch: feature/helmline-app-store-release, based on website 39e3c21.

## Evidence boundaries

Public App Store page https://apps.apple.com/us/app/id6787791371 and Apple lookup endpoint confirmed Helmline, version 1.0, free, release date 2026-09-10, minimum iOS 17.0. Public listing describes English and Simplified Chinese, self-hosted Gateway requirements, native inputs/status/approval features, Keychain, and independent/non-official attribution.

Build identity 1.0.0 (5), physical-iPhone validation, Apple approval and manual release were supplied by the owner. Build configuration independently confirms 1.0.0 / 5. Public release was independently verified; device validation was not rerun in this website task.

Only frozen product commit 8ddec0c7204a10be0d8b9946e518646ac6e3d6cf was used for implementation claims. Current development branch was excluded. Product repository was read-only.

Source evidence within HermesCompanion/ at that commit:
- Execution summary and detail: Sources/Features/Chat/ExecutionTraceView.swift:35-50,261-324; HistoricalExecutionTraceView.swift:19-82; ChatView.swift:1212-1225,1288-1293.
- Approval authentication: Sources/Core/ApprovalAuthorizer.swift:14-31; AppLockController.swift:60-74; Sources/Features/Chat/ChatModel.swift:1758-1800.
- Gateway separation: Sources/Shared/HermesInstanceStore.swift:48-53,154-162,262-275; Sources/App/AppState.swift:267-313,617-632; Sources/Core/RunRegistry.swift:162-208.
- Share/audio: ShareSources/Info.plist:29-67; ShareViewController.swift:234-382; Sources/Features/Capture/CaptureView.swift:347-532; Sources/Core/NativeRecordingEngine.swift.
- Keychain: Sources/Core/KeychainStore.swift:30-37,73-83,216-252.
- Native status: Sources/Core/RunActivityController.swift:29-219; WidgetSources/HermesActivityWidget.swift:32-100; HermesStatusWidget.swift:4-87.
- Version: project.yml:7-11.

No claims of user research, downloads, growth, retention, revenue, or product-market fit. Screenshot interview notes are explicitly described as fictional fixtures.

## Website change surface

- app/data/content/{en,zh}/projects/helmline.js: released-state summaries, header download link, shorter evidence-based case study, explicit costs/setup/affiliation boundaries.
- app/data/content/{en,zh}/projects/all-work.js: Helmline entry only.
- app/data/projects.js: six raw-resolution screenshot imports, registry, localized homepage phone textures; unused storefront-poster imports removed.
- app/assets/helmline-screen-{en,zh}-0{1,2,3}.webp: source raw-canonical/{en-US,zh-Hans}/{01-sessions,02-execution,03-approval}.png in the owner's Build 5 App Store assets. No review recordings/materials were read or published. Screenshots visually reviewed; exports have no EXIF and preserve 1320x2868 resolution.
- app/routes/projects/project-case.jsx and project-case.module.css: Helmline-only header class ensuring App Store link has a minimum 44px touch area. Other project styling unchanged.

Existing dark/gold design, gallery renderer, bilingual catalog, route structure, shared OG image, sitemap routes, deployment config, and support/privacy infrastructure preserved. SEO and OG title/description inherit the updated project content; OG image remains the site's existing social-image.png.

Unrelated pre-existing modified plans, untracked duplicate files, and worktrees retained. Build-generated sitemap date churn was reverted because the path set did not change.

## Actual verification

- Existing npm test: 9 passed, 0 failed; content structure, language parity, asset keys, route/featured/sitemap contracts.
- ESLint on all changed JavaScript/JSX files: exit 0.
- git diff --check: exit 0.
- Production build: exit 0 in isolated /tmp/helmline-release-build after final change. Known existing Vite/Rollup option, large-chunk, and Remix future-flag warnings remain.
- Original worktree repeat build hit macOS EAGAIN while scanning build/client 3. No unrelated directory was deleted. Isolated copy was created from tracked HEAD with the exact changed website files overlaid, dependencies linked, and existing postinstall run to supply Draco assets.
- All 13 changed website source/assets in the preview were SHA-256 compared with the working tree and match.
- Local production preview uses Wrangler under Node 22; installed Wrangler rejects Node 20. No dependency/config edits were made.
- Desktop 1440px and true Playwright iPhone 13 emulation (390px, mobile/touch/DPR): both homepages, both project lists, both Helmline deep links returned 200; entry clicks and language switches succeeded; no page errors or horizontal overflow.
- Both language galleries switched through all three slides with desktop arrows and mobile dots. Screenshots inspected for loading, clipping, and privacy. Architecture and limit sections inspected.
- Final scoped CTA fix rechecked on both locales and both viewports: 44px minimum, no overflow or page errors. Actual click opened an App Store tab titled Helmline App - App Store.
- Six new image URLs: 200, image/webp.
- Both legacy /projects/hermes-ios-companion routes: 301 to corresponding localized Helmline routes.
- Contact route: 200 locally and online.
- Initial observation: privacy was 200 online but 404 locally. This was incorrectly treated as separate infrastructure; production source d63502a actually contained four privacy files plus route/sitemap registration missing from the starting branch. Final repair restores those source files and registrations verbatim. Both live privacy routes now return 200 and their article text matches the prior production deployment exactly. No independent Worker or Gateway was changed.
- Post-deploy browser QA: 12 desktop/mobile route cases passed with no stale release text, page errors, or horizontal overflow; gallery and locale controls worked. Final repair readback: nine public/support/privacy URLs returned 200; two legacy project URLs returned correct 301s; six screenshot URLs returned 200 image/webp; sitemap contains both privacy routes. Evidence: /tmp/helmline-production-verification/.
- Automated changed-text scan: no tested credential/private-host/device-token patterns. This is not a full repository-history privacy certification.

## Preview and release gate

English: http://127.0.0.1:8789/projects/helmline
Chinese: http://127.0.0.1:8789/zh/projects/helmline
Home: http://127.0.0.1:8789/
Screenshots and JSON evidence: /tmp/helmline-release-preview/
Final build log: /tmp/helmline-release-final-build.log

Preview is local to the Mac, not a public or phone-accessible hosted preview. Mobile testing is emulation, not a physical-device website test. Temporary evidence may disappear after cleanup/reboot.

Do not run npm run deploy or push a production-connected branch until Prince approves. Build fresh from the approved website sources, follow existing Pages deployment flow, then read back both production languages, old project redirects, store CTA, image URLs, SEO/OG metadata and live support/privacy URLs before reporting publication.
