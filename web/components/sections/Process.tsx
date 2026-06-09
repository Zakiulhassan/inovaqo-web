const nodes = [
  { x: 8,  y: 150, k: 'Discovery',   d: 'Scope the real problem' },
  { x: 36, y: 62,  k: 'Design',      d: 'Shape the system' },
  { x: 66, y: 120, k: 'Engineering', d: 'Build it right' },
  { x: 93, y: 80,  k: 'Launch',      d: 'Ship & scale' },
];

export function Process() {
  return (
    <section className="section" id="process">
      <div className="ino-wrap proc">
        <div className="section__head">
          <span className="ino-eye">How we work</span>
          <h2 className="ino-h2">No bloated process. No buzzword soup.</h2>
        </div>
        <div className="proc__line">
          <svg viewBox="0 0 1000 200" preserveAspectRatio="none" fill="none">
            <path
              className="ino-line__path ino-line__path--flow"
              d="M 80 150 C 220 150, 260 62, 360 62 C 470 62, 520 120, 660 120 C 800 120, 850 80, 930 80"
              style={{ strokeWidth: 2.5 }}
            />
          </svg>
          <svg viewBox="0 0 1000 200" preserveAspectRatio="none" fill="none">
            {nodes.map((n) => (
              <circle
                key={n.k}
                className="proc__node"
                cx={n.x * 10}
                cy={n.y}
                r="7"
                vectorEffect="non-scaling-stroke"
              />
            ))}
          </svg>
          {nodes.map((n) => (
            <div
              key={n.k}
              className="proc__lab"
              style={{
                left: `${n.x}%`,
                top: n.y > 110 ? `${n.y + 16}px` : `${n.y - 46}px`,
              }}
            >
              <div className="k">{n.k}</div>
              <div className="d">{n.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
