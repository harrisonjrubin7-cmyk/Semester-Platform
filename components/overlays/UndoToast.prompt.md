Undo for reversible work.

```jsx
<UndoToast message="Task archived." duration={8000} onUndo={restore} onExpire={commit} />
```

- Commit on `onExpire`, not on show. Minimum 6 s; pauses on hover/focus.
