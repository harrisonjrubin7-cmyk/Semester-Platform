# AI MODEL ROUTING

**Status:** Draft — review required; not implemented, tested, institution-authorized, or production-enabled.

- **Catalog category:** AI
- **Proposed accountable owner:** AI engineering lead + security/privacy reviewers
- **Document purpose:** Route requests through the governed gateway, never directly from domain UI to providers.

## Decision boundary

This document describes a proposed operating/specification boundary. It does not transfer institutional record authority, alter product behavior, establish a contractual commitment, or certify compliance. Any tenant-specific rule, legal requirement, retention duration, accessibility claim, financial value, or service objective requires separately approved evidence.

## Proposed requirements

- Evaluate classification, tenant policy, course policy and user permissions before capability or cost selection.
- Exclude official student records from external AI payloads; permitted personal content still requires policy and user controls.
- Choose only registry-approved model versions and explicitly allowed tools; fallback may not weaken policy.
- Record routing reasons and context categories without logging sensitive raw prompts by default.

## Proposed operating flow

Classify → resolve policies → minimize context → select approved route → evaluate output → cite → confirm action or hand off.

## Minimum record and audit fields

`request_id, tenant_id, policy_versions, classification, capability, provider_id, model_version, tool_allowlist, route_reason`

Implementers should add actor, timestamp, tenant scope, policy/version reference, correlation identifier, source/provenance reference, and authorization decision where applicable. Store only the minimum data necessary for the documented purpose.

## Acceptance criteria and activation gate

A cheaper fallback prohibited by course policy is denied; official-record content is blocked before transport; no eligible route produces a clear handoff.

Activation requires the common package standard plus this document’s acceptance criteria, a named owner, a bounded tenant/domain scope, and evidence linked to the released artifact. A failed critical control, unresolved authority conflict, unreviewed privacy/security impact, or missing rollback/recovery route blocks activation.

## Dependencies

- `AI_PROVIDER_REGISTRY`
- `AI_DATA_CLASSIFICATION`
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
