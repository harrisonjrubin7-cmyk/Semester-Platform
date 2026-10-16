# AI TRANSPARENCY UX

**Status:** Draft — review required; not implemented, tested, institution-authorized, or production-enabled.

- **Catalog category:** AI
- **Proposed accountable owner:** AI engineering lead + security/privacy reviewers
- **Document purpose:** Make AI assistance intelligible, contestable and distinct from official information.

## Decision boundary

This document describes a proposed operating/specification boundary. It does not transfer institutional record authority, alter product behavior, establish a contractual commitment, or certify compliance. Any tenant-specific rule, legal requirement, retention duration, accessibility claim, financial value, or service objective requires separately approved evidence.

## Proposed requirements

- Label generated content and show supporting sources, dates, limitations and conflicts.
- Explain allowed context, provider/model selection, fallback, retention and meaningful cost impacts.
- Preview any external action with exact target/content and require explicit confirmation; recommendations do not auto-execute.
- Offer correction, report, non-AI alternative and human escalation; do not imply certainty with unsupported percentages.

## Proposed operating flow

Show scope → generate sourced output → reveal limits/context → student reviews → confirm bounded action or request human help.

## Minimum record and audit fields

`response_id, provider_model, source_refs, source_dates, context_categories, policy_reason, action_preview, feedback`

Implementers should add actor, timestamp, tenant scope, policy/version reference, correlation identifier, source/provenance reference, and authorization decision where applicable. Store only the minimum data necessary for the documented purpose.

## Acceptance criteria and activation gate

Unsupported official claims are flagged rather than styled as verified; keyboard users can inspect citations and decline an action.

Activation requires the common package standard plus this document’s acceptance criteria, a named owner, a bounded tenant/domain scope, and evidence linked to the released artifact. A failed critical control, unresolved authority conflict, unreviewed privacy/security impact, or missing rollback/recovery route blocks activation.

## Dependencies

- `AI_MODEL_ROUTING`
- `ACCESSIBILITY_ARCHITECTURE`
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
