# FINANCIAL MODEL

**Status:** Draft — review required; not implemented, tested, institution-authorized, or production-enabled.

- **Catalog category:** Business & operations
- **Proposed accountable owner:** Business operations lead + finance/customer delivery owners
- **Document purpose:** Define a transparent driver-based model without inventing revenue or pricing.

## Decision boundary

This document describes a proposed operating/specification boundary. It does not transfer institutional record authority, alter product behavior, establish a contractual commitment, or certify compliance. Any tenant-specific rule, legal requirement, retention duration, accessibility claim, financial value, or service objective requires separately approved evidence.

## Proposed requirements

- Separate institutional contracts, individual offerings and implementation services; classify actual, contracted, forecast and illustrative inputs.
- Model seats/tenants, activation timing, discounts, revenue recognition assumptions, payment timing and churn separately.
- Include infrastructure, AI usage, support, implementation, staffing and supplier costs with volume-sensitive drivers.
- Use base/downside/upside scenarios and finance-reviewed accounting treatment; do not populate unsourced numbers.

## Proposed operating flow

Gather sourced inputs → define drivers → calculate monthly revenue/cost/cash → stress assumptions → review → approve forecast.

## Minimum record and audit fields

`period, scenario, input_source, contracted_value, recognized_revenue, collected_cash, usage_cost, staffing_cost, assumptions`

Implementers should add actor, timestamp, tenant scope, policy/version reference, correlation identifier, source/provenance reference, and authorization decision where applicable. Store only the minimum data necessary for the documented purpose.

## Acceptance criteria and activation gate

A delayed collection changes cash but not automatically the same month's recognized revenue; unknown pricing remains blank rather than an invented actual.

Activation requires the common package standard plus this document’s acceptance criteria, a named owner, a bounded tenant/domain scope, and evidence linked to the released artifact. A failed critical control, unresolved authority conflict, unreviewed privacy/security impact, or missing rollback/recovery route blocks activation.

## Dependencies

- `BUDGET_AND_RUNWAY`
- `KPI_TREE`
- `AI_SPEND_AND_QUOTA_POLICY`

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
