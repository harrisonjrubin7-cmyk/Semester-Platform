# RECONCILIATION STANDARD

**Status:** Draft — review required; not implemented, tested, institution-authorized, or production-enabled.

- **Catalog category:** Integration & migration
- **Proposed accountable owner:** Integration engineering lead + institutional system owner
- **Document purpose:** Prove source and destination agree at record and semantic levels.

## Decision boundary

This document describes a proposed operating/specification boundary. It does not transfer institutional record authority, alter product behavior, establish a contractual commitment, or certify compliance. Any tenant-specific rule, legal requirement, retention duration, accessibility claim, financial value, or service objective requires separately approved evidence.

## Proposed requirements

- Compare counts, identifiers, totals, statuses, relationships and domain outcomes, not counts alone.
- Pin source/destination snapshots, mapping versions and comparison rules.
- Critical official-record differences require resolution or explicit accountable approval before promotion.
- Route mismatches by owner with evidence and reason; recompute after corrections and preserve all reports.

## Proposed operating flow

Take snapshots → compare → classify differences → assign → resolve → rerun → approve report.

## Minimum record and audit fields

`report_id, snapshots, mapping_version, comparison_rule, record_key, source_value_ref, destination_value_ref, severity, resolution`

Implementers should add actor, timestamp, tenant scope, policy/version reference, correlation identifier, source/provenance reference, and authorization decision where applicable. Store only the minimum data necessary for the documented purpose.

## Acceptance criteria and activation gate

Equal record counts with a changed grade still fail semantic reconciliation; a signed report can be reproduced from snapshot hashes.

Activation requires the common package standard plus this document’s acceptance criteria, a named owner, a bounded tenant/domain scope, and evidence linked to the released artifact. A failed critical control, unresolved authority conflict, unreviewed privacy/security impact, or missing rollback/recovery route blocks activation.

## Dependencies

- `DATA_MAPPING_STANDARD`
- `DOMAIN_AUTHORITY_MATRIX`

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
