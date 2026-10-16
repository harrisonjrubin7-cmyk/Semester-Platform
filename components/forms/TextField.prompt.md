Labelled input or textarea.

```jsx
<TextField label="Preferred name" required hint="Shown to classmates" />
<TextField label="Reflection" multiline maxLength={140} optional />
<TextField label="Hours" suffix="h" inputMode="decimal" error="Enter a number" />
```

- The label is always visible; placeholder is never the label.
- `required` says “Required” in words. Errors say what to do, not just what’s wrong.
- Use `readOnly` for values a person can see but not change (still focusable).
