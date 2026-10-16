# ACADEMIC INTEGRITY POLICY

**Status:** Draft — review required; not implemented, tested, institution-authorized, or production-enabled.

- **Catalog category:** Academic & learning
- **Proposed accountable owner:** Academic product lead + institutional academic owner
- **Document purpose:** Set transparent academic-integrity boundaries and fair human review.

## Decision boundary

This document describes a proposed operating/specification boundary. It does not transfer institutional record authority, alter product behavior, establish a contractual commitment, or certify compliance. Any tenant-specific rule, legal requirement, retention duration, accessibility claim, financial value, or service objective requires separately approved evidence.

## Proposed requirements

- Display assessment-specific permitted assistance, citation and collaboration rules before work begins.
- Treat AI or similarity signals as leads, never proof or automatic disciplinary decisions.
- Provide accessible notice, evidence disclosure within lawful limits, response opportunity and institution-controlled appeals.
- Keep investigations access-restricted and separate from routine student support analytics.

## Proposed operating flow

Publish rule → receive concern → triage by authorized human → notify and collect response → adjudicate → offer appeal → retain by policy.

## Minimum record and audit fields

`case_id, institution_policy_version, assessment_id, allegation, evidence_refs, reviewers, response, decision, appeal_state`

Implementers should add actor, timestamp, tenant scope, policy/version reference, correlation identifier, source/provenance reference, and authorization decision where applicable. Store only the minimum data necessary for the documented purpose.

## Acceptance criteria and activation gate

A detection signal cannot change a grade or impose sanction without authorized review; students can access the relevant published rule and appeal route.

Activation requires the common package standard plus this document’s acceptance criteria, a named owner, a bounded tenant/domain scope, and evidence linked to the released artifact. A failed critical control, unresolved authority conflict, unreviewed privacy/security impact, or missing rollback/recovery route blocks activation.

## Dependencies

- `AI_COURSE_POLICY_MODEL`
- `LEGAL_HOLDS`
- `DATA_RETENTION`

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
