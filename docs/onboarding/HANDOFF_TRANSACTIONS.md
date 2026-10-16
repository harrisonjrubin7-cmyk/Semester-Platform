# Handoff transactions and deep links

_Semester onboarding · 2026-10-05 · From uploads/Compare web vs native…pdf and UX teardown…pdf. Prototype: ui_kits/journey (#/students, #/open/…, #/teardown). Code: 120_handoff_preview_devices.sql, tests/handoff.test.ts._

Never put an access token, role, tenant or entitlement in a store link, query string, fragment, QR code or marketing platform. Use a short-lived handoff transaction.

1. User clicks `https://semester.com/open/<route>?campaign=…`.
2. Resolver validates the route (allowlist), records consented attribution, creates a transaction (`api.create_handoff`): route, non-sensitive context, 10-minute expiry, nonce. Privileged keys are rejected.
3. Installed app: Universal/App Link opens the app, which exchanges the transaction after normal authentication. Not installed: the same URL opens the web route.
4. Server (`api.consume_handoff`) checks sign-in, nonce, single use, expiry, then authorizes the destination from server-side role — a student following an advisor link lands on /app with a safe message.
5. Onboarding incomplete → exact next step, then the destination. Unauthorized → explanation + support.

Cases to test (all simulated in the prototype's handoff lab): installed, not installed, expired, unauthenticated, unauthorized, old app version, offline.

iOS Universal Links and Android App Links need verified HTTPS associations (apple-app-site-association, assetlinks.json); every native route has an equivalent web route. Native apps do not exist yet — no store links until they do.
