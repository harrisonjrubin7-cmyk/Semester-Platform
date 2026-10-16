# DUAL RUN AND CUTOVER

**Status:** Draft — review required; not implemented, tested, institution-authorized, or production-enabled.

- **Catalog category:** Integration & migration
- **Proposed accountable owner:** Integration engineering lead + institutional system owner
- **Document purpose:** Transfer a domain's operations only after measured coexistence.

## Decision boundary

This document describes a proposed operating/specification boundary. It does not transfer institutional record authority, alter product behavior, establish a contractual commitment, or certify compliance. Any tenant-specific rule, legal requirement, retention duration, accessibility claim, financial value, or service objective requires separately approved evidence.

## Proposed requirements

- Declare one authoritative writer during dual-run; shadow processing must not create duplicate official transactions.
- Compare representative cycles and exception paths with approved reconciliation criteria.
- Require institution approval, support readiness, tested recovery and communications before cutover.
- Freeze or queue changes in a bounded window; reconcile queued work before declaring stable operation.

## Proposed operating flow

Shadow → compare → resolve → approve go/no-go → checkpoint → switch routing/authority → reconcile → stabilize.

## Minimum record and audit fields

`cutover_id, domain, authoritative_writer, shadow_scope, freeze_window, checkpoint, go_no_go, routing_version, stabilization_report`

Implementers should add actor, timestamp, tenant scope, policy/version reference, correlation identifier, source/provenance reference, and authorization decision where applicable. Store only the minimum data necessary for the documented purpose.

## Acceptance criteria and activation gate

A shadow registration cannot consume a seat; failed post-switch reconciliation triggers the predefined stop/rollback decision rather than silent continuation.

Activation requires the common package standard plus this document’s acceptance criteria, a named owner, a bounded tenant/domain scope, and evidence linked to the released artifact. A failed critical control, unresolved authority conflict, unreviewed privacy/security impact, or missing rollback/recovery route blocks activation.

## Dependencies

- `RECONCILIATION_STANDARD`
- `ROLLBACK_STANDARD`
- `PILOT_DELIVERY_FACTORY`

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
