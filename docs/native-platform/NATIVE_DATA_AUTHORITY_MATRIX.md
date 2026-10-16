# Native data authority matrix

_Generated from ui_kits/native-platform/native-data.js, 2026-10-05. Design-stage: statuses are honest; nothing is "Native and verified" until repo code, tests and release evidence exist._

Every Education Graph node carries: canonical ID, tenant ID, owner, authority, source system, freshness, classification, consent scope, capability requirement, policy, version, audit history, retention, export, deletion, migration source, verification status.

| Domain | Authority now | Bridge | Becomes authoritative when |
|---|---|---|---|
| A Experience | Derived (shows official data with its source) | Campus portals, separate vendor apps | Each workspace is native the day its domain is |
| A1 Student OS | Derived + student-owned | Portal, LMS app, calendar, notes apps | Pilot: Today + Registration readiness accurate for 30 days against SIS |
| B Learning | Native for course content; LMS/SIS official for grades until gate | Canvas, Brightspace, Moodle via LTI 1.3 + grade passback | Gradebook authoritative only after dual-run term, registrar sign-off, rollback drill |
| B1 Course Studio | Native (content); grades follow B gate | LMS course shell via LTI deep link | One full term run natively in pilot course with faculty sign-off |
| B2 Assessment | Native attempt record; official grade per B gate | LMS quiz engines, proctoring tools | Two terms without lost attempts; accommodation audit clean |
| C Registrar | SIS official until cutover; Semester mirrors with source labels | Banner, Colleague, Workday Student, PeopleSoft via read feed | All 16 authority criteria, dual-run full registration cycle, institution cutover approval |
| C1 Record ledger | Native only after cutover | SIS academic history | Reconciled to SIS at 100% for two terms; independent audit |
| D Success | Native (notes, plans, cases) | EAB Navigate, Starfish, ticketing tools | Advising office runs one term natively; notes export verified |
| E Workspace | Student/staff-owned | Google Workspace, Microsoft 365, Notion (import + connect) | Import from Google/Microsoft lossless; offline sync tested |
| F Intelligence | Never official — AI output is guidance | Model providers via gateway only | Red-team suite green, eval harness thresholds met, institution AI policy signed |
| G Campus | Office systems official during transition | Housing, card, dining, booking and library systems | Per service: request volume handled natively one term |
| H Finance | Bursar/ERP official; payments via licensed processor | ERP student accounts, payment processor | Ledger reconciles to ERP daily for a term; processor PCI scope signed off |
| I Career | Student-owned (portfolio); verified claims signed by institution | Handshake, LinkedIn, credential wallets | Verified credential issuance passes standards test (Open Badges/CLR) |
| J Community | Native | GroupMe, Discord, CampusGroups | Moderation SLAs met for a term; appeals audited |
| K Family | Student consent is the authority | Paper FERPA release forms, parent portals | Consent revocation effective < 1 min; audit complete |
| L Control plane | Native (configuration is Semester-owned) | Spreadsheets, IdP consoles | Two-admin rule, access review and audit explorer in use at pilot |
| M Migration | Bridges are temporary | — (this domain is the bridge) | Per migration: dual-run, reconciliation 100%, rollback drill, retirement plan |
| N Trust | Native | Spreadsheets, GRC tools | HECVAT Full, pen test, insurance bound, ACR tested |
| O Company OS | Business data only — never student records | Bank, accounting, CRM, payroll (embedded) | Monthly close and board pack produced from it |
| P Command Center | Business + platform telemetry; no student records | — | Every high-risk op runs request → evidence → approval → preview → execute → audit |
| Q Developers | Native | — | Public API v1 stable, sandbox tenants, app review live |
| R Education Graph | Each node carries its own authority | Warehouse exports | Every node has the 17 required fields enforced in schema |
| S Stack | — | — | CI gates green on every PR; restore drill passed |
| U Global | Regional law first | Regional SIS and identity providers | Per region: legal review, residency, local accessibility rules |

## Graph nodes

| Node | Meaning | Status |
|---|---|---|
| Person | One person across roles | Native but incomplete |
| Identity | Logins and verified identity | Native but incomplete |
| Institution | Tenant root | Native but incomplete |
| Campus | Location | Native but incomplete |
| School | College | Native but incomplete |
| Department | Unit | Native but incomplete |
| Program | Major or credential path | Native but incomplete |
| Term | Academic term | Native but incomplete |
| Course | Course master | Native but incomplete |
| Section | Offering | Native but incomplete |
| Enrollment | Person in section | Native but incomplete |
| Requirement | Degree rule | Native but incomplete |
| Plan | Academic plan | Native but incomplete |
| Task | To-do | Native but incomplete |
| Action | Office-owned action | Native but incomplete |
| Assignment | Course work | Native but incomplete |
| Resource | Material | Native but incomplete |
| Learning Objective | Outcome | Native but incomplete |
| Grade | Grade entry | Native but incomplete |
| Evidence | Learning evidence | Native but incomplete |
| Skill | Skill | Native but incomplete |
| Credential | Award | Native but incomplete |
| Support Request | Ticket | Native but incomplete |
| Advisor | Advising relationship | Native but incomplete |
| Appointment | Booking | Native but incomplete |
| Community | Community | Native but incomplete |
| Organization | Club | Native but incomplete |
| Campus Service | Service | Native but incomplete |
| Student Account | Financial account | Native but incomplete |
| Opportunity | Job or internship | Native but incomplete |
| Mentor | Mentor relationship | Native but incomplete |
| Employer | Employer | Native but incomplete |
| Family Grant | Consent grant | Native but incomplete |
| AI Interaction | AI usage record (no prompt content) | Native but incomplete |
| Consent | Consent record | Native but incomplete |
| Policy | Policy | Native but incomplete |
| Audit Event | Audit entry | Native but incomplete |
| Tenant | Tenant | Native but incomplete |
| Customer | Commercial customer | Native but incomplete |
| Outcome | Aggregate outcome | Native but incomplete |
