import Image from 'next/image';

export function Nav() {
  return (
    <nav className="nav">
      <div className="ino-wrap nav__row">
        <a href="#top">
          <Image src="/assets/inovaqo-logo-white.svg" alt="Inovaqo" width={110} height={22} priority />
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
          <a href="#case-studies">Case Studies</a>
          <a href="#insights">Insights</a>
          <a href="#careers">Careers</a>
          <a
            href="#contact"
            className="ino-btn ino-btn--ghost ino-btn--sm"
          >
            Book a Discovery Call
          </a>
        </div>
      </div>
    </nav>
  );
}
