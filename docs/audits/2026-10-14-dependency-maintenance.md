# Local dependency maintenance — 2026-10-14

Status: local source and lockfile updated. This work does not deploy the site, create Cloudflare resources, change credentials, or establish production validation.

## Preserved baseline

The original `package.json` and `package-lock.json` were copied before dependency maintenance to `/var/folders/kg/495qgk7572s1nt_05p3wnwrr0000gn/T/portfolio-dependency-baseline-qzcvb2xm/`.

- Original package SHA-256: `9fe6157f031ee85e7172ffc12379eea7d7e6cb26edc3a7493d7564dd85ee749f`
- Original lock SHA-256: `7e4bac3385c010dbcfdc7d9b5be4eda99b13fcdaaf22e3f23291fc151d2f4d5e`

Installation used the existing lock first. The following groups were then updated without `npm audit fix --force` or framework migration:

| Dependency | Previous lock | Current lock | Scope |
| --- | --- | --- | --- |
| React / React DOM | 18.2.0 | 18.3.1 | Same React 18 runtime family |
| Wrangler | 4.107.0 | 4.151.0 | Same CLI major; Node requirement updated |
| fflate | 0.6.10 | 0.6.11 | Compatible security patch in Three.js helper dependency |
| Handlebars | 4.7.9 | 4.7.10 | Compatible Storybook template patch |
| proxy-addr | 2.0.7 | 2.0.8 | Compatible development-server patch |
| PostCSS | 8.5.16 | 8.5.30 | Same CSS toolchain major |
| undici | 6.27.0 | 6.29.0 | Same dependency major; development tooling |

The exact old versions above are documented from the preserved lock; the lockfile diff is the authoritative dependency inventory. Node is now consistently `22.22.3` in `.node-version` and `>=22.22.3` in `engines`, matching the host used for local validation. No CI workflow with a conflicting Node reference was found. Wrangler's current official dependency is Miniflare `5.20261012.0-beta`; this is part of the stable Wrangler package dependency tree, not a manually selected prerelease.

## Remaining advisories and reachability

The full audit snapshot after the targeted groups reports **69 affected packages: 1 critical, 38 high, 30 moderate**. The production-dependency audit reports **8: 0 critical, 6 high, 2 moderate**. Counts include inherited/aggregate package findings and are not a count of distinct exploitable vulnerabilities in this website.

| Remaining group | Current exposure assessment | Why it was not force-fixed |
| --- | --- | --- |
| Remix / turbo-stream | The Single Fetch DoS advisory requires Single Fetch. Current source does not enable it; the existing server build has `v3_singleFetch: false`. | Advisory repair guidance moves to React Router 7; audit's suggested Remix downgrades would discard newer fixes and are unsuitable. Do not enable Single Fetch before reassessment. |
| React Router 6.30.4 | The navigation advisories require attacker-controlled navigation targets. The reviewed portfolio links come from maintained static content. The SSR constructor advisory requires very specific application-level error rewriting, which was not found. These conclusions are source reviews, not proof of universal non-exploitability. | Fixes require Router 7.18+ and a planned Remix/Router migration. |
| image-size 1.2.1 | Included by `rehype-img-size`, used in the MDX build plugin on repository assets. There is no public image-upload or image-parsing route. | The plugin constrains `image-size` to 1.x; patched 2.x changes its API. Replacing the plugin/API needs its own validation. |
| Vite 5.4.21 / esbuild | Development-server/source-map issues. Production runs the compiled Pages Function and assets, not Vite's development server. Some listed advisories require Windows, while this host is macOS. Development servers should remain local. | Remix supports Vite 6, but the retained Storybook 7 builder declares Vite 3/4/5 peers. A coordinated Storybook/Vite upgrade is required. |
| tar 6.2.1 | The remaining critical package is reached through Storybook CLI archive-download tooling; it is not bundled as a public portfolio handler. Running CLI operations on untrusted archives still needs care. | Audit recommends a Storybook major upgrade. No forced tar major override was used against the older CLI dependency. |
| Sharp 0.34.5 | Native image tooling used by the local optimization script on repository images. No production image-upload processing route was found. | Patched 0.35.x is outside the current pre-1.0 compatibility range and changes native dependencies; validate it separately before changing asset generation. |
| Other Storybook/MDX/lint/CSS development dependencies | Audit still includes toolchain advisories; their inputs in this project are maintained source files. This does not make accepting untrusted templates, archives, or source files safe. | Some remaining advisories have compatible updates and others need coordinated major changes. They were not overridden indiscriminately for a lower audit count. |

Primary references: [Single Fetch advisory](https://github.com/advisories/GHSA-rxv8-25v2-qmq8), [Router navigation advisory](https://github.com/advisories/GHSA-wrjc-x8rr-h8h6), [Router SSR advisory](https://github.com/advisories/GHSA-337j-9hxr-rhxg), [fflate advisory](https://github.com/advisories/GHSA-px8p-9vwx-vf98), and [tar advisory](https://github.com/advisories/GHSA-23hp-3jrh-7fpw).

## Functional safeguards prepared with this change

Contact validation rejects missing, non-string, duplicate, whitespace-only, malformed, and oversized fields; it trims delivery text while retaining the draft on error. Local sender-stub tests include 20 simultaneous requests, which reserve one slot and call the stub once. Production requires the transactional Durable Object binding and fails with a friendly temporary-unavailability message when unavailable. The form provides public email and LinkedIn alternatives and retains inputs through network errors. These tests do not send email and do not validate a live Cloudflare Durable Object or SES delivery.

SSR preview responses now add `X-Robots-Tag: noindex, nofollow` for every `.pages.dev` host, including deployment-version hosts. Static caching uses one-year immutable only for hashed `/assets/*`; fixed-path public project images use revalidation. Sitemap generation omits `lastmod` instead of setting every page to the build date. Local implementation does not invalidate previously cached images in existing visitors' browsers.

Production release still requires separate authorization, provision/binding decisions for the limiter, and live read-back. The limiter setup is documented in [workers/contact-rate-limiter/README.md](../../workers/contact-rate-limiter/README.md).
