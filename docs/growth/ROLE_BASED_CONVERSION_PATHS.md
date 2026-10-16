# Role-based conversion paths

_Semester growth and onboarding · 2026-10-05 · Prototype: ui_kits/journey/index.html. Code: handoff/semester-platform (110_onboarding_growth.sql, lib/auth/return-path.ts, tests/onboarding.test.ts). Design-stage until code, tests and release evidence exist._

Every visitor is routed into an intentional path.

| Path | CTA | Identity | Journey |
|---|---|---|---|
| I'm a student | Start free — organize your term | self | student |
| My institution invited me | Continue with your campus sign-in | sso | campus_student |
| I'm applying to school | Plan your path | self | applicant |
| I teach at an institution | Explore teaching tools | sso | faculty |
| I advise or support students | Request access through your campus | sso | advisor |
| I run Semester for my institution | Accept your admin invitation | sso | admin |
| I'm a parent or guardian | Your student invites you | invite | guardian |
| I'm exploring Semester for my organization | Design a pilot — no account needed | lead | buyer |
| I'm a partner or developer | Build with Semester | dev | developer |

Buyers never create a student account; their first win is a conversation, pilot plan or trust review. Prospective employees go to /company/careers (recruiting workflow).
