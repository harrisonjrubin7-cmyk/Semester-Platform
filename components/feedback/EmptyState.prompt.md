Why it’s empty + one action.

```jsx
<EmptyState kind="first" body="Once you apply, applications appear here." action={<Button>Find opportunities</Button>} />
<EmptyState kind="filtered" onClearFilters={clear} />
<EmptyState kind="restricted" body="Your advisor shares notes when they’re ready." />
```

- Pick the `kind`; never show a bare “No data”.
