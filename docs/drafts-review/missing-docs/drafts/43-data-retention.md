# DATA RETENTION

**Status:** Draft — review required; not implemented, tested, institution-authorized, or production-enabled.

- **Catalog category:** Trust & compliance
- **Proposed accountable owner:** Security/privacy lead + qualified institutional/legal reviewers
- **Document purpose:** Apply approved retention schedules to all data copies.

## Decision boundary

This document describes a proposed operating/specification boundary. It does not transfer institutional record authority, alter product behavior, establish a contractual commitment, or certify compliance. Any tenant-specific rule, legal requirement, retention duration, accessibility claim, financial value, or service objective requires separately approved evidence.

## Proposed requirements

- Set periods by purpose, institution, contract and applicable law; this draft supplies no universal legal durations.
- Calculate expiry consistently and pause deletion for verified holds; permit narrower student-controlled retention where allowed.
- Cascade deletion to indexes, caches and supplier copies; backups use documented expiry and re-deletion after restore.
- Keep minimal deletion proof without retaining deleted content; unresolved schedule conflicts require review.

## Proposed operating flow

Approve schedule → assign asset → calculate expiry → check hold → delete eligible copies → verify → record disposition.

## Minimum record and audit fields

`schedule_id, class, purpose, jurisdiction, duration_rule, trigger, hold_check, backup_expiry, supplier_disposition`

Implementers should add actor, timestamp, tenant scope, policy/version reference, correlation identifier, source/provenance reference, and authorization decision where applicable. Store only the minimum data necessary for the documented purpose.

## Acceptance criteria and activation gate

An expired private document vanishes from search and active storage; restoring an older backup re-applies deletion tombstones before user access.

Activation requires the common package standard plus this document’s acceptance criteria, a named owner, a bounded tenant/domain scope, and evidence linked to the released artifact. A failed critical control, unresolved authority conflict, unreviewed privacy/security impact, or missing rollback/recovery route blocks activation.

## Dependencies

- `DATA_INVENTORY`
- `LEGAL_HOLDS`
- `BACKUP_RESTORE_TESTS`

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
