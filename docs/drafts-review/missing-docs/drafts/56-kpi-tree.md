# KPI TREE

**Status:** Draft — review required; not implemented, tested, institution-authorized, or production-enabled.

- **Catalog category:** Business & operations
- **Proposed accountable owner:** Business operations lead + finance/customer delivery owners
- **Document purpose:** Define metrics that connect student value, institutional outcomes and business health.

## Decision boundary

This document describes a proposed operating/specification boundary. It does not transfer institutional record authority, alter product behavior, establish a contractual commitment, or certify compliance. Any tenant-specific rule, legal requirement, retention duration, accessibility claim, financial value, or service objective requires separately approved evidence.

## Proposed requirements

- Map each metric to purpose, population, numerator/denominator, time window, source and owner.
- Measure action completion, deadline recovery, learning/support outcomes and official-record integrity separately.
- Segment only with approved privacy/fairness purpose and minimum reporting protections.
- Include cost, retention, activation, reliability and barriers; prohibit claiming causation from uncontrolled correlations.

## Proposed operating flow

Define outcome → identify drivers → specify metric → validate source → review privacy → publish dashboard → assess changes.

## Minimum record and audit fields

`metric_id, purpose, formula, population, exclusions, window, source, owner, privacy_rule, limitations`

Implementers should add actor, timestamp, tenant scope, policy/version reference, correlation identifier, source/provenance reference, and authorization decision where applicable. Store only the minimum data necessary for the documented purpose.

## Acceptance criteria and activation gate

An activation rate includes an explicit eligible denominator; duplicated events do not inflate action completions; small cohorts are protected under approved reporting rules.

Activation requires the common package standard plus this document’s acceptance criteria, a named owner, a bounded tenant/domain scope, and evidence linked to the released artifact. A failed critical control, unresolved authority conflict, unreviewed privacy/security impact, or missing rollback/recovery route blocks activation.

## Dependencies

- `DATA_INVENTORY`
- `PRIVACY`
- `OBSERVABILITY`

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
