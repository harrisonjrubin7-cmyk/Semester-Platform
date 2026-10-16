# Role and capability matrix

_Semester native operations · 2026-10-05 · Generated from ui_kits/native-ops/ops-data.js. Design-stage: nothing here is built until code, tests and release evidence exist. Code: handoff/semester-platform/supabase/migrations/100_controlled_actions.sql + tests/controlled-actions.test.ts._

No single broad admin role. Role + tenant scope + organizational scope + resource relationship + capability grant + policy conditions + consent conditions = permission decision (ctl.can in migration 100). Routes alone are not security.

| Operator | Scope | High-impact capabilities |
|---|---|---|
| Institution super-admin | Manage configuration, designate stewards, view tenant assurance | `tenant:configure`, `support:ticket + support_access_grant`, `compliance:manage` |
| Registrar | Terms, catalog, sections, registration, record changes, graduation | `config:publish`, `integration:approve + migration:approve`, `migration:manage` |
| Academic affairs operator | Program requirements, curricular approvals, academic policy | `config:publish` |
| Faculty | Assigned course content, assessments, feedback, teaching team | `grades:release` |
| Advisor | Assigned caseload, plans, appointments, referrals, permitted notes | — |
| Student accounts operator | Charges, credits, payment plans, permitted account actions | — |
| Campus-services operator | Assigned service catalog, cases, capacity, bookings | — |
| Security/privacy officer | Access reviews, audit investigation, subject requests, evidence | `ai:configure`, `compliance:manage` |
| IT/identity | SSO, SCIM, role mapping, sessions | `integration:approve + migration:approve` |
| Semester implementation operator | Approved tenant settings, permitted migration, launch workflow | `integration:approve + migration:approve`, `migration:manage` |
| Semester support operator | Minimum support context, resolve cases, request elevated access | — |
| Semester finance operator | Company quotes, invoices, subscriptions, credits, collections | `finance:approve_high` |
| Semester release operator | Flags, cohorts, releases, rollout safety, rollback | `tenant:configure`, `platform:configure` |
| CEO | Company approvals | `finance:approve_high` |
| Break-glass responder | Time-limited, reasoned, logged access during an approved incident only | `incident:communicate + killswitch:engage` |

Break-glass: time-limited (≤ 4 h, enforced), reasoned, logged, reviewed; never overrides tenant, capability, policy or consent.
