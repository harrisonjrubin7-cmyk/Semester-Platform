# AI EVALUATION HARNESS

**Status:** Draft — review required; not implemented, tested, institution-authorized, or production-enabled.

- **Catalog category:** AI
- **Proposed accountable owner:** AI engineering lead + security/privacy reviewers
- **Document purpose:** Make AI quality and safety claims reproducible before activation.

## Decision boundary

This document describes a proposed operating/specification boundary. It does not transfer institutional record authority, alter product behavior, establish a contractual commitment, or certify compliance. Any tenant-specific rule, legal requirement, retention duration, accessibility claim, financial value, or service objective requires separately approved evidence.

## Proposed requirements

- Maintain versioned synthetic or authorized test sets for citation accuracy, policy compliance, privacy, bias and tool safety.
- Pin model, prompts, retrieval corpus, routing policy and scoring rubric per run.
- Set numeric pass thresholds only after risk-owner approval; critical leakage or unauthorized-action cases require zero observed failures.
- Include human grading, repeated stochastic trials and regression comparison; store failures and remediation.

## Proposed operating flow

Define risk cases → version dataset → run candidate → score with human review → compare baseline → block or approve release.

## Minimum record and audit fields

`run_id, dataset_version, model_version, prompt_version, policy_version, metrics, critical_failures, reviewer, evidence_hash`

Implementers should add actor, timestamp, tenant scope, policy/version reference, correlation identifier, source/provenance reference, and authorization decision where applicable. Store only the minimum data necessary for the documented purpose.

## Acceptance criteria and activation gate

A model update with an unauthorized action fails the gate regardless of average quality; evaluation reruns preserve full configuration.

Activation requires the common package standard plus this document’s acceptance criteria, a named owner, a bounded tenant/domain scope, and evidence linked to the released artifact. A failed critical control, unresolved authority conflict, unreviewed privacy/security impact, or missing rollback/recovery route blocks activation.

## Dependencies

- `AI_RED_TEAM_PLAN`
- `TEST_STRATEGY`
- `RELEASE_POLICY`

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
