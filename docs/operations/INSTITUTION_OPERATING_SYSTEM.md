# Institution operating system

_Semester native operations · 2026-10-05 · Generated from ui_kits/native-ops/ops-data.js. Design-stage: nothing here is built until code, tests and release evidence exist. Code: handoff/semester-platform/supabase/migrations/100_controlled_actions.sql + tests/controlled-actions.test.ts._

Role-aware administration for each institution, tenant-scoped, on the same Education Graph and policy system — never a separate product with copied records.

## Executive Console

| Field | Value |
|---|---|
| Users | President, provost, cabinet |
| Controls | Institutional health, enrollment, retention, academic outcomes, risk, strategic initiatives, service performance |
| Route | `/app/institution/:tenantSlug/overview` |
| Priority | P0 |
| Owner | Institution super-admin |
| Screens | Health overview, Enrollment & retention (verified metrics only), Outcomes, Risk summary, Initiatives, Service performance |
| Controlled actions | Publish a metric to cabinet |
| Built so far | ../../templates/institution-os/InstitutionOs.dc.html |

## Academic Operations Console

| Field | Value |
|---|---|
| Users | Registrar, academic affairs, department admins |
| Controls | Catalog, courses, terms, sections, capacity, prerequisites, enrollment, grading, degree progress, graduation |
| Route | `/app/institution/:tenantSlug/academic-operations` |
| Priority | P1 |
| Owner | Academic affairs operator |
| Screens | Catalog, Terms, Sections & capacity, Prerequisite rules, Curricular approvals, Degree requirement rules, Graduation clearance |
| Controlled actions | Change a degree requirement rule; Publish catalog year |
| Built so far | — |

## Registrar Console

| Field | Value |
|---|---|
| Users | Registrar, registrar staff |
| Controls | Registration readiness, holds, overrides, enrollment changes, record corrections, reconciliation |
| Route | `/app/institution/:tenantSlug/registrar` |
| Priority | P0 |
| Owner | Registrar |
| Screens | Registration readiness, Holds by office, Overrides, Reconciliation queue, Record correction proposals, Time tickets |
| Controlled actions | Bulk override; Record correction; Switch SIS sync to authoritative |
| Built so far | ../console/index.html |

## Faculty / Teaching Console

| Field | Value |
|---|---|
| Users | Faculty, chairs, teaching teams |
| Controls | Courses, students, objectives, accommodations, assessments, workload, course outcomes, grade release |
| Route | `/app/institution/:tenantSlug/teaching` |
| Priority | P1 |
| Owner | Faculty |
| Screens | My courses, Teaching team & delegations, Accommodations, Assessment windows, Grade release, Course AI rules, Course outcomes |
| Controlled actions | Release grades; Activate AI tools for a course |
| Built so far | — |

## Student Success Console

| Field | Value |
|---|---|
| Users | Advisors, coaches, support teams |
| Controls | Caseloads, plans, alerts, referrals, appointments, outreach, support quality, persistence signals |
| Route | `/app/institution/:tenantSlug/student-success` |
| Priority | P0 |
| Owner | Advisor |
| Screens | Caseload, Alerts with reasons, Referrals, Appointments, Outreach campaigns, Intervention tracking, Support quality |
| Controlled actions | Send cohort outreach (>200 students) |
| Built so far | ../staff/index.html |

## Student Accounts Console

| Field | Value |
|---|---|
| Users | Student accounts, bursar |
| Controls | Charges, credits, statements, payment plans, holds, refunds, reconciliation, aid hand-offs |
| Route | `/app/institution/:tenantSlug/student-accounts` |
| Priority | P1 |
| Owner | Student accounts operator |
| Screens | Account search (scoped), Charges & credits, Payment plans, Financial holds, Refunds, Reconciliation, Aid hand-offs |
| Controlled actions | Credit or refund over threshold; Place/release financial hold |
| Built so far | ../native-finance/index.html |

## Campus Services Console

| Field | Value |
|---|---|
| Users | Housing, dining, library, recreation, events |
| Controls | Service catalog, eligibility, capacity, bookings, service cases, demand |
| Route | `/app/institution/:tenantSlug/campus-services` |
| Priority | P1 |
| Owner | Campus-services operator |
| Screens | Service catalog, Eligibility rules, Capacity, Bookings, Service cases, Communications, Demand |
| Controlled actions | Campus-wide communication |
| Built so far | — |

## Community & Safety Console

| Field | Value |
|---|---|
| Users | Moderators, organization staff, safety teams |
| Controls | Communities, events, moderation, reports, appeals, escalations, restrictions |
| Route | `/app/institution/:tenantSlug/community-safety` |
| Priority | P1 |
| Owner | Student affairs / moderator |
| Screens | Moderation queue, Reports, Appeals, Restrictions, Escalations, Organizations, Community health |
| Controlled actions | Suspend a member; Turn a community feature off |
| Built so far | ../ops/index.html |

## Career / Alumni / Employer Console

| Field | Value |
|---|---|
| Users | Career teams, employer relations, alumni office |
| Controls | Jobs, internships, employer accounts, applications, mentoring, outcomes, alumni engagement |
| Route | `/app/institution/:tenantSlug/career` |
| Priority | P1 |
| Owner | Career staff |
| Screens | Employer verification, Postings, Applications, Mentoring, Career events, Outcomes (aggregate), Alumni |
| Controlled actions | Verify an employer |
| Built so far | — |

## IT / Identity Console

| Field | Value |
|---|---|
| Users | CIO, IT admins, security |
| Controls | SSO, SCIM, memberships, roles, sessions, integrations, access reviews, provisioning |
| Route | `/app/institution/:tenantSlug/it-identity` |
| Priority | P0 |
| Owner | Institution super-admin |
| Screens | SSO, SCIM, Memberships, Role mapping, Sessions & devices, Service accounts, Access reviews |
| Controlled actions | Enforce SSO; Change role mapping; Grant elevated support access |
| Built so far | ../console/index.html |

## Governance & Trust Console

| Field | Value |
|---|---|
| Users | Privacy, security, compliance, legal |
| Controls | Classification, consent, retention, legal holds, subject requests, AI policy, controls, incidents, evidence |
| Route | `/app/institution/:tenantSlug/governance` |
| Priority | P1 |
| Owner | Security/privacy officer |
| Screens | Data classification, Consent policies, Retention schedules, Legal holds, Subject requests, AI policy & approved sources, Evidence, Incident notices |
| Controlled actions | Change a retention policy; Place/lift legal hold; Activate AI tools institution-wide |
| Built so far | ../../templates/privacy-center/PrivacyCenter.dc.html |

## Implementation Console

| Field | Value |
|---|---|
| Users | Institution project team + Semester implementation |
| Controls | Tenant activation, migration status, data quality, configuration, training, launch gate, adoption |
| Route | `/app/institution/:tenantSlug/implementation` |
| Priority | P0 |
| Owner | Semester implementation operator |
| Screens | Launch plan, Configuration checklist, Data quality, Migration status, Training, Launch gate, Adoption |
| Controlled actions | Enable a module; Pass launch gate |
| Built so far | ../../templates/finish-line/FinishLine.dc.html |

## Institution Command Center

| Field | Value |
|---|---|
| Users | Authorized institutional operators |
| Controls | Cross-domain work queue, approvals, exceptions, incidents, risk, service health |
| Route | `/app/institution/:tenantSlug/command` |
| Priority | P0 |
| Owner | Institution super-admin |
| Screens | Work queue, Approvals, Exceptions, Incidents, Risk, Service health |
| Controlled actions | Approve any queued high-impact action |
| Built so far | ../../templates/command-center/CommandCenter.dc.html |

## Every console must be

- Native to Semester
- Canonical data models
- Tenant-isolated
- Capability-gated
- Policy-aware
- Consent-aware
- Audit-ready
- Source/authority/freshness-aware
- Accessible
- Responsive
- Monitored
- Tested
- Documented
- Supportable
- Reversible for high-impact changes

## Per domain, create or reconcile

Product model · screen catalog · data model · role/capability matrix · tenant-isolation plan · workflow catalog · approvals · policy controls · consent controls · audit events · source/authority/freshness · security/privacy/accessibility review · monitoring/SLO · support/escalation · migration/rollback · tests · release gate · operating owner · commercial and customer-success impact.
