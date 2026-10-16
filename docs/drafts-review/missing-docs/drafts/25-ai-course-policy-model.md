# AI COURSE POLICY MODEL

**Status:** Draft — review required; not implemented, tested, institution-authorized, or production-enabled.

- **Catalog category:** AI
- **Proposed accountable owner:** AI engineering lead + security/privacy reviewers
- **Document purpose:** Make course and assessment AI rules enforceable and visible.

## Decision boundary

This document describes a proposed operating/specification boundary. It does not transfer institutional record authority, alter product behavior, establish a contractual commitment, or certify compliance. Any tenant-specific rule, legal requirement, retention duration, accessibility claim, financial value, or service objective requires separately approved evidence.

## Proposed requirements

- Version policies at tenant, course and assessment scope; resolve conflicts using the most restrictive applicable rule.
- Support prohibited, limited assistance and allowed assistance with explicit allowed tasks, disclosure and citation requirements.
- Do not silently broaden rules during an assessment; show effective dates and student acknowledgment.
- Provide non-AI alternatives and instructor clarification paths; policy cannot authorize prohibited data transmission.

## Proposed operating flow

Publish tenant baseline → instructor scopes permitted use → validate consistency → display at assignment → gateway enforces → audit changes.

## Minimum record and audit fields

`policy_id, scope, version, allowed_tasks, prohibited_tasks, disclosure_rule, effective_at, authorizing_role`

Implementers should add actor, timestamp, tenant scope, policy/version reference, correlation identifier, source/provenance reference, and authorization decision where applicable. Store only the minimum data necessary for the documented purpose.

## Acceptance criteria and activation gate

A permissive course policy cannot override an institution prohibition; a student sees the exact policy version used to deny a request.

Activation requires the common package standard plus this document’s acceptance criteria, a named owner, a bounded tenant/domain scope, and evidence linked to the released artifact. A failed critical control, unresolved authority conflict, unreviewed privacy/security impact, or missing rollback/recovery route blocks activation.

## Dependencies

- `ACADEMIC_INTEGRITY_POLICY`
- `AI_MODEL_ROUTING`

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
