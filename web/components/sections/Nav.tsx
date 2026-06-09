import Image from 'next/image';

export function Nav() {
  return (
    <nav className="nav">
      <div className="ino-wrap nav__row">
        <a href="#top">
          <Image src="/assets/inovaqo-logo-white.svg" alt="Inovaqo" width={110} height={22} priority />
        </a>
        <div className="nav__links">
          <a href="#services">Services</a>
          <a href="#case-studies">Case Studies</a>
          <a href="#insights">Insights</a>
          <a href="#careers">Careers</a>
          <a
            href="#contact"
            className="ino-btn ino-btn--ghost ino-btn--sm"
          >
            Let&apos;s Talk
          </a>
        </div>
      </div>
    </nav>
  );
}
