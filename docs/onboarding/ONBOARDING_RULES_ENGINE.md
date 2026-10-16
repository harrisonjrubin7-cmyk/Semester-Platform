# Onboarding rules engine

_Semester growth and onboarding · 2026-10-05 · Prototype: ui_kits/journey/index.html. Code: handoff/semester-platform (110_onboarding_growth.sql, lib/auth/return-path.ts, tests/onboarding.test.ts). Design-stage until code, tests and release evidence exist._

Assignment inputs: identity verified? tenant known? membership active? roles assigned? consent complete? setup complete? module available? new or returning? first value achieved? support needed?

States: not_started → identity_incomplete → verification_pending → institution_context_pending → required_consent_pending → profile_minimum_complete → setup_in_progress → first_action_pending → activation_achieved → expanded_adoption → paused → support_required → completed.

Assignment is server-side (api.assign_journey) from verified membership; the requested intent only chooses between self-serve journeys. Required steps cannot be skipped (enforced in api.complete_step).
