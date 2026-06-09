import Image from 'next/image';

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6"/>
  </svg>
);

export function Hero() {
  return (
    <header className="hero" id="top">
      <div className="ino-wrap">
        <div className="hero__inner">
          <span className="hero__eyebrow">AI · Cloud · Product Engineering</span>
          <h1>
            Your product deserves engineering that{' '}
            <em>scales</em>{' '}
            as fast as you do.
          </h1>
          <p className="lead">
            We help startups and growing teams ship smarter software — AI-powered, cloud-native, and built to handle what comes next.
          </p>
          <div className="hero__cta">
            <a href="#contact" className="ino-btn ino-btn--primary ino-btn--lg">
              Start a Conversation
            </a>
            <a href="#case-studies" className="ino-btn ino-btn--ghost ino-btn--lg">
              See our work <ArrowIcon />
            </a>
          </div>
        </div>

        <div className="hero__stats-bar">
          <div className="hero__stat">
            <div className="n">75+</div>
            <div className="l">Satisfied clients</div>
          </div>
          <div className="hero__stat">
            <div className="n">98%</div>
            <div className="l">Satisfaction rate</div>
          </div>
          <div className="hero__stat">
            <div className="n">2 wks</div>
            <div className="l">Idea to MVP</div>
          </div>
        </div>
        <p className="hero__trust">— Trusted by founders, CTOs, and product teams worldwide</p>
      </div>
    </header>
  );
}
