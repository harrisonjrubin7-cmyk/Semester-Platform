# BUDGET AND RUNWAY

**Status:** Draft — review required; not implemented, tested, institution-authorized, or production-enabled.

- **Catalog category:** Business & operations
- **Proposed accountable owner:** Business operations lead + finance/customer delivery owners
- **Document purpose:** Control spending and cash forecasts with clear approvals.

## Decision boundary

This document describes a proposed operating/specification boundary. It does not transfer institutional record authority, alter product behavior, establish a contractual commitment, or certify compliance. Any tenant-specific rule, legal requirement, retention duration, accessibility claim, financial value, or service objective requires separately approved evidence.

## Proposed requirements

- Use reconciled opening cash, expected receipts, payroll, commitments, liabilities and reserves.
- Separate accrual expense from cash movement and show forecast uncertainty.
- Assign budget owners, approval limits and exception handling; expensive new obligations need explicit authorization.
- Run downside scenarios and contingency decisions; runway is scenario-specific and not asserted without sourced balances.

## Proposed operating flow

Reconcile cash → schedule receipts/payments → forecast monthly balances → identify breach → approve mitigation → compare actuals.

## Minimum record and audit fields

`period, cash_open, receipts, payments, restricted_cash, committed_spend, cash_close, scenario, approver`

Implementers should add actor, timestamp, tenant scope, policy/version reference, correlation identifier, source/provenance reference, and authorization decision where applicable. Store only the minimum data necessary for the documented purpose.

## Acceptance criteria and activation gate

Changing collection dates moves the projected cash shortfall; restricted cash is not counted as freely spendable runway.

Activation requires the common package standard plus this document’s acceptance criteria, a named owner, a bounded tenant/domain scope, and evidence linked to the released artifact. A failed critical control, unresolved authority conflict, unreviewed privacy/security impact, or missing rollback/recovery route blocks activation.

## Dependencies

- `FINANCIAL_MODEL`
- `BOARD_REPORTING`

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
