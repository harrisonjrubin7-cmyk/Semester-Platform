Approval path for a consequential change.

```jsx
<ApprovalBanner state="pending" what="Refund $600" approver="Bursar" step={1} of={2} version="v3" selfRequested={me === requester} onApprove={approve} onReject={(reason) => reject(reason)} />
```

- Pass `selfRequested` so requesters can’t approve themselves. `onReject` receives the required reason.
- Use `changed` when the request was edited after approval; it must be re-approved.
