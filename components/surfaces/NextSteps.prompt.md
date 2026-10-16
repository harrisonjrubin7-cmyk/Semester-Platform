Next safe actions.

```jsx
<NextSteps max={3} steps={[{ label: 'Pay balance', why: 'Hold blocks registration', onClick }, { label: 'Register', blocked: true, blockedReason: 'clear the hold first' }]} />
```

- Blocked and done steps aren’t clickable and say so.
