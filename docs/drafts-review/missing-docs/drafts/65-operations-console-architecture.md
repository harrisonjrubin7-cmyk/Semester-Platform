# OPERATIONS CONSOLE ARCHITECTURE

**Status:** Draft — review required; not implemented, tested, institution-authorized, or production-enabled.

- **Catalog category:** Engineering & reliability
- **Proposed accountable owner:** Engineering lead + SRE/security/accessibility reviewers
- **Document purpose:** Provide safe institutional and company operations without privileged bypasses.

## Decision boundary

This document describes a proposed operating/specification boundary. It does not transfer institutional record authority, alter product behavior, establish a contractual commitment, or certify compliance. Any tenant-specific rule, legal requirement, retention duration, accessibility claim, financial value, or service objective requires separately approved evidence.

## Proposed requirements

- Separate tenant administration from company operations; company roles cannot browse student records by default.
- Check tenant and capability on every query, export, storage call and command server-side.
- Use request/review/approve/execute states for high-impact actions with scoped preview, audit and replay protection.
- Display source/authority/freshness, six UI states and recovery paths; exceptional access must be institution-approved, bounded and audited.

## Proposed operating flow

Select authorized context → inspect sanitized status → preview action → independent approval where required → execute → reconcile → audit.

## Minimum record and audit fields

`action_id, tenant_id, actor, capability, exact_target, preview_hash, approval, expiry, execution_receipt, reconciliation`

Implementers should add actor, timestamp, tenant scope, policy/version reference, correlation identifier, source/provenance reference, and authorization decision where applicable. Store only the minimum data necessary for the documented purpose.

## Acceptance criteria and activation gate

Changing an approved target invalidates approval; a company-support role cannot export a tenant roster; duplicate execution creates one effect.

Activation requires the common package standard plus this document’s acceptance criteria, a named owner, a bounded tenant/domain scope, and evidence linked to the released artifact. A failed critical control, unresolved authority conflict, unreviewed privacy/security impact, or missing rollback/recovery route blocks activation.

## Dependencies

- `DOMAIN_AUTHORITY_MATRIX`
- `RELEASE_POLICY`
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
