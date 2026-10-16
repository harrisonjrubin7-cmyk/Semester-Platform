# VENDOR RISK

**Status:** Draft — review required; not implemented, tested, institution-authorized, or production-enabled.

- **Catalog category:** Trust & compliance
- **Proposed accountable owner:** Security/privacy lead + qualified institutional/legal reviewers
- **Document purpose:** Assess and monitor third parties proportionate to data and operational risk.

## Decision boundary

This document describes a proposed operating/specification boundary. It does not transfer institutional record authority, alter product behavior, establish a contractual commitment, or certify compliance. Any tenant-specific rule, legal requirement, retention duration, accessibility claim, financial value, or service objective requires separately approved evidence.

## Proposed requirements

- Classify supplier criticality, data classes, access, regions, subprocessors and exit complexity.
- Require security/privacy/legal review and appropriate contracts before restricted data or production dependency.
- Track renewal, incidents, material changes, financial/operational resilience and evidence expiry.
- Maintain replacement/offboarding plans and revoke unused credentials; approval is use-case-specific.

## Proposed operating flow

Intake → classify → assess evidence/terms → approve conditions → monitor → renew or exit.

## Minimum record and audit fields

`vendor_id, owner, use_case, risk_tier, data_classes, access, regions, evidence, contract, conditions, exit_plan`

Implementers should add actor, timestamp, tenant scope, policy/version reference, correlation identifier, source/provenance reference, and authorization decision where applicable. Store only the minimum data necessary for the documented purpose.

## Acceptance criteria and activation gate

A supplier approved for public content cannot receive student-private files without new review; overdue critical reassessment blocks scope expansion.

Activation requires the common package standard plus this document’s acceptance criteria, a named owner, a bounded tenant/domain scope, and evidence linked to the released artifact. A failed critical control, unresolved authority conflict, unreviewed privacy/security impact, or missing rollback/recovery route blocks activation.

## Dependencies

- `DATA_INVENTORY`
- `PRIVACY`
- `INTEGRATION_OFFBOARDING`

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
