One figure worth reading first, with unit, kind, period, denominator, source and age.

```jsx
<MetricTile label="Credits" value={94} unit="of 120" kind="actual" source="official" updated="3 Oct" />
<MetricTile label="First-value rate" kind="target" value={null} reason="Baseline not approved yet" />
<MetricTile label="Study time" value="11.5" unit="h" period="This week" source="personal" stale />
<MetricTile label="Pipeline" state="loading" />
```

- Always set `kind` when a number could be mistaken for an actual (targets, estimates, projections).
- Missing data renders "—" plus `reason`; never invent a zero.
- Never an outcome claim (GPA lift, time saved) without approved evidence.
