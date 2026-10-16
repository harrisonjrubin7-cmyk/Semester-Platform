# Trust control and evidence register

**Status:** Priority draft; requires security, privacy, accessibility, legal, and institutional review before use.

## Purpose
Create one reviewable record for each trust control so Semester can distinguish a designed policy from an implemented, tested, and buyer-verifiable control.

## Required control record

| Field | Required content |
|---|---|
| Control ID and statement | Stable identifier and testable control objective |
| Scope | Tenant, service, environment, data class, and exclusions |
| Owner and reviewer | Accountable operational owner and independent reviewer |
| Policy and implementation | Policy version; code/configuration/infrastructure references |
| Evidence | Dated test, configuration, review, or drill artifact; evidence hash/link |
| Test and cadence | Test method, last result, next due date, and exception expiry |
| Customer claim | Approved wording and scope, or “no claim approved” |
| Remediation | Gap, severity, owner, due date, and verified closure |

## Priority control families

1. Tenant isolation and authorization, including RLS/capability denials for data, storage, search, exports, jobs, and APIs.
2. Identity, privileged access, joiner/mover/leaver, secrets, and environment separation.
3. Data inventory, classification, minimization, retention, deletion, legal holds, and rights operations.
4. Secure delivery, vulnerabilities, dependencies, releases, monitoring, incident response, backup/restore, BCP/DR.
5. Vendor and AI-provider assessment, contracts, scopes, ongoing review, and offboarding.
6. Accessibility review and remediation for complete user journeys.

## Gate
A control cannot be represented as implemented unless implementation evidence and a dated test exist. It cannot be represented as effective or production-ready until scope, owner, test cadence, exceptions, and release evidence are complete.
