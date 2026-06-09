import { FadeUp } from '@/components/ui/FadeUp';

const steps = [
  {
    num: '01',
    title: 'Diagnose',
    desc: "We go deep on your product, your constraints, and your users. We're looking for the real problem — not the stated one. This is where most projects fail, so we take our time here.",
    tag: 'Week 1',
  },
  {
    num: '02',
    title: 'Architect',
    desc: "You get a clear technical blueprint: stack decisions, timeline, scope, cost. No vague estimates. No \"it depends.\" You'll know exactly what you're buying before we build anything.",
    tag: 'Week 1–2',
  },
  {
    num: '03',
    title: 'Build',
    desc: 'Strong engineering, daily async updates, and consistent delivery. You see progress every week — not just at the end. No black boxes. No surprises.',
    tag: 'Ongoing',
  },
  {
    num: '04',
    title: 'Scale',
    desc: "The systems we build are designed to grow with you. After launch, we're available for support, iteration, and the next phase of your product — with full context already in hand.",
    tag: 'Post-launch',
  },
];

export function Process() {
  return (
    <section className="process" id="process">
      <div className="ino-wrap">
        <FadeUp>
          <span className="ino-eye">How We Work</span>
          <h2 className="ino-h2">The Build Clarity Framework</h2>
          <p className="process__sub">
            A structured approach that eliminates ambiguity, reduces risk, and keeps your team in the loop at every step.
          </p>
        </FadeUp>
        <div className="proc-grid">
          {steps.map((s, i) => (
            <FadeUp key={s.num} delay={0.1 * (i + 1)}>
              <div className="proc-card process-card">
                <div className="proc-card__header">
                  <div className="proc-card__num">{s.num}</div>
                  <span className="proc-card__tag">{s.tag}</span>
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
