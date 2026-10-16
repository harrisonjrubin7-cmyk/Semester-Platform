# PRIVACY

**Status:** Draft — review required; not implemented, tested, institution-authorized, or production-enabled.

- **Catalog category:** Trust & compliance
- **Proposed accountable owner:** Security/privacy lead + qualified institutional/legal reviewers
- **Document purpose:** Define purpose-limited data processing and student control.

## Decision boundary

This document describes a proposed operating/specification boundary. It does not transfer institutional record authority, alter product behavior, establish a contractual commitment, or certify compliance. Any tenant-specific rule, legal requirement, retention duration, accessibility claim, financial value, or service objective requires separately approved evidence.

## Proposed requirements

- Separate student-private work from institution-controlled records and contract-defined processing roles.
- Record lawful/policy basis and purposes; collect minimum data and deny advertising or unrelated profiling uses.
- Support scoped sharing, revocation, correction, access/export and deletion subject to valid retention/holds.
- Require jurisdiction-specific professional review of notices, contracts, rights and notification duties before institutional use.

## Proposed operating flow

Map purpose/data → assess risk → approve notice/terms → collect minimally → fulfill rights requests → review deletion and suppliers.

## Minimum record and audit fields

`processing_activity_id, purpose, data_classes, controller_processor_roles, basis, recipients, retention_rule, rights_route`

Implementers should add actor, timestamp, tenant scope, policy/version reference, correlation identifier, source/provenance reference, and authorization decision where applicable. Store only the minimum data necessary for the documented purpose.

## Acceptance criteria and activation gate

Revoking an optional grant removes access and derived search visibility; a privacy request receives verified scope and an auditable disposition.

Activation requires the common package standard plus this document’s acceptance criteria, a named owner, a bounded tenant/domain scope, and evidence linked to the released artifact. A failed critical control, unresolved authority conflict, unreviewed privacy/security impact, or missing rollback/recovery route blocks activation.

## Dependencies

- `DATA_INVENTORY`
- `DATA_RETENTION`
- `LEGAL_HOLDS`
- `VENDOR_RISK`

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
