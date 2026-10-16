# Onboarding release checklist

_Semester onboarding · 2026-10-05 · From uploads/Compare web vs native…pdf and UX teardown…pdf. Prototype: ui_kits/journey (#/students, #/open/…, #/teardown). Code: 120_handoff_preview_devices.sql, tests/handoff.test.ts._

Interactive version: ui_kits/journey/#/teardown.

## Marketing and conversion
- [ ] Each audience has a clear primary CTA
- [ ] Every CTA preserves entry context without sensitive data
- [ ] Campaign pages have an explicit conversion event
- [ ] Claims, logos, outcomes and screenshots truthful and approved

## Identity
- [ ] One canonical account system (browser and native)
- [ ] Email, passkey, SSO, invite tested
- [ ] Account linking prevents duplicates
- [ ] Verification preserves destination and safe draft
- [ ] Password managers, paste, accessible auth
- [ ] Recovery, logout, session revocation, support

## Onboarding and activation
- [ ] Activation event per role
- [ ] Real first result, not an empty dashboard
- [ ] Progress resumes across browser, PWA, native
- [ ] Consent versioned and auditable
- [ ] Optional profile deferred until valuable
- [ ] Support hand-off from every state

## Web-to-native
- [ ] Browser route for every app destination
- [ ] Universal/App Links verified in production
- [ ] Installed, not-installed, expired, unauthenticated, unauthorized, old-version, offline tested
- [ ] Transactions expire, single-use, no credentials
- [ ] Native restores destination after auth
- [ ] Browser fallback always usable

## Measurement
- [ ] Events exclude sensitive data
- [ ] Signup, verification, onboarding, first value, activation, retention distinct
- [ ] Drop-off segmented by role, policy, platform, source
- [ ] Experiments with cohort controls and rollback
