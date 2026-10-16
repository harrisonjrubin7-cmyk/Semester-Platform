# Semester company operating system

_Semester native operations · 2026-10-05 · Generated from ui_kits/native-ops/ops-data.js. Design-stage: nothing here is built until code, tests and release evidence exist. Code: handoff/semester-platform/supabase/migrations/100_controlled_actions.sql + tests/controlled-actions.test.ts._

Semester runs on itself, not on spreadsheets, Slack threads and undocumented approvals. Business data only; company roles never see student records.

## Corporate Governance

| Field | Value |
|---|---|
| Users | Founder/CEO, board |
| Controls | Entity and ownership, board and investors, resolutions, corporate calendar, insurance, IP, entity controls |
| Route | `/app/ops/board` |
| Priority | P1 |
| Owner | CEO |
| Screens | Entity & ownership, Board & investors, Resolutions, Corporate calendar, Insurance, IP records |
| Controlled actions | Board resolution |
| Built so far | ../business/index.html |

## Product / Engineering Operations

| Field | Value |
|---|---|
| Users | CPO, CTO, engineers |
| Controls | Strategy, roadmap, requirements, design system, delivery, flags, releases, rollouts, tech debt, reliability, capacity, evidence |
| Route | `/app/ops/releases` |
| Priority | P0 |
| Owner | Semester release operator |
| Screens | Roadmap, Requirements, Releases, Feature flags, Rollouts, Tech debt, Capacity, Product evidence |
| Controlled actions | Deploy a feature cohort; Roll back a release |
| Built so far | ../platform-maturity/index.html |

## Trust / Security / Privacy / Accessibility

| Field | Value |
|---|---|
| Users | Security lead, privacy, accessibility |
| Controls | Security and privacy programs, controls, vendor risk, AI governance, accessibility, trust center, questionnaires, incident command |
| Route | `/app/ops/trust` |
| Priority | P1 |
| Owner | Security/privacy officer |
| Screens | Controls & evidence, Vendor risk, AI governance, Accessibility program, Trust center, Questionnaires, Incident command |
| Controlled actions | Publish trust artifact; Declare / resolve incident |
| Built so far | ../compliance/index.html |

## Revenue Operations

| Field | Value |
|---|---|
| Users | CRO, RevOps |
| Controls | ICP, accounts, stakeholders, opportunities, pipeline, forecast, quotes, procurement, contracts, renewals, expansion, partners |
| Route | `/app/ops/customers` |
| Priority | P1 |
| Owner | Semester finance operator |
| Screens | Accounts, Stakeholders, Pipeline, Forecast, Quotes, Procurement, Renewals, Partners |
| Controlled actions | Pricing exception; Discount over 10% |
| Built so far | ../business/index.html |

## Customer Implementation / Success

| Field | Value |
|---|---|
| Users | CS, implementation |
| Controls | Pilot design, implementation, activation, migration, training, adoption, support, health, QBRs, outcomes, references |
| Route | `/app/ops/implementations` |
| Priority | P0 |
| Owner | Semester implementation operator |
| Screens | Pilots, Implementations, Tenant activation, Migrations, Training, Health, QBRs, Outcome reporting |
| Controlled actions | Activate tenant; Publish pilot outcome |
| Built so far | ../ops/index.html |

## Finance Operations

| Field | Value |
|---|---|
| Users | CFO, finance |
| Controls | Products/plans/prices, billing accounts, quotes, subscriptions, invoices, collections, forecast, budget, cash, spend, cloud/AI cost, board reporting |
| Route | `/app/ops/finance` |
| Priority | P0 |
| Owner | Semester finance operator |
| Screens | Billing accounts, Invoices, Subscriptions, Collections, Reconciliation, Cash & runway, Cloud/AI cost, Board finance |
| Controlled actions | Issue large credit/refund; Write-off |
| Built so far | ../native-finance/index.html |

## Legal / Vendor Operations

| Field | Value |
|---|---|
| Users | Counsel (external), founder |
| Controls | Contract lifecycle, DPA/security exhibits, vendors, reviews, subprocessors, legal holds, policies, obligations |
| Route | `/app/ops/vendors` |
| Priority | P1 |
| Owner | CEO |
| Screens | Contracts, DPA workflow, Vendors, Vendor reviews, Subprocessor register, Legal holds, Policy library, Obligations |
| Controlled actions | Add a subprocessor (30-day notice) |
| Built so far | ../compliance/index.html |

## People Operations

| Field | Value |
|---|---|
| Users | Founder, people lead |
| Controls | Org chart, workforce plan, hiring, onboarding, access lifecycle, equipment, comp/equity, performance, training, offboarding |
| Route | `/app/ops/people` |
| Priority | P1 |
| Owner | CEO |
| Screens | Org chart, Workforce plan, Hiring, Onboarding, Access lifecycle, Offboarding |
| Controlled actions | Grant production access; Offboard (revoke all) |
| Built so far | ../business/index.html |

## Operations Command Center

| Field | Value |
|---|---|
| Users | All Semester operators |
| Controls | Inbox, work, approvals, tenant/customer 360, pilots, support, health, renewals, releases, flags, integrations, security, privacy, access, incidents, SLOs, risk, vendors, finance, people, board |
| Route | `/app/ops` |
| Priority | P0 |
| Owner | COO |
| Screens | Executive overview, Operations inbox, My work, Approval center, Tenant 360, Customer 360, Support & escalation, Incident command, Reliability & SLOs, Access review & break-glass |
| Controlled actions | Any high-impact action |
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
