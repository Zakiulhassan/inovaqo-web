/* @ds-bundle: {"format":3,"namespace":"InovaqoDesignSystem_13093e","components":[{"name":"GrowingLine","sourcePath":"components/brand/GrowingLine.jsx"},{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"IconButton","sourcePath":"components/buttons/IconButton.jsx"},{"name":"Avatar","sourcePath":"components/display/Avatar.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"CardTitle","sourcePath":"components/display/Card.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"}],"sourceHashes":{"components/brand/GrowingLine.jsx":"cbc69a48b233","components/buttons/Button.jsx":"3c6f2fad5539","components/buttons/IconButton.jsx":"8c5fc6ee8f27","components/display/Avatar.jsx":"1141c0e3af71","components/display/Badge.jsx":"a89397ce99b9","components/display/Card.jsx":"c244307ab9cd","components/forms/Input.jsx":"ab46d39611d0","components/forms/Switch.jsx":"ff671b6d9acb","ui_kits/website/site.jsx":"7592e654f170"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.InovaqoDesignSystem_13093e = window.InovaqoDesignSystem_13093e || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/GrowingLine.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useInovaqoStyles(id, css) {
  if (typeof document === 'undefined') return;
  if (document.getElementById(id)) return;
  const el = document.createElement('style');
  el.id = id;
  el.textContent = css;
  document.head.appendChild(el);
}
const CSS = `
.ino-growline { display: block; width: 100%; }
.ino-growline path { fill: none; stroke: var(--line); stroke-linecap: round; }
`;

/* Preset paths drawn on a 0..1000 x 0..200 viewBox (stretched via preserveAspectRatio=none). */
const PATHS = {
  wave: 'M -5 120 C 180 120, 230 40, 420 55 C 600 70, 660 150, 850 110 C 930 93, 970 110, 1005 100',
  loop: 'M -5 150 C 150 150, 210 60, 360 60 C 470 60, 485 135, 430 150 C 388 162, 350 110, 415 88 C 520 53, 640 150, 820 120 C 910 105, 960 125, 1005 108',
  rise: 'M -5 175 C 220 175, 300 60, 520 60 C 720 60, 800 30, 1005 25',
  dip: 'M -5 40 C 220 40, 300 165, 520 165 C 740 165, 820 150, 1005 150'
};
function GrowingLine({
  variant = 'wave',
  height = 120,
  dashed = true,
  animate = 'flow',
  // 'flow' | 'draw' | 'none'
  strokeWidth = 2.5,
  color,
  className = '',
  style,
  ...rest
}) {
  useInovaqoStyles('ino-growline-css', CSS);
  const d = PATHS[variant] || PATHS.wave;
  const pathClass = [dashed ? 'ino-line__path' : '', dashed && animate === 'flow' ? 'ino-line__path--flow' : '', !dashed && animate === 'draw' ? 'ino-line__draw' : ''].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: ['ino-growline', className].filter(Boolean).join(' '),
    viewBox: "0 0 1000 200",
    preserveAspectRatio: "none",
    style: {
      height,
      ...(color ? {
        '--line': color
      } : null),
      ...style
    },
    "aria-hidden": "true"
  }, rest), /*#__PURE__*/React.createElement("path", {
    className: pathClass,
    d: d,
    style: {
      strokeWidth,
      ...(dashed ? null : {
        strokeDasharray: 2600,
        strokeDashoffset: animate === 'draw' ? undefined : 0,
        '--len': 2600
      })
    }
  }));
}
Object.assign(__ds_scope, { GrowingLine });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/GrowingLine.jsx", error: String((e && e.message) || e) }); }

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Inject component CSS once (hover/active/focus states that inline styles can't do). */
function useInovaqoStyles(id, css) {
  if (typeof document === 'undefined') return;
  if (document.getElementById(id)) return;
  const el = document.createElement('style');
  el.id = id;
  el.textContent = css;
  document.head.appendChild(el);
}
const CSS = `
.ino-btn {
  --_bg: var(--brand);
  --_fg: var(--text-on-brand);
  --_bd: transparent;
  display: inline-flex; align-items: center; justify-content: center; gap: 0.5em;
  font-family: var(--font-sans); font-weight: 700; font-size: var(--text-sm);
  line-height: 1; letter-spacing: 0.005em; white-space: nowrap;
  border: var(--border-w) solid var(--_bd); border-radius: var(--radius-pill);
  background: var(--_bg); color: var(--_fg);
  padding: 0 1.25em; height: 2.75em; cursor: pointer;
  transition: background var(--dur) var(--ease-out), color var(--dur) var(--ease-out),
              border-color var(--dur) var(--ease-out), transform var(--dur-fast) var(--ease-out),
              box-shadow var(--dur) var(--ease-out);
  -webkit-tap-highlight-color: transparent; text-decoration: none;
}
.ino-btn:hover { background: var(--brand-hover); }
.ino-btn:active { transform: translateY(1px) scale(0.99); }
.ino-btn:focus-visible { outline: none; box-shadow: var(--shadow-glow); }
.ino-btn[disabled], .ino-btn[aria-disabled="true"] { opacity: 0.45; cursor: not-allowed; pointer-events: none; }

/* sizes */
.ino-btn--sm { font-size: var(--text-xs); height: 2.25em; padding: 0 1em; }
.ino-btn--lg { font-size: var(--text-base); height: 3.25em; padding: 0 1.6em; }

/* variants */
.ino-btn--primary { --_bg: var(--brand); --_fg: var(--text-on-brand); box-shadow: var(--shadow-sm); }
.ino-btn--primary:hover { box-shadow: var(--shadow-cyan); }
.ino-btn--secondary { --_bg: transparent; --_fg: var(--text-strong); --_bd: var(--border-strong); }
.ino-btn--secondary:hover { --_bg: var(--surface-2); --_bd: var(--brand); }
.ino-btn--ghost { --_bg: transparent; --_fg: var(--text); }
.ino-btn--ghost:hover { --_bg: var(--surface-2); }
.ino-btn--inverse { --_bg: var(--n-0); --_fg: var(--n-950); }
.ino-btn--inverse:hover { --_bg: var(--mint); }
.ino-btn--danger { --_bg: var(--danger-500); --_fg: #fff; }
.ino-btn--danger:hover { background: color-mix(in oklch, var(--danger-500) 88%, black); }

.ino-btn__spin { width: 1em; height: 1em; border-radius: 50%;
  border: 2px solid currentColor; border-right-color: transparent;
  animation: ino-btn-spin 0.7s linear infinite; }
@keyframes ino-btn-spin { to { transform: rotate(360deg); } }
@media (prefers-reduced-motion: reduce) { .ino-btn__spin { animation-duration: 1.6s; } }
`;
function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  loading = false,
  disabled = false,
  as = 'button',
  className = '',
  ...rest
}) {
  useInovaqoStyles('ino-btn-css', CSS);
  const Tag = as;
  const cls = ['ino-btn', `ino-btn--${variant}`, size !== 'md' ? `ino-btn--${size}` : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls,
    disabled: Tag === 'button' ? disabled || loading : undefined,
    "aria-disabled": disabled || loading
  }, rest), loading && /*#__PURE__*/React.createElement("span", {
    className: "ino-btn__spin",
    "aria-hidden": "true"
  }), !loading && iconLeft, children, !loading && iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useInovaqoStyles(id, css) {
  if (typeof document === 'undefined') return;
  if (document.getElementById(id)) return;
  const el = document.createElement('style');
  el.id = id;
  el.textContent = css;
  document.head.appendChild(el);
}
const CSS = `
.ino-iconbtn {
  display: inline-flex; align-items: center; justify-content: center;
  width: 2.75em; height: 2.75em; border-radius: var(--radius-pill);
  border: var(--border-w) solid transparent; background: transparent;
  color: var(--text); cursor: pointer; padding: 0;
  transition: background var(--dur) var(--ease-out), color var(--dur) var(--ease-out),
              border-color var(--dur) var(--ease-out), transform var(--dur-fast) var(--ease-out);
  -webkit-tap-highlight-color: transparent;
}
.ino-iconbtn svg { width: 1.25em; height: 1.25em; display: block; }
.ino-iconbtn:hover { background: var(--surface-2); color: var(--text-strong); }
.ino-iconbtn:active { transform: scale(0.92); }
.ino-iconbtn:focus-visible { outline: none; box-shadow: var(--shadow-glow); }
.ino-iconbtn--sm { width: 2.25em; height: 2.25em; }
.ino-iconbtn--lg { width: 3.25em; height: 3.25em; }
.ino-iconbtn--solid { background: var(--brand); color: var(--text-on-brand); }
.ino-iconbtn--solid:hover { background: var(--brand-hover); color: var(--text-on-brand); }
.ino-iconbtn--outline { border-color: var(--border-strong); }
.ino-iconbtn--outline:hover { border-color: var(--brand); background: transparent; }
.ino-iconbtn[disabled] { opacity: 0.45; pointer-events: none; }
`;
function IconButton({
  children,
  variant = 'ghost',
  size = 'md',
  label,
  className = '',
  ...rest
}) {
  useInovaqoStyles('ino-iconbtn-css', CSS);
  const cls = ['ino-iconbtn', variant !== 'ghost' ? `ino-iconbtn--${variant}` : '', size !== 'md' ? `ino-iconbtn--${size}` : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    "aria-label": label,
    title: label
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/display/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useInovaqoStyles(id, css) {
  if (typeof document === 'undefined') return;
  if (document.getElementById(id)) return;
  const el = document.createElement('style');
  el.id = id;
  el.textContent = css;
  document.head.appendChild(el);
}
const CSS = `
.ino-avatar {
  position: relative; display: inline-flex; align-items: center; justify-content: center;
  width: var(--_sz, 2.5em); height: var(--_sz, 2.5em); flex: none;
  border-radius: 50%; overflow: visible;
  font-family: var(--font-display); font-weight: 700; color: var(--text-on-brand);
  background: var(--brand);
  font-size: calc(var(--_sz, 2.5em) * 0.36);
}
.ino-avatar__img { position: absolute; inset: 0; width: 100%; height: 100%; border-radius: 50%; object-fit: cover; }
.ino-avatar--sm { --_sz: 2em; }
.ino-avatar--md { --_sz: 2.5em; }
.ino-avatar--lg { --_sz: 3.5em; }
.ino-avatar--xl { --_sz: 5em; }
.ino-avatar__ring { box-shadow: 0 0 0 2px var(--surface), 0 0 0 4px var(--brand); }
.ino-avatar__status {
  position: absolute; right: 2%; bottom: 2%; width: 28%; height: 28%;
  border-radius: 50%; border: 2px solid var(--surface); background: var(--n-300);
}
.ino-avatar__status--online { background: var(--success-500); }
.ino-avatar__status--busy { background: var(--danger-500); }
`;
const PALETTE = ['var(--cyan-400)', 'var(--cyan-600)', 'var(--sage)', 'var(--slate)', 'var(--success-500)'];
function Avatar({
  src,
  name = '',
  size = 'md',
  ring = false,
  status,
  className = '',
  ...rest
}) {
  useInovaqoStyles('ino-avatar-css', CSS);
  const initials = name.split(' ').map(w => w[0]).filter(Boolean).slice(0, 2).join('').toUpperCase();
  const bg = PALETTE[(name.charCodeAt(0) || 0) % PALETTE.length];
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['ino-avatar', `ino-avatar--${size}`, ring ? 'ino-avatar__ring' : '', className].filter(Boolean).join(' '),
    style: !src ? {
      background: bg
    } : undefined
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    className: "ino-avatar__img",
    src: src,
    alt: name
  }) : initials || '?', status && /*#__PURE__*/React.createElement("span", {
    className: `ino-avatar__status ino-avatar__status--${status}`
  }));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useInovaqoStyles(id, css) {
  if (typeof document === 'undefined') return;
  if (document.getElementById(id)) return;
  const el = document.createElement('style');
  el.id = id;
  el.textContent = css;
  document.head.appendChild(el);
}
const CSS = `
.ino-badge {
  display: inline-flex; align-items: center; gap: 0.4em;
  font-family: var(--font-mono); font-weight: 700; font-size: var(--text-xs);
  letter-spacing: 0.06em; text-transform: uppercase; line-height: 1;
  padding: 0.45em 0.7em; border-radius: var(--radius-sm); white-space: nowrap;
  border: var(--border-w) solid transparent;
}
.ino-badge--soft   { background: var(--brand-soft); color: var(--brand-press); }
.ino-badge--solid  { background: var(--brand); color: var(--text-on-brand); }
.ino-badge--outline{ background: transparent; color: var(--text); border-color: var(--border-strong); }
.ino-badge--success{ background: var(--success-100); color: color-mix(in oklch, var(--success-500) 80%, black); }
.ino-badge--warning{ background: var(--warning-100); color: color-mix(in oklch, var(--warning-500) 75%, black); }
.ino-badge--danger { background: var(--danger-100);  color: color-mix(in oklch, var(--danger-500) 80%, black); }
.ino-badge--neutral{ background: var(--surface-inset); color: var(--text-muted); }
.ino-badge__dot { width: 0.5em; height: 0.5em; border-radius: 50%; background: currentColor; }
`;
function Badge({
  children,
  variant = 'soft',
  dot = false,
  className = '',
  ...rest
}) {
  useInovaqoStyles('ino-badge-css', CSS);
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['ino-badge', `ino-badge--${variant}`, className].filter(Boolean).join(' ')
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    className: "ino-badge__dot"
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useInovaqoStyles(id, css) {
  if (typeof document === 'undefined') return;
  if (document.getElementById(id)) return;
  const el = document.createElement('style');
  el.id = id;
  el.textContent = css;
  document.head.appendChild(el);
}
const CSS = `
.ino-card {
  display: flex; flex-direction: column;
  background: var(--surface); border: var(--border-w) solid var(--border);
  border-radius: var(--radius-lg); overflow: hidden;
  font-family: var(--font-sans); color: var(--text);
  transition: transform var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out), border-color var(--dur) var(--ease-out);
}
.ino-card--raised { border-color: transparent; box-shadow: var(--shadow-md); }
.ino-card--interactive { cursor: pointer; }
.ino-card--interactive:hover { transform: translateY(-3px); box-shadow: var(--shadow-lg); border-color: transparent; }
.ino-card--brand { background: var(--cyan-900); color: var(--mint); border-color: transparent; }
.ino-card--pad { padding: var(--space-6); gap: var(--space-3); }
.ino-card__media { display: block; width: 100%; }
.ino-card__title { font-family: var(--font-display); font-weight: 700; font-size: var(--text-lg); letter-spacing: -0.01em; color: var(--text-strong); margin: 0; }
.ino-card--brand .ino-card__title { color: #fff; }
`;
function Card({
  children,
  variant = 'default',
  interactive = false,
  padded = true,
  className = '',
  ...rest
}) {
  useInovaqoStyles('ino-card-css', CSS);
  const cls = ['ino-card', variant !== 'default' ? `ino-card--${variant}` : '', interactive ? 'ino-card--interactive' : '', padded ? 'ino-card--pad' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), children);
}
function CardTitle({
  children,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("h3", _extends({
    className: ['ino-card__title', className].filter(Boolean).join(' ')
  }, rest), children);
}
Object.assign(__ds_scope, { Card, CardTitle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useInovaqoStyles(id, css) {
  if (typeof document === 'undefined') return;
  if (document.getElementById(id)) return;
  const el = document.createElement('style');
  el.id = id;
  el.textContent = css;
  document.head.appendChild(el);
}
const CSS = `
.ino-field { display: flex; flex-direction: column; gap: 6px; font-family: var(--font-sans); }
.ino-field__label { font-size: var(--text-sm); font-weight: 700; color: var(--text-strong); }
.ino-field__req { color: var(--brand-press); margin-left: 2px; }
.ino-field__hint { font-size: var(--text-xs); color: var(--text-muted); }
.ino-field__error { font-size: var(--text-xs); color: var(--danger-500); font-weight: 600; }

.ino-input {
  display: flex; align-items: center; gap: 0.6em;
  background: var(--surface); border: var(--border-w) solid var(--border);
  border-radius: var(--radius-md); padding: 0 0.9em; height: 2.85em;
  transition: border-color var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out);
}
.ino-input:hover { border-color: var(--border-strong); }
.ino-input:focus-within { border-color: var(--brand); box-shadow: var(--shadow-glow); }
.ino-input--error { border-color: var(--danger-500); }
.ino-input--error:focus-within { box-shadow: 0 0 0 4px color-mix(in oklch, var(--danger-500) 30%, transparent); }
.ino-input__el {
  flex: 1; border: none; outline: none; background: transparent;
  font-family: var(--font-sans); font-size: var(--text-sm); font-weight: 500;
  color: var(--text-strong); min-width: 0; height: 100%;
}
.ino-input__el::placeholder { color: var(--text-subtle); font-weight: 500; }
.ino-input__affix { color: var(--text-muted); display: inline-flex; flex: none; }
.ino-input__affix svg { width: 1.1em; height: 1.1em; display: block; }
.ino-input--disabled { background: var(--surface-2); opacity: 0.7; pointer-events: none; }
`;
function Input({
  label,
  hint,
  error,
  required = false,
  iconLeft,
  iconRight,
  id,
  className = '',
  disabled = false,
  ...rest
}) {
  useInovaqoStyles('ino-input-css', CSS);
  const autoId = React.useId();
  const fieldId = id || autoId;
  return /*#__PURE__*/React.createElement("div", {
    className: ['ino-field', className].filter(Boolean).join(' ')
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "ino-field__label",
    htmlFor: fieldId
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "ino-field__req"
  }, "*")), /*#__PURE__*/React.createElement("div", {
    className: ['ino-input', error ? 'ino-input--error' : '', disabled ? 'ino-input--disabled' : ''].filter(Boolean).join(' ')
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    className: "ino-input__affix"
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    className: "ino-input__el",
    disabled: disabled,
    "aria-invalid": !!error
  }, rest)), iconRight && /*#__PURE__*/React.createElement("span", {
    className: "ino-input__affix"
  }, iconRight)), error ? /*#__PURE__*/React.createElement("span", {
    className: "ino-field__error"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "ino-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useInovaqoStyles(id, css) {
  if (typeof document === 'undefined') return;
  if (document.getElementById(id)) return;
  const el = document.createElement('style');
  el.id = id;
  el.textContent = css;
  document.head.appendChild(el);
}
const CSS = `
.ino-switch { display: inline-flex; align-items: center; gap: 0.6em; cursor: pointer; font-family: var(--font-sans); font-size: var(--text-sm); font-weight: 600; color: var(--text-strong); -webkit-tap-highlight-color: transparent; }
.ino-switch__track {
  position: relative; width: 2.75em; height: 1.6em; flex: none;
  background: var(--n-300); border-radius: var(--radius-pill);
  transition: background var(--dur) var(--ease-out);
}
.ino-switch__thumb {
  position: absolute; top: 0.2em; left: 0.2em; width: 1.2em; height: 1.2em;
  background: #fff; border-radius: 50%; box-shadow: var(--shadow-sm);
  transition: transform var(--dur) var(--ease-emph);
}
.ino-switch input { position: absolute; opacity: 0; width: 0; height: 0; }
.ino-switch input:checked + .ino-switch__track { background: var(--brand); }
.ino-switch input:checked + .ino-switch__track .ino-switch__thumb { transform: translateX(1.15em); }
.ino-switch input:focus-visible + .ino-switch__track { box-shadow: var(--shadow-glow); }
.ino-switch--disabled { opacity: 0.5; cursor: not-allowed; pointer-events: none; }
`;
function Switch({
  checked,
  defaultChecked,
  onChange,
  label,
  disabled = false,
  className = '',
  ...rest
}) {
  useInovaqoStyles('ino-switch-css', CSS);
  return /*#__PURE__*/React.createElement("label", {
    className: ['ino-switch', disabled ? 'ino-switch--disabled' : '', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    checked: checked,
    defaultChecked: defaultChecked,
    onChange: onChange,
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "ino-switch__track"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ino-switch__thumb"
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/site.jsx
try { (() => {
/* Inovaqo marketing homepage — composes DS primitives (Button, Card, Badge,
   Avatar, Input, GrowingLine, IconButton are injected as globals by index.html). */

/* ---- page-level CSS (hover/layout the tokens can't express inline) -------- */
(function injectSiteCSS() {
  if (document.getElementById('ino-site-css')) return;
  const s = document.createElement('style');
  s.id = 'ino-site-css';
  s.textContent = `
  .ino-site { font-family: var(--font-sans); color: var(--text); }
  .ino-wrap { max-width: 1200px; margin: 0 auto; padding: 0 32px; }
  .ino-eye { font-family: var(--font-mono); font-size: 12px; font-weight:700; letter-spacing:.16em; text-transform:uppercase; color: var(--brand); }
  .ino-h2 { font-family: var(--font-display); font-weight:700; font-size: clamp(30px,4vw,46px); line-height:1.04; letter-spacing:-0.02em; color: var(--text-strong); margin:14px 0 0; text-wrap:balance; }
  .scriptword { font-family: var(--font-display); font-style: italic; font-weight:700; color: var(--brand); }

  /* nav */
  .nav { position: sticky; top:0; z-index:50; backdrop-filter: blur(10px); background: color-mix(in oklch, var(--n-950) 72%, transparent); border-bottom:1px solid rgba(255,255,255,.07); }
  .nav__row { display:flex; align-items:center; justify-content:space-between; height:74px; }
  .nav__links { display:flex; gap:30px; align-items:center; }
  .nav__links a { font-size:14px; font-weight:600; color: #C7DAD6; }
  .nav__links a:hover { color:#fff; }
  @media (max-width: 860px){ .nav__links { display:none; } }

  /* hero */
  .hero { position:relative; background: var(--n-950); color:#fff; overflow:hidden; padding: 76px 0 0; }
  .hero::before { content:""; position:absolute; top:-30%; left:50%; transform:translateX(-50%); width:900px; height:700px; background: radial-gradient(closest-side, rgba(16,213,200,.20), transparent 70%); pointer-events:none; }
  .hero__grid { position:relative; display:grid; grid-template-columns: 1.15fr .85fr; gap:48px; align-items:center; }
  @media (max-width: 920px){ .hero__grid { grid-template-columns:1fr; gap:28px; } }
  .hero h1 { font-family: var(--font-display); font-weight:700; font-size: clamp(40px,6vw,74px); line-height:1.04; letter-spacing:-0.03em; margin:18px 0 0; color:#fff; text-wrap:balance; }
  .hero p.lead { font-size: clamp(16px,1.4vw,19px); line-height:1.6; color:#A9C3BE; max-width:46ch; margin:26px 0 0; }
  .hero__cta { display:flex; gap:14px; margin-top:30px; flex-wrap:wrap; }
  .hero__stats { display:flex; gap:38px; margin-top:46px; padding-bottom:8px; flex-wrap:wrap; }
  .stat .n { font-family: var(--font-display); font-weight:700; font-size:34px; color:#fff; letter-spacing:-0.02em; }
  .stat .l { font-size:12.5px; color:#7E948F; margin-top:2px; }
  .hero__panel { position:relative; aspect-ratio: 4/5; border-radius: var(--radius-xl); background:
      var(--gradient-deep);
      border:1px solid rgba(16,213,200,.18); overflow:hidden; box-shadow: var(--shadow-xl); }
  .hero__panel .mark { position:absolute; inset:0; display:grid; place-items:center; }
  .hero__panel .mark img { width:62%; opacity:.9; }
  .hero__panel .chip { position:absolute; left:18px; bottom:18px; right:18px; display:flex; gap:10px; align-items:center; background: rgba(9,25,27,.55); border:1px solid rgba(255,255,255,.08); border-radius: var(--radius-md); padding:12px 14px; backdrop-filter: blur(6px); }
  .hero__panel .chip .t { font-size:13px; color:#CFE7E2; font-weight:600; }
  .hero__panel .chip .s { font-size:11px; color:#7E948F; }

  /* sections */
  .section { padding: 88px 0; }
  .section--alt { background: var(--surface-2); }
  .section__head { max-width: 640px; }

  .svc-grid { display:grid; grid-template-columns: repeat(3,1fr); gap:20px; margin-top:44px; }
  @media (max-width: 920px){ .svc-grid { grid-template-columns:1fr; } }
  .svc-ico { width:50px; height:50px; border-radius: var(--radius-md); display:grid; place-items:center; background: var(--brand-soft); color: var(--brand-press); }
  .svc-ico svg { width:24px; height:24px; }
  .svc h3 { font-family: var(--font-display); font-weight:700; font-size:21px; letter-spacing:-0.01em; color: var(--text-strong); margin:0; }
  .svc p { font-size:14.5px; line-height:1.6; color: var(--text-muted); margin:0; }
  .svc .more { font-family: var(--font-mono); font-size:11px; font-weight:700; letter-spacing:.1em; text-transform:uppercase; color: var(--brand-press); display:inline-flex; gap:6px; align-items:center; margin-top:auto; }
  .svc .more svg { width:14px; height:14px; }
  .svc h3 + p { margin-top:2px; }

  .cap-row { display:flex; flex-wrap:wrap; gap:10px; margin-top:26px; }

  .work-grid { display:grid; grid-template-columns: repeat(3,1fr); gap:20px; margin-top:44px; }
  @media (max-width: 920px){ .work-grid { grid-template-columns:1fr; } }
  .work__thumb { aspect-ratio: 16/11; border-radius: var(--radius-md); position:relative; overflow:hidden; display:grid; place-items:center; border:1px solid rgba(255,255,255,.06); }
  .work__thumb img { width:46%; opacity:.85; }
  .work__thumb .ph { position:absolute; bottom:10px; right:12px; font-family:var(--font-mono); font-size:9.5px; letter-spacing:.1em; color: rgba(255,255,255,.4); text-transform:uppercase; }
  .work h3 { font-family: var(--font-display); font-weight:700; font-size:18px; color: var(--text-strong); margin:14px 0 0; }
  .work .tags { display:flex; gap:6px; margin-top:8px; }

  /* mission band */
  .mission { position:relative; background: var(--cyan-900); color:#fff; overflow:hidden; padding: 90px 0; }
  .mission__stmt { font-family: var(--font-display); font-weight:600; font-size: clamp(26px,3.4vw,42px); line-height:1.26; letter-spacing:-0.01em; max-width: 17ch; margin:18px 0 0; }
  .mission__stmt em { font-family: var(--font-display); font-style:italic; font-weight:700; margin-right:.04em; }
  .mission__stmt .c { color: var(--cyan-400); } .mission__stmt .w { color:#fff; }

  /* process */
  .proc { position:relative; }
  .proc__line { position:relative; height:200px; margin-top:30px; }
  .proc__line svg { position:absolute; inset:0; width:100%; height:100%; }
  .proc__node { fill: var(--surface); stroke: var(--brand); stroke-width:2.5; }
  .proc__lab { position:absolute; transform:translateX(-50%); text-align:center; width:160px; }
  .proc__lab .k { font-family:var(--font-mono); font-size:11px; font-weight:700; letter-spacing:.1em; text-transform:uppercase; color: var(--text-strong); }
  .proc__lab .d { font-size:12px; color: var(--text-muted); margin-top:3px; }

  /* contact */
  .contact { background: var(--n-950); color:#fff; padding: 86px 0; }
  .contact__grid { display:grid; grid-template-columns: 1fr 1fr; gap:54px; align-items:center; }
  @media (max-width: 920px){ .contact__grid { grid-template-columns:1fr; } }
  .contact h2 { color:#fff; }
  .contact__form { background: #0E2123; border:1px solid rgba(255,255,255,.08); border-radius: var(--radius-xl); padding:28px; display:grid; gap:16px; box-shadow: var(--shadow-xl); }
  .contact__form .two { display:grid; grid-template-columns:1fr 1fr; gap:14px; }
  .contact__form .ino-field__label { color:#fff; }
  .contact__form .ino-field__hint { color:#8FA8A4; }
  .sent { display:grid; gap:8px; place-items:center; text-align:center; padding:30px 10px; }
  .sent .ok { width:54px;height:54px;border-radius:50%; background: var(--brand); color: var(--n-950); display:grid; place-items:center; }
  .sent .ok svg { width:26px; height:26px; }

  /* footer */
  .footer { background: var(--n-950); color:#9FB3AF; border-top:1px solid rgba(255,255,255,.07); padding: 40px 0; }
  .footer__row { display:flex; align-items:center; justify-content:space-between; gap:20px; flex-wrap:wrap; }
  .footer__social { display:flex; gap:8px; }
  `;
  document.head.appendChild(s);
})();
const LOGO = '../../assets/inovaqo-logo-white.svg';
const LOGO_CYAN = '../../assets/inovaqo-logo.svg';

/* ---- icons (Lucide-style, 24px stroke) ----------------------------------- */
const I = {
  brain: /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 5a3 3 0 1 0-5.997.142 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 5a3 3 0 1 1 5.997.142 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"
  })),
  spark: /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9.94 14.06 7 21l5-3 5 3-2.94-6.94"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 2v6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m4.9 9 4.6 2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m19.1 9-4.6 2"
  })),
  phone: /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "5",
    y: "2",
    width: "14",
    height: "20",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 18h.01"
  })),
  chart: /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 3v16a2 2 0 0 0 2 2h16"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m19 9-5 5-4-4-3 3"
  })),
  arrow: /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 6l6 6-6 6"
  })),
  check: /*#__PURE__*/React.createElement("svg", {
    width: "26",
    height: "26",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  })),
  x: /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  }))
};
const social = {
  gh: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.34 1.12 2.91.85.09-.66.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.05 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.4 9.4 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.92-2.34 4.79-4.57 5.04.36.32.68.94.68 1.9v2.82c0 .27.18.6.69.49A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z"
  })),
  in: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6 0h3.8v1.64h.05c.53-1 1.83-2.06 3.77-2.06C20.4 8.58 22 10.3 22 13.9V21h-4v-6.2c0-1.48-.03-3.38-2.06-3.38-2.06 0-2.38 1.6-2.38 3.27V21H9V9Z"
  })),
  x2: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18.9 2H22l-7.5 8.6L23 22h-6.8l-5.3-7-6.1 7H1.6l8-9.2L1 2h7l4.8 6.4L18.9 2Zm-2.4 18h1.9L7.6 4H5.6l10.9 16Z"
  }))
};
function Nav() {
  return /*#__PURE__*/React.createElement("nav", {
    className: "nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ino-wrap nav__row"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top"
  }, /*#__PURE__*/React.createElement("img", {
    src: LOGO,
    alt: "Inovaqo",
    style: {
      height: 22,
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "nav__links"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#services"
  }, "Services"), /*#__PURE__*/React.createElement("a", {
    href: "#work"
  }, "Work"), /*#__PURE__*/React.createElement("a", {
    href: "#mission"
  }, "Mission"), /*#__PURE__*/React.createElement("a", {
    href: "#process"
  }, "Process"), /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    size: "sm",
    iconRight: I.arrow,
    as: "a",
    href: "#contact"
  }, "Start a project"))));
}
function Hero() {
  return /*#__PURE__*/React.createElement("header", {
    className: "hero",
    id: "top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ino-wrap hero__grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "ino-eye"
  }, "Software Studio"), /*#__PURE__*/React.createElement("h1", null, "We engineer software that ", /*#__PURE__*/React.createElement("span", {
    className: "scriptword"
  }, "makes a difference.")), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "Smart web and mobile apps for teams that want to move fast and build right. Some of it runs on AI. Some turns messy data into insight. All of it ships sharp, scalable, and real."), /*#__PURE__*/React.createElement("div", {
    className: "hero__cta"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconRight: I.arrow,
    as: "a",
    href: "#contact"
  }, "Start a project"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    as: "a",
    href: "#work",
    style: {
      color: '#fff'
    }
  }, "See our work")), /*#__PURE__*/React.createElement("div", {
    className: "hero__stats"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "n"
  }, "40+"), /*#__PURE__*/React.createElement("div", {
    className: "l"
  }, "Products shipped")), /*#__PURE__*/React.createElement("div", {
    className: "stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "n"
  }, "9"), /*#__PURE__*/React.createElement("div", {
    className: "l"
  }, "Years building")), /*#__PURE__*/React.createElement("div", {
    className: "stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "n"
  }, "98%"), /*#__PURE__*/React.createElement("div", {
    className: "l"
  }, "Client retention")))), /*#__PURE__*/React.createElement("div", {
    className: "hero__panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mark"
  }, /*#__PURE__*/React.createElement("img", {
    src: LOGO,
    alt: ""
  })), /*#__PURE__*/React.createElement("div", {
    className: "chip"
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "solid"
  }, "AI / ML"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "t"
  }, "Insight engine"), /*#__PURE__*/React.createElement("div", {
    className: "s"
  }, "Live \xB7 processing 2.4M events/day"))))), /*#__PURE__*/React.createElement(GrowingLine, {
    variant: "loop",
    height: 140,
    style: {
      marginTop: 30,
      display: 'block'
    }
  }));
}
function Services() {
  const items = [{
    ic: I.brain,
    t: 'AI & Machine Learning',
    d: 'Models that read your data, predict, and automate — built into the product, not bolted on.'
  }, {
    ic: I.chart,
    t: 'Data → Insight',
    d: 'We turn messy, scattered data into dashboards and signals your team can actually act on.'
  }, {
    ic: I.phone,
    t: 'Web & Mobile Apps',
    d: 'Fast, accessible, beautifully engineered apps across web, iOS, and Android.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "services"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ino-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section__head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ino-eye"
  }, "What we do"), /*#__PURE__*/React.createElement("h2", {
    className: "ino-h2"
  }, "Clear communication, strong engineering.")), /*#__PURE__*/React.createElement("div", {
    className: "svc-grid"
  }, items.map((s, i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    variant: "raised",
    interactive: true,
    className: "svc"
  }, /*#__PURE__*/React.createElement("div", {
    className: "svc-ico"
  }, s.ic), /*#__PURE__*/React.createElement("h3", null, s.t), /*#__PURE__*/React.createElement("p", null, s.d), /*#__PURE__*/React.createElement("span", {
    className: "more"
  }, "Learn more ", I.arrow)))), /*#__PURE__*/React.createElement("div", {
    className: "cap-row"
  }, ['Discovery', 'Product design', 'Cloud & DevOps', 'LLM integration', 'Data pipelines', 'QA & testing', 'Maintenance'].map(c => /*#__PURE__*/React.createElement(Badge, {
    key: c,
    variant: "outline"
  }, c)))));
}
function Work() {
  const items = [{
    t: 'Fleetly',
    tags: ['Mobile', 'Data'],
    grad: 'linear-gradient(145deg,#0E2C2D,#0A3C40)'
  }, {
    t: 'Northwind AI',
    tags: ['AI / ML', 'Web'],
    grad: 'var(--gradient-brand)'
  }, {
    t: 'Ledgerline',
    tags: ['Fintech', 'Web'],
    grad: 'linear-gradient(145deg,#09191B,#0E2C2D)'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "section section--alt",
    id: "work"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ino-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section__head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ino-eye"
  }, "Selected work"), /*#__PURE__*/React.createElement("h2", {
    className: "ino-h2"
  }, "Products we made sharp, scalable, and real.")), /*#__PURE__*/React.createElement("div", {
    className: "work-grid"
  }, items.map((w, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "work"
  }, /*#__PURE__*/React.createElement("div", {
    className: "work__thumb",
    style: {
      background: w.grad
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: LOGO,
    alt: ""
  }), /*#__PURE__*/React.createElement("span", {
    className: "ph"
  }, "Project preview")), /*#__PURE__*/React.createElement("h3", null, w.t), /*#__PURE__*/React.createElement("div", {
    className: "tags"
  }, w.tags.map(t => /*#__PURE__*/React.createElement(Badge, {
    key: t,
    variant: "soft"
  }, t))))))));
}
function Mission() {
  return /*#__PURE__*/React.createElement("section", {
    className: "mission",
    id: "mission"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ino-wrap"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ino-eye",
    style: {
      color: 'var(--cyan-300)'
    }
  }, "Brand Mission"), /*#__PURE__*/React.createElement("p", {
    className: "mission__stmt"
  }, "To provide ", /*#__PURE__*/React.createElement("em", {
    className: "c"
  }, "intuitive"), " and ", /*#__PURE__*/React.createElement("em", {
    className: "w"
  }, "efficient"), " tools that streamline workflows, enhance focus, and optimise time.")), /*#__PURE__*/React.createElement(GrowingLine, {
    variant: "wave",
    height: 90,
    style: {
      marginTop: 36
    }
  }));
}
function Process() {
  const nodes = [{
    x: 8,
    y: 150,
    k: 'Discovery',
    d: 'Scope the real problem'
  }, {
    x: 36,
    y: 62,
    k: 'Design',
    d: 'Shape the system'
  }, {
    x: 66,
    y: 120,
    k: 'Engineering',
    d: 'Build it right'
  }, {
    x: 93,
    y: 80,
    k: 'Launch',
    d: 'Ship & scale'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "process"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ino-wrap proc"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section__head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ino-eye"
  }, "How we work"), /*#__PURE__*/React.createElement("h2", {
    className: "ino-h2"
  }, "No bloated process. No buzzword soup.")), /*#__PURE__*/React.createElement("div", {
    className: "proc__line"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 1000 200",
    preserveAspectRatio: "none",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    className: "ino-line__path ino-line__path--flow",
    d: "M 80 150 C 220 150, 260 62, 360 62 C 470 62, 520 120, 660 120 C 800 120, 850 80, 930 80",
    style: {
      strokeWidth: 2.5
    }
  })), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 1000 200",
    preserveAspectRatio: "none",
    fill: "none"
  }, nodes.map((n, i) => /*#__PURE__*/React.createElement("circle", {
    key: i,
    className: "proc__node",
    cx: n.x * 10,
    cy: n.y,
    r: "7",
    vectorEffect: "non-scaling-stroke"
  }))), nodes.map((n, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "proc__lab",
    style: {
      left: `${n.x}%`,
      top: n.y > 110 ? `${n.y + 16}px` : `${n.y - 46}px`
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, n.k), /*#__PURE__*/React.createElement("div", {
    className: "d"
  }, n.d))))));
}
function Contact() {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    className: "contact",
    id: "contact"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ino-wrap contact__grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "ino-eye"
  }, "Start a project"), /*#__PURE__*/React.createElement("h2", {
    className: "ino-h2"
  }, "Tell us what you're building."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: '#A9C3BE',
      fontSize: 16,
      lineHeight: 1.6,
      maxWidth: '40ch',
      marginTop: 16
    }
  }, "Whatever you're building, we're here to make it sharp, scalable, and real. We'll reply within one business day."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Sara Khan",
    status: "online"
  }), /*#__PURE__*/React.createElement(Avatar, {
    name: "Amir Patel"
  }), /*#__PURE__*/React.createElement(Avatar, {
    name: "Lina Vo"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: '#7E948F'
    }
  }, "Your team, on call."))), /*#__PURE__*/React.createElement("div", {
    className: "contact__form"
  }, sent ? /*#__PURE__*/React.createElement("div", {
    className: "sent"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ok"
  }, I.check), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 22,
      color: '#fff'
    }
  }, "Message sent"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#A9C3BE',
      fontSize: 14
    }
  }, "Thanks \u2014 we'll be in touch shortly."), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    style: {
      color: '#fff',
      marginTop: 6
    },
    onClick: () => setSent(false)
  }, "Send another")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "two"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Name",
    placeholder: "Jane Doe"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Company",
    placeholder: "Acme Inc."
  })), /*#__PURE__*/React.createElement(Input, {
    label: "Work email",
    type: "email",
    placeholder: "jane@acme.com",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "What are you building?",
    placeholder: "A mobile app with AI at the core\u2026"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconRight: I.arrow,
    onClick: () => setSent(true)
  }, "Send message")))));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ino-wrap footer__row"
  }, /*#__PURE__*/React.createElement("img", {
    src: LOGO,
    alt: "Inovaqo",
    style: {
      height: 20
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13
    }
  }, "\xA9 2026 Inovaqo. Built sharp, scalable, and real."), /*#__PURE__*/React.createElement("div", {
    className: "footer__social"
  }, /*#__PURE__*/React.createElement(IconButton, {
    variant: "ghost",
    label: "GitHub",
    style: {
      color: '#9FB3AF'
    }
  }, social.gh), /*#__PURE__*/React.createElement(IconButton, {
    variant: "ghost",
    label: "LinkedIn",
    style: {
      color: '#9FB3AF'
    }
  }, social.in), /*#__PURE__*/React.createElement(IconButton, {
    variant: "ghost",
    label: "X",
    style: {
      color: '#9FB3AF'
    }
  }, social.x2))));
}
function App() {
  return /*#__PURE__*/React.createElement("div", {
    className: "ino-site"
  }, /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Services, null), /*#__PURE__*/React.createElement(Work, null), /*#__PURE__*/React.createElement(Mission, null), /*#__PURE__*/React.createElement(Process, null), /*#__PURE__*/React.createElement(Contact, null), /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/site.jsx", error: String((e && e.message) || e) }); }

__ds_ns.GrowingLine = __ds_scope.GrowingLine;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CardTitle = __ds_scope.CardTitle;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Switch = __ds_scope.Switch;

})();
