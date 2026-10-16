# HECVAT ROADMAP

**Status:** Draft — review required; not implemented, tested, institution-authorized, or production-enabled.

- **Catalog category:** Trust & compliance
- **Proposed accountable owner:** Security/privacy lead + qualified institutional/legal reviewers
- **Document purpose:** Prepare evidence-backed higher-education vendor-risk responses.

## Decision boundary

This document describes a proposed operating/specification boundary. It does not transfer institutional record authority, alter product behavior, establish a contractual commitment, or certify compliance. Any tenant-specific rule, legal requirement, retention duration, accessibility claim, financial value, or service objective requires separately approved evidence.

## Proposed requirements

- Obtain the current official EDUCAUSE questionnaire at review time and record exact file version; do not rely on conflicting search patch numbers.
- Map each applicable question to controls, owners, evidence and exceptions, including AI/privacy/accessibility.
- Answer gaps honestly and distinguish planned, implemented and independently reviewed controls.
- Require security/legal review, dated evidence and scheduled refresh; questionnaire completion is not certification.

## Proposed operating flow

Retrieve official toolkit → scope applicability → map evidence → resolve gaps → review responses → share controlled copy → refresh.

## Minimum record and audit fields

`questionnaire_version, question_id, applicability, response, control_refs, evidence_date, owner, reviewer, exception`

Implementers should add actor, timestamp, tenant scope, policy/version reference, correlation identifier, source/provenance reference, and authorization decision where applicable. Store only the minimum data necessary for the documented purpose.

## Acceptance criteria and activation gate

A control without evidence is not answered as implemented; expired evidence is flagged before sharing with a prospective institution.

Activation requires the common package standard plus this document’s acceptance criteria, a named owner, a bounded tenant/domain scope, and evidence linked to the released artifact. A failed critical control, unresolved authority conflict, unreviewed privacy/security impact, or missing rollback/recovery route blocks activation.

## Dependencies

- `SECURITY_QUESTIONNAIRE_LIBRARY`
- `SECURITY`
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
