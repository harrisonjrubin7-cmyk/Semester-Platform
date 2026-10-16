# Expanded engineering and reliability release gates

**Status:** Review-ready release-control specification. It expands, but does not prove satisfaction of, the existing release-gate document.

## 1. Release object and evidence pack

Every promotion has one immutable `release_id` with artifact hash, environment, tenant/domain scope, feature-flag state, schema/mapping/configuration versions, approvers, evidence links, rollback plan, and expiry. A deployment is not an activation; an activation is not institutional authority.

## 2. Gate matrix

| Gate | Required evidence | Blocking conditions | Accountable approver |
|---|---|---|---|
| Scope & authority | Domain authority, tenant sponsor, intended users, permitted commands, feature flags | Ambiguous record authority; unsupported customer claim | Product + institutional owner |
| Tenant isolation & authorization | Automated deny tests for routes, RPCs, DB/RLS, storage, search, exports, jobs, caches | Any cross-tenant read/write; unscoped privileged path | Engineering + security |
| Data/provenance | Source, authority, freshness, classification, retention, migration/reconciliation evidence | Unknown source/mapping; stale or unreconciled official data | Domain owner + data owner |
| Security & privacy | Threat/risk review, secret/dependency scans, vendor/AI route approval, privacy impact as needed | Critical unresolved risk; prohibited data flow; expired exception | Security/privacy owner |
| Accessibility | Complete-process keyboard and assistive-technology evidence for default/loading/empty/error/denied/offline states | Blocker in a critical journey; no non-AI/non-drag alternative where required | Accessibility reviewer |
| Functional & reliability | Unit, contract, integration, E2E, concurrency/idempotency, failure-mode and recovery evidence | Missing high-risk test; non-deterministic official transaction | Engineering owner |
| Observability & support | SLI/SLO definition, dashboards, alerts, correlation, sanitized telemetry, runbook, on-call/support owner | Alert without action owner; sensitive telemetry leakage; no escalation path | SRE/support owner |
| Rollback & recovery | Tested rollback/compensation, backup/restore relevance, cutover checkpoint, communications plan | Unrecoverable change without authorized exception | Engineering + domain owner |
| Institutional activation | Tenant configuration/policy approval, training, support and integration readiness, reconciliation | No tenant approval; unverified external write/receipt | Institution owner |
| Claims & documentation | Release notes, customer-facing wording, known limits, support content, evidence state | Statement implies verification/certification not shown | Product + legal/comms reviewer |

## 3. Stage transition rules

### Designed → Implemented
Architecture, authority, policy, data contracts, and threat/access review are recorded. No claim of operational behavior.

### Implemented → Tested
Automated and manual results identify artifact/environment and prove the scoped behavior, including expected denials and failure paths.

### Tested → Deployed
A controlled artifact is deployed disabled or in a protected test environment, with configuration and migration manifest captured.

### Deployed → Institution-authorized
The accountable institution accepts the exact tenant, domain, data, roles, integrations, and operational model. This authorization does not enable a different tenant or broader authority.

### Institution-authorized → Production-enabled
The feature is enabled only after all relevant gates pass for the exact activation scope, real monitoring/support are ready, and any authoritative flows reconcile successfully.

## 4. High-impact commands

Writes that register, grade, share, export, pay, alter access, delete, or affect official records must use request → exact preview → authorized decision → execute → receipt/reconciliation. Approval binds to target, content, scope and expiry; any material change invalidates approval.

## 5. Go/no-go and exception control

- Each gate has pass/fail/not-applicable status, evidence, reviewer and expiry.
- “Not applicable” must state why and be approved by the relevant owner.
- Exceptions name risk, compensating control, scope, owner, expiry, monitoring and reversal condition. Exceptions never waive tenant isolation, prohibited data egress, or critical official-record integrity defects.
- A failed critical gate is a no-go. Lower-risk acceptance must be explicit and cannot create misleading public claims.

## 6. Post-activation checks

At defined checkpoints, verify authorization denials, error/latency/freshness signals, source receipts, user impact, support volume, accessibility reports, reconciliation, budget use, and rollback readiness. Disable by tenant/domain/feature flag on material risk; preserve evidence and conduct remediation before re-enable.
