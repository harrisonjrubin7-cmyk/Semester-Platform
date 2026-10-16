# Institution console catalog

_Semester native operations · 2026-10-05 · Generated from ui_kits/native-ops/ops-data.js. Design-stage: nothing here is built until code, tests and release evidence exist. Code: handoff/semester-platform/supabase/migrations/100_controlled_actions.sql + tests/controlled-actions.test.ts._



| Console | Users | Route | P | Owner |
|---|---|---|---|---|
| Executive Console | President, provost, cabinet | `/app/institution/:tenantSlug/overview` | P0 | Institution super-admin |
| Academic Operations Console | Registrar, academic affairs, department admins | `/app/institution/:tenantSlug/academic-operations` | P1 | Academic affairs operator |
| Registrar Console | Registrar, registrar staff | `/app/institution/:tenantSlug/registrar` | P0 | Registrar |
| Faculty / Teaching Console | Faculty, chairs, teaching teams | `/app/institution/:tenantSlug/teaching` | P1 | Faculty |
| Student Success Console | Advisors, coaches, support teams | `/app/institution/:tenantSlug/student-success` | P0 | Advisor |
| Student Accounts Console | Student accounts, bursar | `/app/institution/:tenantSlug/student-accounts` | P1 | Student accounts operator |
| Campus Services Console | Housing, dining, library, recreation, events | `/app/institution/:tenantSlug/campus-services` | P1 | Campus-services operator |
| Community & Safety Console | Moderators, organization staff, safety teams | `/app/institution/:tenantSlug/community-safety` | P1 | Student affairs / moderator |
| Career / Alumni / Employer Console | Career teams, employer relations, alumni office | `/app/institution/:tenantSlug/career` | P1 | Career staff |
| IT / Identity Console | CIO, IT admins, security | `/app/institution/:tenantSlug/it-identity` | P0 | Institution super-admin |
| Governance & Trust Console | Privacy, security, compliance, legal | `/app/institution/:tenantSlug/governance` | P1 | Security/privacy officer |
| Implementation Console | Institution project team + Semester implementation | `/app/institution/:tenantSlug/implementation` | P0 | Semester implementation operator |
| Institution Command Center | Authorized institutional operators | `/app/institution/:tenantSlug/command` | P0 | Institution super-admin |
