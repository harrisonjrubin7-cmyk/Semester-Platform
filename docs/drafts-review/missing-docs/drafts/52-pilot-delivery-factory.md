# PILOT DELIVERY FACTORY

**Status:** Draft — review required; not implemented, tested, institution-authorized, or production-enabled.

- **Catalog category:** Business & operations
- **Proposed accountable owner:** Business operations lead + finance/customer delivery owners
- **Document purpose:** Deliver bounded activation without narrowing the full platform design.

## Decision boundary

This document describes a proposed operating/specification boundary. It does not transfer institutional record authority, alter product behavior, establish a contractual commitment, or certify compliance. Any tenant-specific rule, legal requirement, retention duration, accessibility claim, financial value, or service objective requires separately approved evidence.

## Proposed requirements

- Agree tenant/domain scope, institutional sponsor, success criteria, data handling and exit path.
- Require configuration, policy approvals, sandbox integration, access tests, accessibility review and reconciled data.
- Train users and support owners, exercise rollback and verify monitoring before cohort activation.
- Measure results and harms with an explicit go/extend/stop decision; no automatic expansion of official authority.

## Proposed operating flow

Scope → configure → validate → train → rehearse → authorize cohort → monitor → evaluate → expand or exit.

## Minimum record and audit fields

`pilot_id, sponsor, cohort, domains, dependencies, approved_metrics, readiness_evidence, rollback_plan, decision`

Implementers should add actor, timestamp, tenant scope, policy/version reference, correlation identifier, source/provenance reference, and authorization decision where applicable. Store only the minimum data necessary for the documented purpose.

## Acceptance criteria and activation gate

A pilot with missing tenant-isolation evidence cannot launch; expansion to another domain requires its own authorization and readiness review.

Activation requires the common package standard plus this document’s acceptance criteria, a named owner, a bounded tenant/domain scope, and evidence linked to the released artifact. A failed critical control, unresolved authority conflict, unreviewed privacy/security impact, or missing rollback/recovery route blocks activation.

## Dependencies

- `RELEASE_POLICY`
- `DUAL_RUN_AND_CUTOVER`
- `CUSTOMER_SUCCESS_PLAYBOOK`

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
