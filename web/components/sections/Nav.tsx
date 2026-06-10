'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export function Nav() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const onScroll = () => setDark(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`nav ${dark ? 'nav--dark' : 'nav--light'}`}>
      <div className="ino-wrap nav__row">
        <a href="#top">
          <Image
            src={dark ? '/assets/inovaqo-logo-white.svg' : '/assets/inovaqo-logo-ink.svg'}
            alt="Inovaqo"
            width={110}
            height={22}
            priority
          />
        </a>
        <div className="nav__links">
          <div className="nav__dropdown-wrap">
            <a href="#services">
              Services <span className="nav__chevron">▾</span>
            </a>
            <div className="nav__dropdown">
              <a href="#services">AI Transformation</a>
              <a href="#services">Data &amp; ETL</a>
              <a href="#services">Cloud &amp; DevOps</a>
              <a href="#services">Product Engineering</a>
            </div>
          </div>
          <a href="#work">Case Studies</a>
          <a href="#why">Why Inovaqo</a>
          <a href="#process">Process</a>
          <a href="#contact" className="ino-btn ino-btn--ghost ino-btn--sm nav__cta">
            Book a Discovery Call
          </a>
        </div>
      </div>
    </nav>
  );
}
