# Semester credit planner — integration notes

Source: user-supplied package (uploads, 7 Oct 2026). Files here are copied unchanged.

## Preview
Serve over HTTP (ES modules + JSON fetch fail under file://):
`python3 -m http.server 8080 --bind 127.0.0.1` then open http://127.0.0.1:8080/

## Tests
Node 18+: `npm test` → `node --test tests/core.test.mjs`. Recorded result: 12 passed, 0 failed (test-results.txt).
**Missing from upload:** `tests/core.test.mjs` and `.github/workflows/test.yml` were described but not uploaded, so `npm test` won't run from this folder as-is.

## Proposed Semester mount
Add only `app/public/credit-planner/` (index.html, app.js, core.mjs, style.css, universities.json) on a feature branch; expected Vite path `/credit-planner/index.html`, subject to base path and rewrites.
- Isolated static prototype — not a registered screen or nav item.
- No auth, database, routing or production config changes.
- Don't link from production navigation until design, accessibility and policy review.
- Open a PR; run the app's existing checks. No direct pushes to main.

## Not done
Browser rendering, accessibility, Semester build integration, GitHub publication, merge, deployment. No license is granted; choose one before public distribution. Transfer-policy rules are not included in this package (see ../transfer-preview/).

## In-prototype equivalent
`ui_kits/semester-app` → `#/institution/calendars` → Credit planner tab reproduces the same rules (US↔ECTS default 2, CATS ÷2, Australian requires named policy + factor, degree baseline vs conditional, study abroad counted only when approved) with in-browser tests.
