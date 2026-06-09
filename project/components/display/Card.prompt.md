Surface container for grouping content. Compose freely; pair with `CardTitle`.

```jsx
<Card>
  <Badge variant="solid">AI / ML</Badge>
  <CardTitle>Turn messy data into insight</CardTitle>
  <p>Models that read your data and surface what matters.</p>
</Card>

<Card variant="raised" interactive>…</Card>
<Card variant="brand">…</Card>   {/* dark teal feature card */}
```

`variant`: `default | raised | brand`. `interactive` adds a hover-lift. `padded` (default true) toggles inner padding — set false to bleed media to the edges.
