# INTEGRATION GOVERNANCE

**Status:** Draft — review required; not implemented, tested, institution-authorized, or production-enabled.

- **Catalog category:** Integration & migration
- **Proposed accountable owner:** Integration engineering lead + institutional system owner
- **Document purpose:** Control connector ownership, scopes and lifecycle.

## Decision boundary

This document describes a proposed operating/specification boundary. It does not transfer institutional record authority, alter product behavior, establish a contractual commitment, or certify compliance. Any tenant-specific rule, legal requirement, retention duration, accessibility claim, financial value, or service objective requires separately approved evidence.

## Proposed requirements

- Require a tenant sponsor, technical owner, purpose, data classes and direction before onboarding.
- Review contracts, credentials, rate limits, retention, monitoring and least-privilege scopes.
- Approve write operations separately and route high-impact actions through preview, approval and audit.
- Maintain expiry, schema-change review, incident isolation and offboarding plans.

## Proposed operating flow

Request integration → classify risk → approve scopes → test sandbox → activate flag → monitor → renew or offboard.

## Minimum record and audit fields

`integration_id, tenant_id, sponsor, owner, purpose, scopes, data_classes, write_authority, approval_expiry, offboarding_plan`

Implementers should add actor, timestamp, tenant scope, policy/version reference, correlation identifier, source/provenance reference, and authorization decision where applicable. Store only the minimum data necessary for the documented purpose.

## Acceptance criteria and activation gate

A connector cannot broaden scopes without review; a suspended tenant integration stops jobs and writeback without affecting other tenants.

Activation requires the common package standard plus this document’s acceptance criteria, a named owner, a bounded tenant/domain scope, and evidence linked to the released artifact. A failed critical control, unresolved authority conflict, unreviewed privacy/security impact, or missing rollback/recovery route blocks activation.

## Dependencies

- `VENDOR_RISK`
- `DOMAIN_AUTHORITY_MATRIX`
- `INTEGRATION_OFFBOARDING`

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
