# Funnel and activation event taxonomy

_Semester growth and onboarding · 2026-10-05 · Prototype: ui_kits/journey/index.html. Code: handoff/semester-platform (110_onboarding_growth.sql, lib/auth/return-path.ts, tests/onboarding.test.ts). Design-stage until code, tests and release evidence exist._

Event names: lowercase snake_case, 3–40 chars. Props: small enums only (< 512 bytes). No names, emails, free text, student records.

| Event | When |
|---|---|
| `cta_clicked` | cta clicked |
| `path_selected` | path selected |
| `signup_started` | signup started |
| `email_verified` | email verified |
| `institution_selected` | institution selected |
| `sso_completed` | sso completed |
| `membership_validated` | membership validated |
| `consent_recorded` | consent recorded |
| `lead_submitted` | lead submitted |
| `discovery_booked` | discovery booked |
| `onboarding_step_completed` | onboarding step completed |
| `onboarding_step_skipped` | onboarding step skipped |
| `onboarding_resumed` | onboarding resumed |
| `app_opened` | app opened |
| `first_action_completed` | first action completed |
| `activation_achieved` | activation achieved |
| `reminder_opted_in` | reminder opted in |
| `install_offered` | install offered |
| `install_accepted` | install accepted |
| `support_requested` | support requested |

KPIs: signup completion · verified account · first meaningful action · 7-day return · demo→discovery · pilot→contract.

## Added (web vs native teardown)

- `marketing_viewed`
- `role_selected`
- `preview_started`
- `preview_value_generated`
- `preview_claimed`
- `account_created`
- `email_verification_sent`
- `sso_started`
- `consent_required`
- `journey_assigned`
- `onboarding_step_viewed`
- `first_app_route_loaded`
- `first_value_rendered`
- `first_meaningful_action_completed`
- `pwa_install_prompted`
- `pwa_installed`
- `native_download_selected`
- `native_app_opened`
- `handoff_created`
- `deep_link_restored`
- `support_handoff_started`
- `support_handoff_resolved`

Never include raw student data, names, coursework, balances, credentials or full URLs with sensitive state.
