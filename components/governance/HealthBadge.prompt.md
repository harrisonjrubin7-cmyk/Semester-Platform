Health band with score, trend and driver.

```jsx
<HealthBadge band="watch" score={68} trend="down" driver="Activation below plan" updated="today" />
```

- Without `band` or with `stale`, shows “Not enough data”. Never infer health from colour.
