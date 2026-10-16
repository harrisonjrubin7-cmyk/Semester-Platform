# BOARD REPORTING

**Status:** Draft — review required; not implemented, tested, institution-authorized, or production-enabled.

- **Catalog category:** Business & operations
- **Proposed accountable owner:** Business operations lead + finance/customer delivery owners
- **Document purpose:** Provide accurate decision-oriented reporting and accountable follow-through.

## Decision boundary

This document describes a proposed operating/specification boundary. It does not transfer institutional record authority, alter product behavior, establish a contractual commitment, or certify compliance. Any tenant-specific rule, legal requirement, retention duration, accessibility claim, financial value, or service objective requires separately approved evidence.

## Proposed requirements

- Report product evidence states, customer delivery, cash scenarios, risks, incidents and required decisions.
- Distinguish actuals, contracted outcomes, forecasts and illustrative targets with dated sources.
- Protect student/customer confidential data through aggregation and least disclosure.
- Track board decisions, owners, deadlines and subsequent evidence; maintain approved version history.

## Proposed operating flow

Collect sourced inputs → reconcile finance/metrics → summarize risks and decisions → review → circulate authorized pack → track actions.

## Minimum record and audit fields

`report_period, evidence_cutoff, financial_scenarios, delivery_status, material_risks, decisions_requested, action_owner, due_date`

Implementers should add actor, timestamp, tenant scope, policy/version reference, correlation identifier, source/provenance reference, and authorization decision where applicable. Store only the minimum data necessary for the documented purpose.

## Acceptance criteria and activation gate

A designed feature is not reported as shipped; a forecast uses the same reconciled cash source as finance; restricted student details are excluded.

Activation requires the common package standard plus this document’s acceptance criteria, a named owner, a bounded tenant/domain scope, and evidence linked to the released artifact. A failed critical control, unresolved authority conflict, unreviewed privacy/security impact, or missing rollback/recovery route blocks activation.

## Dependencies

- `FINANCIAL_MODEL`
- `BUDGET_AND_RUNWAY`
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
