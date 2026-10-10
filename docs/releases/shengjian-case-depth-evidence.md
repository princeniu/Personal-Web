# Shengjian case-study evidence ledger

2026-10-01. Case depth revision based on Helmline's decision/tradeoff narrative and TrekAssist's finding/change/check structure. No new participant study or product acceptance performed for this editorial revision.

Source project: /Users/prince/Desktop/个人项目/shengjian, inspected commit cfc4e81.

| Public claim | Source | Evidence type / limit |
| --- | --- | --- |
| Personal Mac/iPad Web scope, two invited accounts, deferred apps/signup/payment | docs/PRODUCT-READINESS.md, docs/PRIVATE-BETA.md | Product scope; not market demand |
| Collapsed recording controls, selection/replay coexistence, font sync, export popover, notes scroll retention, language search | docs/UIUX-2026-09-29.md | Implemented review fixes and synthetic browser checks; no participant before/after comparison |
| 476 px live reading, retained 374.5 px notes scroll at 32 px font | docs/UIUX-2026-09-29.md | Specific simulated viewport results; not physical-device measurement |
| Keyboard reading pauses automatic follow | docs/ACCEPTANCE.md; src reading implementation | Interaction implementation and isolated check |
| AudioWorklet 16 kHz PCM, separate provider stream/WAV save, sample sequence/hash checks, 30-second save-queue stop | src/capture.ts, public/pcm.mjs, server/store.mjs | Implementation; not latency or uninterrupted-network guarantee |
| Durable acknowledgement separated from cloud upload; bounded archive jobs and verification | docs/PRODUCT-READINESS.md, server/archive.mjs | Implemented lifecycle |
| Structured manually requested notes, cache, retain old result on failure, transcript-only payload | docs/AI-SUMMARY.md, server/summary-prompt.mjs, server/summary.mjs | Implemented policy; demonstration screenshot is scripted |
| Independent-process integrity/ownership/corruption/overwrite/restart recovery checks | docs/ACCEPTANCE.md; tests/recovery-drill.test.mjs, tests/restore-restart.test.mjs | Historical isolated checks, not rerun for this content change |
| Single real Supabase recording recovery | docs/PRODUCT-READINESS.md | Documented prior Mac check; not full-machine/DNS failover |
| 51:56 audio, two-account isolation, user-confirmed iPad VoiceOver | docs/ACCEPTANCE.md, docs/PRODUCT-READINESS.md | Prior real use/user acceptance; not traction or full WCAG audit |
| 16 interface review items | docs/UIUX-2026-09-29.md | Review scope, not 16 users |
| Estimated budgets and quotas preserve existing reading access | docs/COST-BUDGET.md, docs/PRIVATE-BETA.md | Product behavior; no current supplier pricing claim |
| Proposed future task study | Editorial proposal | Explicitly not completed research |

The architecture/state SVGs are new explanatory schematics of existing implementation. They are not screenshots, wireframes from an earlier design stage, or new runtime proof. The approved BGM/effects video remained unchanged during the October 1 case revision. No credentials, private recordings, or runtime data copied into the case.

## October 9 video update

Replace the old 40-second walkthrough with the user-approved 28.4-second V2. The English page uses English titles and interaction feedback over the original bilingual interface; the Chinese page uses the accepted Chinese export. Both use the same shot timings, music, and sound effects. Versioned media URLs and matching posters avoid retaining the previous video in caches. The notes explanation elsewhere in the case stays unchanged.

The new film covers bilingual reading, question markers, classroom photos, replay from ten seconds before a marker, review status, and the recording library. It uses isolated fictional lesson data and synthetic input. Neither the film nor this update is recognition, latency, real-device, or participant-study evidence.

Validation: 1920×1080, 30fps, 852 frames; full decode; BGM/SFX-only visual identity; click and music-anchor timing checks; independent film review; nine content/i18n contract checks and production build. Both language pages played in isolated 1440px and 390px browser checks with matching posters, 28.4-second metadata, no page errors, and no horizontal overflow. Subjective listening is not claimed. Music: Digital Clouds by Alejandro Magaña (A. M.), Mixkit Stock Music Free License; provenance retained with the local film project.

Published-media SHA-256:

| Language | File | SHA-256 |
| --- | --- | --- |
| English | promo-v2-en.mp4 | ee926fd9f6a9d09f603422558c5e322c588997a4024eceb1572a6f781cdaaae4 |
| Chinese | promo-v2-zh.mp4 | 2377ed94921feb85a822ef5f8c93309e54a0141968b0b3c971c91ee5354ebfa9 |
