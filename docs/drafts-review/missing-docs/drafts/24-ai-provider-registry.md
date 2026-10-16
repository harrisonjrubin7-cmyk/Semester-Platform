# AI PROVIDER REGISTRY

**Status:** Draft — review required; not implemented, tested, institution-authorized, or production-enabled.

- **Catalog category:** AI
- **Proposed accountable owner:** AI engineering lead + security/privacy reviewers
- **Document purpose:** Maintain the authoritative allowlist for AI suppliers and model configurations.

## Decision boundary

This document describes a proposed operating/specification boundary. It does not transfer institutional record authority, alter product behavior, establish a contractual commitment, or certify compliance. Any tenant-specific rule, legal requirement, retention duration, accessibility claim, financial value, or service objective requires separately approved evidence.

## Proposed requirements

- Review data handling, regions, retention, training use, deletion, subprocessors and contractual terms before approval.
- Track provider and model versions, permitted classifications and tools, fallback eligibility and expiry.
- Store credentials only in approved secret management; registry references must not expose keys.
- Suspend on material policy or contract change and require re-evaluation before restoration.

## Proposed operating flow

Intake supplier → security/privacy/legal review → test configuration → approve scoped route → monitor changes → renew or suspend.

## Minimum record and audit fields

`provider_id, model_id, version, approved_uses, prohibited_data, region, retention_terms, training_terms, evidence, expires_at`

Implementers should add actor, timestamp, tenant scope, policy/version reference, correlation identifier, source/provenance reference, and authorization decision where applicable. Store only the minimum data necessary for the documented purpose.

## Acceptance criteria and activation gate

An expired provider approval cannot serve requests; deleting a supplier disables routes and removes credentials through an audited workflow.

Activation requires the common package standard plus this document’s acceptance criteria, a named owner, a bounded tenant/domain scope, and evidence linked to the released artifact. A failed critical control, unresolved authority conflict, unreviewed privacy/security impact, or missing rollback/recovery route blocks activation.

## Dependencies

- `VENDOR_RISK`
- `AI_DATA_CLASSIFICATION`

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
