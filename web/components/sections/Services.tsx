import { FadeUp } from '@/components/ui/FadeUp';

const services = [
  {
    num: '01',
    title: 'AI Transformation',
    desc: 'We help you go beyond the hype. Whether it\'s custom models, intelligent automation, or AI-powered features your users will actually notice — we build for real outcomes, not demos.',
    tag: 'Strategy + Build',
  },
  {
    num: '02',
    title: 'Data Science & ETL',
    desc: 'We turn messy, siloed data into a competitive advantage. Clean pipelines, advanced analytics, and structured systems that give your team answers — not just numbers.',
    tag: 'Data + Analytics',
  },
  {
    num: '03',
    title: 'Cloud Architecture & DevOps',
    desc: "Infrastructure that doesn't crack under pressure. We build secure, scalable cloud-native systems that grow with your product and don't become your biggest operational risk.",
    tag: 'Infrastructure',
  },
  {
    num: '04',
    title: 'Custom Web & Mobile Apps',
    desc: 'From MVP to market-ready. We design and build products that look sharp, work everywhere, and scale with your growth — without rewriting everything six months in.',
    tag: 'Design + Dev',
  },
];

export function Services() {
  return (
    <section className="services" id="services">
      <div className="ino-wrap">
        <FadeUp>
          <div className="services__head">
            <span className="ino-eye">What We Do</span>
            <h2 className="ino-h2">Four ways we make your product stronger.</h2>
          </div>
        </FadeUp>
        <div className="svc-list">
          {services.map((s, i) => (
            <FadeUp key={s.num} delay={0.08 * (i + 1)}>
              <div className="svc-row">
                <span className="svc-num svc-row__num">{s.num}</span>
                <div className="svc-body">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
                <span className="svc-tag">{s.tag}</span>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
