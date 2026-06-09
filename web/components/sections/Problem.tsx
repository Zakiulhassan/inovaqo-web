import { FadeUp } from '@/components/ui/FadeUp';

const painPoints = [
  {
    title: 'Moving too slowly',
    desc: 'Your competitors are shipping. Every week without a working product is a week of lost ground you can\'t get back.',
  },
  {
    title: 'Tech debt that compounds',
    desc: 'Quick fixes become expensive infrastructure. A rushed MVP becomes a system nobody wants to touch six months later.',
  },
  {
    title: "Data you can't use",
    desc: "You're sitting on insights you can't access. Pipelines that don't run. Analytics that don't answer the questions that matter.",
  },
];

export function Problem() {
  return (
    <section className="problem" id="problem">
      <div className="ino-wrap">
        <FadeUp>
          <span className="ino-eye">The Real Cost of the Wrong Partner</span>
          <h2 className="ino-h2">Most teams don&apos;t fail because the idea was bad.</h2>
          <p className="problem__lead">
            They fail because they couldn&apos;t move fast enough, couldn&apos;t find the right technical partner, or wasted months building the wrong thing. Sound familiar?
          </p>
        </FadeUp>
        <div className="problem__cards">
          {painPoints.map((p, i) => (
            <FadeUp key={p.title} delay={0.1 * (i + 1)}>
              <div className="pain-card">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
