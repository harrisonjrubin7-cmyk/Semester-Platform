# DEGREE AUDIT SPEC

**Status:** Draft — review required; not implemented, tested, institution-authorized, or production-enabled.

- **Catalog category:** Academic & learning
- **Proposed accountable owner:** Academic product lead + institutional academic owner
- **Document purpose:** Provide explainable requirement matching without replacing institutional graduation decisions.

## Decision boundary

This document describes a proposed operating/specification boundary. It does not transfer institutional record authority, alter product behavior, establish a contractual commitment, or certify compliance. Any tenant-specific rule, legal requirement, retention duration, accessibility claim, financial value, or service objective requires separately approved evidence.

## Proposed requirements

- Pin catalog year, program version, substitutions and residency rules to each audit.
- Model requirement groups, alternatives, credit limits and overlap rules deterministically.
- Explain each satisfied, unmet or uncertain requirement and link source evidence.
- Distinguish what-if estimates from official audits; registrar or designated authority approves graduation.

## Proposed operating flow

Select program/catalog → normalize credits → apply authorized exceptions → evaluate → explain gaps → human certify official result.

## Minimum record and audit fields

`audit_id, student_id, program_version, catalog_year, rule_version, credit_inputs, exceptions, findings, certification`

Implementers should add actor, timestamp, tenant scope, policy/version reference, correlation identifier, source/provenance reference, and authorization decision where applicable. Store only the minimum data necessary for the documented purpose.

## Acceptance criteria and activation gate

A what-if program change cannot alter official degree intent; repeated audit produces identical output for identical inputs; an unapproved substitution remains unresolved.

Activation requires the common package standard plus this document’s acceptance criteria, a named owner, a bounded tenant/domain scope, and evidence linked to the released artifact. A failed critical control, unresolved authority conflict, unreviewed privacy/security impact, or missing rollback/recovery route blocks activation.

## Dependencies

- `TRANSFER_AND_ARTICULATION_SPEC`
- `ACADEMIC_RECORD_LEDGER_SPEC`

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
