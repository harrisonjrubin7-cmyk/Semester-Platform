Comparison table. Use only when people compare columns.

```jsx
<DataTable caption="Integrations" rowHeader="name" sortable defaultSort={{ key: 'n', dir: 'desc' }}
  columns={[{ key: 'name', label: 'Integration' }, { key: 'n', label: 'Records', numeric: true }]}
  rows={rows} state={loading ? 'loading' : 'ready'} emptyText="No integrations connected" />
```

- Give every table a `caption` (announced) and a `rowHeader` when a column names the row.
- Rendered columns sort only with `sortValue`.
- Use `state="error"` + `onRetry`; never leave a blank table.
