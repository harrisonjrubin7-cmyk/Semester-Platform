# Operations workflow catalog

_Semester native operations · 2026-10-05 · Generated from ui_kits/native-ops/ops-data.js. Design-stage: nothing here is built until code, tests and release evidence exist. Code: handoff/semester-platform/supabase/migrations/100_controlled_actions.sql + tests/controlled-actions.test.ts._

Every controlled action follows the 13-step pattern. Other operations workflows:

- Support: request → category/urgency/scope → safe context → owner → response → escalation → resolution → confirmation → quality review
- Elevated support access: case → request → institution approval → 4-hour scoped grant → logged views → auto-expiry → listed in student access history
- Incident: detect → declare (SEV) → command → status page → notices on schedule → mitigate/rollback → resolve → review within 5 business days
- Release: PR → CI gates → preview → cohort → error-budget check → widen → full → or rollback
- Integration cutover: observe → shadow → assist → dual run → gate → authoritative → archive → retire
- Access review: quarterly list → owner confirms/removes each grant → unanswered grants revoked → evidence stored
- Tenant onboarding: order → tenant → SSO → roles → integrations → data quality → training → launch gate → adoption
- Tenant offboarding: notice → export → verify → delete with certificate (legal holds respected)
- Pilot: design → success plan → kickoff → weekly sponsor update → metrics (approved) → outcome review → renewal decision
- Monthly close: reconcile → AR review → revenue schedule → board pack
