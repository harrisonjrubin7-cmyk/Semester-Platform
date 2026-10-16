# ERROR BUDGET POLICY

**Status:** Draft — review required; not implemented, tested, institution-authorized, or production-enabled.

- **Catalog category:** Engineering & reliability
- **Proposed accountable owner:** Engineering lead + SRE/security/accessibility reviewers
- **Document purpose:** Use reliability evidence to govern release pace and remediation.

## Decision boundary

This document describes a proposed operating/specification boundary. It does not transfer institutional record authority, alter product behavior, establish a contractual commitment, or certify compliance. Any tenant-specific rule, legal requirement, retention duration, accessibility claim, financial value, or service objective requires separately approved evidence.

## Proposed requirements

- Derive budgets from approved SLOs and their exact measurement windows.
- Track consumption and burn rates; define reviewed thresholds and planned responses.
- Pause risky changes when budgets are exhausted while allowing reviewed security/reliability fixes.
- Do not spend a reliability budget to justify privacy breaches or record-integrity failures; those require independent incident handling.

## Proposed operating flow

Compute SLI → calculate budget consumption → assess burn → trigger review → limit changes/remediate → resume with evidence.

## Minimum record and audit fields

`service_id, SLO_version, allowed_bad_events, observed_bad_events, budget_remaining, burn_rate, release_restriction, approver`

Implementers should add actor, timestamp, tenant scope, policy/version reference, correlation identifier, source/provenance reference, and authorization decision where applicable. Store only the minimum data necessary for the documented purpose.

## Acceptance criteria and activation gate

Budget exhaustion blocks routine risk-increasing release; a privacy incident triggers response even when availability budget is healthy.

Activation requires the common package standard plus this document’s acceptance criteria, a named owner, a bounded tenant/domain scope, and evidence linked to the released artifact. A failed critical control, unresolved authority conflict, unreviewed privacy/security impact, or missing rollback/recovery route blocks activation.

## Dependencies

- `SLO_POLICY`
- `RELEASE_POLICY`
- `INCIDENT_RESPONSE`

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
