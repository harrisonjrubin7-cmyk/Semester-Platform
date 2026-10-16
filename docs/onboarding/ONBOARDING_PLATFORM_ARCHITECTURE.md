# Onboarding platform architecture

_Semester growth and onboarding · 2026-10-05 · Prototype: ui_kits/journey/index.html. Code: handoff/semester-platform (110_onboarding_growth.sql, lib/auth/return-path.ts, tests/onboarding.test.ts). Design-stage until code, tests and release evidence exist._

Onboarding is a persistent, resumable, role-aware workflow engine — not a modal.

Components: journey definitions + versions · audiences · eligibility rules · step library · progress · skip/resume · checklists · first-run guidance (only where useful) · sample-data rules · institution configuration · SSO/invite flows · training · human hand-off · reminders · activation events · experiments · completion analytics · accessibility rules · consent/privacy · offboarding.

Tables (110): onboard.journeys, journey_versions, activation_definitions, assignments, progress, support_handoffs, events, activation_events; growth.entry_contexts, consent_documents, consent_records, leads. Commands: api.assign_journey, api.complete_step, api.record_activation, api.submit_lead.

Each step defines: journey ID, version, audience, tenant scope, eligibility, capability, consent, classification, completion event, skip rule, retry/resume, support owner, accessibility criteria, analytics event, experiment cohort, audit, retention.
