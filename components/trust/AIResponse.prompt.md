Governed assistant answer.

```jsx
<AIResponse scope={['Your degree audit']} sources={[{ title: 'Catalog 2025–26 §4', kind: 'official', href: '#' }]} confidence="High" proposals={[{ label: 'Add STAT 2100 to your draft', onConfirm }]} onFeedback={send}>…</AIResponse>
<AIResponse state="error" onRetry={retry} />
```

- Never auto-run actions; use `proposals`. With no sources it warns automatically.
- Use `state="refused"` for out-of-policy requests with a plain reason.
