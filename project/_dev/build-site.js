// Build ui_kits/website/index.html by inlining the DS component sources + site.jsx
// into a single self-contained inline-babel page. Run via run_script.
const COMPONENTS = [
  'components/buttons/Button.jsx',
  'components/buttons/IconButton.jsx',
  'components/display/Badge.jsx',
  'components/display/Avatar.jsx',
  'components/display/Card.jsx',
  'components/forms/Input.jsx',
  'components/brand/GrowingLine.jsx',
];
let blocks = '';
let allNames = [];
for (const path of COMPONENTS) {
  let t = await readFile(path);
  const names = [...t.matchAll(/export\s+function\s+(\w+)/g)].map(m => m[1]);
  allNames.push(...names);
  t = t.replace(/^\s*import[^\n]*\n/gm, '').replace(/^\s*export\s+/gm, '');
  blocks += `\n/* ===== ${path} ===== */\nObject.assign(__INO, (function(){\n${t}\nreturn {${names.join(',')}};\n})());\n`;
}
const site = await readFile('ui_kits/website/site.jsx');
const destructure = `const {${allNames.join(',')}} = __INO;\n`;
const html = `<!-- @dsCard group="Website" viewport="1440x1000" name="Inovaqo — Marketing site" subtitle="Homepage: hero, services, work, mission, process, contact" -->
<!-- @startingPoint section="Website" subtitle="Full marketing homepage" viewport="1440x1000" -->
<!doctype html><html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Inovaqo — We engineer software that makes a difference</title>
<link rel="stylesheet" href="../../styles.css">
<style>
  html { scroll-behavior: smooth; }
  body { margin: 0; background: var(--bg); }
  #root:empty::after { content: "Loading\\2026"; display: grid; place-items: center; height: 100vh; font-family: var(--font-mono); color: var(--text-subtle); }
</style></head>
<body>
  <div id="root"></div>
  <script src="https://unpkg.com/react@18.3.1/umd/react.development.js" integrity="sha384-hD6/rw4ppMLGNu3tX5cjIb+uRZ7UkRJ6BPkLpg4hAu/6onKUg4lLsHAs9EBPT82L" crossorigin="anonymous"></script>
  <script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js" integrity="sha384-u6aeetuaXnQ38mYT8rp6sbXaQe3NL9t+IBXmnYxwkUI2Hw4bsp2Wvmx4yRQF1uAm" crossorigin="anonymous"></script>
  <script src="https://unpkg.com/@babel/standalone@7.29.0/babel.min.js" integrity="sha384-m08KidiNqLdpJqLq95G/LEi8Qvjl/xUYll3QILypMoQ65QorJ9Lvtp2RXYGBFj1y" crossorigin="anonymous"></script>
  <!-- GENERATED from site.jsx + DS component sources by _dev/build-site.js. Edit site.jsx, then re-run the build. -->
  <script type="text/babel" data-presets="react">
  const __INO = {};
  ${blocks}
  ${destructure}
  ${site}
  </script>
</body></html>
`;
await saveFile('ui_kits/website/index.html', html);
log('wrote index.html, length', html.length, '| components:', allNames.join(','));
