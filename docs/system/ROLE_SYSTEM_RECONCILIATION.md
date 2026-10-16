# Role-system reconciliation — design vs repo

_Read-only GitHub audit of harrisonjrubin7-cmyk/semester@main (9a6d57e), 2026-10-05T23:16:01Z. No commands were run and nothing was applied. Run the Phase 0 script (handoff/role-reconcile.sh) in Claude Code to verify with real tests._

## Headline

The repo already has a mature, capability-based permission system. The design project's handoff migrations (010–120) were written as if the schema were empty and introduce **parallel** schemas and predicates (`core`, `ctl`, `fin`, `onboard`, `growth`; `core.my_role()`, `ctl.can()`, `fin.is_finance()`). Applying them would create the duplicate permission system the build rules forbid. **Treat handoff/semester-platform as a reference spec, not as migrations to apply.**

## What the repo has (measured)

- 185 migrations; 319 public tables, all with RLS on, none forced (database/TENANT_ISOLATION_MATRIX.md).
- `public.app_roles` — 68 roles; `public.app_capabilities` — ~96 named capabilities with descriptions; `public.role_capabilities` — the matrix; all written only by migration.
- `public.role_grants` — subject, role, scope_kind, scope_id, expires_at, revoked_at.
- `private.has_capability(capability, scope_kind, scope_id)` — the one predicate every policy asks. Platform admin deliberately does **not** hold everything.
- Separation of duties already encoded in capability descriptions: record:propose ≠ record:approve, finance:request ≠ finance:approve, config:manage ≠ config:publish, workflow:manage ≠ workflow:publish, migration:manage ≠ migration:approve, hold:place ≠ hold:release.
- Domains already present: course studio, gradebook (enter/moderate/release/export/receive), registration transaction, academic record ledger + ledger chains/seals, student accounts + payment plans, commercial core/billing, migration center, configuration studio, workflow builder, legal holds, human overrides, console approvals + break glass, integration control plane + SCIM gateway, community + trust & safety, GTM foundation, trust room, private beta, dining, K–12 guardians, AI policy + gateway journal + spend meter.

## Design role → repo role and capabilities

| Design role | Repo role(s) | Repo capabilities |
|---|---|---|
| Self-serve student | student | account_role student; no tenant |
| Institution-linked student | undergraduate_student, graduate_student, transfer_student, dual_enrollment_student, admitted_student | grades:receive |
| Applicant | prospective_student, admitted_student | — |
| Parent / guardian | profiles.account_role = parent (20260921161500_roles) | K–12: guardians:manage (staff side). **No app_roles row** — consent grants live elsewhere; verify |
| Alumni | alumni | — |
| Faculty | faculty | grades:enter, grades:release, course:publish |
| Teaching assistant | teaching_assistant | grades:enter (scoped); grades:moderate? |
| Advisor | academic_advisor, international_student_advisor, study_abroad_advisor, career_coach, peer_mentor | help_request:respond, mentee:read |
| Student-success leader | first_year_staff, learning_center_staff, institutional_researcher | outcomes:read, demand:read, tutoring:manage — **partial** |
| Registrar | registrar | registration:administer, registration_window:publish, catalog:sync, record:propose/approve/override/read, grades:export |
| Academic affairs | dean, department_chair, department_admin | articulation:approve, workflow:* — **partial** |
| Student accounts | student_accounts_officer | finance:request, finance:approve, finance:approve_high, finance:close, finance:read |
| Financial aid liaison | financial_aid_officer | — |
| Campus / service operators | university_staff, residence_life_staff, resident_assistant, dining_staff | dining:operate, institution_action:publish |
| Accessibility services | disability_services_officer, disability_services_staff | accommodation:verify |
| Community moderator | trust_safety_reviewer, trust_safety_senior, moderator, community_manager | community:review, community:review_senior, community:manage, report:read, moderation:action |
| Career / alumni staff | career_center_staff, career_coach | opportunity:moderate, skill:verify |
| Employer | employer, business_admin | talent:search, opportunity:publish |
| Institution executive | dean, university_admin | outcomes:read — **no president/provost role** |
| Institution admin | university_admin | tenant:configure, config:manage/publish/view, ai:configure, source:approve, audit:read |
| IT / security | integration_admin | integration:view/configure/approve/sync/replay/reconcile, killswitch:engage, lti:launch |
| Privacy / compliance | data_steward, compliance_owner | data_request:handle, compliance:manage, hold:read/place/release, override:review |
| Institutional buyer | — (lead, no account) | Semester side: account:manage |
| Implementation lead | implementation_manager | tenant:implement, migration:manage/approve/view |
| Partner | marketplace_partner, transfer_partner_admin, research_partner, scholarship_provider | articulation:propose |
| Developer | **none** | **gap** — no developer role or capability |
| Semester: founder/CEO | platform_admin, portfolio_council | platform:configure, governance:decide |
| Semester: operations | (console users) | console:operate, approval:decide, breakglass:request |
| Semester: support | support_agent | support:ticket (no student data without support_access_grant), support:read |
| Semester: customer success | customer_success | success:manage |
| Semester: finance | finance_operator, billing_contact | billing:operate, billing:read |
| Semester: growth | marketing_admin, campaign_reviewer, marketing_analyst, content_owner | campaign:manage/review/report, sponsor:review, content:manage |
| Semester: sales | account_executive | account:manage |
| Semester: SRE / incidents | incident_responder | incident:communicate, killswitch:engage |
| Semester: trust | trust_officer | trust:publish |
| Semester: beta | — | beta:manage, beta:triage |
| Semester: product, design, engineering, AI governance, legal, people, board, devrel | **none** | **gaps** — fine until a console needs them; do not add speculatively |

## Handoff migration → repo equivalent → action

| Handoff file | Repo equivalent | Action |
|---|---|---|
| 010_platform_core | profiles, role_grants, app_roles, private.has_capability | **Do not apply.** Parallel core.my_role/my_institution would duplicate the permission system. |
| 020_community | 20260928032000_community.sql (+ consent_and_moderation_narrowing) | Do not apply; diff features only. |
| 030_marketplace | (no marketplace migration found by name) | Verify; port only missing pieces into public/private with capabilities. |
| 040_ops | console_control_plane, commercial_core, gtm_foundation | Do not apply. |
| 050_security_hardening | Findings were against our own 010–040 | Re-run the same checks against the repo with its check suites (106 *.check.sql). |
| 060_command_functions | Existing gated SECURITY DEFINER functions | Port pattern only (validate → capability → audit). |
| 070_ai_gateway | intelligence_policy, gateway_action_journal, gateway_observability, ai_spend_meter | Do not apply; port red-team cases into the repo tests. |
| 080_sources_storage_delegations | intelligence_policy (source:approve), support_shares, storage policies | Verify gaps; delegations = role_grants with expires_at. |
| 090_native_finance | commercial_core, student_accounts, student_payment_plans, ledger_chains, ledger_chain_seals, billing_tax_integrity, billing_invoice_event_precedence | **Do not apply.** Compare: balanced-journal constraint and payment state machine — add only if absent. |
| 100_controlled_actions | console_approvals_and_break_glass, override_break_glass, human_overrides, role_grants (expires_at, revoked_at) | **Do not apply.** ctl.can duplicates private.has_capability. Port tests only. |
| 110_onboarding_growth | gtm_foundation, private_beta, consent tables | Verify onboarding/journey tables; add as public/private + new capabilities if missing. |
| 120_handoff_preview_devices | push_devices_and_queue | Handoff transactions + preview drafts likely new; devices exist — extend. |

## Gaps worth deciding (founder)

1. **Developer** role/capabilities (sandbox, app registration) — none exist.
2. **Guardian** as an app role vs `account_role = parent` plus consent grants — confirm the model before building the family workspace.
3. **Institution executive** (president/provost) — only dean / university_admin today.
4. **Student-success leader** — spread across first_year_staff, learning_center_staff, institutional_researcher; no single console capability.
5. Semester internal roles (product, engineering, legal, people, board, AI governance) — leave out until a console needs them.

## Design-project corrections

- Use the repo's capability names (`grades:release`, `registration_window:publish`, `finance:approve_high`, `approval:decide`, …) in every prototype and doc instead of invented keys (`course.grades.release`, `tenant.module.enable`).
- Tenant scope is `scope_kind = 'school'` + scope_id, not `tenant_id`/`institution_id`.
- Role names: `academic_advisor` (not advisor), `university_admin` (not institution_admin), `student_accounts_officer`, `trust_safety_reviewer`.

## Capability key renames (applied to prototypes and docs)

| Design key | Repo capability |
|---|---|
| `tenant.module.enable` | `tenant:configure` |
| `tenant.module.approve` | `config:publish` |
| `support.access.elevate` | `support:ticket + support_access_grant` |
| `support.access.approve` | `approval:decide` |
| `academic.requirement.change` | `config:publish` |
| `academic.requirement.approve` | `approval:decide` |
| `course.grades.release` | `grades:release` |
| `finance.refund.issue` | `finance:approve_high` |
| `finance.refund.approve` | `finance:approve` |
| `integration.mode.authoritative` | `integration:approve + migration:approve` |
| `integration.cutover.approve` | `migration:approve` |
| `ai.tools.activate` | `ai:configure` |
| `ai.tools.approve` | `approval:decide` |
| `records.migrate` | `migration:manage` |
| `records.migrate.approve` | `migration:approve` |
| `governance.retention.change` | `compliance:manage` |
| `governance.retention.approve` | `approval:decide` |
| `release.cohort.deploy` | `platform:configure` |
| `incident.declare` | `incident:communicate + killswitch:engage` |

Applied to ui_kits/native-ops, ops-inbox, course-studio, registrar-console and docs/operations. The reference-only migration 100 keeps the old keys and must not be applied.
