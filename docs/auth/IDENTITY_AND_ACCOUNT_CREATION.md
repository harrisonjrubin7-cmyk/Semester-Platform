# Identity and account creation

_Semester growth and onboarding · 2026-10-05 · Prototype: ui_kits/journey/index.html. Code: handoff/semester-platform (110_onboarding_growth.sql, lib/auth/return-path.ts, tests/onboarding.test.ts). Design-stage until code, tests and release evidence exist._

One canonical identity system. Different entry paths, same record.

## Student self-serve

1. CTA "Start your Semester" 2. Confirm student/applicant 3. Email, passkey or approved method 4. Verify (magic link; return preserved) 5. Terms + privacy (versioned) 6. "What do you want to do first?" 7. Optional institution/term 8. Onboarding 9. First meaningful action 10. Today.

## Accessible authentication (WCAG 2.2 SC 3.3.8)

Allow password managers and paste; no cognitive tests; no CAPTCHA-only; passkeys and SSO as alternatives; clear labels and error recovery. Identity lifecycle follows NIST SP 800-63-4 (registration, authentication, authenticator management, federation).

## Account functions

Sign up · sign in · email verification · institution SSO · invitation acceptance · recovery · session/device management · tenant and membership attachment · role provisioning · consent capture/versioning · privacy controls · export/deletion request · safe deep-link return.
