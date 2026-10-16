# Time-to-value milestones

_Semester onboarding · 2026-10-05 · From uploads/Compare web vs native…pdf and UX teardown…pdf. Prototype: ui_kits/journey (#/students, #/open/…, #/teardown). Code: 120_handoff_preview_devices.sql, tests/handoff.test.ts._

Measured as outcomes, not clicks. The prototype records landed → first meaningful action on the device.

| Audience | Target | Activation |
|---|---|---|
| Student (self-serve) | 0:00 land · 0:15 promise · 0:45 goal/preview · 1:30 account at save · 2:30 term/checklist · 3:30 Today · 4:00 first action | Real plan, registration task, or academic task |
| Institution-linked student | First authenticated session | Opens and completes an official next action |
| Applicant | First session | Saves a plan or admissions action |
| Faculty | 0:30 SSO · 1:00 course · 2:30 first teaching action | Publishes/configures a real course item |
| Advisor | 0:30 caseload · 1:00 queue · 3:00 action | Check-in, appointment, referral or plan step |
| Institution admin | 1:00 authority · 3:00 config action · 5:00+ launch gate | Governed configuration milestone |
| Buyer | First visit or follow-up | Books discovery, requests trust materials, pilot intake |
| Developer | First session | Valid sandbox API call or webhook |

Instrumented events: see docs/analytics/FUNNEL_AND_ACTIVATION_EVENT_TAXONOMY.md (updated with preview, handoff, PWA/native and support events).

## Targets (calibrate from telemetry)

| Audience | Clock starts | Target |
|---|---|---|
| Self-serve student | CTA click | 3–5 min |
| Institution-linked student | SSO done | < 2 min |
| Applicant | CTA click | 3–7 min |
| Faculty | SSO done | < 5 min |
| Advisor | SSO done | < 3 min |
| Institution admin | Invite/SSO | < 10 min |
| Buyer | Landing CTA | < 5 min |
| Developer | Account start | < 10 min |

One source in the research reports a median B2B SaaS time-to-first-value of 22 minutes, with faster-growing products under three minutes.
