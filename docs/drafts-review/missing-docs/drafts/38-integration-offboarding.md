# INTEGRATION OFFBOARDING

**Status:** Draft — review required; not implemented, tested, institution-authorized, or production-enabled.

- **Catalog category:** Integration & migration
- **Proposed accountable owner:** Integration engineering lead + institutional system owner
- **Document purpose:** Disconnect institutional integrations without losing portability or leaving access active.

## Decision boundary

This document describes a proposed operating/specification boundary. It does not transfer institutional record authority, alter product behavior, establish a contractual commitment, or certify compliance. Any tenant-specific rule, legal requirement, retention duration, accessibility claim, financial value, or service objective requires separately approved evidence.

## Proposed requirements

- Inventory jobs, tokens, webhooks, derived indexes, exports and downstream dependencies.
- Provide approved portable exports with manifests and verify recipient access.
- Revoke credentials and subscriptions, stop workers and remove derived data subject to holds/retention.
- Document retained records, deletion evidence and customer acknowledgment; no forced lock-in.

## Proposed operating flow

Approve exit → export/validate → stop writes → revoke → purge eligible derivatives → verify → close.

## Minimum record and audit fields

`offboarding_id, integration_id, export_manifest, credential_revocations, retained_records, deletion_evidence, customer_ack`

Implementers should add actor, timestamp, tenant scope, policy/version reference, correlation identifier, source/provenance reference, and authorization decision where applicable. Store only the minimum data necessary for the documented purpose.

## Acceptance criteria and activation gate

Revoked credentials cannot resume jobs; a late webhook is denied; a legal hold preserves only in-scope records and does not keep operational access active.

Activation requires the common package standard plus this document’s acceptance criteria, a named owner, a bounded tenant/domain scope, and evidence linked to the released artifact. A failed critical control, unresolved authority conflict, unreviewed privacy/security impact, or missing rollback/recovery route blocks activation.

## Dependencies

- `DATA_RETENTION`
- `LEGAL_HOLDS`
- `DATA_INVENTORY`

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
