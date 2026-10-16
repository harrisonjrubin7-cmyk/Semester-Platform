# Operations release gates

_Semester native operations · 2026-10-05 · Generated from ui_kits/native-ops/ops-data.js. Design-stage: nothing here is built until code, tests and release evidence exist. Code: handoff/semester-platform/supabase/migrations/100_controlled_actions.sql + tests/controlled-actions.test.ts._

A console ships to a pilot tenant only when:

1. Every route, RPC, query, storage call and export checks tenant + capability (tests prove cross-tenant denial).
2. All high-impact actions use api.request_action/decide_action/execute_action; tests/controlled-actions.test.ts green.
3. No student records visible to company roles (RLS test).
4. Source, authority and freshness labels on every datum shown.
5. WCAG 2.2 AA spot check of the console; keyboard and screen reader pass.
6. Six states designed and implemented (default, loading, empty, error, no permission, offline).
7. SLO defined, alert wired, runbook written.
8. Support/escalation owner named; macro exists.
9. Rollback path tested for each controlled action.
10. Docs updated; customer-facing claims reviewed.
