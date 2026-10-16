Modal confirmation.

```jsx
<Dialog title="Delete this project?" destructive confirmLabel="Delete project" confirmText="Buffer capacity study" busy={saving} error={err} onConfirm={del} onCancel={close}>…</Dialog>
```

- Only when the action can’t simply be undone. Keep it open on error; never close optimistically.
