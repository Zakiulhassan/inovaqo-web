Circular avatar showing an image, or auto-colored initials when no image is given.

```jsx
<Avatar name="Sara Khan" />
<Avatar src="/team/amir.jpg" name="Amir" size="lg" status="online" />
<Avatar name="Inovaqo Bot" size="sm" ring />
```

Sizes `sm | md | lg | xl`. `status` adds a presence dot; `ring` adds a cyan ring. Background color is derived deterministically from `name`.
