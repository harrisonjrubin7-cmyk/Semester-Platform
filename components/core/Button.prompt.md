Action button.

```jsx
<Button variant="primary" onClick={submit} loading={saving}>Submit draft</Button>
<Button disabled disabledReason="Your window opens Mon 7:00.">Register</Button>
<Button href="/plan" variant="ghost">Open plan</Button>
```

- One primary per decision region. Danger is for destructive actions only, never the main CTA.
- Disabled buttons say why (`disabledReason`), or stay enabled and explain on click.
- Icon-only buttons are IconButton, not Button.
