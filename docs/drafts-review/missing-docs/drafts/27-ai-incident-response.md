# AI INCIDENT RESPONSE

**Status:** Draft — review required; not implemented, tested, institution-authorized, or production-enabled.

- **Catalog category:** AI
- **Proposed accountable owner:** AI engineering lead + security/privacy reviewers
- **Document purpose:** Contain and investigate AI-specific failures within the main incident process.

## Decision boundary

This document describes a proposed operating/specification boundary. It does not transfer institutional record authority, alter product behavior, establish a contractual commitment, or certify compliance. Any tenant-specific rule, legal requirement, retention duration, accessibility claim, financial value, or service objective requires separately approved evidence.

## Proposed requirements

- Classify leakage, fabricated authority, unsafe actions, bias and uncontrolled spend as reviewable incident types.
- Disable affected routes or tools with tenant-scoped switches and preserve sanitized evidence.
- Treat suspected official-record egress as a security/privacy escalation; counsel determines applicable notifications.
- Require adversarial replay, evaluation and human approval before re-enabling; offer corrected guidance to impacted users.

## Proposed operating flow

Detect → stop route/tool → assess scope → preserve evidence → coordinate incident command → correct → retest → authorize restoration.

## Minimum record and audit fields

`incident_id, route_versions, affected_tenants, exposure_categories, action_receipts, containment, notification_decision, replay_results`

Implementers should add actor, timestamp, tenant scope, policy/version reference, correlation identifier, source/provenance reference, and authorization decision where applicable. Store only the minimum data necessary for the documented purpose.

## Acceptance criteria and activation gate

A route kill switch stops new calls; already-running requests are accounted for; restoration is blocked until failed test cases pass.

Activation requires the common package standard plus this document’s acceptance criteria, a named owner, a bounded tenant/domain scope, and evidence linked to the released artifact. A failed critical control, unresolved authority conflict, unreviewed privacy/security impact, or missing rollback/recovery route blocks activation.

## Dependencies

- `INCIDENT_RESPONSE`
- `AI_EVALUATION_HARNESS`
- `AI_RED_TEAM_PLAN`

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
