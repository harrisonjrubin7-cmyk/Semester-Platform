# DATA CLASSIFICATION

**Status:** Draft — review required; not implemented, tested, institution-authorized, or production-enabled.

- **Catalog category:** Trust & compliance
- **Proposed accountable owner:** Security/privacy lead + qualified institutional/legal reviewers
- **Document purpose:** Use one consistent classification scheme across storage, access and export.

## Decision boundary

This document describes a proposed operating/specification boundary. It does not transfer institutional record authority, alter product behavior, establish a contractual commitment, or certify compliance. Any tenant-specific rule, legal requirement, retention duration, accessibility claim, financial value, or service objective requires separately approved evidence.

## Proposed requirements

- Adopt proposed Public, Internal, Student-private, Institutional-confidential and Restricted classes subject to institutional approval.
- Set handling rules for encryption, access, sharing, logs, export and AI for each class.
- Apply the most restrictive handling to mixed content; source authority is separate from confidentiality.
- Require accountable review for downgrade and record inherited labels on derivatives.

## Proposed operating flow

Identify content/purpose → label → enforce handling → propagate derivatives → review reclassification.

## Minimum record and audit fields

`classification_id, asset_id, class, authority_category, permitted_roles, export_rule, ai_rule, reviewer, effective_version`

Implementers should add actor, timestamp, tenant scope, policy/version reference, correlation identifier, source/provenance reference, and authorization decision where applicable. Store only the minimum data necessary for the documented purpose.

## Acceptance criteria and activation gate

An official public catalog and a confidential grade have different confidentiality despite both being institutional; derivative summaries inherit restrictive inputs.

Activation requires the common package standard plus this document’s acceptance criteria, a named owner, a bounded tenant/domain scope, and evidence linked to the released artifact. A failed critical control, unresolved authority conflict, unreviewed privacy/security impact, or missing rollback/recovery route blocks activation.

## Dependencies

- `DATA_INVENTORY`
- `AI_DATA_CLASSIFICATION`

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
