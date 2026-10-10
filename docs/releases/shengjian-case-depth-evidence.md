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

Replace the old 40-second walkthrough with the user-approved 28.4-second V2. The English page uses English titles and interaction feedback over the original bilingual interface; the Chinese page uses the accepted Chinese export. Both use the same shot timings, music, and sound effects. Versioned media URLs and matching posters avoid retaining the previous video in caches. The notes explanation elsewhere in the case was unchanged by this video-only update.

The new film covers bilingual reading, question markers, classroom photos, replay from ten seconds before a marker, review status, and the recording library. It uses isolated fictional lesson data and synthetic input. Neither the film nor this update is recognition, latency, real-device, or participant-study evidence.

Validation: 1920×1080, 30fps, 852 frames; full decode; BGM/SFX-only visual identity; click and music-anchor timing checks; independent film review; nine content/i18n contract checks and production build. Both language pages played in isolated 1440px and 390px browser checks with matching posters, 28.4-second metadata, no page errors, and no horizontal overflow. Subjective listening is not claimed. Music: Digital Clouds by Alejandro Magaña (A. M.), Mixkit Stock Music Free License; provenance retained with the local film project.

Published-media SHA-256:

| Language | File | SHA-256 |
| --- | --- | --- |
| English | promo-v2-en.mp4 | ee926fd9f6a9d09f603422558c5e322c588997a4024eceb1572a6f781cdaaae4 |
| Chinese | promo-v2-zh.mp4 | 2377ed94921feb85a822ef5f8c93309e54a0141968b0b3c971c91ee5354ebfa9 |

## October 9 screenshots and current-feature copy

User-approved update of the Shengjian case and its project-list card. The localized covers now use the current icon and the accepted video's visual direction. Seven supporting screenshots show actual components: live bilingual reading, paragraph replay, timestamped classroom photos, question markers, manually prepared notes, a 390px replay viewport, and the course recording library. The English case retains the original Chinese controls and bilingual fictional lesson rather than inventing a translated product interface.

Source: Shengjian commit `1eef69da2cd03396cea5778c848b0d2ec4b40a21`. The served production UI asset `index-D9BxyoWG.js` was compared with the local capture build; both SHA-256 values were `8d7dfdaf262e97b989faa94abfe34240ff43d948bdfce394803aa85b0af6622d`. Capture used a separate localhost server, random fixture-only data directory, synthetic microphone/transcript, no real camera, and disabled cloud/database connections. External requests and page errors were empty. The notes are manually seeded demonstration content, not evidence of AI output quality. Cover composition and PNG-to-WebP conversion retain the unmodified native UI capture.

| Current claim | Source and scope |
| --- | --- |
| Question/important markers, replay from ten seconds earlier, nearby text and preceding photo | `docs/PRODUCT-IMPROVEMENTS-2026-10-09.md`, `src/components/StudyMarkers.tsx`; implemented workflow |
| Optional courses, pending/reviewed state, course filtering and persistence | `docs/LEARNING-WORKFLOW-2026-10-09.md`; manual state, not a mastery score |
| Course preparation and explicit term reuse | `docs/COURSE-PREPARATION-2026-10-09.md`; recognition hints, not accuracy guarantees or a shared glossary |
| Sample-positioned photos, separate persistent outbox, replay and archive inclusion | `docs/CLASSROOM-IMAGES.md`; synthetic UI capture is not real-device acceptance |
| Stop near pending-save capacity, retain recovery path | `src/capture.ts`; replaces the earlier 30-second cutoff claim |
| Photos, course/term settings and review status in independent cloud recovery | `docs/FOLLOWUP-ACCEPTANCE-2026-10-09.md`; documented real private Storage with synthetic recordings, not a new test in this editorial task |

The state/architecture diagram layouts are retained with corrected queue-boundary wording and photo/learning-metadata labels. Their versioned paths avoid stale copies. Historic September measurements remain dated; no new participant study, learning-effectiveness result, or combined real iPad classroom acceptance is claimed. The accepted V2 videos and their posters are unchanged.

Validation: nine project-content and language-parity checks passed, followed by a successful production build. Isolated browser checks at 1440px and 390px loaded all ten case images in both languages, verified headings and the updated project-list cards, and played the unchanged 28.4-second films. No page errors or horizontal overflow were found. The localized diagrams, mobile case opening, and project-list thumbnail were also visually reviewed.
