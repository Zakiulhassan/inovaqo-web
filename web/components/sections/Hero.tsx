import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { GrowingLine } from '@/components/ui/GrowingLine';

const ArrowIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6"/>
  </svg>
);

export function Hero() {
  return (
    <header className="hero" id="top">
      <div className="ino-wrap hero__grid">
        <div>
          <span className="ino-eye">Software Studio</span>
          <h1>
            We engineer software that{' '}
            <span className="scriptword">makes a difference.</span>
          </h1>
          <p className="lead">
            Smart web and mobile apps for teams that want to move fast and build right.
            Some of it runs on AI. Some turns messy data into insight.
            All of it ships sharp, scalable, and real.
          </p>
          <div className="hero__cta">
            <Button variant="primary" size="lg" iconRight={<ArrowIcon />} as="a" href="#contact">
              Start a project
            </Button>
            <Button variant="ghost" size="lg" as="a" href="#work" style={{ color: '#fff' }}>
              See our work
            </Button>
          </div>
          <div className="hero__stats">
            <div className="stat">
              <div className="n">40+</div>
              <div className="l">Products shipped</div>
            </div>
            <div className="stat">
              <div className="n">9</div>
              <div className="l">Years building</div>
            </div>
            <div className="stat">
              <div className="n">98%</div>
              <div className="l">Client retention</div>
            </div>
          </div>
        </div>
        <div className="hero__panel">
          <div className="mark">
            <Image src="/assets/inovaqo-logo-white.svg" alt="" width={200} height={40} />
          </div>
          <div className="chip">
            <Badge variant="solid">AI / ML</Badge>
            <div>
              <div className="t">Insight engine</div>
              <div className="s">Live · processing 2.4M events/day</div>
            </div>
          </div>
        </div>
      </div>
      <GrowingLine variant="loop" height={140} style={{ marginTop: 30 }} />
    </header>
  );
}
