# Web-to-app journey architecture

_Semester growth and onboarding · 2026-10-05 · Prototype: ui_kits/journey/index.html. Code: handoff/semester-platform (110_onboarding_growth.sql, lib/auth/return-path.ts, tests/onboarding.test.ts). Design-stage until code, tests and release evidence exist._

Discover → understand value → evaluate product, proof, trust, pricing → choose path → create account / sign in / request demo → verify identity and consent → role-aware onboarding → /app → first meaningful action → return through value, lifecycle and support.

## Layers

1. **Public discovery** — search, social, YouTube, referral, campus invite, email, partner → semester.com.
2. **Conversion and identity** — role CTA → /auth/* → one canonical identity, consent, tenant, role, entitlements. Safe return destination preserved (`continue_to=/app/...`).
3. **Native onboarding engine** — journey = identity + role + tenant + entitlements + intent; versioned, resumable, 3–5 steps.
4. **First app launch** — tenant- and role-aware AppShell; the first meaningful action is in the app, not a tour.
5. **Retention and expansion** — in-product guidance, reminders, lifecycle email, referrals, pilot evidence, renewal.

One identity system for marketing site, web app, mobile, institution portal, developer site and operations console.
