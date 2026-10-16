# DATA MAPPING STANDARD

**Status:** Draft — review required; not implemented, tested, institution-authorized, or production-enabled.

- **Catalog category:** Integration & migration
- **Proposed accountable owner:** Integration engineering lead + institutional system owner
- **Document purpose:** Define deterministic, reviewable transformations into canonical records.

## Decision boundary

This document describes a proposed operating/specification boundary. It does not transfer institutional record authority, alter product behavior, establish a contractual commitment, or certify compliance. Any tenant-specific rule, legal requirement, retention duration, accessibility claim, financial value, or service objective requires separately approved evidence.

## Proposed requirements

- Version every field mapping with source path, target meaning, type, units, null and timezone semantics.
- Maintain tenant-scoped identity maps and explicit merge/split approval; never merge people by name alone.
- Reject ambiguous conversions and retain raw-source references under retention rules.
- Record transformation provenance and reversible mapping where possible; document lossy conversions.

## Proposed operating flow

Profile → author mapping → validate fixtures → academic/system review → approve version → transform → quarantine exceptions.

## Minimum record and audit fields

`mapping_id, version, source_field, target_field, type, unit, timezone, transform, null_rule, authority, lossiness`

Implementers should add actor, timestamp, tenant scope, policy/version reference, correlation identifier, source/provenance reference, and authorization decision where applicable. Store only the minimum data necessary for the documented purpose.

## Acceptance criteria and activation gate

A credit-unit mismatch is quarantined; identical source fixtures yield identical output; unknown identities cannot attach to another student's records.

Activation requires the common package standard plus this document’s acceptance criteria, a named owner, a bounded tenant/domain scope, and evidence linked to the released artifact. A failed critical control, unresolved authority conflict, unreviewed privacy/security impact, or missing rollback/recovery route blocks activation.

## Dependencies

- `EDUCATION_GRAPH_ARCHITECTURE`
- `DATA_CLASSIFICATION`

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
