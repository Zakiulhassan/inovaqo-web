import Image from 'next/image';

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.34 1.12 2.91.85.09-.66.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.05 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.4 9.4 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.92-2.34 4.79-4.57 5.04.36.32.68.94.68 1.9v2.82c0 .27.18.6.69.49A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6 0h3.8v1.64h.05c.53-1 1.83-2.06 3.77-2.06C20.4 8.58 22 10.3 22 13.9V21h-4v-6.2c0-1.48-.03-3.38-2.06-3.38-2.06 0-2.38 1.6-2.38 3.27V21H9V9Z"/>
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M18.9 2H22l-7.5 8.6L23 22h-6.8l-5.3-7-6.1 7H1.6l8-9.2L1 2h7l4.8 6.4L18.9 2Zm-2.4 18h1.9L7.6 4H5.6l10.9 16Z"/>
  </svg>
);

export function Footer() {
  return (
    <footer className="footer">
      <div className="ino-wrap footer__row">
        <Image src="/assets/inovaqo-logo-white.svg" alt="Inovaqo" width={100} height={20} />
        <span style={{ fontSize: 13 }}>© 2026 Inovaqo. Built sharp, scalable, and real.</span>
        <div className="footer__social">
          <button className="ino-iconbtn" aria-label="GitHub" style={{ color: '#9FB3AF' }}>
            <GithubIcon />
          </button>
          <button className="ino-iconbtn" aria-label="LinkedIn" style={{ color: '#9FB3AF' }}>
            <LinkedInIcon />
          </button>
          <button className="ino-iconbtn" aria-label="X" style={{ color: '#9FB3AF' }}>
            <XIcon />
          </button>
        </div>
      </div>
    </footer>
  );
}
