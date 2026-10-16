# AI RED TEAM PLAN

**Status:** Draft — review required; not implemented, tested, institution-authorized, or production-enabled.

- **Catalog category:** AI
- **Proposed accountable owner:** AI engineering lead + security/privacy reviewers
- **Document purpose:** Challenge the gateway and agents under adversarial conditions.

## Decision boundary

This document describes a proposed operating/specification boundary. It does not transfer institutional record authority, alter product behavior, establish a contractual commitment, or certify compliance. Any tenant-specific rule, legal requirement, retention duration, accessibility claim, financial value, or service objective requires separately approved evidence.

## Proposed requirements

- Test prompt injection in course materials, retrieved pages, attachments and tool responses.
- Attempt cross-tenant retrieval, private-note exposure, official-record egress, role spoofing and policy bypass.
- Exercise agent loops, cost exhaustion, malicious links and unsafe fallback; use synthetic data and isolated tenants.
- Log exploit chains with severity and replay cases; independent review verifies remediation before activation.

## Proposed operating flow

Scope safe sandbox → seed canaries → attack gateway/tool boundary → classify exploit → remediate → replay → sign risk decision.

## Minimum record and audit fields

`case_id, attack_surface, payload_hash, synthetic_canary, expected_denial, observed_result, severity, remediation, retest`

Implementers should add actor, timestamp, tenant scope, policy/version reference, correlation identifier, source/provenance reference, and authorization decision where applicable. Store only the minimum data necessary for the documented purpose.

## Acceptance criteria and activation gate

An injected document cannot expand tool scope or exfiltrate a canary; repeated exploit attempts remain bounded and auditable.

Activation requires the common package standard plus this document’s acceptance criteria, a named owner, a bounded tenant/domain scope, and evidence linked to the released artifact. A failed critical control, unresolved authority conflict, unreviewed privacy/security impact, or missing rollback/recovery route blocks activation.

## Dependencies

- `AI_MODEL_ROUTING`
- `AI_EVALUATION_HARNESS`
- `AI_INCIDENT_RESPONSE`

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
