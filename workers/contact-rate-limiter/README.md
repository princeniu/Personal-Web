# Contact form rate limiter

This private Worker was deployed on 2026-10-14 and bound to the production
personal-web Pages project as CONTACT_RATE_LIMITER. Its version is
`d3fedcf4-e05d-4f26-8540-413f7e748c01`. It has no public URL or routes. Existing
Pages settings and unrelated namespaces were preserved and read back.

The production mail settings are currently unconfigured. The form retains the
draft and offers direct email and LinkedIn; deployment did not send test email.

The contact action requires `CONTACT_RATE_LIMITER` in production. A transaction in one Durable Object per hashed client address accepts one request per minute. KV is not used for reservation: an eventually consistent read followed by a write cannot enforce this limit under concurrent requests. If the binding is absent or unavailable, the form returns a friendly temporary-unavailability message and retains the draft; the public email and LinkedIn links remain available.

## Local preview

The default local preview uses a synchronous in-process limiter on localhost. It does not use a production binding. Sending is still disabled without the email environment settings; regression tests inject a local sender stub and do not send email.

To preview the Durable Object integration locally, run this Worker with `wrangler dev --config workers/contact-rate-limiter/wrangler.toml --local`, then run the Pages preview with `wrangler pages dev build/client --do CONTACT_RATE_LIMITER=ContactRateLimiter@portfolio-contact-limiter`. These commands are documentation, not actions performed by this change. Keep preview email sending stubbed or unconfigured.

## Recreating the binding for a future environment

Pages cannot create a Durable Object class itself. Deploy this Worker and its
SQLite migration before binding it to another approved Pages environment:

```toml
[[durable_objects.bindings]]
name = "CONTACT_RATE_LIMITER"
class_name = "ContactRateLimiter"
script_name = "portfolio-contact-limiter"
```

Set the binding for both production and any preview environment where the form is expected to work, preserve existing Pages bindings and email settings, and validate the limit plus delivery separately. Do not remove the old KV resource merely because the new action no longer uses it. The Worker has no public route and `workers_dev` is disabled.

References: [Pages bindings](https://developers.cloudflare.com/pages/functions/bindings/) and [Durable Object transactions](https://developers.cloudflare.com/durable-objects/api/storage-api/).
