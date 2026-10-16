# DOMAIN REPLACEMENT MATRIX

**Status:** Draft — review required; not implemented, tested, institution-authorized, or production-enabled.

- **Catalog category:** Product & architecture
- **Proposed accountable owner:** Product lead + platform architect
- **Document purpose:** Determine when Semester may replace a legacy system for a specific domain.

## Decision boundary

This document describes a proposed operating/specification boundary. It does not transfer institutional record authority, alter product behavior, establish a contractual commitment, or certify compliance. Any tenant-specific rule, legal requirement, retention duration, accessibility claim, financial value, or service objective requires separately approved evidence.

## Proposed requirements

- Track coexistence, native readiness, record authority, contractual dependencies and export coverage separately.
- Require migration rehearsal, reconciliation, support readiness and rollback before authority transfer.
- Keep remaining legacy domains authoritative; prohibit platform-wide replacement claims based on one successful domain.
- Document unresolved exceptions, downstream consumers and institution sign-off for each replacement.

## Proposed operating flow

Baseline incumbent → compare domain behaviors → rehearse migration → dual-run → approve transfer → monitor → retire safely.

## Minimum record and audit fields

`domain, incumbent, native_scope, parity_gaps, dependencies, reconciliation_report, rollback_checkpoint, approver, authority_date`

Implementers should add actor, timestamp, tenant scope, policy/version reference, correlation identifier, source/provenance reference, and authorization decision where applicable. Store only the minimum data necessary for the documented purpose.

## Acceptance criteria and activation gate

An unreconciled official-record difference blocks transfer; successful course delivery does not authorize replacement of registrar or finance domains.

Activation requires the common package standard plus this document’s acceptance criteria, a named owner, a bounded tenant/domain scope, and evidence linked to the released artifact. A failed critical control, unresolved authority conflict, unreviewed privacy/security impact, or missing rollback/recovery route blocks activation.

## Dependencies

- `DUAL_RUN_AND_CUTOVER`
- `ROLLBACK_STANDARD`
- `RECONCILIATION_STANDARD`

## Required review and evidence before approval

- Product and accountable institutional owner: scope, workflow, authority and success criteria.
- Engineering: architecture, tenant isolation, authorization, data lifecycle, API/adapter contracts and tests.
- Security, privacy and accessibility: risk assessment, control evidence, assistive-technology/process review and any required legal review.
- Operations/support: monitoring, incident/escalation ownership, recovery or rollback evidence and user communications.
- Legal, finance, procurement or academic governance: only where the proposed document touches their controlled decisions.

## Open decisions

- Identify the institution-specific policy, source authority, owner, configuration boundary and effective date.
- Define measurable acceptance thresholds only after baselining and accountable approval.
- Add implementation references, test results, approval receipts and release evidence; until then, retain the status `Draft`.
