'use client';
import { useEffect, useRef } from 'react';
import { FadeUp } from '@/components/ui/FadeUp';
import { CountUp } from '@/components/ui/CountUp';
import { GrowingLine } from '@/components/ui/GrowingLine';

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6"/>
  </svg>
);

export function Hero() {
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const line3Ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const delay = (ms: number) => new Promise(r => setTimeout(r, ms));
    (async () => {
      await delay(100);
      line1Ref.current?.classList.add('visible');
      await delay(120);
      line2Ref.current?.classList.add('visible');
      await delay(120);
      line3Ref.current?.classList.add('visible');
    })();
  }, []);

  return (
    <header className="hero" id="top">
      {/* animated bg blobs */}
      <div className="hero-blob hero-blob-1" />
      <div className="hero-blob hero-blob-2" />

      <div className="ino-wrap hero__inner">
        {/* eyebrow pill */}
        <FadeUp>
          <span className="hero__pill">AI · Cloud · Product Engineering</span>
        </FadeUp>

        {/* headline with line reveal */}
        <h1 className="hero__h1">
          <span className="hero-line-wrap"><span ref={line1Ref} className="hero-line-inner">Your product deserves</span></span>
          <span className="hero-line-wrap"><span ref={line2Ref} className="hero-line-inner">engineering that <em className="hero__em">scales</em></span></span>
          <span className="hero-line-wrap"><span ref={line3Ref} className="hero-line-inner">as fast as you do.</span></span>
        </h1>

        <FadeUp delay={0.55}>
          <p className="hero__sub">
            We help startups and growing teams ship smarter software —<br/>
            AI-powered, cloud-native, and built to handle what comes next.
          </p>
        </FadeUp>

        <FadeUp delay={0.7}>
          <div className="hero__ctas">
            <a href="#contact" className="ino-btn ino-btn--primary ino-btn--lg magnetic">Start a Conversation</a>
            <a href="#work" className="hero__ghost-link">See our work <ArrowIcon /></a>
          </div>
        </FadeUp>

        <FadeUp delay={0.85}>
          <div className="hero__trust">
            <div className="hero__stat">
              <span className="hero__stat-n"><CountUp to={75} suffix="+" /></span>
              <span className="hero__stat-l">Satisfied clients</span>
            </div>
            <span className="hero__divider" />
            <div className="hero__stat">
              <span className="hero__stat-n"><CountUp to={98} suffix="%" /></span>
              <span className="hero__stat-l">Satisfaction rate</span>
            </div>
            <span className="hero__divider" />
            <div className="hero__stat">
              <span className="hero__stat-n">2 wks</span>
              <span className="hero__stat-l">Idea to MVP</span>
            </div>
          </div>
          <p className="hero__trust-line">— Trusted by founders, CTOs, and product teams worldwide</p>
        </FadeUp>
      </div>

      <GrowingLine variant="loop" height={120} style={{ marginTop: 40 }} />
    </header>
  );
}
