Native select.

```jsx
<Select label="Term" placeholder="Choose a term" required options={['Fall 2026', { value: 's27', label: 'Spring 2027' }]} />
```

- Use `groups` for long lists; consider Combobox past ~15 options.
- Disabled options should say why in their label.
