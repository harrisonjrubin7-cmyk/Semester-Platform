# Web, PWA and native hand-off

_Semester growth and onboarding · 2026-10-05 · Prototype: ui_kits/journey/index.html. Code: handoff/semester-platform (110_onboarding_growth.sql, lib/auth/return-path.ts, tests/onboarding.test.ts). Design-stage until code, tests and release evidence exist._

Web-first. Install is a convenience offered after value.

| Situation | Experience |
|---|---|
| First-time visitor | Continue in browser immediately |
| Student reached first value | Offer optional PWA install if the browser supports it |
| Real iOS/Android app exists | Honest store links; deep link preserves the route |
| App not installed | Responsive web fallback at the same destination |
| Institution SSO | Complete in web/system browser, return safely |
| Email or campus deep link | Resolve identity, restore session, open the exact screen |
| Unsupported/outdated app | Web fallback with a clear message |
| High-stakes admin task | Never force mobile install; keep web state |

/download rules: "Continue in browser" always available; PWA install only where supported; store links only for published apps; no fake badges or counts; sign-in and recovery easy to find; support if deep-link restoration fails.
