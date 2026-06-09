Pill toggle switch with optional label — for settings and boolean options.

```jsx
<Switch label="Email updates" defaultChecked />
<Switch label="Two-factor auth" checked={on} onChange={e => setOn(e.target.checked)} />
```

Track turns cyan when on; thumb slides with a slight overshoot. Controlled (`checked` + `onChange`) or uncontrolled (`defaultChecked`).
