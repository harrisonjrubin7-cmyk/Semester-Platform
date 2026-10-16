Who can see something because the student shared it.

```jsx
<ConsentBadge state="shared" recipient="Advisor Lee" scope="Degree audit" purpose="Spring planning" expires="31 Dec" onManage={manage} />
```

- Unknown states render as private. Always give `expires` for shared items.
