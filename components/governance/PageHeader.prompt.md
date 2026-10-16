Page head.

```jsx
<PageHeader breadcrumbs={[{ label: 'Plan', href: '/plan' }, { label: 'Readiness' }]} kicker="Plan" title="Registration readiness" purpose="Check you can register." actions={<Button variant="primary">Review hold</Button>} />
```

- One h1 per page; use `level={2}` when embedded. At most one primary action.
