Sheet / Source & details.

```jsx
<Sheet title="Source & details" onClose={close}><SourceDetails items={[{ label: 'Origin', value: <SourceBadge source="official" /> }]} /></Sheet>
```

- Modal by default (focus trap, Escape, scroll lock). Use `inline` inside a page. `closeOnScrim={false}` for forms.
