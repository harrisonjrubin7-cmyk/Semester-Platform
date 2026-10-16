# LEARNING OBJECTIVE MODEL

**Status:** Draft — review required; not implemented, tested, institution-authorized, or production-enabled.

- **Catalog category:** Academic & learning
- **Proposed accountable owner:** Academic product lead + institutional academic owner
- **Document purpose:** Connect learning intentions to activities, assessment and evidence without inventing mastery.

## Decision boundary

This document describes a proposed operating/specification boundary. It does not transfer institutional record authority, alter product behavior, establish a contractual commitment, or certify compliance. Any tenant-specific rule, legal requirement, retention duration, accessibility claim, financial value, or service objective requires separately approved evidence.

## Proposed requirements

- Version objectives at institution, program, course and activity levels with accountable academic approval.
- Use explicit mappings and rubric evidence; avoid equating time-on-page with competence.
- Store demonstrated evidence separately from inferred progress and permit student review of explanations.
- Preserve historical objective versions so completed assessments are interpretable after curriculum changes.

## Proposed operating flow

Author objective → approve alignment → map activity and rubric → collect permitted evidence → compute labeled progress → review.

## Minimum record and audit fields

`objective_id, scope, version, statement, alignment_ids, rubric_criteria, evidence_ids, inference_method, reviewer`

Implementers should add actor, timestamp, tenant scope, policy/version reference, correlation identifier, source/provenance reference, and authorization decision where applicable. Store only the minimum data necessary for the documented purpose.

## Acceptance criteria and activation gate

Changing an objective does not rewrite past assessment meaning; inferred progress remains distinguishable from instructor-verified evidence.

Activation requires the common package standard plus this document’s acceptance criteria, a named owner, a bounded tenant/domain scope, and evidence linked to the released artifact. A failed critical control, unresolved authority conflict, unreviewed privacy/security impact, or missing rollback/recovery route blocks activation.

## Dependencies

- `EDUCATION_GRAPH_ARCHITECTURE`
- `ASSESSMENT_AND_GRADEBOOK_SPEC`

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
