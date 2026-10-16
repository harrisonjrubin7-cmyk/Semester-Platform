# STUDENT SUCCESS MODEL

**Status:** Draft — review required; not implemented, tested, institution-authorized, or production-enabled.

- **Catalog category:** Academic & learning
- **Proposed accountable owner:** Academic product lead + institutional academic owner
- **Document purpose:** Coordinate transparent student-controlled support and institutional follow-through.

## Decision boundary

This document describes a proposed operating/specification boundary. It does not transfer institutional record authority, alter product behavior, establish a contractual commitment, or certify compliance. Any tenant-specific rule, legal requirement, retention duration, accessibility claim, financial value, or service objective requires separately approved evidence.

## Proposed requirements

- Use explainable indicators with approved purposes, freshness and uncertainty; no hidden risk score determines consequential decisions.
- Let students configure reminders, pacing and sharing; preserve opt-outs without punitive labels.
- Route tutoring, advising and services through consent-aware handoffs with minimal data.
- Evaluate differential impacts and false positives; human staff decide interventions and students can correct data.

## Proposed operating flow

Identify permitted signal → explain → offer student-selected action → obtain sharing permission → route service → confirm outcome.

## Minimum record and audit fields

`support_case_id, signal_sources, purpose, explanation, consent_scope, student_preferences, referral_owner, outcome`

Implementers should add actor, timestamp, tenant scope, policy/version reference, correlation identifier, source/provenance reference, and authorization decision where applicable. Store only the minimum data necessary for the documented purpose.

## Acceptance criteria and activation gate

Opting out disables optional nudges; an incorrect signal can be challenged; a referral does not expose private study notes.

Activation requires the common package standard plus this document’s acceptance criteria, a named owner, a bounded tenant/domain scope, and evidence linked to the released artifact. A failed critical control, unresolved authority conflict, unreviewed privacy/security impact, or missing rollback/recovery route blocks activation.

## Dependencies

- `PRIVACY`
- `AI_TRANSPARENCY_UX`
- `KPI_TREE`

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
