repo: harrisonjrubin7-cmyk/semester
branch: main
path: app/src

## Last sync
date: 2026-10-11T20:29:33Z

### Updated in this project
- Completion register (ui_kits/completion-register/): 16 domains reconciled to repo evidence from GO-NO-GO-DECISION.md and docs/program/PRODUCT_LIVE_STATUS.md; paid-pilot claim conflict flagged

## Previous sync (5)
date: 2026-10-07T18:08:23Z
commit: 57185b085d88

### Updated in this project
- Repo verification screen `#/os/repo` (ui_kits/semester-app/RepoVerify.jsx): 89 app/src/screens matched to prototype routes; 15 new repo files since 9a6d57e91bcd mapped; 8 prototype-ahead areas listed
- Native platform explorer domains now link into the app prototype

### Upstream since last sync
- 207 commits, 113 files under app/src: console TenantOperations, ReleaseIncidents, PrivacyRequests, IntegrationHealth, ReadinessEvidence, Controls; DevicePermissions, SignedInDevices, WhoCanSeeYou, PlanPreview; lib permissions, rolejourney, devices, entrycontext, payments/contract + Stripe fixtures, ops/readiness

## Previous sync (4)
date: 2026-10-06T14:22:21Z

### Updated in this project
- Operations console visibility audit from repo evidence (Console.tsx, console/workspaces.ts, nav.ts NESTED, OPS-CONSOLE-DISCOVERY-AUDIT.md): docs/operations/Operations Console Visibility.html
- Claude Code prompt: handoff/ops-console-visibility/PROMPT.md

## Previous sync (3)
date: 2026-10-05T23:16:01Z
commit: 9a6d57e91bcd

### Updated in this project
- Role-system reconciliation: 68 repo roles + ~96 capabilities mapped to design roles (docs/system/ROLE_SYSTEM_RECONCILIATION.md)
- handoff migrations 010–120 marked reference-only in BUILD.md; handoff/role-reconcile.sh added

## Previous sync (2)
date: 2026-10-05T03:38:34Z

### Upstream since last sync
- `docs/design-system/` (FIGMA-MAPPING, README, BASELINE) and `workflow-lab/` (Next.js app) have landed.
- Not yet in repo: `.mcp.json`, the three new skills, `app/scripts/design-system-*`, baseline JSON.
- No `--source-*` / Semester-blue tokens in `app/src/styles` — this project's source palette remains a proposal.

## Previous sync
date: 2026-10-05T00:49:21Z

### Updated in this project
- Seven navigation areas and App directory from lib/navareas.ts + screens.tsx
- 14 new student screens (Calendar, Study, Write, Sheets, Decks, Mail, Connect, Settings, Privacy, Support, Community, Maps, Notifications, Me)
- TA, Student affairs, Security operations, Support queue; new External audiences kit

## Sync history
- 2026-10-04T21:30:28Z — voice/naming, SourceLine, student + staff + mobile kits
- 2026-10-04T21:10:19Z — initial tokens, components, Student + Console kits

## Screen map
| Project screen | Repo files |
| --- | --- |
| ui_kits/student — Today | app/src/components/StartToday.tsx, components/unity/ObjectCard.tsx, unity/NextSteps.tsx |
| ui_kits/student — Course | components/unity/ContextBar.tsx, unity/Table.tsx, SourceBadge.tsx |
| ui_kits/student — Assistant | components/unity/States.tsx, unity/ActionPreview.tsx, lib/source.ts |
| ui_kits/student — Family | components/unity/Visibility.tsx, unity/DecisionTrail.tsx |
| ui_kits/student — Shell | components/desk/Sidebar.tsx, unity/SystemContextBar.tsx |
| ui_kits/console — Approvals | components/console/Approvals.tsx, console/Fields.tsx |
| ui_kits/console — Shell/Overview/Audit | components/console/ContextBar.tsx, console/Audit.tsx, institutional/IntegrationDashboard.tsx |
| ui_kits/student — Registration | app/src/components/enrollment/StudentRegistration.tsx |
| ui_kits/student — Grades | app/src/components/gradebook/StudentGrades.tsx |
| ui_kits/student — Advising | app/src/components/AdvisorMeeting.tsx |
| ui_kits/student — Degree, Billing, Career | docs/BRAND-PLATFORM.md, components/CareerEvidence.tsx (not read in full) |
| ui_kits/staff — Faculty | app/src/components/gradebook/InstructorBook.tsx |
| ui_kits/staff — Advisor | app/src/components/AdvisorMeeting.tsx, AdvisorSharedView.tsx |
| ui_kits/staff — Registrar, Finance | enrollment/RegistrarDesk.tsx, institutional/StudentAccounts.tsx |
| ui_kits/mobile | lib/look.ts (NAVS tabs), docs/BRAND-PLATFORM.md §1.8 |
| ui_kits/student — App directory, areas | app/src/lib/navareas.ts, app/src/screens.tsx |
| ui_kits/student — Calendar, Study, Write, Sheets, Decks, Mail, Connect, Settings, Privacy, Support, Community, Maps, Notifications, Me | app/src/screens/* (names + areas only; layouts composed from shared primitives) |
| ui_kits/staff — TA, Student affairs | gradebook/InstructorBook.tsx, docs/BASIC-NEEDS-NAVIGATOR.md (not read) |
| ui_kits/console — Security, Support queue | console/BreakGlass.tsx, console/SupportQueue.tsx (not read in full) |
| ui_kits/external | docs/BRAND-PLATFORM.md §1.1, §3 |
| handoff/claude-code-toolkit | lib/tokenexport.ts, docs/DESIGN-TOKENS.md, styles/hex.test.ts, design-tokens/semester.tokens.json, .claude/skills/ |
| ui_kits/workflow-lab, handoff/workflow-router-app | uploads/list every artifact and thing for claud to genrate.md (spec), live site https://harrisonjrubin7-cmyk.github.io/semester/ |
| ui_kits/architecture | uploads/arch-map.pdf, cqrs.pdf, sim.pdf, chatgpt.pdf (specs, not repo code) |
| docs/system/ROLE_SYSTEM_RECONCILIATION.md | supabase/migrations/20260922012000_capabilities.sql, 20260926150000_expansion_roles_and_features.sql + 20 capability migrations, database/*.md |
| docs/operations/Operations Console Visibility.html | app/src/screens/Console.tsx, app/src/lib/console/workspaces.ts, app/src/lib/nav.ts, OPS-CONSOLE-DISCOVERY-AUDIT.md, docs/OPERATIONS-CONSOLE-MAP.md |
| ui_kits/semester-app — #/os/repo | app/src/screens/*.tsx (names), components/console/*, lib/permissions.ts, lib/rolejourney.ts, lib/payments/contract.ts |
| ui_kits/completion-register | GO-NO-GO-DECISION.md, docs/program/PRODUCT_LIVE_STATUS.md, app/src/screens/* (names) |
| tokens/* | app/src/styles/tokens.css, industry.css, unity.css, typefaces.css, lib/look.ts |
