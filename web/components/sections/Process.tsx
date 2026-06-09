const steps = [
  {
    num: '01',
    title: 'Listen',
    desc: 'We ask the right questions, understand what you need, and get honest about what\'s feasible — before writing a single line of code.',
  },
  {
    num: '02',
    title: 'Plan',
    desc: 'You get a clear picture of timeline, scope, and cost. No vague estimates. No hidden surprises later.',
  },
  {
    num: '03',
    title: 'Build',
    desc: 'Strong engineering, daily communication, and consistent delivery. You stay in the loop at every step.',
  },
  {
    num: '04',
    title: 'Grow',
    desc: 'The systems we build are meant to scale. We think about growth, maintenance, and your team from day one.',
  },
];

export function Process() {
  return (
    <section className="process" id="process">
      <div className="ino-wrap">
        <span className="ino-eye">How We Work</span>
        <h2 className="ino-h2">No black boxes. No surprises.</h2>
        <p className="process__sub">
          We work the way you&apos;d want a team to work — clear, honest, and focused on what actually moves things forward.
        </p>
        <div className="proc-grid">
          {steps.map((s) => (
            <div key={s.num} className="proc-card">
              <div className="proc-card__num">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
