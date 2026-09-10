# Helmline gallery and background update

## Scope

Local-only update on `feature/helmline-app-store-release`. No production deployment, push, product repository changes, or Gateway operations. Existing unrelated worktree changes preserved.

## Backgrounds

- Hero: reuse `knowledgeos-hero-bg.webp`, opacity 0.45, matching existing peer cases.
- Reflection: reuse `knowledgeos-reflection-bg.webp` through the existing outcome section, overlay opacity 0.72.
- Both served background files were checked by SHA-256 against the requested original assets on English/Chinese desktop/mobile pages.

## Asset coverage

Inventory: 33 Helmline / historical Hermes iOS assets, plus the two requested KnowledgeOS backgrounds.

Included: all 20 current-release product image files, all 9 historical UI/diagram files, and both requested backgrounds. Total 31 unique files referenced across locales. Each locale displays 18 product images plus 2 backgrounds:

- Six localized App Store posters.
- Three localized original UI captures paired with execution, approval, and host-identity discussion.
- One localized current architecture diagram.
- Four historical boards: core flow (localized), security/execution, native system surfaces, architecture.
- Four historical original-resolution UI captures: conversation, inbox, execution detail, approval.

Excluded, not deleted:

- `helmline-background.webp` and `hermes-ios-background.webp`: replaced by the user-requested backgrounds.
- `hermes-ios-hero-banner-en.webp` and `hermes-ios-hero-banner-zh.webp`: obsolete private-beta title panels conflict with the current public-release story.

Historical assets retain original UI/labels and are explicitly marked as development-stage demonstration material, not Build 5 screenshots or additional shipped capability evidence. English-only archival images receive Chinese explanatory copy and localized alternative text on the Chinese page. Review recordings and review credentials are not used.

## Verification

- Focused ESLint: passed.
- Existing repository tests: 9 passed, 0 failed.
- Production build in isolated copy: passed.
- Preview: `http://127.0.0.1:8791/projects/helmline` and `/zh/projects/helmline`.
- Browser: English/Chinese at desktop 1440px and emulated iPhone 13 mobile viewport. Four page checks; all three carousels exercised across all slides (56 slide checks). No page errors, failing responses, broken static images, or horizontal overflow in those checks.
- Inspected rendered hero, reflection, explanatory sections and contact sheets of all added carousel images on both viewport classes.
- App Store CTA present with the existing universal store URL.
- Both privacy routes return 200. Both actual legacy project slugs (`/projects/hermes-ios-companion`, `/zh/projects/hermes-ios-companion`) redirect to the corresponding Helmline route and return 200.
- QA initially used incorrect invented legacy slugs; corrected after reading the actual slug map. Root `/hermes-companion` and `/hermes-companion/support` are not routes in this source; no route changes were made in this update.

Evidence: `/tmp/helmline-assets-preview/results.json`, `links.json`, `coverage.json`, and screenshots in the same directory. Build log: `/tmp/helmline-assets-build.log`.

No source edits after the successful build. Preview startup used a new local port because the previous process retained the previous bundle. Stop before production deployment pending Prince's confirmation.
