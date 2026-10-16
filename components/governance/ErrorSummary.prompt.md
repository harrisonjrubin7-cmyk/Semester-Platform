Form error summary.

```jsx
<ErrorSummary errors={[{ field: 'email', message: 'Enter a full email address' }, { message: 'The registrar rejected this request.' }]} />
```

- Place above the form; it focuses itself when errors appear. Messages say how to fix, not just what’s wrong.
