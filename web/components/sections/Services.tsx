import { Badge } from '@/components/ui/Badge';

const BrainIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 5a3 3 0 1 0-5.997.142 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/>
    <path d="M12 5a3 3 0 1 1 5.997.142 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/>
  </svg>
);

const ChartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3v16a2 2 0 0 0 2 2h16"/>
    <path d="m19 9-5 5-4-4-3 3"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="2"/>
    <path d="M12 18h.01"/>
  </svg>
);

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6"/>
  </svg>
);

const services = [
  {
    icon: <BrainIcon />,
    title: 'AI & Machine Learning',
    desc: 'Models that read your data, predict, and automate — built into the product, not bolted on.',
  },
  {
    icon: <ChartIcon />,
    title: 'Data → Insight',
    desc: 'We turn messy, scattered data into dashboards and signals your team can actually act on.',
  },
  {
    icon: <PhoneIcon />,
    title: 'Web & Mobile Apps',
    desc: 'Fast, accessible, beautifully engineered apps across web, iOS, and Android.',
  },
];

const capabilities = [
  'Discovery', 'Product design', 'Cloud & DevOps',
  'LLM integration', 'Data pipelines', 'QA & testing', 'Maintenance',
];

export function Services() {
  return (
    <section className="section" id="services">
      <div className="ino-wrap">
        <div className="section__head">
          <span className="ino-eye">What we do</span>
          <h2 className="ino-h2">Clear communication, strong engineering.</h2>
        </div>
        <div className="svc-grid">
          {services.map((s) => (
            <div key={s.title} className="svc-card svc">
              <div className="svc-ico">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <span className="more">Learn more <ArrowIcon /></span>
            </div>
          ))}
        </div>
        <div className="cap-row">
          {capabilities.map((c) => (
            <Badge key={c} variant="outline">{c}</Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
