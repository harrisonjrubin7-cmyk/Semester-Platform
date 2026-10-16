# Accessibility and error recovery

_Semester growth and onboarding · 2026-10-05 · Prototype: ui_kits/journey/index.html. Code: handoff/semester-platform (110_onboarding_growth.sql, lib/auth/return-path.ts, tests/onboarding.test.ts). Design-stage until code, tests and release evidence exist._

WCAG 2.2 AA.

- Visible focus (3px), 44px targets, labels on every field, errors announced (role=alert) with how to fix, input kept on error.
- Accessible authentication (3.3.8): paste and password managers allowed; passkeys/SSO alternatives; no cognitive tests.
- Redundant entry (3.3.7): never ask twice for the same information.
- Consistent help (3.2.6): "Get help" in the same place on every onboarding step.
- Save and finish later on every step; resume message on return.
- No forced tours; reduced motion respected.
