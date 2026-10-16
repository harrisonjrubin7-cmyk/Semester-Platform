# ASSESSMENT AND GRADEBOOK SPEC

**Status:** Draft — review required; not implemented, tested, institution-authorized, or production-enabled.

- **Catalog category:** Academic & learning
- **Proposed accountable owner:** Academic product lead + institutional academic owner
- **Document purpose:** Define reliable assessment, feedback and grade publication with institutional authority.

## Decision boundary

This document describes a proposed operating/specification boundary. It does not transfer institutional record authority, alter product behavior, establish a contractual commitment, or certify compliance. Any tenant-specific rule, legal requirement, retention duration, accessibility claim, financial value, or service objective requires separately approved evidence.

## Proposed requirements

- Separate draft, submitted, evaluated, published and corrected states with authorized transitions.
- Version rubrics, weighting, rounding, missing-work and accommodation rules; calculate deterministically.
- Protect grade visibility; AI may assist permitted feedback but cannot publish consequential grades autonomously.
- Retain immutable correction history and reconcile official final-grade submission with the authoritative system.

## Proposed operating flow

Publish assignment → accept timestamped submission → evaluate rubric → review grade → publish → reconcile final submission or correction.

## Minimum record and audit fields

`assessment_id, submission_id, section_id, rubric_version, policy_version, scores, grade_state, reviewer, official_receipt`

Implementers should add actor, timestamp, tenant scope, policy/version reference, correlation identifier, source/provenance reference, and authorization decision where applicable. Store only the minimum data necessary for the documented purpose.

## Acceptance criteria and activation gate

Two graders cannot silently overwrite each other; duplicate final submission creates one official outcome; a correction retains previous value and reason.

Activation requires the common package standard plus this document’s acceptance criteria, a named owner, a bounded tenant/domain scope, and evidence linked to the released artifact. A failed critical control, unresolved authority conflict, unreviewed privacy/security impact, or missing rollback/recovery route blocks activation.

## Dependencies

- `ACADEMIC_RECORD_LEDGER_SPEC`
- `ACADEMIC_INTEGRITY_POLICY`

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
