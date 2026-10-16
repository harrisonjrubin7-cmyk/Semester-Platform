Immediate on/off setting.

```jsx
<Switch label="Share grades with family" about="Ana sees released final grades only." checked={on} pending={saving} onChange={save} />
```

- Use only when the change applies at once. For choices that need Submit, use Choice.
- Show `pending` while saving; it blocks repeat toggles.
