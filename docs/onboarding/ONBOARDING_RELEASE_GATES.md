# Onboarding release gates

_Semester growth and onboarding · 2026-10-05 · Prototype: ui_kits/journey/index.html. Code: handoff/semester-platform (110_onboarding_growth.sql, lib/auth/return-path.ts, tests/onboarding.test.ts). Design-stage until code, tests and release evidence exist._



1. tests/onboarding.test.ts green (return path, entry context, server-side assignment, required steps, consent, leads, analytics constraints).
2. Every journey completed by keyboard only and with a screen reader.
3. Every step has save-and-resume and Get help.
4. Activation events fire once per definition.
5. No public indexing of /auth, /onboarding, /app.
6. Consent documents reviewed by counsel; versions published.
7. Lead SLA owner named; routing tested.
8. No fake proof anywhere on the site (claim review signed off).
