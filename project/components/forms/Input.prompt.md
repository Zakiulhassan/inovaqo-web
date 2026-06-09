Labeled text input with hint, error state, and optional leading/trailing icons.

```jsx
<Input label="Work email" placeholder="you@company.com" required
       iconLeft={<MailIcon/>} hint="We'll only use this to reply." />
<Input label="Name" error="This field is required." />
```

Set `error` to show a red field + message (replaces `hint`). Spreads native input props (`type`, `value`, `onChange`, …).
