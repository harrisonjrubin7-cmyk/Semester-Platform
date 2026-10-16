# CONNECT REPLACE OPERATE STRATEGY

**Status:** Draft — review required; not implemented, tested, institution-authorized, or production-enabled.

- **Catalog category:** Product & architecture
- **Proposed accountable owner:** Product lead + platform architect
- **Document purpose:** Provide one operating method for integrations, native replacement and sustained service.

## Decision boundary

This document describes a proposed operating/specification boundary. It does not transfer institutional record authority, alter product behavior, establish a contractual commitment, or certify compliance. Any tenant-specific rule, legal requirement, retention duration, accessibility claim, financial value, or service objective requires separately approved evidence.

## Proposed requirements

- Connect through narrow scopes and canonical mappings while displaying source authority and freshness.
- Replace only where native workflows, data integrity and institutional authorization are demonstrated.
- Operate with named support, monitoring, recovery and renewal owners after activation.
- Maintain portable exports and a documented exit route throughout all stages.

## Proposed operating flow

Connect sandbox → validate data → operate coexistence → assess replacement evidence → transfer approved domain → operate with recurring reviews.

## Minimum record and audit fields

`domain, stage, source_authority, integration_owner, release_evidence, support_owner, exit_plan`

Implementers should add actor, timestamp, tenant scope, policy/version reference, correlation identifier, source/provenance reference, and authorization decision where applicable. Store only the minimum data necessary for the documented purpose.

## Acceptance criteria and activation gate

A pilot can remain in connected mode without forced migration; replacement is blocked when recovery or institution approval is missing.

Activation requires the common package standard plus this document’s acceptance criteria, a named owner, a bounded tenant/domain scope, and evidence linked to the released artifact. A failed critical control, unresolved authority conflict, unreviewed privacy/security impact, or missing rollback/recovery route blocks activation.

## Dependencies

- `DOMAIN_REPLACEMENT_MATRIX`
- `INTEGRATION_GOVERNANCE`
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
