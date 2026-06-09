import { FadeUp } from '@/components/ui/FadeUp';

const cases = [
  {
    id: 'aqua',
    tag: 'Cloud Security',
    title: 'Aqua CSPM',
    problem: 'A cloud security startup needed to move from prototype to enterprise-ready product — in 6 weeks.',
    outcome: 'Shipped to 12 enterprise clients. 60% reduction in manual audit time.',
    stack: ['AWS', 'Python', 'React', 'Terraform'],
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 'lsat',
    tag: 'EdTech / Legal',
    title: 'Insight LSAT',
    problem: 'A legal education platform needed AI-powered adaptive testing that felt human, not robotic.',
    outcome: '3.2x improvement in student score outcomes. 45,000 active users in year one.',
    stack: ['OpenAI', 'Next.js', 'PostgreSQL', 'GCP'],
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 'lexgen',
    tag: 'LegalTech / AI',
    title: 'Lexgen AI',
    problem: 'A legal firm wanted to cut 80% of document drafting time without sacrificing compliance.',
    outcome: 'Document generation in 90 seconds vs. 4 hours. $2M in attorney time recaptured annually.',
    stack: ['LangChain', 'GPT-4', 'FastAPI', 'Azure'],
    img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80&auto=format&fit=crop',
  },
];

export function CaseStudies() {
  return (
    <section className="case-studies" id="case-studies">
      <div className="ino-wrap">
        <FadeUp>
          <div className="case-studies__head">
            <span className="ino-eye">Selected Work</span>
            <h2 className="ino-h2">Work that speaks for itself.</h2>
          </div>
        </FadeUp>
        <div className="cs-grid">
          {cases.map((c, i) => (
            <FadeUp key={c.id} delay={0.1 * (i + 1)}>
              <div className="cs-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={c.img}
                  alt={c.title}
                  className="cs-img"
                />
                <span className="cs-tag">{c.tag}</span>
                <h3>{c.title}</h3>
                <p className="cs-problem">{c.problem}</p>
                <div className="cs-outcome">{c.outcome}</div>
                <div className="cs-stack">
                  {c.stack.map(tech => (
                    <span key={tech} className="cs-stack-chip">{tech}</span>
                  ))}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
