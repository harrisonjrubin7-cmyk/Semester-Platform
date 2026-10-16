# Progressive profiling policy

_Semester growth and onboarding · 2026-10-05 · Prototype: ui_kits/journey/index.html. Code: handoff/semester-platform (110_onboarding_growth.sql, lib/auth/return-path.ts, tests/onboarding.test.ts). Design-stage until code, tests and release evidence exist._

Collect the minimum to deliver value now; ask more only when it improves a workflow the person is using.

- Signup: email/passkey/SSO only.
- Onboarding: goal, term, one course — each skippable unless required for the first action.
- Later, in context: major/program (when planning), graduation goal (when auditing), support needs (only when the student opens support, always optional).
- Never ask for data the institution already supplies; show it with its source instead.
- Every field states why it is asked; every answer is editable and deletable in Privacy & data.

## Student data rules

| Data | Ask when | Skip? | Authority |
|---|---|---|---|
| Email/passkey | Account creation | No | Identity system |
| Primary goal | First screen | Yes (default path) | Student |
| Institution | Campus context/SSO needed | Yes in self-serve | Student selection / institution verification |
| Term | Plan or registration view | Yes | Student or official source |
| Course names | First plan | Yes (sample) | Student; official later |
| Major/program | Degree path feature | Yes | Student; official later |
| Graduation expectation | Degree/career planning | Yes | Student |
| Notification preference | After value | Yes | Student |
| Accessibility preference | Any time | Always | Student |
| Payment data | Checkout only | No if purchasing | Processor token |
| Support info | Support request only | Contextual | Support workflow |

Official (never asked): enrollment, program, holds, degree requirements, schedule.

## Faculty

Don't treat every faculty member as a course designer or administrator. Required: SSO/invite, membership and teaching assignment from the institution. First value: choose an assigned course and one intent (prepare course, add resource, create assessment, review work, set office hours). Ask about AI policy, team, accommodations and grading settings only when that feature is opened.
