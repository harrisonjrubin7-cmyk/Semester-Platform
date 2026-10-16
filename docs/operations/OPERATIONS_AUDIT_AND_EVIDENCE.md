# Operations audit and evidence

_Semester native operations · 2026-10-05 · Generated from ui_kits/native-ops/ops-data.js. Design-stage: nothing here is built until code, tests and release evidence exist. Code: handoff/semester-platform/supabase/migrations/100_controlled_actions.sql + tests/controlled-actions.test.ts._



- Every sensitive read and every write records actor, tenant, capability, decision inputs, reason and outcome in audit.events (actor forced to auth.uid() by migration 050).
- Controlled actions add request, approvals, receipt and outbox event (migration 100).
- Evidence register links each control to the test, log query or document that proves it.
- Audit explorer is read-only, tenant-scoped for institutions, and exportable with its own audit entry.
- Retention follows the records schedule; legal holds block deletion.
