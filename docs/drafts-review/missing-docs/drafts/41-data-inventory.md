# DATA INVENTORY

**Status:** Draft — review required; not implemented, tested, institution-authorized, or production-enabled.

- **Catalog category:** Trust & compliance
- **Proposed accountable owner:** Security/privacy lead + qualified institutional/legal reviewers
- **Document purpose:** Maintain a living inventory covering primary and derived data.

## Decision boundary

This document describes a proposed operating/specification boundary. It does not transfer institutional record authority, alter product behavior, establish a contractual commitment, or certify compliance. Any tenant-specific rule, legal requirement, retention duration, accessibility claim, financial value, or service objective requires separately approved evidence.

## Proposed requirements

- Inventory databases, object stores, caches, search indexes, logs, backups, exports and vendor-held copies.
- Map purpose, owner, tenant scope, classification, source authority and flows for each asset.
- Link retention, deletion, recovery, contracts and access rules; stale or ownerless assets cannot be activated.
- Reconcile inventory against deployment/configuration changes and periodically sample actual data flows.

## Proposed operating flow

Discover asset → classify/map flows → assign owner → link controls → verify runtime scope → review changes.

## Minimum record and audit fields

`asset_id, system, location, tenant_scope, owner, purpose, classes, flows, suppliers, retention_id, deletion_method`

Implementers should add actor, timestamp, tenant scope, policy/version reference, correlation identifier, source/provenance reference, and authorization decision where applicable. Store only the minimum data necessary for the documented purpose.

## Acceptance criteria and activation gate

A newly deployed search index is blocked from production until its owner, class and deletion behavior are registered.

Activation requires the common package standard plus this document’s acceptance criteria, a named owner, a bounded tenant/domain scope, and evidence linked to the released artifact. A failed critical control, unresolved authority conflict, unreviewed privacy/security impact, or missing rollback/recovery route blocks activation.

## Dependencies

- `DATA_CLASSIFICATION`
- `OBSERVABILITY`
- `VENDOR_RISK`

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
