Bar chart that encodes provenance (solid official/connected, outline yours, hatched estimated/AI, dotted stale).

```jsx
<ProvenanceChart title="Where your week went" summary="BIO 210 is 6 of 17.5 h." unit="h" target={5} targetLabel="Weekly cap" sort="desc"
  rows={[{ label: 'BIO 210', value: 6, source: 'official' }, { label: 'Estimated left', value: 3, source: 'estimated' }, { label: 'Club hours', value: null }]} />
```

- Always give a one-line `summary`; a hidden table is rendered automatically.
- `null` values render “—”; empty `rows` render `emptyText`.
- Targets are a labelled rule. Never colour bars red/green for good/bad.
