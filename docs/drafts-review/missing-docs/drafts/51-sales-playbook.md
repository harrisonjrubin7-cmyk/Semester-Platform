# SALES PLAYBOOK

**Status:** Draft — review required; not implemented, tested, institution-authorized, or production-enabled.

- **Catalog category:** Business & operations
- **Proposed accountable owner:** Business operations lead + finance/customer delivery owners
- **Document purpose:** Sell authorized, evidence-backed capabilities with a reliable delivery handoff.

## Decision boundary

This document describes a proposed operating/specification boundary. It does not transfer institutional record authority, alter product behavior, establish a contractual commitment, or certify compliance. Any tenant-specific rule, legal requirement, retention duration, accessibility claim, financial value, or service objective requires separately approved evidence.

## Proposed requirements

- Qualify institution needs, buying committee, authority, constraints and measurable pilot outcomes.
- Use current capability and claims evidence; distinguish demo, pilot-ready and production-enabled scope.
- Require procurement/security/accessibility review and legal approval before commitments.
- Handoff signed scope, dependencies, pricing assumptions, support, exit terms and success criteria to delivery.

## Proposed operating flow

Qualify → discover → map proven capabilities → demo with labels → diligence → approve commercial terms → contract → handoff.

## Minimum record and audit fields

`opportunity_id, institution, stakeholders, needs, capability_evidence, procurement_gates, commercial_approvals, delivery_scope`

Implementers should add actor, timestamp, tenant scope, policy/version reference, correlation identifier, source/provenance reference, and authorization decision where applicable. Store only the minimum data necessary for the documented purpose.

## Acceptance criteria and activation gate

A demo-only feature cannot be promised as available; signed scope with unresolved integration access creates a tracked dependency, not a hidden delivery assumption.

Activation requires the common package standard plus this document’s acceptance criteria, a named owner, a bounded tenant/domain scope, and evidence linked to the released artifact. A failed critical control, unresolved authority conflict, unreviewed privacy/security impact, or missing rollback/recovery route blocks activation.

## Dependencies

- `PILOT_DELIVERY_FACTORY`
- `SECURITY_QUESTIONNAIRE_LIBRARY`

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
