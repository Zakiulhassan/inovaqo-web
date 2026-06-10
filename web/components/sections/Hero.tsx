'use client';
import { motion } from 'framer-motion';
import { CountUp } from '@/components/ui/CountUp';
import { Marquee } from '@/components/ui/Marquee';

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const lines = [
  'We engineer',
  <>software that <em>works.</em></>,
  'Built for scale.',
];

export function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero-blob hero-blob-1" />
      <div className="hero-blob hero-blob-2" />
      <div className="hero-blob hero-blob-3" />

      <div className="ino-wrap hero__wrap">
        <motion.p
          className="hero__overline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
        >
          AI&nbsp;&nbsp;·&nbsp;&nbsp;Cloud&nbsp;&nbsp;·&nbsp;&nbsp;Product Engineering
        </motion.p>

        <h1 className="hero__h1">
          {lines.map((line, i) => (
            <span key={i} className="hero-line-wrap">
              <motion.span
                className="hero-line-inner"
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 1, ease, delay: 0.25 + i * 0.14 }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <div className="hero__footer">
          <motion.p
            className="hero__sub"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.75 }}
          >
            We help startups and growing teams ship smarter software —<br />
            AI-powered, cloud-native, and built to handle what comes next.
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.9 }}
          >
            <a href="#contact" className="ino-btn ino-btn--primary ino-btn--lg">
              Book a Discovery Call
            </a>
            <a href="#work" className="hero__text-link">
              See our work
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="hero__stats-row"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.05 }}
      >
        <div className="ino-wrap hero__stats-inner">
          <div className="hero__stat">
            <span className="hero__stat-n"><CountUp to={75} suffix="+" /></span>
            <span className="hero__stat-l">Products shipped</span>
          </div>
          <div className="hero__stat-div" />
          <div className="hero__stat">
            <span className="hero__stat-n"><CountUp to={98} suffix="%" /></span>
            <span className="hero__stat-l">Client retention</span>
          </div>
          <div className="hero__stat-div" />
          <div className="hero__stat">
            <span className="hero__stat-n">2 wks</span>
            <span className="hero__stat-l">Idea to MVP</span>
          </div>
          <p className="hero__byline">
            Trusted by founders, CTOs, and product teams worldwide
          </p>
        </div>
      </motion.div>

      <Marquee />
    </header>
  );
}
