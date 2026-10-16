---
name: semester-design
description: Use this skill to generate well-branded interfaces and assets for Semester, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for protoyping.
user-invocable: true
---

Read the readme.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Quick map: tokens in `styles.css` (+ `tokens/`), components in `components/<group>/` (namespace `window.SemesterDesignSystem_e9f3ba`), starting templates in `templates/` (decks, screens, print docs — copy the closest one), logos in `assets/`. Colour: Ink chrome, Parchment content, Semester blue 700 (light) / 400 (dark) is the only action colour, Brass editorial only; 11 metal accents via `--accent-<name>` / `-shade` identify things and never mean status; reader grounds via `data-ground`. Rules that never bend: every fact carries its source (◆ ⇄ ○ ✦ ◌ glyph + word), sentence case, no emoji, company roles never see student records, label sample data, never claim a certification not held.

## Connection honesty
When a view depends on another system, show its state with `ConnectionState` / `ConnectionLine` (confirmed, pending, updating, stale, blocked, degraded, reconcile, resolved). Write "Enrollment confirmed · schedule updating", never imply a confirmed action failed, and never fabricate confirmation while an authority (SIS, payment rail) is unavailable.
- Readiness checks use `ReadinessState` (ready_as_of with a time, blocked, review_required, unknown, stale, handoff_pending, action_completed). Missing evidence is unknown, never eligible; one cleared item never implies ready.
- `Segmented` labels are accessible names only. When no visible caption names the choice, pass `showLabel` so sighted users see the question.
- `Tabs`: 7 or fewer. Beyond that, put a `Segmented` section switcher above the tabs and show only that section’s tabs; mark superseded versions in their labels.
