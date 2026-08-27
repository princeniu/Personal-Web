# Helmline portfolio claims ledger

Audit date: 2026-08-27 EDT
Portfolio scope: public case study and safe assets only
Frozen product evidence: commit 8ddec0c7204a10be0d8b9946e518646ac6e3d6cf

| Public claim | Evidence | Fresh verified | Approved wording | Boundary |
|---|---|---:|---|---|
| Product name is Helmline | Build 5 `HermesCompanion/project.yml`; localized product strings and App Store metadata | Yes, local source at frozen commit | Helmline | Do not use Hermes or Nous as the product brand |
| Version and build | Build 5 `project.yml`: `MARKETING_VERSION: 1.0.0`, `CURRENT_PROJECT_VERSION: 5`; commit 8ddec0c | Yes, local source | Version 1.0, Build 1.0.0 (5) | Do not imply a later binary |
| Submitted to Apple App Review; review pending; manual release after approval | Current task status supplied by Prince on 2026-08-27 | Current user-confirmed, not independently read back from ASC | “Version 1.0 submitted to Apple App Review. App Review pending. Manual release after approval.” | Never say approved, released, available, downloadable, or on the App Store without fresh ASC/public-store evidence |
| Product completed and moved through the App Store submission pipeline | Build 5 version source; archive verification checklist; Build 4 signed archive, export and Apple validation record; current submission status from Prince | Mixed: build source fresh, historical archive evidence dated 2026-08-26, submission user-confirmed | “Product completed and submitted for review” / “shipped through the App Store submission pipeline” | “Shipped” describes delivery execution, not public App Store availability |
| Native iPhone control surface for self-hosted AI agents | App Store metadata en/zh; `GatewayClient.swift`; iPhone-only target in `project.yml` | Yes, local source | “A native iPhone control surface for self-hosted AI agents.” | Do not call it a hosted agent service or a remote chat wrapper |
| BYOS and user-owned runtime boundary | `docs/app-store/app-privacy-answers.md`; `connection-security-decision.md`; App Store metadata | Yes, local docs at frozen commit | “Users connect a Gateway they control; files, tools, models, credentials and long-running work remain on the host.” | Do not imply developer hosting, custody or control of the user’s Gateway |
| No Helmline account, free, no ads, no IAP | `docs/app-store/content-rights-and-attribution.md`; App Store metadata; current task status | Yes, local docs plus user-confirmed | “Free, with no Helmline account, advertising or in-app purchases.” | Revalidate if commerce or account requirements change |
| Developer does not collect app data | Current task states App Privacy is published as “Data Not Collected”; source/data-flow audit in `app-privacy-answers.md` | Current user-confirmed label; implementation evidence fresh locally | “App Privacy: developer does not collect data.” | User-selected Gateway/provider practices are outside this claim; do not claim no data ever leaves the device |
| Gateway credentials use local Keychain storage | `KeychainStore.swift`; `HermesInstanceStore.swift`; `connection-security-decision.md` | Yes, local source | “Gateway credentials are stored in the iOS Keychain.” | Do not claim all app content is Keychain-only |
| Sensitive operations use Face ID or device passcode confirmation | `AppLockController.swift`; Info.plist usage text; App Store metadata; prior device acceptance records | Source fresh; device evidence historical | “Sensitive approvals and protected control paths use Face ID or device passcode confirmation.” | Do not claim biometric authentication for every action or notification tap |
| Multiple Gateway profiles are isolated | `HermesInstance.swift`; `HermesInstanceStore.swift`; App Store metadata | Yes, local source | “Manage multiple isolated Mac and VPS Gateway connections.” | Avoid claims of cryptographic isolation between hosts beyond the explicit profile/credential boundary |
| Sessions, execution, approvals, capture, multiple Gateways and native status are core workflows | App Store Focus screenshot set; App Store metadata; corresponding source modules | Yes, assets and local source | Name the six workflows exactly | Screenshots prove rendered UI, not production usage or scale |
| Share Extension, Widget, Live Activity, recording and background capabilities | `project.yml`; Share Extension activation rule; Widget/Activity sources; Info.plist background modes; App Store metadata | Yes, local source | “Native integrations include Share Extension, Widget, Live Activity and recording/background workflows.” | Do not claim every system surface was freshly device-tested for this portfolio update |
| SwiftUI, concurrent/streamed state, persistence and multi-instance engineering | SwiftUI source tree; `AppState.swift`; `GatewayClient.swift`; SSE/run-state/local stores | Yes, local source | Describe engineering responsibilities without performance percentages | Do not use “production ready” or “zero known limitations” |
| English and Simplified Chinese productization | App Store metadata en-US/zh-Hans; localized strings; Focus screenshot pairs | Yes, local source and assets | “English and Simplified Chinese localization and storefront assets.” | Do not claim more storefront locales |
| App Privacy and DSA declarations | Current task: privacy published as developer does not collect data; DSA non-trader | Current user-confirmed, not independently read back from ASC | Mention privacy label publicly; omit DSA from narrative unless needed | Do not infer legal status beyond the exact non-trader declaration |
| Independent compatibility | `content-rights-and-attribution.md` | Yes, local source | “Helmline is independently developed. It is compatible with the open-source Hermes Agent project but is not an official Nous Research product and is not endorsed by Nous Research.” | Never imply official status, partnership or endorsement |
| Screenshot safety | `audit/storefront-audit.json` pass; `audit/all-size-integrity.json` pass; Focus OCR files; final portfolio privacy scan | Existing asset audit current to Build 5; final scan pending until copied | “App Store-safe synthetic fixture screenshots” | No Review Gateway, credentials, production endpoints, real conversations, account/device identifiers or debug UI |

Forbidden public claims until fresh evidence changes the boundary:

- Available on the App Store
- Download on the App Store
- App Store released
- Now available
- Publicly available
- Official Hermes app
- Nous Research official product
- Production ready
- Zero known limitations
- Any user, download, revenue or performance-improvement number
