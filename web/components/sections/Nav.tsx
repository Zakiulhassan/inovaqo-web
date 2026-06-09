import Image from 'next/image';
import { Button } from '@/components/ui/Button';

const ArrowIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6"/>
  </svg>
);

export function Nav() {
  return (
    <nav className="nav">
      <div className="ino-wrap nav__row">
        <a href="#top">
          <Image src="/assets/inovaqo-logo-white.svg" alt="Inovaqo" width={110} height={22} priority />
        </a>
        <div className="nav__links">
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#mission">Mission</a>
          <a href="#process">Process</a>
          <Button variant="inverse" size="sm" iconRight={<ArrowIcon />} as="a" href="#contact">
            Start a project
          </Button>
        </div>
      </div>
    </nav>
  );
}
