# SECURITY

**Status:** Draft — review required; not implemented, tested, institution-authorized, or production-enabled.

- **Catalog category:** Trust & compliance
- **Proposed accountable owner:** Security/privacy lead + qualified institutional/legal reviewers
- **Document purpose:** Set the baseline security program and control ownership.

## Decision boundary

This document describes a proposed operating/specification boundary. It does not transfer institutional record authority, alter product behavior, establish a contractual commitment, or certify compliance. Any tenant-specific rule, legal requirement, retention duration, accessibility claim, financial value, or service objective requires separately approved evidence.

## Proposed requirements

- Require tenant isolation and server-side capabilities on database, storage, search, jobs and exports.
- Use least privilege, strong authentication for privileged access, environment separation and server-only secrets.
- Threat-model sensitive workflows and high-impact actions; manage vulnerabilities and supplier risks through accountable remediation.
- Maintain control evidence, incident readiness and restore testing; no certification claims without independent evidence.

## Proposed operating flow

Inventory assets → assess threats → assign controls → implement/test → review evidence → remediate → approve scoped release.

## Minimum record and audit fields

`control_id, asset, risk, owner, implementation_ref, test_evidence, reviewer, exception, review_due`

Implementers should add actor, timestamp, tenant scope, policy/version reference, correlation identifier, source/provenance reference, and authorization decision where applicable. Store only the minimum data necessary for the documented purpose.

## Acceptance criteria and activation gate

Cross-tenant negative tests fail closed across all interfaces; a browser bundle contains no server credentials; unresolved critical risks block activation.

Activation requires the common package standard plus this document’s acceptance criteria, a named owner, a bounded tenant/domain scope, and evidence linked to the released artifact. A failed critical control, unresolved authority conflict, unreviewed privacy/security impact, or missing rollback/recovery route blocks activation.

## Dependencies

- `SECURE_SDLC`
- `TEST_STRATEGY`
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
