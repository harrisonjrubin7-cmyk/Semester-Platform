Pre-prompt before the OS dialog.

```jsx
<PermissionPrompt capability="camera" why="Scan an ISBN" when="Only on this screen" fallback="Type it instead" kept="Nothing" state={st} onAllow={ask} onNotNow={skip} onUseFallback={typeIt} />
```

- Show only at the moment of use. Always provide a working fallback. Use `requesting` while the OS dialog is open.
