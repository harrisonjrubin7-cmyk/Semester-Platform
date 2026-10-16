# SECURE SDLC

**Status:** Draft — review required; not implemented, tested, institution-authorized, or production-enabled.

- **Catalog category:** Engineering & reliability
- **Proposed accountable owner:** Engineering lead + SRE/security/accessibility reviewers
- **Document purpose:** Integrate security into delivery from specification to post-release maintenance.

## Decision boundary

This document describes a proposed operating/specification boundary. It does not transfer institutional record authority, alter product behavior, establish a contractual commitment, or certify compliance. Any tenant-specific rule, legal requirement, retention duration, accessibility claim, financial value, or service objective requires separately approved evidence.

## Proposed requirements

- Threat-model identity, tenant boundaries, source ingestion, AI tools and consequential commands before implementation.
- Use peer review, secret/dependency scanning, security testing and protected change controls.
- Track vulnerabilities by exploitability, impact, exposure and accountable remediation rather than unapproved universal SLA promises.
- Maintain dependency provenance, change evidence and exception expiry; run incident-driven regression tests.

## Proposed operating flow

Design review → implement → scan/test → security review → approve evidence → deploy bounded → monitor and patch.

## Minimum record and audit fields

`change_id, threat_model, dependencies, scan_results, vulnerabilities, remediation_owner, exception_expiry, approvals`

Implementers should add actor, timestamp, tenant scope, policy/version reference, correlation identifier, source/provenance reference, and authorization decision where applicable. Store only the minimum data necessary for the documented purpose.

## Acceptance criteria and activation gate

A committed secret blocks release and is rotated if exposed; a tenant-boundary vulnerability cannot be waived without explicit accountable risk review.

Activation requires the common package standard plus this document’s acceptance criteria, a named owner, a bounded tenant/domain scope, and evidence linked to the released artifact. A failed critical control, unresolved authority conflict, unreviewed privacy/security impact, or missing rollback/recovery route blocks activation.

## Dependencies

- `ENGINEERING_STANDARDS`
- `SECURITY`
- `TEST_STRATEGY`

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
