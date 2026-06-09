import { FadeUp } from '@/components/ui/FadeUp';

const testimonials = [
  {
    quote: "The team turned a complex, ambitious vision into a working reality. I'm genuinely grateful for their commitment and clarity throughout.",
    name: 'Albert',
    role: 'Founder, Insight LSAT',
  },
  {
    quote: 'Exceptional technical solutions that streamlined our processes end-to-end. Always responsive, always reliable. We couldn\'t be happier.',
    name: 'Amir Jerbi',
    role: 'Co-Founder & CTO, Aqua Security',
  },
  {
    quote: 'Very professional developers who bring genuine passion to the work. It was a pleasure — and I look forward to building together again.',
    name: 'Gordon Albrecht',
    role: 'Office Manager, Deutscher Bundestag',
  },
];

const logos = [
  'Aqua Security',
  'Insight LSAT',
  'Deutscher Bundestag',
  'SoftHau',
  'Tøkni Tænastan',
  'Trcked Up LLC',
];

export function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="ino-wrap">
        <FadeUp>
          <div className="testimonials__head">
            <span className="ino-eye">Client Results</span>
            <h2 className="ino-h2">Don&apos;t take our word for it.</h2>
            <p className="testimonials__sub">98% satisfaction rate across 75+ verified client engagements.</p>
          </div>
        </FadeUp>
        <div className="testi-grid">
          {testimonials.map((t, i) => (
            <FadeUp key={t.name} delay={0.1 * (i + 1)}>
              <div className="testi-card testimonial-card">
                <div className="testi-card__quote-mark">&ldquo;</div>
                <p className="testi-card__text">{t.quote}</p>
                <div className="testi-card__author">
                  <span className="testi-card__name">{t.name}</span>
                  <span className="testi-card__role">{t.role}</span>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
        <FadeUp delay={0.3}>
          <div className="logo-strip">
            <div className="logo-strip__list">
              {logos.map((l) => (
                <span key={l} className="logo-strip__item">{l}</span>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
