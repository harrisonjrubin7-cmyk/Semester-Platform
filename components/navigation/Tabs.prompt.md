In-page tabs.

```jsx
<Tabs idBase="rec" items={[{ id: 'mine', label: 'My work', count: 7 }, { id: 'done', label: 'Done' }]} current={tab} onChange={setTab} />
<TabPanel idBase="rec" id="mine" current={tab}>…</TabPanel>
```

- 7 tabs or fewer. Use `manual` when switching is expensive (arrows move focus, Enter selects).
