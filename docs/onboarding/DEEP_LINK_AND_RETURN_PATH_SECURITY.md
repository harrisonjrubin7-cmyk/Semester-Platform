# Deep link and return path security

_Semester growth and onboarding · 2026-10-05 · Prototype: ui_kits/journey/index.html. Code: handoff/semester-platform (110_onboarding_growth.sql, lib/auth/return-path.ts, tests/onboarding.test.ts). Design-stage until code, tests and release evidence exist._

`continue_to` is validated against an allowlist (lib/auth/return-path.ts): only /app routes, no schemes, no protocol-relative URLs, no backslashes, no query strings, max 160 chars. Invalid → /app.

Query parameters never grant a role, tenant membership, entitlement or privileged route; the server decides after authenticated membership and policy checks. Deep links into ops routes are refused for non-operators even after sign-in. Tests: tests/onboarding.test.ts.
