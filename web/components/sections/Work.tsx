import Image from 'next/image';
import { Badge } from '@/components/ui/Badge';

const projects = [
  {
    title: 'Fleetly',
    tags: ['Mobile', 'Data'],
    grad: 'linear-gradient(145deg,#0E2C2D,#0A3C40)',
  },
  {
    title: 'Northwind AI',
    tags: ['AI / ML', 'Web'],
    grad: 'linear-gradient(120deg, #10D5C8 0%, #075F59 100%)',
  },
  {
    title: 'Ledgerline',
    tags: ['Fintech', 'Web'],
    grad: 'linear-gradient(145deg,#09191B,#0E2C2D)',
  },
];

export function Work() {
  return (
    <section className="section section--alt" id="work">
      <div className="ino-wrap">
        <div className="section__head">
          <span className="ino-eye">Selected work</span>
          <h2 className="ino-h2">Products we made sharp, scalable, and real.</h2>
        </div>
        <div className="work-grid">
          {projects.map((w) => (
            <div key={w.title} className="work">
              <div className="work__thumb" style={{ background: w.grad }}>
                <Image src="/assets/inovaqo-logo-white.svg" alt="" width={120} height={24} />
                <span className="ph">Project preview</span>
              </div>
              <h3>{w.title}</h3>
              <div className="tags">
                {w.tags.map((t) => (
                  <Badge key={t} variant="soft">{t}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
