# LTI IMPLEMENTATION

**Status:** Draft — review required; not implemented, tested, institution-authorized, or production-enabled.

- **Catalog category:** Integration & migration
- **Proposed accountable owner:** Integration engineering lead + institutional system owner
- **Document purpose:** Specify scoped LTI 1.3 and selected LTI Advantage interoperability.

## Decision boundary

This document describes a proposed operating/specification boundary. It does not transfer institutional record authority, alter product behavior, establish a contractual commitment, or certify compliance. Any tenant-specific rule, legal requirement, retention duration, accessibility claim, financial value, or service objective requires separately approved evidence.

## Proposed requirements

- Record whether Semester acts as tool or platform for each deployment; do not assume both roles are implemented.
- Validate registration, issuer, audience, signatures, deployment/context binding, state and nonce; prevent replay and unsafe redirect handling.
- Enable Deep Linking, Names and Role Provisioning and Assignment and Grade Services only when needed and separately authorized.
- Keep grade passback idempotent and reconciled; certification requires separate conformance evidence.

## Proposed operating flow

Register sandbox → validate launch security → bind tenant/context → grant selected service scopes → test writeback → authorize deployment.

## Minimum record and audit fields

`registration_id, role, issuer, client_id, deployment_id, jwks_reference, allowed_redirects, service_scopes, context_mapping`

Implementers should add actor, timestamp, tenant scope, policy/version reference, correlation identifier, source/provenance reference, and authorization decision where applicable. Store only the minimum data necessary for the documented purpose.

## Acceptance criteria and activation gate

A replayed or wrong-deployment launch is rejected; grade passback retries do not duplicate results; no conformance badge appears without verified certification.

Activation requires the common package standard plus this document’s acceptance criteria, a named owner, a bounded tenant/domain scope, and evidence linked to the released artifact. A failed critical control, unresolved authority conflict, unreviewed privacy/security impact, or missing rollback/recovery route blocks activation.

## Dependencies

- `INTEGRATION_GOVERNANCE`
- `ASSESSMENT_AND_GRADEBOOK_SPEC`
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
