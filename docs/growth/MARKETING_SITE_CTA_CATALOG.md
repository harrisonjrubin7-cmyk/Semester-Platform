# Marketing site CTA catalog

_Semester growth and onboarding · 2026-10-05 · Prototype: ui_kits/journey/index.html. Code: handoff/semester-platform (110_onboarding_growth.sql, lib/auth/return-path.ts, tests/onboarding.test.ts). Design-stage until code, tests and release evidence exist._

Every CTA carries a structured EntryContext. Query parameters are hints only.

| CTA | Copy | Target |
|---|---|---|
| hero_student | Start your Semester | /auth/sign-up?role=student&continue_to=/app/today |
| hero_pilot | Design a registration-readiness pilot | /pilot |
| nav_start | Start your Semester | /auth/sign-up?role=student |
| paths_* | Role path cards | /auth/sign-up?role=<role> |
| trust_request | Request security materials | /pilot |
| final_student | Start your Semester | /auth/sign-up?role=student |
| no_institution | Don't see your school? Start free | /auth/sign-up?role=student |
| download_browser | Continue in browser | /app |
