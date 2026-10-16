Filters above a list.

```jsx
<FilterChips options={[{ id: 'hold', label: 'Holds', count: 12 }]} selected={sel} onToggle={toggle} onClear={clear} resultCount={rows.length} />
<FilterChips single label="Sort by" options={['Due soonest', 'Oldest']} selected={[sort]} onToggle={setSort} />
```

- Always pass `resultCount` so changes are announced.
