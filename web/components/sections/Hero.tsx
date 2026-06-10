'use client';
import { motion } from 'framer-motion';
import { RibbonLine } from '@/components/ui/RibbonLine';
import { Marquee } from '@/components/ui/Marquee';

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export function Hero() {
  return (
    <header className="hero" id="top">
      <RibbonLine />

      <div className="ino-wrap hero__grid">
        {/* headline — top left */}
        <h1 className="hero__h1">
          {[
            <>We engineer software</>,
            <>that <em>works</em> at scale.</>,
          ].map((line, i) => (
            <span key={i} className="hero-line-wrap">
              <motion.span
                className="hero-line-inner"
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 1, ease, delay: 0.2 + i * 0.13 }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* description — top right */}
        <motion.div
          className="hero__desc"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.55 }}
        >
          <p>
            We combine AI, cloud, and product engineering to build software
            that feels effortless and scales without drama. From first
            prototype to enterprise rollout — we ship work that moves your
            business forward.
          </p>
          <div className="hero__ctas">
            <a href="#contact" className="ino-btn ino-btn--ink ino-btn--lg">
              Book a Discovery Call
            </a>
            <a href="#services" className="hero__text-link">
              Explore services
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
        </motion.div>

        {/* media card — bottom left, ribbon flows behind it */}
        <motion.div
          className="hero__media"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease, delay: 0.7 }}
        >
          <motion.img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80&auto=format&fit=crop"
            alt="Product analytics dashboard built by Inovaqo"
            initial={{ scale: 1.18 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.6, ease, delay: 0.7 }}
          />
        </motion.div>

        {/* approach pill — right of media */}
        <motion.div
          className="hero__side"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.1 }}
        >
          <a href="#process" className="hero__approach">
            <span className="hero__approach-dot" />
            Our Approach
          </a>
        </motion.div>
      </div>

      <Marquee />
    </header>
  );
}
