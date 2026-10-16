# Web vs native onboarding teardown

_Semester onboarding · 2026-10-05 · From uploads/Compare web vs native…pdf and UX teardown…pdf. Prototype: ui_kits/journey (#/students, #/open/…, #/teardown). Code: 120_handoff_preview_devices.sql, tests/handoff.test.ts._

Web converts and activates; native deepens daily use. Never make installation, long forms or profile completion the price of seeing value.

## Policy

- **New visitor:** marketing web → browser signup → browser onboarding → first meaningful action → optional PWA/native invitation → exact destination preserved.
- **Returning web user:** link → authenticate if needed → restore route.
- **Returning native user:** Universal/App Link → app opens exact route → re-authenticate only when necessary.
- **App not installed:** same HTTPS link opens the responsive web route; store only on explicit choice; after install, restore the destination.
- **Institution SSO:** always in the system browser; final identity, membership and permission decided server-side.

## Native-first risks and responses

| Step | Failure | Response |
|---|---|---|
| Store redirect | Abandons before install | Never mandatory for first value |
| Store listing | Differs from site | Same brand, screenshots, terms |
| Download | Too slow | Browser fallback, no dead ends |
| First open | Generic home | Restore approved route and checkpoint |
| Auth | Sign in again | System-browser auth, server-issued native session |
| Permissions | Asked on launch | Ask right before a user-triggered benefit |
| Updates | Version mismatch | Feature-gate by version; web fallback |
| Navigation | No way back | Back-stack and web-return per link type |

Full web/native comparison and drop-off audit: ui_kits/journey/#/teardown and docs/growth/WEB_TO_APP_JOURNEY_ARCHITECTURE.md.
