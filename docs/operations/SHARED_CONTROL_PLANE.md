# Shared platform control plane

_Semester native operations · 2026-10-05 · Generated from ui_kits/native-ops/ops-data.js. Design-stage: nothing here is built until code, tests and release evidence exist. Code: handoff/semester-platform/supabase/migrations/100_controlled_actions.sql + tests/controlled-actions.test.ts._

The one place tenancy, identity, capabilities, policy, flags, consent, integrations, AI governance, audit and reliability are defined — used by both operating systems.

## Tenant hierarchy

| Field | Value |
|---|---|
| Users | Platform |
| Controls | Institution → campus → school → department → program → term → operating unit |
| Route | `/app/institution/:tenantSlug/settings/hierarchy` |
| Priority | P0 |
| Owner | Principal architect |
| Screens | Hierarchy, Operating units, Campus config |
| Controlled actions | Change hierarchy |
| Built so far | — |

## Identity / SSO / SCIM

| Field | Value |
|---|---|
| Users | Platform |
| Controls | SSO, SCIM, membership, service accounts, sessions, deprovisioning |
| Route | `/app/institution/:tenantSlug/it-identity/sso` |
| Priority | P0 |
| Owner | IT/identity |
| Screens | IdP metadata, SCIM tokens, Sessions |
| Controlled actions | Enforce SSO |
| Built so far | — |

## Roles / capabilities / delegation

| Field | Value |
|---|---|
| Users | Platform |
| Controls | Capability grants, scoped delegation with expiry, access reviews, break-glass |
| Route | `/app/institution/:tenantSlug/it-identity/roles` |
| Priority | P0 |
| Owner | Security/privacy officer |
| Screens | Roles, Capabilities, Delegations, Access reviews |
| Controlled actions | Grant elevated capability |
| Built so far | — |

## Policy / workflow engine

| Field | Value |
|---|---|
| Users | Platform |
| Controls | Policy hierarchy, stewards, decisions, workflow builder, approvals, two-person rules |
| Route | `/app/institution/:tenantSlug/governance/policies` |
| Priority | P0 |
| Owner | Principal architect |
| Screens | Policy registry, Workflow builder, Approval rules |
| Controlled actions | Change approval rule |
| Built so far | — |

## Feature flags / cohorts / kill switches

| Field | Value |
|---|---|
| Users | Platform |
| Controls | Module modes (off → shadow → assist → authoritative), cohorts, rollouts, kill switches |
| Route | `/app/ops/feature-flags` |
| Priority | P0 |
| Owner | Semester release operator |
| Screens | Flags, Cohorts, Module modes, Kill switches |
| Controlled actions | Enable module; Move module to authoritative |
| Built so far | — |

## Consent / retention / legal holds

| Field | Value |
|---|---|
| Users | Platform |
| Controls | Consent registry, retention schedules, holds, subject requests |
| Route | `/app/institution/:tenantSlug/governance/retention` |
| Priority | P1 |
| Owner | Security/privacy officer |
| Screens | Consent registry, Retention, Legal holds, DSR queue |
| Controlled actions | Change retention; Legal hold |
| Built so far | — |

## Integration / migration factory

| Field | Value |
|---|---|
| Users | Platform |
| Controls | Provider registry, connection approval, credential refs, mappings, freshness, exceptions, reconciliation, dual run, cutover, retirement |
| Route | `/app/ops/integrations` |
| Priority | P0 |
| Owner | Platform engineer |
| Screens | Connections, Mappings, Sync runs, Exceptions, Dual run, Cutover gate |
| Controlled actions | Switch observation → authoritative; Migrate academic records |
| Built so far | ../architecture/index.html |

## AI governance

| Field | Value |
|---|---|
| Users | Platform |
| Controls | Providers, models, tenant/course policy, approved sources, tool permissions, eval, red team, spend, incidents |
| Route | `/app/ops/trust/ai` |
| Priority | P1 |
| Owner | AI governance lead |
| Screens | Providers, Policies, Approved sources, Tool permissions, Evals, Spend |
| Controlled actions | Activate AI tools |
| Built so far | — |

## Audit / evidence / risk

| Field | Value |
|---|---|
| Users | Platform |
| Controls | Audit explorer, control evidence, risk register |
| Route | `/app/ops/audit` |
| Priority | P0 |
| Owner | Security/privacy officer |
| Screens | Audit explorer, Evidence, Risk register |
| Controlled actions | Export audit log |
| Built so far | — |

## Reliability / incident / rollback

| Field | Value |
|---|---|
| Users | Platform |
| Controls | SLOs, error budgets, alerts, incident command, status page, rollback |
| Route | `/app/ops/reliability` |
| Priority | P0 |
| Owner | SRE |
| Screens | SLOs, Error budgets, Incidents, Status page, Rollbacks |
| Controlled actions | Declare incident; Roll back |
| Built so far | — |

## Portability / offboarding

| Field | Value |
|---|---|
| Users | Platform |
| Controls | Full export, offboarding plan, deletion with certificate, legal-hold awareness |
| Route | `/app/institution/:tenantSlug/governance/offboarding` |
| Priority | P2 |
| Owner | Institution super-admin |
| Screens | Export, Offboarding plan, Deletion certificate |
| Controlled actions | Offboard tenant |
| Built so far | — |

## Module modes

off → shadow (compute, show nothing) → assist (show, source still official) → authoritative (only after the 16-criterion gate).
