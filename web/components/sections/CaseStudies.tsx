const ArrowIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6"/>
  </svg>
);

const projects = [
  {
    tag: 'Cloud Security · AI',
    title: 'Aqua CSPM',
    desc: 'A real-time cloud security posture platform that identifies, prioritizes, and remediates critical risks across cloud infrastructure — built for enterprise scale.',
  },
  {
    tag: 'EdTech · AI',
    title: 'Insight LSAT',
    desc: 'A next-generation LSAT preparation platform designed to engage law school aspirants with intelligent, adaptive learning experiences.',
  },
  {
    tag: 'LegalTech · LLMs',
    title: 'Lexgen',
    desc: 'An AI-powered legal assistant that transforms compliance and contract workflows for Australian law — reducing manual review time dramatically.',
  },
];

export function CaseStudies() {
  return (
    <section className="case-studies" id="case-studies">
      <div className="ino-wrap">
        <div className="case-studies__head">
          <span className="ino-eye">Selected Work</span>
          <h2 className="ino-h2">Work that speaks for itself.</h2>
        </div>
        <div className="cs-grid">
          {projects.map((p) => (
            <div key={p.title} className="cs-card">
              <span className="cs-card__tag">{p.tag}</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <span className="cs-card__link">
                View case study <ArrowIcon />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
