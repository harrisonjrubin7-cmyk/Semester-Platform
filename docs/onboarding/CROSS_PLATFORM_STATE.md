# Cross-platform state persistence

_Semester onboarding · 2026-10-05 · From uploads/Compare web vs native…pdf and UX teardown…pdf. Prototype: ui_kits/journey (#/students, #/open/…, #/teardown). Code: 120_handoff_preview_devices.sql, tests/handoff.test.ts._

The server holds the durable truth; clients hold replaceable views and short-lived drafts.

| State | System of record | Client | Rule |
|---|---|---|---|
| Account, membership, role | Server | Scoped session | Never trust client role claims |
| Consent, policy | Server (versioned) | Cached display | Server validates version |
| Onboarding progress | Server (journey + step version) | Resume cache | Verify before protected steps |
| Continue destination | Server transaction | Short-lived reference | Allowlist, expiry, single use |
| Anonymous preview | Browser storage | Temporary | Expire; no sensitive data |
| Authenticated drafts | Server + offline queue | Encrypted local | Conflicts + idempotency |
| Official data | Institution / Semester | Read cache | RLS + capability every fetch |
| UI preferences | Profile | Local cache | Never authorization |
| Devices | Device registry | Installation id | Revocable, audited |
| Push tokens | Server-device link | Endpoint/token | Separate from identity |

## Requirements

1. Version every journey and step. 2. Record completion against account + tenant + role + journey version + step version. 3. Immutable event stream for critical progress. 4. Clients display cache; server verifies before advancing protected steps. 5. Idempotency keys on onboarding actions. 6. Allowlisted deep-link paths only. 7. Expire previews fast. 8. Never sync credentials, payment details or secrets. 9. Push tokens separate from identity. 10. Re-authenticate for sensitive account, financial, institution, privacy and security changes. Sessions renew after privilege change, bounded by idle and absolute timeouts, invalidated server-side on logout, logged (OWASP Session Management; NIST SP 800-63B).
