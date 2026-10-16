# ONEROSTER IMPLEMENTATION

**Status:** Draft — review required; not implemented, tested, institution-authorized, or production-enabled.

- **Catalog category:** Integration & migration
- **Proposed accountable owner:** Integration engineering lead + institutional system owner
- **Document purpose:** Specify institution-selected OneRoster 1.2 exchange profiles.

## Decision boundary

This document describes a proposed operating/specification boundary. It does not transfer institutional record authority, alter product behavior, establish a contractual commitment, or certify compliance. Any tenant-specific rule, legal requirement, retention duration, accessibility claim, financial value, or service objective requires separately approved evidence.

## Proposed requirements

- Declare selected rostering, resources or gradebook services and CSV or REST bindings independently.
- Map sourced identifiers, organizations, users, courses, classes and enrollments through canonical mappings.
- Stage bulk/delta imports and tombstones; missing data must not trigger deletion without the contracted semantics.
- Treat OneRoster as an exchange contract, not universal higher-education domain coverage or implicit write authority.

## Proposed operating flow

Agree service/binding profile → validate file/API → stage → map → reconcile → publish authorized projection.

## Minimum record and audit fields

`connector_id, service, binding, spec_version, sourced_id_map, batch_id, delta_watermark, tombstone_policy`

Implementers should add actor, timestamp, tenant scope, policy/version reference, correlation identifier, source/provenance reference, and authorization decision where applicable. Store only the minimum data necessary for the documented purpose.

## Acceptance criteria and activation gate

A replayed CSV batch is idempotent; a removed enrollment follows the agreed deletion policy; grade writeback remains disabled unless authorized.

Activation requires the common package standard plus this document’s acceptance criteria, a named owner, a bounded tenant/domain scope, and evidence linked to the released artifact. A failed critical control, unresolved authority conflict, unreviewed privacy/security impact, or missing rollback/recovery route blocks activation.

## Dependencies

- `DATA_MAPPING_STANDARD`
- `RECONCILIATION_STANDARD`

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
