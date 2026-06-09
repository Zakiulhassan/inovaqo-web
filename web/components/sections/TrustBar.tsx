import { FadeUp } from '@/components/ui/FadeUp';

const industries = ['Cloud Security', 'Legal Tech', 'EdTech', 'FinTech', 'HealthTech', 'SaaS'];

const metrics = [
  { n: '75+', label: 'Products shipped' },
  { n: '98%', label: 'Client retention' },
  { n: '2 wks', label: 'Avg. time to MVP' },
];

export function TrustBar() {
  return (
    <section className="trust-bar">
      <div className="ino-wrap">
        <FadeUp>
          <p className="trust-bar__label">Trusted by teams building in</p>
          <div className="trust-bar__chips">
            {industries.map(ind => (
              <span key={ind} className="trust-chip">{ind}</span>
            ))}
          </div>
          <div className="trust-bar__metrics">
            {metrics.map(m => (
              <div key={m.label} className="trust-metric">
                <span className="trust-metric__n">{m.n}</span>
                <span className="trust-metric__l">{m.label}</span>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
