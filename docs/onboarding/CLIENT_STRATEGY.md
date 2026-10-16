# Client strategy: web, PWA, native

_Semester onboarding · 2026-10-05 · From uploads/Bottom line.pdf. Interactive: ui_kits/journey/#/teardown._

Native is usually better for retention after activation (push, offline, biometrics, camera/files, fast repeat sessions) but worse for first-time conversion, because the store adds a separate install, trust and context-switch decision.

**Path:** marketing web → browser preview or signup → browser first value → optional PWA install → optional native app for frequent, device-enhanced use.

## Which client, when

| Moment | Client | Why |
|---|---|---|
| Discovery and evaluation | Public web | Searchable, shareable, no install |
| Student first value | Responsive web | Fastest CTA → useful plan |
| Institution SSO / invitation | System browser | Federation and recovery |
| Early repeat use | PWA offer after activation | Home screen without store detour |
| Daily student use | PWA or native | Performance, offline, notification needs |
| Device-intensive work | Native | Camera, files, biometrics, push |
| Faculty/admin high-stakes work | Responsive web, desktop-first | Larger screen, detailed controls |
| Returning mobile user | Native if installed | Deep link to exact approved destination |
| Unsupported/old app | Responsive web | No blocked journey |

## When to build native

Only around capabilities that benefit from native execution: reliable push, offline reliability, biometric re-entry, file/camera workflows, high-frequency mobile use. Until then, a PWA is the faster route to repeat access.

## Retention evidence

There is no credible universal rule that PWA or native retains better. PWA case studies in the research (e.g. conversion and time-on-site gains after add-to-home-screen work) are company-specific, not guarantees. Decide from Semester's own cohort data: activated vs non-activated retention, D1/D7/D30, notification opt-in after value.

## Activation model

A 37.5% activation rate means 62.5% of signups haven't reached the defined value milestone within the window. Treat it as a planning model; benchmark sources report median SaaS activation around 30–38%, varying by product and definition. Measure Semester's baseline per role before setting targets.

## Refined planning funnels (per 100 qualified visitors)

- **Web-first:** 40–60 role CTA · 25–45 preview/signup · 12–30 account · 10–25 verified/SSO · 8–20 minimum setup · 6–18 first meaningful action · 4–14 return.
- **Native-first:** 40–60 CTA · 20–40 store · 5–15 install · 4–12 open · 3–10 sign up · 2–8 onboarding · 1–6 first action.

Scenario ranges, not Semester performance. App Store page-view-to-install is reported anywhere from ~8.6% to ~34% depending on source and definition.

## Never in a URL, QR code, store link or referral parameter

Access token, refresh token, session ID, role claim, entitlement, sensitive student identifier, financial record, protected support context. Use the handoff transaction (HANDOFF_TRANSACTIONS.md).
