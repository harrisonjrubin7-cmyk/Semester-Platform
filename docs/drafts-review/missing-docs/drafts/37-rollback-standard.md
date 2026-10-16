# ROLLBACK STANDARD

**Status:** Draft — review required; not implemented, tested, institution-authorized, or production-enabled.

- **Catalog category:** Integration & migration
- **Proposed accountable owner:** Integration engineering lead + institutional system owner
- **Document purpose:** Restore safe service and authority after a failed deployment or cutover.

## Decision boundary

This document describes a proposed operating/specification boundary. It does not transfer institutional record authority, alter product behavior, establish a contractual commitment, or certify compliance. Any tenant-specific rule, legal requirement, retention duration, accessibility claim, financial value, or service objective requires separately approved evidence.

## Proposed requirements

- Define triggers, decision authority, checkpoints and domain-specific reversal limits before activation.
- Separate application/config rollback from data restoration and business compensation.
- Reconcile writes made after checkpoint; avoid blindly restoring a backup that loses acknowledged official transactions.
- Test downstream propagation and user communications; forward-fix may be safer when legal records cannot be reversed.

## Proposed operating flow

Detect trigger → halt risky writes → authorize recovery → revert configuration or compensate → replay/reconcile → notify → verify.

## Minimum record and audit fields

`rollback_plan_id, trigger, decision_owner, checkpoint, write_log, reversal_limits, compensation_steps, test_report`

Implementers should add actor, timestamp, tenant scope, policy/version reference, correlation identifier, source/provenance reference, and authorization decision where applicable. Store only the minimum data necessary for the documented purpose.

## Acceptance criteria and activation gate

A grade submitted after a checkpoint is preserved or explicitly compensated; rollback rehearsal proves all dependent projections converge.

Activation requires the common package standard plus this document’s acceptance criteria, a named owner, a bounded tenant/domain scope, and evidence linked to the released artifact. A failed critical control, unresolved authority conflict, unreviewed privacy/security impact, or missing rollback/recovery route blocks activation.

## Dependencies

- `RECONCILIATION_STANDARD`
- `DISASTER_RECOVERY`
- `RELEASE_POLICY`

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
