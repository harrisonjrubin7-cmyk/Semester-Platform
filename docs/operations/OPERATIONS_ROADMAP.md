# Operations roadmap

_Semester native operations · 2026-10-05 · Generated from ui_kits/native-ops/ops-data.js. Design-stage: nothing here is built until code, tests and release evidence exist. Code: handoff/semester-platform/supabase/migrations/100_controlled_actions.sql + tests/controlled-actions.test.ts._



## P0 · first 90 days

1. Native tenant hierarchy, memberships, roles and capabilities
2. Institution configuration: flags, module modes, kill switches
3. Audit event standard and audit explorer
4. Policy registry, consent registry, source/authority/freshness metadata
5. Operations Inbox, My Work and Approvals
6. Tenant 360 and Customer 360
7. Pilot configuration, success plan, implementation tracking
8. Support queue, escalation and support-access workflow
9. Release center, rollout cohorts, incident command, rollback
10. Integration registry, sync status, mapping version, reconciliation
11. Registrar registration-readiness console
12. Advisor intervention and outreach console
13. Institution executive dashboard (verified, labelled metrics only)
14. Finance/billing for pilot quotes, invoices, entitlements, renewals
15. Reliability dashboard, SLOs, alerting, incident procedure

## P1 · months 4–12

- Full academic operations workflows
- Student accounts and payment-plan operations
- Data-rights, retention and legal-hold center
- Access-review automation and break-glass console
- Course operations and grade-release controls
- Campus services administration
- Career/employer operations
- Community moderation, appeals, safety
- Customer health with transparent inputs
- Board reporting and financial planning
- Vendor/subprocessor risk operations
- AI evaluation, policy and incident console

## P2 · months 12–36

- Authoritative native registrar migration
- Native institutional financial-account operations (where legal)
- Advanced global tenant configuration
- Developer marketplace administration and partner certification
- Predictive operations with human review
- Multi-institution network, credential portability, lifelong learner operations
- Embedded-finance operations (after legal and payments review)

## First 10 branches

1. `feat/ops-tenant-capability-foundation` — Tenants, memberships, capability grants, delegation, permission decision function
2. `feat/ops-audit-policy-source` — Audit standard, explorer, policy + consent registries, source metadata
3. `feat/ops-controlled-actions` — api.request_action / approve / execute with impact preview, outbox, receipts
4. `feat/ops-inbox-work-approvals` — Operations Inbox, My Work, Approval Center
5. `feat/ops-tenant-customer-360` — Tenant 360, Customer 360, pilot tracking
6. `feat/ops-support-escalation` — Support queue, escalation, elevated-access workflow
7. `feat/ops-release-incident` — Release center, cohorts, kill switches, incident command, rollback
8. `feat/ops-integration-visibility` — Integration registry, sync status, mappings, reconciliation
9. `feat/inst-registration-readiness-console` — Registrar console for the pilot
10. `feat/ops-billing-entitlements` — Pilot quotes, invoices, entitlements, renewals (uses 090)

## First 25 actions

1. Phase 0 audit of existing roles, tenants, audit and ops tables
2. Map 100 onto existing tables
3. Apply 100 locally; run controlled-actions tests
4. Seed capability catalog
5. Replace role checks in 010–090 policies with ctl.can where appropriate
6. Permission-decision unit tests per operator
7. Audit explorer read model
8. Policy + consent registry tables
9. Source/authority/freshness columns on read models
10. Operations Inbox read model (pending requests, tickets, alerts)
11. My Work
12. Approval Center UI on api.decide_action
13. Tenant 360
14. Customer 360 (business data only)
15. Pilot tracking + success plan
16. Support queue + escalation
17. Elevated support access via controlled action
18. Release center + cohorts
19. Kill switches
20. Incident command + status page
21. Integration registry + sync status
22. Reconciliation dashboard
23. Registrar registration-readiness console
24. Advisor outreach console
25. Pilot billing: quotes, invoices, entitlements (uses 090)

## Risks

- Broad admin access creeping back → capability-only grants, quarterly access review.
- Parallel truths across consoles → one graph, read models only.
- Solo-founder bottleneck on approvals → define backup approvers before pilot.
- Building every console at once → P0 only until the pilot runs.
