Universal decision card.

```jsx
<ObjectCard kind="Assignment" statuses={['action-required']} title="Lab report 3" href="/assignments/3" provenance={{ origin: 'official', by: 'BIO 210' }} explanation="Worth 12%." metadata="Due Thu" primary={{ label: 'Open draft', onClick }} secondary={{ label: 'View rubric' }} />
<ObjectCard title="Add CHEM 2220" primary={{ label: 'Add', disabled: true, disabledReason: 'Window opens Mon.' }} />
<ObjectCard state="loading" />
```

- One primary, one quiet secondary. Use `href` to link the title, not the whole card.
