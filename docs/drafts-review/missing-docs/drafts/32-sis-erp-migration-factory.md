# SIS ERP MIGRATION FACTORY

**Status:** Draft — review required; not implemented, tested, institution-authorized, or production-enabled.

- **Catalog category:** Integration & migration
- **Proposed accountable owner:** Integration engineering lead + institutional system owner
- **Document purpose:** Create a repeatable evidence-driven migration delivery process.

## Decision boundary

This document describes a proposed operating/specification boundary. It does not transfer institutional record authority, alter product behavior, establish a contractual commitment, or certify compliance. Any tenant-specific rule, legal requirement, retention duration, accessibility claim, financial value, or service objective requires separately approved evidence.

## Proposed requirements

- Inventory source systems, domains, consumers, constraints, historical depth and institutional authority.
- Produce extraction manifests, deterministic mappings, validation rules and exception ownership.
- Use synthetic then authorized sandbox rehearsals, full reconciliation and institution-approved freeze windows.
- Separate academic, finance and services cutovers; no universal big-bang requirement or untested recovery promise.

## Proposed operating flow

Discover → profile → map → rehearse → reconcile → train/support → dual-run → authorize cutover → stabilize → archive.

## Minimum record and audit fields

`migration_id, domain, source_inventory, extract_manifest, mapping_version, exception_register, rehearsal_reports, signoffs`

Implementers should add actor, timestamp, tenant scope, policy/version reference, correlation identifier, source/provenance reference, and authorization decision where applicable. Store only the minimum data necessary for the documented purpose.

## Acceptance criteria and activation gate

A missing historical term or unresolved critical mismatch blocks the domain cutover; each rehearsal is repeatable from its manifest.

Activation requires the common package standard plus this document’s acceptance criteria, a named owner, a bounded tenant/domain scope, and evidence linked to the released artifact. A failed critical control, unresolved authority conflict, unreviewed privacy/security impact, or missing rollback/recovery route blocks activation.

## Dependencies

- `DATA_MAPPING_STANDARD`
- `DUAL_RUN_AND_CUTOVER`
- `ROLLBACK_STANDARD`

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
