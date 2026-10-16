# SECURITY QUESTIONNAIRE LIBRARY

**Status:** Draft — review required; not implemented, tested, institution-authorized, or production-enabled.

- **Catalog category:** Trust & compliance
- **Proposed accountable owner:** Security/privacy lead + qualified institutional/legal reviewers
- **Document purpose:** Reuse accurate procurement answers without spreading unsupported claims.

## Decision boundary

This document describes a proposed operating/specification boundary. It does not transfer institutional record authority, alter product behavior, establish a contractual commitment, or certify compliance. Any tenant-specific rule, legal requirement, retention duration, accessibility claim, financial value, or service objective requires separately approved evidence.

## Proposed requirements

- Maintain canonical question topics and dated approved answers linked to actual evidence.
- Distinguish capability state and scope; qualify tenant-specific or partially implemented controls.
- Restrict confidential evidence and assign reviewers and expiry for each answer.
- Capture customer variations without overwriting the underlying approved control statement.

## Proposed operating flow

Receive questionnaire → map question → retrieve current answer/evidence → flag gaps → review tailored response → archive shared version.

## Minimum record and audit fields

`answer_id, topic, scope, response, capability_state, evidence_refs, reviewer, expiry, disclosure_class`

Implementers should add actor, timestamp, tenant scope, policy/version reference, correlation identifier, source/provenance reference, and authorization decision where applicable. Store only the minimum data necessary for the documented purpose.

## Acceptance criteria and activation gate

A sales user cannot turn a planned control into an unqualified yes; outdated recovery results prompt re-review rather than automatic reuse.

Activation requires the common package standard plus this document’s acceptance criteria, a named owner, a bounded tenant/domain scope, and evidence linked to the released artifact. A failed critical control, unresolved authority conflict, unreviewed privacy/security impact, or missing rollback/recovery route blocks activation.

## Dependencies

- `HECVAT_ROADMAP`
- `SECURITY`
- `RELEASE_POLICY`

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
