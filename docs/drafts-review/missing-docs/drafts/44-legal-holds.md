# LEGAL HOLDS

**Status:** Draft — review required; not implemented, tested, institution-authorized, or production-enabled.

- **Catalog category:** Trust & compliance
- **Proposed accountable owner:** Security/privacy lead + qualified institutional/legal reviewers
- **Document purpose:** Preserve narrowly scoped evidence under authorized legal direction.

## Decision boundary

This document describes a proposed operating/specification boundary. It does not transfer institutional record authority, alter product behavior, establish a contractual commitment, or certify compliance. Any tenant-specific rule, legal requirement, retention duration, accessibility claim, financial value, or service objective requires separately approved evidence.

## Proposed requirements

- Counsel or designated authority approves scope, basis, custodians and review intervals.
- Suspend deletion only for covered records and track derived or exported copies.
- Restrict hold disclosure and prevent use as justification for unrelated operational access.
- Release only on approved instruction, then re-evaluate normal retention and preserve disposition evidence.

## Proposed operating flow

Receive instruction → validate authority → identify scope → freeze eligible deletion → verify preservation → review → release.

## Minimum record and audit fields

`hold_id, authority, scope_query_version, custodians, preserved_asset_refs, start_at, review_due, release_approval`

Implementers should add actor, timestamp, tenant scope, policy/version reference, correlation identifier, source/provenance reference, and authorization decision where applicable. Store only the minimum data necessary for the documented purpose.

## Acceptance criteria and activation gate

A hold on one case does not freeze all student data; releasing a hold requeues already-expired covered records for approved deletion.

Activation requires the common package standard plus this document’s acceptance criteria, a named owner, a bounded tenant/domain scope, and evidence linked to the released artifact. A failed critical control, unresolved authority conflict, unreviewed privacy/security impact, or missing rollback/recovery route blocks activation.

## Dependencies

- `DATA_RETENTION`
- `PRIVACY`
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
