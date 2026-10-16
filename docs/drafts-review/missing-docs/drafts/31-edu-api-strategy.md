# EDU API STRATEGY

**Status:** Draft — review required; not implemented, tested, institution-authorized, or production-enabled.

- **Catalog category:** Integration & migration
- **Proposed accountable owner:** Integration engineering lead + institutional system owner
- **Document purpose:** Plan a version-pinned higher-education interoperability adapter.

## Decision boundary

This document describes a proposed operating/specification boundary. It does not transfer institutional record authority, alter product behavior, establish a contractual commitment, or certify compliance. Any tenant-specific rule, legal requirement, retention duration, accessibility claim, financial value, or service objective requires separately approved evidence.

## Proposed requirements

- Evaluate the published Edu-API maturity and partner support at procurement and activation; never assume final status or certification.
- Separate canonical domain models from a standards adapter to tolerate specification changes.
- Document covered entities, direction, permissions, gaps and extension governance.
- Pilot read-only exchange first unless explicit institutional write authority and reconciliation evidence exist.

## Proposed operating flow

Assess partner/specification → pin contract → map entities → prototype sandbox → measure gaps → approve bounded integration.

## Minimum record and audit fields

`adapter_id, published_status_checked_at, specification_version, supported_entities, extensions, directions, partner_support`

Implementers should add actor, timestamp, tenant scope, policy/version reference, correlation identifier, source/provenance reference, and authorization decision where applicable. Store only the minimum data necessary for the documented purpose.

## Acceptance criteria and activation gate

An incompatible specification change cannot silently alter canonical records; unsupported entities are listed as gaps rather than fabricated mappings.

Activation requires the common package standard plus this document’s acceptance criteria, a named owner, a bounded tenant/domain scope, and evidence linked to the released artifact. A failed critical control, unresolved authority conflict, unreviewed privacy/security impact, or missing rollback/recovery route blocks activation.

## Dependencies

- `INTEROPERABILITY_AND_MIGRATION_STRATEGY`
- `DATA_MAPPING_STANDARD`

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
