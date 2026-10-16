# FACULTY WORKSPACE SPEC

**Status:** Draft — review required; not implemented, tested, institution-authorized, or production-enabled.

- **Catalog category:** Academic & learning
- **Proposed accountable owner:** Academic product lead + institutional academic owner
- **Document purpose:** Give faculty a coherent workspace across teaching, feedback and student support.

## Decision boundary

This document describes a proposed operating/specification boundary. It does not transfer institutional record authority, alter product behavior, establish a contractual commitment, or certify compliance. Any tenant-specific rule, legal requirement, retention duration, accessibility claim, financial value, or service objective requires separately approved evidence.

## Proposed requirements

- Use course-scoped permissions for materials, assessment, roster and support actions.
- Show prioritized tasks with context rather than surveillance-oriented rankings.
- Share only authorized support referrals; private student notes remain outside faculty access.
- Support delegation, leave coverage and term rollover with explicit grant expiry.

## Proposed operating flow

Select teaching context → review Action Center → author or assess → publish authorized change → refer support with allowed context.

## Minimum record and audit fields

`faculty_id, section_grants, delegated_capabilities, action_ids, referral_id, grant_expiry`

Implementers should add actor, timestamp, tenant scope, policy/version reference, correlation identifier, source/provenance reference, and authorization decision where applicable. Store only the minimum data necessary for the documented purpose.

## Acceptance criteria and activation gate

A teaching assistant can perform delegated grading but not final-grade approval; term rollover does not inherit expired access.

Activation requires the common package standard plus this document’s acceptance criteria, a named owner, a bounded tenant/domain scope, and evidence linked to the released artifact. A failed critical control, unresolved authority conflict, unreviewed privacy/security impact, or missing rollback/recovery route blocks activation.

## Dependencies

- `COURSE_STUDIO_SPEC`
- `ASSESSMENT_AND_GRADEBOOK_SPEC`
- `STUDENT_SUCCESS_MODEL`

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
