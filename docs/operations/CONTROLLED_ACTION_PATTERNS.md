# Controlled action patterns

_Semester native operations · 2026-10-05 · Generated from ui_kits/native-ops/ops-data.js. Design-stage: nothing here is built until code, tests and release evidence exist. Code: handoff/semester-platform/supabase/migrations/100_controlled_actions.sql + tests/controlled-actions.test.ts._

1. Request
2. Identify tenant and operator
3. Policy / capability / consent validation
4. Retrieve authoritative records
5. Impact preview
6. Approval if required
7. Idempotent command
8. Immutable audit event
9. Outbox / domain event
10. Read-model update
11. Notify affected people
12. Receipt and history
13. Rollback or remediation path

| Action | Capability | Approvers | Impact | Affected | Rollback | Authority |
|---|---|---|---|---|---|---|
| Enable a module for an institution | `tenant:configure` | Institution super-admin, Semester release operator | Feature visible to all members in the cohort within 5 minutes | Members in cohort | Disable within 5 minutes; data kept per retention | Entitlement on order form |
| Grant elevated support access | `support:ticket + support_access_grant` | Institution super-admin | One support operator can view one case's records for 4 hours | 1 student (listed in their access history) | Auto-expires; revoke any time | Open support case |
| Change a degree requirement rule | `config:publish` | Academic affairs operator, Registrar | Degree audit recalculated for students in program | Students in program (count from read model) | Previous rule version restored; audits re-run | Catalog year + curricular approval |
| Release grades | `grades:release` | Faculty of record | Students in section see grades; passback to SIS during transition | Enrolled students in section | Hold again within window; grade changes after use the correction workflow | Gradebook (LMS/SIS official until gate) |
| Issue a large credit or refund | `finance:approve_high` | Semester finance operator, CEO | Funds returned via rail; entitlement adjusted | 1 customer | Not reversible once settled — remediation by new invoice | Ledger + original payment |
| Switch an integration from observation to authoritative | `integration:approve + migration:approve` | Registrar, IT/identity, Semester implementation operator | Semester becomes source of truth for mapped fields | All records in mapped domain | Rollback to observation; dual-run evidence required | Cutover gate (16 criteria) |
| Activate AI tools for a course or institution | `ai:configure` | Security/privacy officer | Students in scope can use the tool under policy | Course or tenant members | Kill switch, immediate | Institution AI policy + red-team results |
| Migrate academic records | `migration:manage` | Registrar, Institution super-admin, Semester implementation operator | Records written to native ledger from source | All migrated students | Rollback to legacy; native entries superseded, not deleted | Source SIS + reconciliation report |
| Change a retention policy | `compliance:manage` | Security/privacy officer, Institution counsel | Deletion schedule changes for a data class | All records in class | Restore previous schedule (deleted data cannot return) | Records schedule |
| Deploy a feature cohort | `platform:configure` | Semester release operator | New code path for cohort | Cohort members | Flag off / rollback | Release checklist + CI evidence |
| Declare or resolve an incident | `incident:communicate + killswitch:engage` | — | Incident channel, status page, notices on schedule | Tenants in blast radius | Resolve; post-incident review required | Monitoring + responder judgement |

Implementation: api.request_action → api.decide_action (requester can never approve) → api.execute_action (idempotent; audit + outbox + receipt). Domain workers consume `ctl.outbox` and record rollback data.
