const ITEMS = [
  'AI Transformation',
  'Cloud Architecture',
  'Product Engineering',
  'Data Science & ETL',
  'DevOps',
  'Custom Software',
  'AI Transformation',
  'Cloud Architecture',
  'Product Engineering',
  'Data Science & ETL',
  'DevOps',
  'Custom Software',
];

export function Marquee() {
  return (
    <div className="marquee-band" aria-hidden="true">
      <div className="marquee-track">
        {[0, 1].map(n => (
          <span key={n} className="marquee-row">
            {ITEMS.map((item, i) => (
              <span key={i} className="marquee-item">
                <span className="marquee-sep">✦</span>
                {item}
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}
