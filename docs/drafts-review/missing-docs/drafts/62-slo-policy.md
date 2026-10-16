# SLO POLICY

**Status:** Draft — review required; not implemented, tested, institution-authorized, or production-enabled.

- **Catalog category:** Engineering & reliability
- **Proposed accountable owner:** Engineering lead + SRE/security/accessibility reviewers
- **Document purpose:** Define service objectives for complete student and institutional journeys.

## Decision boundary

This document describes a proposed operating/specification boundary. It does not transfer institutional record authority, alter product behavior, establish a contractual commitment, or certify compliance. Any tenant-specific rule, legal requirement, retention duration, accessibility claim, financial value, or service objective requires separately approved evidence.

## Proposed requirements

- Choose SLIs for availability, latency, freshness, correctness and successful authoritative completion.
- Define denominators, exclusions, measurement windows and maintenance treatment explicitly.
- Set numeric objectives only after baseline and institutional/business approval; examples must be labeled illustrative.
- Include dependency failures in the appropriate user-journey view; establish alerts, owners and runbooks.

## Proposed operating flow

Map journey → define SLI → measure baseline → propose objective → approve → monitor → review breach.

## Minimum record and audit fields

`service_id, journey, SLI_formula, window, exclusions, proposed_target, approved_target, owner, alert, runbook`

Implementers should add actor, timestamp, tenant scope, policy/version reference, correlation identifier, source/provenance reference, and authorization decision where applicable. Store only the minimum data necessary for the documented purpose.

## Acceptance criteria and activation gate

A registration receipt timeout counts as incomplete even when the local API returns success; unapproved target values are not marketed as commitments.

Activation requires the common package standard plus this document’s acceptance criteria, a named owner, a bounded tenant/domain scope, and evidence linked to the released artifact. A failed critical control, unresolved authority conflict, unreviewed privacy/security impact, or missing rollback/recovery route blocks activation.

## Dependencies

- `OBSERVABILITY`
- `ERROR_BUDGET_POLICY`
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
