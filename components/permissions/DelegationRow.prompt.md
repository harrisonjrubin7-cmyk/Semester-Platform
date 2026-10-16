Access the student granted.

```jsx
<DelegationRow who="Maria Reyes" role="Parent" scope={['Billing balance']} expires="31 May" onRevoke={revoke} onExtend={extend} />
```

- Always list exact scope; an empty scope reads “Nothing shared”. Revoke takes effect immediately.
