import { FadeUp } from '@/components/ui/FadeUp';

const services = [
  {
    num: '01',
    title: 'AI Transformation',
    desc: 'Ship AI features your users actually notice. We move you from "exploring AI" to production-grade models, intelligent automation, and measurable efficiency gains — in weeks, not quarters.',
    tag: 'Strategy + Build',
    outcome: 'Avg. 40% reduction in manual workflows',
  },
  {
    num: '02',
    title: 'Data Science & ETL',
    desc: "Stop making decisions on gut feeling. We turn siloed, messy data into clean pipelines and sharp analytics — so your team sees what's working before your competitors do.",
    tag: 'Data + Analytics',
    outcome: 'Real-time dashboards in 3–6 weeks',
  },
  {
    num: '03',
    title: 'Cloud Architecture & DevOps',
    desc: "Your infrastructure shouldn't be your biggest risk. We build cloud-native systems that scale quietly in the background — secure, observable, and ready for whatever traffic spike comes next.",
    tag: 'Infrastructure',
    outcome: '99.9% uptime SLA across client systems',
  },
  {
    num: '04',
    title: 'Product Engineering',
    desc: 'From napkin sketch to market-ready product. We design and build apps that look sharp, perform everywhere, and grow with you — without a full rewrite six months after launch.',
    tag: 'Design + Dev',
    outcome: 'MVP delivery in 2 weeks',
  },
];

export function Services() {
  return (
    <section className="services" id="services">
      <div className="ino-wrap">
        <FadeUp>
          <div className="services__head">
            <span className="ino-eye">What We Do</span>
            <h2 className="ino-h2">We solve the problems that slow teams down.</h2>
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
                  <span className="svc-outcome">{s.outcome}</span>
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
