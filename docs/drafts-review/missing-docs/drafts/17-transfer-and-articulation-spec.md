# TRANSFER AND ARTICULATION SPEC

**Status:** Draft — review required; not implemented, tested, institution-authorized, or production-enabled.

- **Catalog category:** Academic & learning
- **Proposed accountable owner:** Academic product lead + institutional academic owner
- **Document purpose:** Manage external credit evaluation and approved equivalencies.

## Decision boundary

This document describes a proposed operating/specification boundary. It does not transfer institutional record authority, alter product behavior, establish a contractual commitment, or certify compliance. Any tenant-specific rule, legal requirement, retention duration, accessibility claim, financial value, or service objective requires separately approved evidence.

## Proposed requirements

- Capture institution, course, term, credit unit and evidence provenance; never infer equivalency as official.
- Version articulation rules and effective dates, including expiry and program-specific applicability.
- Route exceptions to academic evaluators and preserve rationale, student notice and appeal route.
- Detect duplicate credit and unit-conversion ambiguity before ledger posting.

## Proposed operating flow

Receive evidence → validate source → apply dated rule → evaluator review → approve equivalency → post ledger event → refresh audit.

## Minimum record and audit fields

`evaluation_id, external_institution, external_course, evidence_id, rule_version, credit_conversion, decision, approver`

Implementers should add actor, timestamp, tenant scope, policy/version reference, correlation identifier, source/provenance reference, and authorization decision where applicable. Store only the minimum data necessary for the documented purpose.

## Acceptance criteria and activation gate

An expired agreement does not auto-approve new transfer credit; equivalent repeated transcripts do not award credit twice.

Activation requires the common package standard plus this document’s acceptance criteria, a named owner, a bounded tenant/domain scope, and evidence linked to the released artifact. A failed critical control, unresolved authority conflict, unreviewed privacy/security impact, or missing rollback/recovery route blocks activation.

## Dependencies

- `ACADEMIC_RECORD_LEDGER_SPEC`
- `DEGREE_AUDIT_SPEC`

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
