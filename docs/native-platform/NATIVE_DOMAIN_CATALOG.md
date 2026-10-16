# Native domain catalog

_Generated from ui_kits/native-platform/native-data.js, 2026-10-05. Design-stage: statuses are honest; nothing is "Native and verified" until repo code, tests and release evidence exist._

Every Semester domain with owner, authority, bridge and gate.

## A · Education Experience Platform

One experience layer, one navigation, one source/status vocabulary, with role-specific workspaces.

| Field | Value |
|---|---|
| Owner | Chief Product Officer |
| Users | Every role |
| Data authority | Derived (shows official data with its source) |
| Classification | Mixed — inherits from each record shown |
| Transition bridge | Campus portals, separate vendor apps |
| Authority gate | Each workspace is native the day its domain is |
| Reliability | Tier 1 |
| Status | Static prototype only |
| Revenue | Included in institutional license |
| Branch | `design/live-semester-token-and-shell` |
| Modules | 22 |

## A1 · Student OS

Open Semester → see current situation → understand next priority → take action → source-aware guidance → confirmation → track progress → return with more clarity.

| Field | Value |
|---|---|
| Owner | Chief Product Officer |
| Users | Student |
| Data authority | Derived + student-owned |
| Classification | Education record (shown) + student-owned |
| Transition bridge | Portal, LMS app, calendar, notes apps |
| Authority gate | Pilot: Today + Registration readiness accurate for 30 days against SIS |
| Reliability | Tier 1 |
| Status | Static prototype only |
| Revenue | License; Student Premium $8.99/mo |
| Branch | `feat/native-student-os-p0` |
| Modules | 26 |

## B · Academic and Learning Platform

Do not treat native course UI as the official gradebook until institutional gate criteria pass.

| Field | Value |
|---|---|
| Owner | Learning Systems Architect |
| Users | Faculty, Teaching assistant, Student, Instructional designer, Department chair |
| Data authority | Native for course content; LMS/SIS official for grades until gate |
| Classification | Education record (grades, submissions) |
| Transition bridge | Canvas, Brightspace, Moodle via LTI 1.3 + grade passback |
| Authority gate | Gradebook authoritative only after dual-run term, registrar sign-off, rollback drill |
| Reliability | Tier 1 (Tier 0 at exam windows) |
| Status | Designed/documented only |
| Revenue | License tier: Learning add-on |
| Branch | `feat/native-course-studio-learning-p1` |
| Modules | 36 |

## B1 · Course Studio

The faculty authoring surface. Catalogued, not yet built — top build priority after registration.

| Field | Value |
|---|---|
| Owner | Learning Systems Architect |
| Users | Faculty, Teaching assistant, Instructional designer |
| Data authority | Native (content); grades follow B gate |
| Classification | Education record (submissions, feedback) |
| Transition bridge | LMS course shell via LTI deep link |
| Authority gate | One full term run natively in pilot course with faculty sign-off |
| Reliability | Tier 1 |
| Status | Planned |
| Revenue | Learning add-on |
| Branch | `feat/native-course-studio-learning-p1` |
| Modules | 24 |

## B2 · Assessment Engine

| Field | Value |
|---|---|
| Owner | Learning Systems Architect |
| Users | Faculty, Teaching assistant, Accessibility services, Student |
| Data authority | Native attempt record; official grade per B gate |
| Classification | Education record |
| Transition bridge | LMS quiz engines, proctoring tools |
| Authority gate | Two terms without lost attempts; accommodation audit clean |
| Reliability | Tier 0 during exam windows |
| Status | Planned |
| Revenue | Learning add-on |
| Branch | `feat/native-course-studio-learning-p1` |
| Modules | 16 |

## C · Registrar, SIS and Academic Record Platform

End state is a native authoritative academic system. Every high-impact command: request → policy → capability → source → approval → idempotency → command → audit → receipt → projection.

| Field | Value |
|---|---|
| Owner | Registrar/SIS Architect |
| Users | Registrar, Registrar staff, Department scheduler, Advisor, Student |
| Data authority | SIS official until cutover; Semester mirrors with source labels |
| Classification | Education record (FERPA) |
| Transition bridge | Banner, Colleague, Workday Student, PeopleSoft via read feed |
| Authority gate | All 16 authority criteria, dual-run full registration cycle, institution cutover approval |
| Reliability | Tier 0 |
| Status | Designed/documented only |
| Revenue | Enterprise tier; migration services |
| Branch | `feat/native-registrar-academic-core-p2` |
| Modules | 39 |

## C1 · Academic Record Ledger

| Field | Value |
|---|---|
| Owner | Registrar/SIS Architect |
| Users | Registrar, Auditor |
| Data authority | Native only after cutover |
| Classification | Education record (FERPA), legal hold aware |
| Transition bridge | SIS academic history |
| Authority gate | Reconciled to SIS at 100% for two terms; independent audit |
| Reliability | Tier 0 |
| Status | Planned |
| Revenue | Enterprise tier |
| Branch | `feat/native-registrar-academic-core-p2` |
| Modules | 12 |

## D · Student Success and Support Platform

| Field | Value |
|---|---|
| Owner | Student Success Architect |
| Users | Advisor, Success coach, Support agent, Student, Department chair |
| Data authority | Native (notes, plans, cases) |
| Classification | Education record (advising notes) |
| Transition bridge | EAB Navigate, Starfish, ticketing tools |
| Authority gate | Advising office runs one term natively; notes export verified |
| Reliability | Tier 1 |
| Status | Static prototype only |
| Revenue | License tier: Success add-on |
| Branch | `feat/native-student-success-support-p1` |
| Modules | 24 |

## E · Productivity and Collaboration Platform

Education-specific equivalent of Workspace/365/Notion — linked to courses, plans and deadlines.

| Field | Value |
|---|---|
| Owner | Chief Product Officer |
| Users | Student, Faculty, Staff |
| Data authority | Student/staff-owned |
| Classification | User-owned content |
| Transition bridge | Google Workspace, Microsoft 365, Notion (import + connect) |
| Authority gate | Import from Google/Microsoft lossless; offline sync tested |
| Reliability | Tier 2 |
| Status | Designed/documented only |
| Revenue | Student Premium; institution license |
| Branch | `feat/native-student-os-p0` |
| Modules | 24 |

## F · AI and Intelligence Platform

AI can explain, summarize, plan, draft, search approved sources, suggest, route, automate low-risk work with permission. AI cannot issue grades, change records, enroll/drop, approve money, discipline, make clinical/safety decisions, disclose protected data or override policy.

| Field | Value |
|---|---|
| Owner | AI Governance Lead |
| Users | Student, Faculty, Advisor, Staff, Operator |
| Data authority | Never official — AI output is guidance |
| Classification | AI interaction (no student records in prompts) |
| Transition bridge | Model providers via gateway only |
| Authority gate | Red-team suite green, eval harness thresholds met, institution AI policy signed |
| Reliability | Tier 1 |
| Status | Native but incomplete |
| Revenue | Included quota; overage $30 / 1k requests |
| Branch | `feat/native-governed-ai-p1` |
| Modules | 34 |

## G · Campus Life and Services Platform

| Field | Value |
|---|---|
| Owner | Campus Services Architect |
| Users | Student, Campus services staff, Housing staff, Dining staff, Library staff |
| Data authority | Office systems official during transition |
| Classification | Directory + service records |
| Transition bridge | Housing, card, dining, booking and library systems |
| Authority gate | Per service: request volume handled natively one term |
| Reliability | Tier 2 (safety resources Tier 0 static) |
| Status | Static prototype only |
| Revenue | Campus add-on; partner fees |
| Branch | `feat/native-campus-community-career-p2` |
| Modules | 23 |

## H · Student Finance and Commerce Platform

Semester integrates with payment providers rather than holding raw card data or funds.

| Field | Value |
|---|---|
| Owner | Finance Systems Architect |
| Users | Student, Student accounts staff, Bursar, Family (with consent) |
| Data authority | Bursar/ERP official; payments via licensed processor |
| Classification | Financial record (no raw card data) |
| Transition bridge | ERP student accounts, payment processor |
| Authority gate | Ledger reconciles to ERP daily for a term; processor PCI scope signed off |
| Reliability | Tier 0 for payments |
| Status | Designed/documented only |
| Revenue | Finance add-on; payment-plan fees (processor) |
| Branch | `feat/native-family-finance-p2` |
| Modules | 20 |

## I · Career, Alumni, Employer and Lifelong Platform

| Field | Value |
|---|---|
| Owner | Chief Product Officer |
| Users | Student, Alumni, Career staff, Employer (external), Mentor |
| Data authority | Student-owned (portfolio); verified claims signed by institution |
| Classification | Student-owned + verified credentials |
| Transition bridge | Handshake, LinkedIn, credential wallets |
| Authority gate | Verified credential issuance passes standards test (Open Badges/CLR) |
| Reliability | Tier 2 |
| Status | Designed/documented only |
| Revenue | Employer subscriptions; alumni premium |
| Branch | `feat/native-campus-community-career-p2` |
| Modules | 23 |

## J · Community and Social Platform

| Field | Value |
|---|---|
| Owner | Trust & Safety lead |
| Users | Student, Organization leader, Moderator, Student affairs |
| Data authority | Native |
| Classification | User content (campus-verified) |
| Transition bridge | GroupMe, Discord, CampusGroups |
| Authority gate | Moderation SLAs met for a term; appeals audited |
| Reliability | Tier 2 |
| Status | Static prototype only |
| Revenue | Included; marketplace 12% take rate |
| Branch | `feat/native-campus-community-career-p2` |
| Modules | 22 |

## K · Family and Guardian Platform

| Field | Value |
|---|---|
| Owner | Privacy Engineer |
| Users | Student, Family member, Registrar (FERPA) |
| Data authority | Student consent is the authority |
| Classification | Consent records |
| Transition bridge | Paper FERPA release forms, parent portals |
| Authority gate | Consent revocation effective < 1 min; audit complete |
| Reliability | Tier 1 |
| Status | Designed/documented only |
| Revenue | Included |
| Branch | `feat/native-family-finance-p2` |
| Modules | 12 |

## L · Institutional Governance and Control Plane

| Field | Value |
|---|---|
| Owner | Principal Software Architect |
| Users | Institution admin, IT/identity, Data steward, Compliance officer |
| Data authority | Native (configuration is Semester-owned) |
| Classification | Configuration + audit |
| Transition bridge | Spreadsheets, IdP consoles |
| Authority gate | Two-admin rule, access review and audit explorer in use at pilot |
| Reliability | Tier 1 |
| Status | Static prototype only |
| Revenue | Included; enterprise multi-campus tier |
| Branch | `feat/native-institution-control-plane` |
| Modules | 37 |

## M · Integration and Migration Platform

Integrations are transition bridges — not the permanent product thesis.

| Field | Value |
|---|---|
| Owner | Platform Engineer |
| Users | Implementation engineer, IT/identity, Registrar |
| Data authority | Bridges are temporary |
| Classification | Configuration; data in flight inherits source class |
| Transition bridge | — (this domain is the bridge) |
| Authority gate | Per migration: dual-run, reconciliation 100%, rollback drill, retirement plan |
| Reliability | Tier 1 |
| Status | Designed/documented only |
| Revenue | Implementation $35k–$150k; migration services |
| Branch | `feat/native-integration-migration-factory` |
| Modules | 37 |

## N · Security, Privacy, Accessibility and Trust Platform

| Field | Value |
|---|---|
| Owner | Security Architect |
| Users | Security lead, Privacy engineer, Accessibility engineer, Compliance officer, Institution IT |
| Data authority | Native |
| Classification | Security evidence (confidential) |
| Transition bridge | Spreadsheets, GRC tools |
| Authority gate | HECVAT Full, pen test, insurance bound, ACR tested |
| Reliability | Tier 1 |
| Status | Designed/documented only |
| Revenue | Trust is a sales asset |
| Branch | `feat/native-trust-security-compliance` |
| Modules | 30 |

## O · Company Operating Platform

| Field | Value |
|---|---|
| Owner | Chief Operating Officer |
| Users | Founder/CEO, Finance, RevOps, Customer success, People |
| Data authority | Business data only — never student records |
| Classification | Confidential business |
| Transition bridge | Bank, accounting, CRM, payroll (embedded) |
| Authority gate | Monthly close and board pack produced from it |
| Reliability | Tier 2 |
| Status | Static prototype only |
| Revenue | Runs the company |
| Branch | `feat/native-company-gmt-customer-success` |
| Modules | 33 |

## P · Operations Command Center

| Field | Value |
|---|---|
| Owner | Chief Operating Officer |
| Users | Founder/CEO, Operators, Support, SRE, Finance |
| Data authority | Business + platform telemetry; no student records |
| Classification | Confidential business |
| Transition bridge | — |
| Authority gate | Every high-risk op runs request → evidence → approval → preview → execute → audit |
| Reliability | Tier 1 |
| Status | Static prototype only |
| Revenue | Runs the company |
| Branch | `feat/native-ops-command-center` |
| Modules | 52 |

## Q · Developer Platform and Marketplace

| Field | Value |
|---|---|
| Owner | Developer Platform Lead |
| Users | Developer, Partner, Institution IT, App reviewer |
| Data authority | Native |
| Classification | Configuration; partner data by scope |
| Transition bridge | — |
| Authority gate | Public API v1 stable, sandbox tenants, app review live |
| Reliability | Tier 1 |
| Status | Planned |
| Revenue | Partner revenue share; marketplace 12% |
| Branch | `feat/native-developer-marketplace-global` |
| Modules | 23 |

## R · Data, Graph and Intelligence Platform

Every node: canonical ID, tenant ID, owner, authority, source system, freshness, classification, consent scope, capability requirement, policy, version, audit history, retention, export, deletion, migration source, verification status.

| Field | Value |
|---|---|
| Owner | Data and Outcomes Lead |
| Users | Platform engineer, Data steward, Researcher (aggregates) |
| Data authority | Each node carries its own authority |
| Classification | Per node |
| Transition bridge | Warehouse exports |
| Authority gate | Every node has the 17 required fields enforced in schema |
| Reliability | Tier 0 (foundation) |
| Status | Native but incomplete |
| Revenue | Foundation |
| Branch | `feat/native-foundation-identity-policy-trust` |
| Modules | 40 |

## S · Technical Stack

| Field | Value |
|---|---|
| Owner | Chief Technology Officer |
| Users | Engineers, SRE |
| Data authority | — |
| Classification | Internal |
| Transition bridge | — |
| Authority gate | CI gates green on every PR; restore drill passed |
| Reliability | Tier 0 |
| Status | Native but incomplete |
| Revenue | — |
| Branch | `feat/native-foundation-identity-policy-trust` |
| Modules | 38 |

## U · Global Education Infrastructure

| Field | Value |
|---|---|
| Owner | Chief Executive Officer |
| Users | International institutions, Regional partners |
| Data authority | Regional law first |
| Classification | Per region |
| Transition bridge | Regional SIS and identity providers |
| Authority gate | Per region: legal review, residency, local accessibility rules |
| Reliability | Tier 1 |
| Status | Not started |
| Revenue | Regional licenses (year 3+) |
| Branch | `feat/native-developer-marketplace-global` |
| Modules | 12 |
