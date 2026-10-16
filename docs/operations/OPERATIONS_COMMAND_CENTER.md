# Operations Command Center

_Semester native operations · 2026-10-05 · Generated from ui_kits/native-ops/ops-data.js. Design-stage: nothing here is built until code, tests and release evidence exist. Code: handoff/semester-platform/supabase/migrations/100_controlled_actions.sql + tests/controlled-actions.test.ts._

A system of controlled actions and evidence, not an analytics dashboard.

| Field | Value |
|---|---|
| Users | All Semester operators |
| Controls | Inbox, work, approvals, tenant/customer 360, pilots, support, health, renewals, releases, flags, integrations, security, privacy, access, incidents, SLOs, risk, vendors, finance, people, board |
| Route | `/app/ops` |
| Priority | P0 |
| Owner | COO |
| Screens | Executive overview, Operations inbox, My work, Approval center, Tenant 360, Customer 360, Support & escalation, Incident command, Reliability & SLOs, Access review & break-glass |
| Controlled actions | Any high-impact action |
| Built so far | ../../templates/command-center/CommandCenter.dc.html |

## Areas

Executive overview · operations inbox · my work · approval center · tenant 360 · customer 360 · pilot and implementation center · support and escalation · customer health · revenue and renewals · product and release center · feature flag and rollout center · integration and migration center · security and trust · privacy and data rights · access review and break-glass · incident command · reliability and SLOs · risk register · vendors and subprocessors · financial operations · people and capacity · board and investor reporting · operator preferences.

## Routes

- `/app/ops`
- `/app/ops/inbox`
- `/app/ops/work`
- `/app/ops/approvals`
- `/app/ops/tenants`
- `/app/ops/tenants/:tenantId`
- `/app/ops/customers`
- `/app/ops/customers/:customerId`
- `/app/ops/pilots`
- `/app/ops/implementations`
- `/app/ops/customer-health`
- `/app/ops/renewals`
- `/app/ops/billing`
- `/app/ops/reconciliation`
- `/app/ops/support`
- `/app/ops/releases`
- `/app/ops/feature-flags`
- `/app/ops/rollouts`
- `/app/ops/integrations`
- `/app/ops/migrations`
- `/app/ops/security`
- `/app/ops/privacy`
- `/app/ops/trust`
- `/app/ops/access-reviews`
- `/app/ops/break-glass`
- `/app/ops/incidents`
- `/app/ops/reliability`
- `/app/ops/audit`
- `/app/ops/risks`
- `/app/ops/vendors`
- `/app/ops/finance`
- `/app/ops/forecast`
- `/app/ops/board`
- `/app/ops/people`
