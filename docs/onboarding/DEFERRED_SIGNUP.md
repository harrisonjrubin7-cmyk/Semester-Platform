# Deferred signup

_Semester onboarding · 2026-10-05 · From uploads/Compare web vs native…pdf and UX teardown…pdf. Prototype: ui_kits/journey (#/students, #/open/…, #/teardown). Code: 120_handoff_preview_devices.sql, tests/handoff.test.ts._

Deferred signup, not no signup: a narrow, safe preview before an account. Never anonymous access to personal, institutional, financial or administrative data.

## Student preview (built)

1. Student landing: "Build your semester in three steps". 2. Goal (prepare for registration, organize courses, catch up, plan degree). 3. Term. 4. Course names or "start with a checklist" — local only. 5. Preview Today/checklist, labelled sample. 6. At save: "Create your free Semester account to save this plan". 7. Signup preserves preview (≤ 30 min, browser only). 8. After verification it becomes an authenticated draft (api.claim_preview, size-capped). 9. Onboarding skips questions already answered. 10. One real action. 11. Only then: "Add your institution so we can show official dates?"

## Eligibility

| Can be deferred | Requires an account |
|---|---|
| Public product pages, resources, pricing, trust | Saving across devices |
| Anonymous sample planner | Importing calendar/course data |
| Choosing a broad goal | Official institution data, grades, holds, audit, billing |
| Temporary sample schedule | Support with personal info, payments, community posting, staff actions |

## Guardrails

Label sample data; explain when official data arrives; expire previews quickly; never store sensitive academic, disability, financial or identity data in marketing analytics; never treat preview data as authoritative; consent before non-essential tracking.

Other previews (P1): faculty Course Studio demo with sample content; buyer pilot scope estimator; developer public API overview.
