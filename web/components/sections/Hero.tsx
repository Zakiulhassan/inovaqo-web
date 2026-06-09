'use client';
import { motion } from 'framer-motion';
import { FadeUp } from '@/components/ui/FadeUp';
import { CountUp } from '@/components/ui/CountUp';
import { FlowLine } from '@/components/ui/FlowLine';

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6"/>
  </svg>
);

const lineVariants = {
  hidden: { y: '105%', opacity: 0 },
  visible: (i: number) => ({
    y: '0%',
    opacity: 1,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay: 0.1 + i * 0.12 }
  })
};

export function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero-blob hero-blob-1" />
      <div className="hero-blob hero-blob-2" />

      <div className="ino-wrap hero__inner">
        <motion.span
          className="hero__pill"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          AI · Cloud · Product Engineering
        </motion.span>

        <h1 className="hero__h1">
          {['Your product deserves', 'engineering that scales', 'as fast as you do.'].map((line, i) => (
            <span key={i} className="hero-line-wrap">
              <motion.span
                className="hero-line-inner"
                custom={i}
                initial="hidden"
                animate="visible"
                variants={lineVariants}
              >
                {i === 1 ? (
                  <>engineering that <em className="hero__em">scales</em></>
                ) : line}
              </motion.span>
            </span>
          ))}
        </h1>

        <FadeUp delay={0.55}>
          <p className="hero__sub">
            We help startups and growing teams ship smarter software —<br/>
            AI-powered, cloud-native, and built to handle what comes next.
          </p>
        </FadeUp>

        <FadeUp delay={0.7}>
          <div className="hero__ctas">
            <a href="#contact" className="ino-btn ino-btn--primary ino-btn--lg magnetic">Book a Discovery Call</a>
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

      <FlowLine style={{ marginTop: 40 }} />
    </header>
  );
}
