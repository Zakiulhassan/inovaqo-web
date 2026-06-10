const ITEMS = [
  'Generative AI',
  'AI Agents',
  'LLM Integration',
  'Cloud Architecture',
  'Product Engineering',
  'RAG Pipelines',
  'Data Science & ETL',
  'MLOps',
  'Generative AI',
  'AI Agents',
  'LLM Integration',
  'Cloud Architecture',
  'Product Engineering',
  'RAG Pipelines',
  'Data Science & ETL',
  'MLOps',
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
