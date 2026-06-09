import { FadeUp } from '@/components/ui/FadeUp';

const points = [
  {
    icon: '◎',
    title: 'Strategy before code',
    desc: "We ask hard questions first. Most agencies write code before understanding the problem. We don't ship a single line until we're aligned on what success looks like.",
  },
  {
    icon: '⬡',
    title: 'AI + Cloud + Product — together',
    desc: "You don't need three vendors and a system integrator. We hold the full stack: intelligence layer, infrastructure, and user experience. One team. One outcome.",
  },
  {
    icon: '◈',
    title: 'Senior engineers, not account managers',
    desc: 'The people you meet are the people who build. No handoff to junior devs. No offshore mystery team. The engineers on your calls are the ones writing your code.',
  },
  {
    icon: '◇',
    title: 'Built to scale — from day one',
    desc: "We architect for what you'll need at 10x, not just what you need today. Your codebase won't become technical debt in six months.",
  },
];

export function WhyInovaqo() {
  return (
    <section className="why-ino" id="why">
      <div className="ino-wrap">
        <FadeUp>
          <span className="ino-eye">Why Inovaqo</span>
          <h2 className="ino-h2">Built different. On purpose.</h2>
          <p className="why-ino__sub">
            Most software agencies look the same. Here&apos;s what we do differently — and why it matters for your product.
          </p>
        </FadeUp>
        <div className="why-grid">
          {points.map((p, i) => (
            <FadeUp key={p.title} delay={0.1 * (i + 1)}>
              <div className="why-card">
                <span className="why-card__icon">{p.icon}</span>
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
