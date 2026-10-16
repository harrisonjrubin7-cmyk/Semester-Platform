# COURSE STUDIO SPEC

**Status:** Draft — review required; not implemented, tested, institution-authorized, or production-enabled.

- **Catalog category:** Academic & learning
- **Proposed accountable owner:** Academic product lead + institutional academic owner
- **Document purpose:** Specify native course creation, teaching, learning and support within the shared OS.

## Decision boundary

This document describes a proposed operating/specification boundary. It does not transfer institutional record authority, alter product behavior, establish a contractual commitment, or certify compliance. Any tenant-specific rule, legal requirement, retention duration, accessibility claim, financial value, or service objective requires separately approved evidence.

## Proposed requirements

- Model course templates and term sections separately with role-scoped memberships and publication versions.
- Connect syllabus, materials, objectives, assignments, discussions, accessibility and office hours to the shared graph.
- Distinguish instructor-published resources from student-private study notes and AI-derived explanations.
- Publish changes with impact previews, notifications and retained prior versions; roster authority follows tenant policy.

## Proposed operating flow

Create section draft → attach objectives/materials → validate accessibility and course policy → publish → monitor activity → archive with retention rules.

## Minimum record and audit fields

`section_id, course_id, term_id, instructor_ids, publication_version, materials, objectives, course_ai_policy_id`

Implementers should add actor, timestamp, tenant scope, policy/version reference, correlation identifier, source/provenance reference, and authorization decision where applicable. Store only the minimum data necessary for the documented purpose.

## Acceptance criteria and activation gate

A private note stays invisible to teaching staff; an unpublished assignment is not indexed for students; withdrawn enrollment access follows approved policy.

Activation requires the common package standard plus this document’s acceptance criteria, a named owner, a bounded tenant/domain scope, and evidence linked to the released artifact. A failed critical control, unresolved authority conflict, unreviewed privacy/security impact, or missing rollback/recovery route blocks activation.

## Dependencies

- `LEARNING_OBJECTIVE_MODEL`
- `ASSESSMENT_AND_GRADEBOOK_SPEC`
- `AI_COURSE_POLICY_MODEL`

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
