# Semester platform library

Semester is a unified Education Operating System connecting planning, learning, registration, advising, tutoring, career development, campus services and institutional operations. It operates through one connected account, Action Center, search experience, workspace model, education graph, design language and policy-controlled AI gateway. The platform builds native capabilities, integrates responsibly with existing systems, and transitions authority domain by domain only when implementation, reconciliation, institutional approval and rollback requirements are met. Student-private work stays distinct from official institutional records. AI supports explanation, preparation, drafting and bounded assistance; accountable people keep authority over consequential decisions.

**This library contains design specifications, prototypes, implementation handoffs, documents and evidence records. An item's presence here does not establish that it is tested, deployed, institution-authorized or production-enabled.** Current status lives in the [Completion register](ui_kits/completion-register/index.html), not in this README.

## How to navigate (12 sections)
Every card has one canonical home; other sections link to it. Design System tab groups use these names (sub-sections as `Section · Sub`).
1. **Start here** — orientation, maps, the platform shell (open any workspace as a demo persona)
2. **Foundations** — Brand, Color, Type, Spacing & layout
3. **Components & patterns** — components and trust patterns
4. **Product domains** — student, staff, institution, external, public web, mobile
5. **Roles & journeys** — role lens, role pages, lifecycle, every role start to finish
6. **Screens & atlas** — atlas, master catalog, screen atlas, rendered screens, wireframes
7. **Architecture & data** — stack, mainframe, AI gateway, environments, data model, capability registry, workflow runner
8. **Governance & trust** — control register, audit, document review, evidence baseline, roles & access
9. **Company & operations** — business workspace, company console, ops inbox/consoles, investor & board portal, agents
10. **Documents & templates** — document libraries, operating manual/pack, one-pagers, research
11. **Engineering & tooling** — Claude Code toolkit, semester-core/platform, workflow router, sample integrations
12. **Delivery & maturity** — completion register, pilot launch control, capability blueprint, maturity program, launch kit

## Status labels (independent facts — never one percentage)
- **Lifecycle:** designed → implemented → tested → deployed → institution-authorized → production-enabled
- **Implementation:** native · connected · derived · manual
- **Authority:** personal · advisory · institution-authorized · authoritative
A polished screen is not a completed workflow; a working integration is not institutional authorization; a native implementation is not automatically an official record.

## Canonical records and aliases
- *Investor & board portal* (`ui_kits/investor-portal`) is canonical; `ui_kits/investor` is v1, superseded.
- *AI Workflow Router & Benchmark Lab*: canonical spec card is `guidelines/tooling-workflow-router.html`; `ui_kits/workflow-lab` is its prototype.
- *Every screen, rendered*: `ui_kits/every-screen/index.html` is canonical; `index-standalone.html` is a bundling copy (no card).
- Screen inventories differ by scope: master catalog (673), native screen catalog (659), every-screen (catalog keys). Don't quote a count without its registry, date and scope.

## Open reconciliation
- **Pilot status (founder decision 2026-10-12):** Signed paid pilot with Vanderbilt — launch Spring 2027, pending institutional activation. Use this exact wording. Activation still requires the institution's approvals; the repo's GO-NO-GO-DECISION.md should be updated to match.

## Working agreement
Contribute by adding to an existing canonical record before creating a new view. Attach evidence as references with date and scope. Changes to status require evidence, not edits to copy. Sensitive information (student records, credentials, restricted contracts) never enters this library. Releases and institutional activation follow Pilot launch control and the repo's release profiles.

---

# Design system reference

**Semester** is the native Student Operating System for the complete educational journey — one governed, accessible platform for a student's academic, personal, campus, financial, career and lifelong life, plus the institutional workspaces (faculty, advisor, registrar, finance, IT/security) that serve them. Surfaces include Student Today, Calendar, Tasks, Courses, Study, Write, Degree, Registration, Grades, Campus, Dining, Housing, Family, Career, Billing, Support, the AI Assistant, and the Institution Console.

The system is calm, scholarly and source-aware: near-black chrome, warm off-white content, restrained Semester blue for action and focus, and a controlled vocabulary that keeps **official, connected, personal and AI-generated** information visibly distinct.

**Counts (Oct 15 2026):** 75 components, 163 cards, 36 templates. Current status: STATUS.md. Start at **Open Semester** (ui_kits/platform/).

**Status (Oct 2026):** pre-seed, founder-led, bootstrapped; Vanderbilt pilot is in discussion, not signed (founder-confirmed 2026-10-11; matches repo go/no-go). HECVAT (institution-required version), VPAT/ACR, SAML SSO and insurance are in progress. Large figures anywhere in this system are labelled sample data.

## Sources

- **Codebase (ground truth):** https://github.com/harrisonjrubin7-cmyk/semester (branch `main`). Key files read: `DESIGN-SYSTEM-GUIDE.md`, `docs/COLOR-AND-DARK-MODE-SPEC.md`, `app/src/styles/{tokens,typefaces,industry,unity}.css`, `app/src/lib/{look,status,source}.ts`, `app/src/components/{Brand,Icons,icons.data,mark.data,SourceBadge,StatusNotice,StartToday}.tsx`, `app/src/components/unity/*`, `app/src/components/console/*`. Also read: `docs/BRAND-PLATFORM.md` (voice, naming, Source Line), `enrollment/StudentRegistration.tsx`, `gradebook/StudentGrades.tsx`, `AdvisorMeeting.tsx`. Explore the repo further — especially `docs/design/`, `company-site/` and `app/src/components/` — to build closer to the real product.
- **Uploads:** `uploads/download-1.png` (lit silver logo mark on Ink), `uploads/Semester build Architecture.pdf`, `uploads/audit [...].pdf/.md` (repo audit).
- **Brief:** the user's written design direction (source-status hues, Semester blue, warm off-white content). Where it diverges from the code it is noted below.

### Reconciling brief and code
The app's own rule is "one colour for attention, the rest in words and glyphs", with a sterling/brass metal accent. The brief asks for a Semester blue action colour and distinct source hues. This system **keeps the code's grounds, type, radii, motion, glyph+word status vocabulary and contrast floors**, and **adopts the brief's palette** using hues pulled from the code's own measured ramps (Industry blue → Semester blue; Jade/Moss/Indigo/Old gold → teal/green/violet/amber). Every chip still carries a glyph and a word; colour is never the only carrier.

---

## CONTENT FUNDAMENTALS

From `docs/BRAND-PLATFORM.md` (draft) and in-app copy. **Personality:** a good registrar's assistant crossed with a precision instrument — exact, calm, candid, warm sparingly, self-possessed. **Public descriptor:** "the student action platform" ("Student OS" is internal only — it implies replacement). **Assistant name:** *Ask Semester* — no human name, face or persona; always labelled AI-assisted.

**The status sentence** (the unit of Semester voice): *what is true → what that means for you → what you can do.* "Your Canvas calendar hasn't updated since Tuesday. Deadlines below may have moved. Reconnect it, or check the course page."

**Prefer / avoid:** "helps you organise" not "revolutionises"; "alongside your school's systems" not "replaces / all-in-one"; "AI-assisted, source-linked" not "AI-powered / intelligent / magic"; name the control, never "secure / private / compliant / certified"; "planned / in private beta / pilot" not "launching soon"; "can / is designed to" not "guarantees / always / 100%"; "student" not "user / learner". Destinations: the brand platform says Today, My Path, Search, Plan, Me; the student kit and the app’s phone tabs differ. Open decision (see the connections card).

**Consequence copy from the product:** "Confirming puts you on the waitlist, number 3 in line. You are not enrolled until a seat comes to you." · "You leave CHEM 101 and a W is recorded on your transcript. It cannot be undone here." · "Worked out by Semester from released grades only; your instructor's final grade is the one that counts." · "Only what you tick here can be shared. Nothing else — not your study history, grades, notes or anything else — ever is."


- **Voice:** plain, precise, quietly warm. Speaks to the student as **"you"**; the product never says "we" about itself in-UI ("Semester has not checked it with your institution"). First person only in the assistant's own answer ("I'd place them…").
- **Casing:** Sentence case everywhere — buttons, titles, chips ("Needs confirmation", "Sync trouble"). UPPERCASE only for tracked kickers/eyebrows and the wordmark.
- **Say what, why, who decides.** Every state explains itself: *"You are offline. You can keep working — 2 changes will sync when you are back."* Errors say what is safe: *"Your draft is safe on this device."*
- **Name the source.** "Institution verified", "Imported", "Student entered", "Estimated", "AI-assisted", "Needs review". Never "verified" unless it was.
- **Consequences before confirm:** What happens / Exactly what / What stays the same / Taking it back. *"This can be reversed on request: ask the Registrar before Oct 20."*
- **Respectful, not celebratory:** no streaks, ranks, exclamation marks or confetti. *"Registration submitted. Next: review your fall schedule."*
- **Never overclaim:** don't call Semester the official gradebook, registrar or payment system; label demo data "Sample".
- **Numbers:** tabular figures; dates as "Thu 9 Oct · 23:59"; middle dot `·` separates metadata.
- **Emoji:** never. Unicode glyphs are used as status marks: ◆ official, ○ yours, ✦ AI, ⇄ connected/conflict, ? review, ! attention, ✓ done, ⊘ offline, … working, ◌ sample.

## VISUAL FOUNDATIONS

- **Colour:** Ink (#090a0e family) for all chrome — rail, tab bar, console environment bar. Parchment (#f4f1ea / panel #fbf9f4) for content. Dark mode = Ink content via `[data-theme="dark"]` (tonal elevation: surfaces lighten as they rise). Semester blue 700 `#416180` is the one action/fill colour on light, 400 `#94bce3` on dark. Brass is an editorial accent only. Source/status hues are desaturated stones, used as ink + hairline + 8% wash — never as large fills.
- **Metal accents (11):** Sterling, Brass, Copper, Jade, Slate, Pewter, Industry, Oxblood, Moss, Indigo, Old gold. Tokens `--accent-<name>` (base, on dark) and `--accent-<name>-shade` (text/icons on light). Accents *identify* things (courses, categories); they never mean status. One accent per object; Pewter is reserved for personal/private content; Industry is not the action colour.
- **Reader grounds (13):** Ink and Parchment are the shipped defaults. Eleven more (Graphite, Midnight, Basalt, Oxide, Forest, Wine, Industry Dark, Paper, Bone, Industry, Fog) are a per-reader setting: tokens `--ground-<name>-bg/-panel/-fg`, applied with `data-ground="<name>"`, which remaps `--surface-canvas`, `--surface-base` and `--text-primary`. Chrome stays Ink on every ground. Each must pass AA (see `guidelines/colors-grounds.html`) before it's offered.
- **Type:** Barlow (body 16/1.55, controls 14), Barlow Condensed 600 (headings, buttons, labels, -0.015em), Cinzel (editorial display, 42–56px, rare), system mono (IDs, timestamps). Kickers: 10.5px, 0.08em tracked caps, secondary ink. Body measure ≈ 66ch.
- **Spacing:** density-aware 2px steps `--sp-1…7` (2–16px) inside components; 8px grid `--space-*` for layout. Page padding 18 / 20 / 30 by breakpoint. 44px default targets, 24px floor in crowded composites.
- **Backgrounds:** flat grounds only. No photography backgrounds, no gradients except the brushed sterling text gradient on the wordmark/chrome text. No patterns, textures or illustrations.
- **Borders & cards:** hierarchy by hairline first (9 / 16 / 34% ink), surface step second, shadow third. Cards: 1px border, 6px radius, 16px padding, no shadow, never nested. A card groups a *decision*, not a paragraph.
- **Corners:** "Drawn" 3 / 6 / 10px (control / card / sheet). Pills only for floating bars; chips are 3px.
- **Shadows:** light — ink-tinted `0 1px 2px` / `0 3px 10px` / `0 12px 32px`; dark — `--lift-1…3`. Used for floating and modal layers only.
- **Transparency & blur:** only on the tab bar and focus bar (14px blur), always with an opaque fallback under reduced transparency, increased contrast, Low stimulation and forced colours. Scrims are 50% Ink.
- **Motion:** 130ms hover/press, 180ms state change, 240ms panel, 280ms sheet; ease `cubic-bezier(.22,1,.36,1)`. Sheets rise 8px + fade. No bounce, parallax, shimmer, spinners or looping decoration. All zeroed by `prefers-reduced-motion` and `data-calm`.
- **Hover:** a blue 8% wash on buttons/rows, hairline darkens on inputs, text steps from secondary → primary. **Press:** 14% wash or one ramp step darker on primary. No scale/shrink.
- **Focus:** 2px blue-600 outline, 2px offset; selected list rows use a 3px leading edge + weight, never colour alone.
- **Imagery:** the only brand image is the lit silver mark on Ink (cool, metallic, no grain). No stock photography or AI imagery in-product.
- **Layout:** fixed dark side rail (248px) on desktop, labelled bottom tab bar on mobile, persistent system context bar with ⌘K search on top. Operational content ≤1180px; one H1 per screen.

## ICONOGRAPHY

- The app ships its **own inline icon set** (`app/src/components/icons.data.ts`): Lucide-like, 24×24 grid, **1.5px stroke, round caps/joins, no fills** (one exception: the favourite star fills when on). 108 glyphs, copied programmatically to `assets/icons/*.svg` and to `components/icons/iconShapes.js` for the `<Icon>` component.
- Default size 19px in rows/rails, 21px in the tab bar, 15–17px inside buttons. Always `currentColor`.
- `assets/icons-sprite.svg` is the app's public sprite; logo files: `assets/logo-horizontal(-reversed).svg`, `logo-stacked(-reversed).svg`, `logo-brass.svg`, `logo-mono-black/white.svg`, `favicon.svg`, `logo-cobrand.svg` (see Brand → Logo system), `assets/logo-mark.svg` (flat, currentColor, generated from `mark.data.ts`), `assets/logo-mark-tile.svg` / `-maskable.svg` / `-512.png` (lit silver app icons), `assets/logo-mark-silver.png` (uploaded render).
- Unicode glyphs carry status (see Content). Emoji are never used. Icon-only controls always have an accessible name. If a glyph you need is missing, use the matching **Lucide** icon at stroke-width 1.5 (CDN) and flag it.

## Components

All in `components/<group>/`, each `Name.jsx` + `Name.d.ts` + `Name.prompt.md`, styled by `tokens/components.css`. Namespace: `window.SemesterDesignSystem_e9f3ba`.

- **core:** Button, IconButton, Icon, Wordmark (+ Mark), SectionLabel, Avatar
- **forms:** TextField, Select, Segmented, Choice, Switch, Combobox, DateField, VisibilityPicker
- **trust:** SourceBadge, SourceLine, StatusChip, ProvenanceChips, AIResponse (shared `vocabulary.js`)
- **feedback:** EmptyState, LoadingState, ErrorState, SuccessState, ProgressState, StepStatus, PermissionNotice, OfflineStrip, SaveState, Notice
- **surfaces:** ObjectCard, ContextBar, NextSteps, ActionPreview, Dialog, ScreenGuide, OpenIn, QuickActions
- **overlays:** Sheet (+ SourceDetails), UndoToast, FocusBar
- **navigation:** SideRail, TabBar, SystemContextBar, CommandPalette, Tabs, FilterChips
- **data:** DataTable, Fields, DecisionTrail, MetricTile, ProvenanceChart, SlaTimer
- **governance:** PolicyBadge, ConsentBadge, HealthBadge, ApprovalBanner, ErrorSummary, SupportHandoff, PageHeader
- **permissions:** PermissionPrompt, PermissionRow, SessionRow, DelegationRow (batch O device capabilities; two-stage ask, fallback, revoke)
- **navigation (queues):** Tabs, FilterChips · **data:** SlaTimer (styles in `tokens/components-2.css`)

**Intentional additions** (no single source file): `AIResponse` (combines the app's AI disclosure rules into one frame), `Switch`/`Choice` (the app uses native inputs in `.visibility-choice`), `SideRail` (generalises `desk/Sidebar.tsx`), `CommandPalette` (from `unity/Combobox` styling + the brief's ⌘K), `DecisionTrail` (from `unity/DecisionTrail` + console approvals), `SourceLine` (the brand platform's proposed signature device, §2.6).

## UI kits

All views follow the codebase's seven navigation areas (`app/src/lib/navareas.ts`): **Today** (what now?), **Plan** (what's coming?), **Learn** (how do I get the work done?), **Help** (who can help?), **Campus** (what's happening, where?), **Progress** (how am I doing?), **You** (settings). Every one of the 64 destinations in `app/src/screens.tsx` appears in the student App directory; 26 are fully recreated, the rest open an outline screen with their area and primary action.

- `ui_kits/student/` — Student (desktop). Today, Notifications · Calendar, Registration, Career, Billing · Courses, Grades, Study, Ask Semester, Write, Sheets, Decks · Support, Family · Campus, Maps, Mail, Community · Me, Degree, Advising · Settings (Appearance), Connect, Privacy & data · App directory.
- `ui_kits/staff/` — Faculty gradebook, TA grading queue, Advisor, Registrar desk, Finance student accounts, Student affairs support requests.
- `ui_kits/console/` — Institution console: Overview, Approvals, Support queue, Integrations, Security operations, Audit log.
- `ui_kits/external/` — Applicant, Guardian (family portal), Alumni, Employer, Marketplace partner.
- `ui_kits/mobile/` — Phone-width app on Parchment and Ink with the five-destination tab bar.

**Audience coverage:** students ✓ · applicants ✓ · faculty ✓ · TAs ✓ · advisors ✓ · registrars ✓ · finance ✓ · student affairs ✓ · IT/security ✓ · support/ops ✓ · guardians ✓ · alumni ✓ · employers ✓ · marketplace partners ✓.

## AI Workflow Router & Benchmark Lab

- `ui_kits/workflow-lab/` — interactive prototype (Internal tools card): 6-input router with forced-v0 rules, confidence, reasons, limits, escalation, prompts, GitHub plan, Supabase prompt, MD/JSON export; sortable 16-column feature matrix; 12 canonical workflows; benchmark grid with persistence tests, persistence ceiling, 0–5 grading, weighted /5 and /100 scores, leaderboard, CSV/Markdown export. Runs are saved on this device only and labelled prototype mode.
- `handoff/workflow-router-app/` — the production app source: Next.js App Router + TypeScript strict + Tailwind + Supabase (@supabase/ssr, magic link, middleware refresh), Zod, Server Actions, export route handlers, migrations `001_core_workflow_router.sql` / `002_benchmark_grading.sql` with org-scoped RLS (owner/admin/member/viewer), `seed.sql` with the 12 workflows, honest manual adapters, persistence + source-structure probes, vitest suites and an RLS test plan. Code files carry `.txt`; run `install.sh`. Not yet typechecked, linted, tested or built.

## Master control & company site

- `ui_kits/master-control/` — the hub: product front end, console & back end, business OS, company site & marketing, design system & engineering — every kit, deck, document and hand-off one click away.
- `ui_kits/company-site/` — homepage following the brand platform: hero, “status is part of the product” map (use now / pilot / later), value props, institutions, trust (status, not certifications), footer.

## Role lens

- `ui_kits/role-lens/` — every one of the 64 screens through 14 roles (student, applicant, guardian, alumni, faculty, TA, advisor, registrar, finance, student affairs, IT/security, support, employer, partner): access level (full · scoped · shared · read · audited · none), how the screen renders for that role, and its backend (sources, tables, RLS, API). Design-level model in `roles.js`; verify against migrations.

## Business workspace

- `ui_kits/business/` — gap analysis, sortable launch tracker (56 items, CSV), 90-day roadmap, pilot/contract checklist, risk register, hiring plan, fundraising readiness; `business-data.js` is the single record. `Operating Pack.html` is the printable document.
- Decks as templates: see Templates below.
- Inputs: `uploads/Business Master Checklist…pdf`, `uploads/now what else…pdf`, founder answers (LLC, solo, bootstrapping, signed paid pilot with DPA/FERPA, HECVAT (institution-required version), SAML SSO, VPAT, insurance; Vercel + Supabase; AI never sees student records).

## Claude Code toolkit (`handoff/claude-code-toolkit/`)

Repo-ready files that wire this system into Claude Code + Figma MCP without changing the app's architecture: two skills (`audit-semester-design-sync`, `build-semester-ui`), `.mcp.json`, `docs/FIGMA-MAPPING.md` (collections, 49 semantic + 12 primitive variables, 11 components, and this project's proposal tokens marked as *not in code*), a zero-dependency audit + report script, focused vitest proofs, and the three `design-system:*` package scripts. `PROMPTS.md` has the exact Claude Code commands. Every mapped path was checked against `app/design-tokens/semester.tokens.json`.

## Design System tab, group by group

Each group in the tab lists what it holds, where it lives, and the rule to keep.

### Foundations
- **Colors**: `guidelines/colors-*.html`, `dataviz.html`. Ink chrome, Parchment content, Semester blue 700/400, metals, 11 metal accents, 13 reader grounds, source semantics on both grounds, provenance-by-pattern data viz. Each colour card has in-use samples, a live WCAG contrast table, token names and rules. *Rule:* colour is never the only carrier.
- **Type**: `guidelines/type-*.html`. Barlow body, Barlow Condensed headings, Cinzel display (rare), mono for IDs. *Rule:* sentence case, 66ch measure, tabular figures.
- **Spacing**: `guidelines/spacing.html`, `radii.html`, `layout.html`, `states-interaction.html`. 2px density steps, 8px grid, corners 3/6/10, breakpoints, hover/press/focus. *Rule:* no scale or bounce on press.
- **Brand**: `guidelines/brand-*.html`, `iconography.html`. Mark (meaning, size ramp 16–128, approved grounds, app containers), wordmark (construction: Barlow Condensed 600, caps, 0.22em; size ramp; don'ts), **logo system** (horizontal, stacked, reversed, brass, mono black/white, favicon 64/32/16, app tile, Android adaptive icon, co-brand lockup in `assets/logo-*.svg`; clear space = top-slab height; minimum sizes; six don'ts; which-file table). `logo-horizontal-reversed.svg` carries its own Ink ground: on Semester blue or other colours use `logo-mono-white.svg`. *Rule:* Semester leads in co-brand lockups, partner logo at equal cap height, never recolour the mark.

### Components (`components/<group>/`, namespace `window.SemesterDesignSystem_e9f3ba`)
- **Actions**: Button, IconButton, QuickActions, ActionPreview. Primary = one per view, consequence copy before confirm.
- **AI**: AIResponse, ProvenanceChips. Always labelled AI-assisted, sources shown, human confirms the action.
- **Data**: DataTable, Fields, DecisionTrail, MetricTile, ProvenanceChart.
- **Forms**: TextField, Select, Segmented, Choice, Switch, Combobox, DateField, VisibilityPicker.
- **Glyph**: Icon, Mark, Wordmark. 1.5px stroke, `currentColor`, accessible names on icon-only controls.
- **Navigation**: SideRail, TabBar, SystemContextBar, CommandPalette (⌘K).
- **States**: Empty, Loading, Error, Success, Progress, StepStatus, Permission, Offline, SaveState, Notice, UndoToast.
- **Surfaces**: ObjectCard, ContextBar, NextSteps, Dialog, Sheet, FocusBar, ScreenGuide, OpenIn.
- **Trust & provenance**: SourceBadge, SourceLine, StatusChip. The official / connected / personal / AI distinction lives here.
- **Patterns** (`guidelines/pattern-*.html`): AI answer anatomy, provenance ladder, consent & sharing, consequential actions.

### Product
- **Student app**: `ui_kits/student/`. All 64 destinations across Today, Plan, Learn, Help, Campus, Progress and You, with Tweaks and live Ask Semester.
- **Mobile**: `ui_kits/mobile/`. Five-destination tab bar on Parchment and Ink.
- **Product**: `ui_kits/community/`, the community and live marketplace: feed, groups, events, Q&A, clubs and leaders, mentorship, campus marketplace with live drops, messages, privacy and safety. Campus-verified only; never touches student records.
- **Staff workspaces**: `ui_kits/staff/`. Faculty, TA, advisor, registrar, finance, student affairs.
- **Institution console**: `ui_kits/console/`. Overview, approvals, support, integrations, security, audit.
- **External audiences**: `ui_kits/external/`. Applicant, guardian, alumni, employer, marketplace partner.
- **Forms & interfaces**: `ui_kits/forms/`. 12 working forms, role capabilities, API, command and event contracts.
- **Wireframes**: `ui_kits/wireframes/`. Every screen × role in low-fi.

### Maps of the whole
- **Master control**: `ui_kits/master-control/`. The hub; every kit, deck, document and hand-off is one click away. *Rule:* every new file gets linked here.
- **Master catalog**: `ui_kits/master-catalog/`. 51 roles, 673 screens, 319 workflow steps (17 workflows), 88 systems and 82 docs, each with a status.
- **Atlas**: `ui_kits/atlas/`. Each role's features, screens and functions.
- **Maps card**: `guidelines/maps-of-the-whole.html`. **Documents card**: `guidelines/company-documents.html` (Business group). **Iconography rules**: `guidelines/iconography-rules.html` (Brand group).
- **Faculty grading workspace**: `ui_kits/faculty-grading/` — student work beside the rubric; permitted accommodation shown to graders only; AI suggestion applies as a draft and blocks return until reviewed; score validation; history; submit section for approval (working grades ≠ official until registrar approval and SIS sync). Matches migration 170 (learn.grade_entries).
- **Company console**: `ui_kits/company-os/` — 15 company functions (owner, mission, system of record, workflows, KPIs, controls, have, gaps, next), interactive document state machine matching migration 180, KPI tree, cadence, 90-day plan and top-50 checklist.
- **API layer**: `handoff/api/` — uploaded `api_contracts.ts`, generated `endpoints.json` (every GET/POST from the registry, all "specified"), README reconciling the uploaded reference slice with migrations 010–180. Migration 180 now raises the contract's ApiError codes and accepts `activate`.
- **Capability registry**: `ui_kits/capability-registry/` — 118 capabilities across public, education, institution, customer account, company, application console, developer portal and shared services; each with routes, actors, permissions, records, commands, events, screen types and design reference. Status is derived (design kit page exists / data / commands); implemented, tested and deployed stay empty until the repo proves them. Exported to `handoff/registry/capabilities.json` with `handoff/registry/PROMPT.md`.
- **Data model & server**: `ui_kits/data-model/` — schema map, table browser (columns, keys, RLS policies, referenced-by, flows), 8 end-to-end flows, workers and API functions; generated from all 21 migrations (227 tables). Migrations 130–170 add the academic core, coursework and comms, operations, company data, and ownership/learning/documents/workflow/commerce. Server reference: `handoff/semester-platform/SERVER.md`.
- **Company workflows**: `ui_kits/company-workflows/` — six swimlane workflows (deal, renewal, hiring, vendor, partner, research); every step names its owner, the legal document it produces and the gate that must pass; checklist view saved on device.
- **Legal and contracts library**: `docs/legal/index.html` — 26 drafts (attorney review required). New: Pilot Agreement, Statement of Work, Student Data Privacy Addendum (FERPA school official + state law), Acceptable Use Policy, Mutual NDA, Partner Agreement, Developer and API Terms, Vendor DPA, Research Data Use Agreement, Offer Letter, Confidentiality and IP Assignment, Contractor Agreement, Advisor Agreement, Board Written Consent, Contract Playbook (which paper, fallback positions, signing authority).
- **Operations entry & console gate**: `ui_kits/console-entry/` — the proposed grant-aware Operations entry (account menu → Workspaces), the real #/console gate notices and workspace filter mirrored from the repo, with account, grant, environment and flag toggles.
- **Registration-readiness pilot**: `ui_kits/readiness-pilot/` (from uploads/Design a policy enforcement layer…pdf). Student journey SSO → context → term/goal → source-aware checklist → receipt; seven outcome states via new **ReadinessState** component; route a blocker (upload, advisor referral, refresh); stale-SIS and missing-record simulators; behind-the-screen panel (PEP binding, workflow, input checks, reconciliation). Receipt says plainly it is not enrollment.
- **Control-plane specs**: `handoff/control-plane/` — component.schema.json (JSON Schema 2020-12), access.openapi.yaml (OpenAPI 3.1, PEP/PE/PA/evidence), access.asyncapi.yaml (AsyncAPI 3.0), access.rego + policy-data.json (OPA Rego v1), README with rules and pre-deploy tests. From uploads/Build an end-to-end saga orchestrator…pdf. Not compiled or tested.
- **Control-plane baseline (build this)**: `handoff/control-plane/baseline/` — unified policies/zta.rego (pe_allow, pa_prepare, pa_revoke, pep_allow) + 21 tests (fixture corrected), saga.rego guard for EVALUATE…VERIFY_CLEANUP + 15 tests, saga-worker.ts.txt, durable-access-worker.ts.txt (PostgreSQL, SKIP LOCKED leases, quarantine, receipt+outbox transaction), db/001_access_jobs.sql, verify.sh, README (lifecycle, compensation rules, token-revocation table, state consumer, test layers, failure scenarios). `handoff/control-plane/VERSIONS.md` marks v1–v4.1 superseded. Governance backbone **Baseline (build this)** view: four live policy decisions with 13 toggles (membership end keeps pa_revoke), token-revocation checker that flags incomplete revocation, durable-job event simulator, test layers, failure-scenario checklist.
- **Control-plane v4.1**: v4 gains access-worker.ts.txt (durable worker; four outcomes kept apart; corrected reply/execute types), policies/saga.rego (transition guard, corrected to Rego v1) + saga_test.rego (13 tests), scripts/verify-access-policies.sh; README adds time limits, escalation, per-operation timeout handling, final release checks. Governance backbone **Worker & transition guard** view: pick an execute outcome and see the worker’s action, live 9-rule transition guard, time limits, escalation that refuses manual CLOSED, release checks.
- **Control-plane v4 (recommended baseline)**: `handoff/control-plane/v4/` — access-runbook.ts.txt (11 states; nextInstruction/applyResult/applyFailure; compensation lifecycle revoke_pa → remove_pep → verify_cleanup), policy_engine.rego, policy_enforcement.rego, policy_test.rego (16 tests written to the PDF’s required list), separate pe/pep AsyncAPI, README with worker contract, revocation barriers, operator runbook, recovery tree, saga tests. Governance backbone **Runbook v4 · baseline** view: drive nextInstruction with results or failures, cancel/expire, late success and replay rejection by revocation barrier, 12-condition PEP allow evaluator, recovery tree, operator runbook, policy and saga test checklists.
- **Control-plane v3**: `handoff/control-plane/v3/` — access-coordinator.ts (10 states, pure applyResult reducer, Coordinator.tick with revokeRequested terminal intent), semester_access.rego + policy-data, OpenAPI (intent + internal participant operations), AsyncAPI (PE/PA/PEP command channels, results, lifecycle, signals, routing and result-acceptance rules), RUNBOOK.md (10 invariants, operation identity, recovery tree, operator procedure, safe replay, 14 release-evidence items). Governance backbone gains **Coordination v3 & runbook** view: send commands per participant channel, deliver results, tamper with results (producer, commandId, tenant, generation, operation, duplicate) to see rejection, late install can’t resurrect revoked access, interactive recovery tree, safe-replay walkthrough, release evidence.
- **Control-plane v2**: `handoff/control-plane/v2/` — access-saga.ts (TypeScript coordinator: State, Store/Services adapters, transition graph, operationKey, backoff, AccessSagaRunner.tick), access-request.schema.json, request envelope example, aligned OpenAPI + AsyncAPI (lifecycle/signals/evidence + x-semester-execution), README with adapter requirements and 24-item release gate. Supersedes v1 saga state names.
- **Governance backbone**: + Saga runner v2 view (ports tick() logic: 15-state graph with legal-next highlighting, per-adapter outcome controls, deadline expiry, signals with eventId dedupe and redelivery, INVALID_TRANSITION guard, generation bump on absent, transition log, v2 compensation table, 24-item release gate). + Access saga & policy view (15-state machine with policy/install/revocation branches, idempotency tester returning 202/recorded/409, recoverInstall handler, 12-row failure/compensation table, live Rego evaluator with reason codes and trust-score limits, PA-vs-PEP reconciliation, evidence record, 12 pre-deploy tests).
- **Governance backbone** (base): + Control plane & PEP view (control plane vs domain execution, NIST PE/PA/PEP mapping, 9 PEP responsibilities with injectable failures and async worker identity, decision binding, example policy YAML, DB/cache protections, unknown-outcome saga) and Schema & pilot view (pilot states, logical schema for registry/workflow/reconciliation/evidence, representative PostgreSQL, invariants, evidence constraints, 12-item pilot gate + not implied, 10-step dependency-ordered plan).
   `ui_kits/governance-backbone/` (from uploads/Show me the component registry…pdf). Operator console, 6 views: how they connect; component registry (4 components, YAML definition, deployments with drift, typed dependencies, controls/runbooks, registry checks for missing owner / broken contract / drift / missing runbook, 10 tables, governance rules); policy enforcement (request path, 10-case enforcement matrix walking the 10-step evaluation order to the failing step, live PolicyDecision JSON with obligations, conflict rules); workflow orchestration (override instance with approve/deny, enrolled/waitlisted/failed, inputs-changed invalidation, SIS timeout ≠ failure; durable rules; 10 tables); reconciliation (loop, run R-3301 tiles, 7 classified discrepancies with safe repair / recheck / human review / stop+escalate, three financial checks, 6 tables); evidence registry (registration-readiness gate with 10 bound artifacts, accept/reject, code-change invalidation, EvidenceArtifact JSON, lifecycle, re-evaluation triggers, 10 tables; no percentage).
- **Connected ecosystem**: `ui_kits/ecosystem/` (from uploads/continue expanding…pdf). Personal / Institution / Company OS over one foundation; four connection types; 11-stage journey spine; registration → learning simulator (approve or deny); deployment lifecycle, departments, company loop; who-sees-what visibility switcher; record ownership chains and 10 proposed event contracts; AI boundary flow; multi-membership identity; native vs dependency; 11-question connection checklist; readiness by connected journey (saved on device). Second PDF (uploads/continue illsutration…eycos.pdf) adds: Native systems (layered stack, 15-system product grid with governed links, native-component standard, workspace families, shared surfaces), Journeys A–D with branches, Connect safely (command → event path runner, record envelope, 9 connection rules, one account / separate contexts), Ownership & completion (finance, AI, infra pipeline, 10-domain × 7-property completion grid). Third PDF (uploads/continue further stregthing…pdf) adds: Backbone & passports (9 registries, component passports for Registration/Calendar/Consent, authority table), Delivery & failure (outbox runner with duplicate delivery, connection states, 7 dependency failures), Trust & continuity (per-request authz, revocation journey, config change pipeline, signal terms), Reliability & governance (journey SLIs, correlation trace, 9 drills, 8×10 acceptance-test grid, P0–P2, readiness definitions). New component: **ConnectionState / ConnectionLine** (components/data) — confirmed, pending, updating, stale, blocked, degraded, reconcile, resolved.
- **Screen atlas**: `ui_kits/screen-atlas/`. Every catalogued screen rendered with screen-specific content in six states plus a spec (purpose, route, capability keys, audit events, roles with access level, workflow steps, AI rule, systems); every role with its home screen, screens by access, workflow and keys; every capability key filterable by group, impact and sensitivity. Uses the native-platform keys where names match.
- **Role lens**: `ui_kits/role-lens/`. Access level, rendering, tables, RLS and API per role × screen.

### Architecture
- **Architecture / Education OS architecture**: `ui_kits/architecture/`. OS map against legacy systems, full stack and data (20 tables), CQRS read-model pipeline, lag simulator, AI gateway, migration phases. *Rule:* the institution stays the system of record; AI never receives student records.

### Company
- **Business**: `ui_kits/business/`. Workspace (gap analysis, launch tracker, roadmap, pilot checklist, risks, hiring, fundraising), Operating Manual, Operating Pack, Market Research, Vanderbilt one-pager, invite email, campus map.
- **Operations**: `ui_kits/ops/`. 12 consoles: social media control, finance, marketing, sales and RevOps, customer success, support, trust & safety plus community and marketplace ops, legal and compliance, people, IT and security, data, partnerships. Role-gated. *Rule:* everything is labelled sample data and contains no student PII.
- **Investor**: `ui_kits/investor/`. Investor and board portal.
- **Company site**: `ui_kits/company-site/`. Home, institutions, pilot, pricing, trust, company.
- **Compliance**: `ui_kits/compliance/`. WCAG 2.2, FTC proof rules, release gate. *Rule:* state your status; never claim a certification you don't hold.
- **Product brief package**: `docs/brief/`. Index, one-pager, FAQ, role sheets, overview deck.

- **Architecture cards**: `guidelines/arch-*.html` — stack layers, read-model pipeline & freshness, AI gateway, environments.

### Tooling
- **Tooling cards**: `guidelines/tooling-*.html` — Claude Code toolkit, semester-core, semester-platform, AI workflow router & benchmark lab.
- **Internal tools**: `ui_kits/workflow-lab/`, the AI workflow router and benchmark lab.
- **Tooling**: `handoff/claude-code-toolkit/`, `handoff/semester-core/`, `handoff/workflow-router-app/`. See `handoff/README.md`.

### Templates (`templates/`, entry `<Slug>.dc.html` + `ds-base.js`)
Every template has a `dark` Tweak (sets `data-theme="dark"` on its root). Screen templates also have a `viewState` Tweak (Ready / Loading / Empty / Error), collapse the rail under 900px and reflow their grids.
- **Decks:** company-deck, investor-deck, institution-deck, internal-plan-deck, overview-deck, vision-deck, launch-grant-pitch, **board-update-deck**, **training-deck**.
- **Screens:** student-screen, console-screen, platform-shell, institution-os, command-center, privacy-center, role-onboarding (13 roles), **registrar-console**, **ops-inbox**, **course-studio**, **role-workspace** (role prop, 8 roles), **device-privacy-mobile** (phone).
- **Documents (doc_page, print-ready):** pilot-results-report, quick-start, research-brief, **policy-doc**, **runbook**, **job-description**, **sales-one-pager**, **release-notes**, **case-study**.
- **Maps & other:** domain-map, operating-map, finish-line, launch-poster, product-teaser (video).

## What's next
See `NEXT-SESSION.md` for the ordered backlog and the dated log of what was built. The prototype (`ui_kits/semester-app/`) renders every nav route (desktop and `mobile.html`); the company library is `docs/Document Library.html` and the master register `docs/Master Artifact Register.html`. Open items: enforce the AA gate for reader grounds in code, real media for video slides, and replacing sample data with confirmed facts.

## Index

- `styles.css` — entry; `@import`s only.
- `tokens/` — `fonts.css`, `colors.css` (incl. `--accent-*` and `--ground-*` + `[data-ground]` scopes), `typography.css`, `spacing.css`, `effects.css`, `base.css`, `components.css`, `components-2.css`.
- `fonts/` — Barlow 400/500/700, Barlow Condensed 400/600, Cinzel (OFL).
- `assets/` — logos, app icons, `icons/` (108 SVGs), sprite.
- `guidelines/` — specimen cards (Colors, Type, Spacing, Brand, Patterns) and deep-dive docs:
  - `01-provenance-and-trust.md` — the ladder, made vs AI, where cues go
  - `02-ai-governance.md` — Ask Semester, AIResponse anatomy, course policy
  - `03-consequential-actions.md` — undo vs preview vs two-person duty
  - `04-consent-and-family.md` — default private, one decision at a time, access history
  - `05-institutional-surfaces.md` — context bars, tables, authority scope
  - `06-accessibility.md` — contrast, structure, reader settings, brand-exempt zones
  - `07-layout-and-responsive.md` — tiers, shell, page grid, destinations
  - `08-content-templates.md` — status sentence, empty/error/success, incidents, onboarding
- `components/`, `ui_kits/` — see above.
- `SKILL.md`, `github.md`, `thumbnail.html`.

**Caveats:** Atkinson Hyperlegible (the app's legibility body option) and Latin-Extended font subsets were not copied. The production app offers 13 grounds × 11 accents; only Ink and Parchment ship here.

## UI kit index (generated 2026-10-06)

Every kit, one row. Start at `ui_kits/master-control/index.html`.

| Kit | Name | What it shows |
|---|---|---|
| `ui_kits/architecture/` | Education OS architecture | OS map vs legacy systems, CQRS read-model pipeline, AI gateway, migration phases |
| `ui_kits/atlas/` | Atlas — every role, feature, screen, function | 20 roles; each role’s features, screens and functions, linked to the live kits |
| `ui_kits/business/` | Business workspace | Gap analysis, launch tracker, 90-day roadmap, pilot checklist, risks, hiring, fundraising, decks |
| `ui_kits/capability-registry/` | Capability registry | Every capability across 8 workspaces: routes, actors, permissions, records, commands, events, derived status |
| `ui_kits/community/` | Community & live marketplace | Feed, groups, events, Q&A, campus marketplace with live drops, safety |
| `ui_kits/company-os/` | Company console | 15 company functions with owners, workflows, KPIs, controls and gaps; document state machine; cadence and 90-day plan |
| `ui_kits/company-site/` | Company site & marketing | Full public site: home, product, students, institutions, pilot, trust, pricing, about, contact, legal |
| `ui_kits/company-workflows/` | Company workflows | Swimlanes for deal, renewal, hiring, vendor, partner and research: owner, document and gate per step, linked to the legal library |
| `ui_kits/compliance/` | Front-end compliance audit | WCAG 2.2 checklist mapped to Semester tests, FTC proof rules, claims rule |
| `ui_kits/console/` | Institution console | Overview, Approvals, Support, Integrations, Security, Audit — click-through |
| `ui_kits/console-entry/` | Operations entry & console gate | Proposed grant-aware Operations entry in the account menu, with the real #/console gate and workspace filter from the repo |
| `ui_kits/course-studio/` | Course Studio | Faculty authoring: course home, syllabus, assignments, assessments and question bank, grade release, AI rules, teaching team, accessibility gate, discussions, office hours, analytics, archive |
| `ui_kits/data-model/` | Data model & server | Every table, column, key and RLS policy across 21 migrations; end-to-end flows; workers and API functions |
| `ui_kits/demo-video/` | Product demo video (30 s) | Scattered systems → Today → Ask Semester → consent → close |
| `ui_kits/device-permissions/` | Device capabilities & permissions | Student settings for camera, microphone, location, notifications, AI images, offline, install, biometrics, sessions, accounts and delegated access — each with a clear ask, a fallback and a revoke path |
| `ui_kits/ecosystem/` | Connected ecosystem | 14 views: map, native systems, journeys, registration, institution and company, events, connect safely, boundaries, completion, backbone and passports, delivery and failure, trust and continuity, reliability and governance |
| `ui_kits/every-screen/` | Every screen, rendered | All 673 catalogued screens in the product shell, each in six states (default, loading, empty, error, forbidden, offline) |
| `ui_kits/external/` | External audiences | Applicant, Guardian, Alumni, Employer, Marketplace partner |
| `ui_kits/faculty-grading/` | Faculty grading workspace | Rubric scoring, feedback, accommodations, AI suggestions that stay draft until reviewed, submit for approval |
| `ui_kits/forms/` | Forms, capabilities, interfaces | 12 working forms, role capabilities, API/command/event contracts |
| `ui_kits/gap-screens/` | New screens from workflow gaps | 84 screens that workflow steps needed and the catalog lacked — each rendered in the product shell with its control chain |
| `ui_kits/governance-backbone/` | Governance backbone | Operator console: access saga state machine with idempotency, compensation and Rego evaluator; control plane and PEP mechanics, schema and pilot gate, plus the five backbone systems: component registry (definitions, drift, checks), policy enforcement (10-case matrix, PolicyDecision), workflow orchestration (override instance with branches), reconciliation (discrepancies, repair policy, finance checks), evidence registry (release gate, artifacts) |
| `ui_kits/investor/` | Investor & board portal | Monthly update, KPIs, cash & runway, pipeline, risks, data room — aggregate, read-only |
| `ui_kits/journey/` | Web-to-app journey | Marketing site → role path → identity → onboarding → /app → first meaningful action, plus download handoff and growth/onboarding consoles |
| `ui_kits/launch-kit/` | Launch kit | Welcome email, poster, quick start, teaser, data-hosting map, 3D mark, research brief |
| `ui_kits/mainframe/` | Semester mainframe | The whole operating architecture in nine layers (A–I), each linked to the prototypes, docs and build prompts behind it |
| `ui_kits/master-catalog/` | Semester Master Catalog | 51 roles, 673 screens, 319 workflow steps (17 workflows), 88 systems, 82 documents — evidence-based status, CSV export, doc outlines |
| `ui_kits/master-control/` | Master control — company OS | One hub: product, console/back end, business OS, company site, design system |
| `ui_kits/mobile/` | Mobile app | Today, My Path, Search, Plan, Me — bottom tab bar |
| `ui_kits/native-finance/` | Native finance platform | Semester-owned checkout, billing, ledger, payment states, refunds, plans and finance console — regulated rail as an adapter |
| `ui_kits/native-ops/` | Native operations OS | Institution OS, Company OS and shared control plane: 33 consoles, controlled-action simulator, permission decisions, routes, P0–P2 |
| `ui_kits/native-platform/` | Native platform explorer | Semester as one native Education OS: 25 domains, 692 module screens as a screen spec, flows, role matrix, authority gates, business model, branch plan |
| `ui_kits/one-place/` | One place: never leave Semester | Every job a student, staff member, institution or the company does, mapped to the Semester module that does it — and what must stay external, embedded |
| `ui_kits/ops/` | Operations consoles | Social, finance, marketing, sales, CS, support, T&S, legal, people, security, data, partners |
| `ui_kits/ops-inbox/` | Operations Inbox | Semester operators: one inbox for approvals, escalations, incidents, renewals, data requests, security alerts and lead SLAs — with My Work, SLA timers and controlled actions |
| `ui_kits/platform-maturity/` | Platform maturity program | Becoming the education platform: three tiers, 12 pillars, 24-dimension scorecard, APIs, roadmap and the next 50 actions |
| `ui_kits/readiness-pilot/` | Registration-readiness pilot | Student journey: SSO, context, term and goal, source-aware checklist with ready / blocked / review / unknown / stale / with an office, route a blocker, receipt; behind-the-screen PEP, workflow, input checks, reconciliation |
| `ui_kits/registrar-console/` | Registrar readiness console | Pilot wedge: registration readiness by cohort, holds by office, prerequisite overrides, time tickets, reconciliation, student view, outreach with approval, pilot metrics, audit |
| `ui_kits/role-lens/` | Every screen × every role | 64 screens through 14 roles: access level, how it renders, and the backend (sources, tables, RLS, API) |
| `ui_kits/role-lifecycle/` | Every role, start to finish | 26 user roles and 21 Semester team roles through one 10-stage lifecycle: entry, first action, workspace, cross-role flows, permission decision, AI, offboarding |
| `ui_kits/role-pages/` | Role pages (every role) | One page per catalogued role: purpose, day in the life, KPIs, permissions, workflows, screens, onboarding |
| `ui_kits/role-workspaces/` | Role workspaces | 16 role workspaces that had no prototype: advisor caseload, success leader, academic affairs, aid, campus services, housing/dining/library, career, employer, alumni, family, executive, IT, privacy, implementation, partner, developer — each with its first meaningful action |
| `ui_kits/screen-atlas/` | Screen atlas | Every screen rendered with its own content and spec; every role with home screen, access and workflow; every capability key |
| `ui_kits/staff/` | Staff workspaces | Faculty, TA, Advisor, Registrar, Finance, Student affairs — switch roles in the rail |
| `ui_kits/semester-app/` | Semester app (main prototype) | One store across 25 workspaces (98 routes). **Student, 49 screens; every one of the 66 directory items opens one:** Today, Action center, Search, Launchpad, Calendar (conflicts), Courses, Assignments (+ Work for this), Grades, Registration, Advising, Degree (what-if), Messages, Money, Study studio (11 modes), Work on it, Teach it back, Ask Semester, Write (AI policy + revisions), Solve, Sources (citations), Classmates (opt-in), Groupwork, Maps, Activities, Housing, Meal plan, Get help, Back on track, Career, Letters, NIL, Exam runway, Timers, Reports, Me, Privacy, Trust room, Family sharing, What’s new, University. **Staff and others:** faculty, TA, advisor, institution (+ entitlements), financial operations, support desk, admissions, Career Hub, campus services, insights, trust console, family delegate, alumni, employer. **Company:** pipeline, quotes, contracts, billing lifecycle (subscription + invoice state machines), ledger, reconciliation, vendors, customer agreements, company OS. **Operations:** command center, incidents, releases, access, privacy, dead letters, architecture. **Public:** home, solutions, pricing, pilot, trust, resources, signup, account recovery. Each screen labels its facts as official, synced, entered by you or AI suggestion. `mobile.html` shows it in an iPhone frame. Role map: `handoff/REPO-CROSSWALK.md`; v4 screen map: `handoff/reference-slice/enterprise-v4/README.md`. |
| `ui_kits/study-studio/` | Study studio | Notes (autosave), cards with spaced repetition, practice with explanations and sources, Ask grounded in course sources and the course AI rule, weekly plan |
| `ui_kits/student/` | Student app | All 64 destinations across the 7 areas — every screen built |
| `ui_kits/wireframes/` | Wireframe catalogue — every screen × every role | Low-fi in the real Semester shell; access banners per role; click to enlarge |
| `ui_kits/workflow-lab/` | AI Workflow Router & Benchmark Lab | Route to Claude Artifacts / ChatGPT Canvas / v0, sortable matrices, 12-workflow graded benchmark |
| `ui_kits/workflow-runner/` | Workflow runner | Every catalogued workflow step, clickable end to end, by role, through the 14-check authorization chain |
