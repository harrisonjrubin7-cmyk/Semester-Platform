# AI DATA CLASSIFICATION

**Status:** Draft — review required; not implemented, tested, institution-authorized, or production-enabled.

- **Catalog category:** AI
- **Proposed accountable owner:** AI engineering lead + security/privacy reviewers
- **Document purpose:** Translate data classes into explicit AI processing permissions.

## Decision boundary

This document describes a proposed operating/specification boundary. It does not transfer institutional record authority, alter product behavior, establish a contractual commitment, or certify compliance. Any tenant-specific rule, legal requirement, retention duration, accessibility claim, financial value, or service objective requires separately approved evidence.

## Proposed requirements

- Classify prompts, retrieval chunks, attachments, tool inputs and outputs before provider transmission.
- Block official student records, credentials and restricted investigation data from external AI processing.
- Treat mixed inputs as the most restrictive class until reviewed; redaction must not be presumed successful without tests.
- Keep allowed student-private work opt-in and explain provider retention settings; avoid secondary training by default.

## Proposed operating flow

Inspect input → identify class and origin → apply deny/minimize policy → validate payload → authorize provider or local non-AI path.

## Minimum record and audit fields

`classification_decision_id, input_refs, detected_classes, effective_class, allowed_routes, redactions, policy_version`

Implementers should add actor, timestamp, tenant scope, policy/version reference, correlation identifier, source/provenance reference, and authorization decision where applicable. Store only the minimum data necessary for the documented purpose.

## Acceptance criteria and activation gate

A public document containing an embedded roster is blocked; a retrieved forbidden chunk cannot leak through a summary or tool argument.

Activation requires the common package standard plus this document’s acceptance criteria, a named owner, a bounded tenant/domain scope, and evidence linked to the released artifact. A failed critical control, unresolved authority conflict, unreviewed privacy/security impact, or missing rollback/recovery route blocks activation.

## Dependencies

- `DATA_CLASSIFICATION`
- `AI_PROVIDER_REGISTRY`

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
