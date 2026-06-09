const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6"/>
  </svg>
);

export function CTA() {
  return (
    <section className="cta-section" id="contact">
      <div className="ino-wrap">
        <div className="cta-section__inner">
          <span className="ino-eye">Ready to Build?</span>
          <h2 className="ino-h2">Tell us what you&apos;re trying to build.</h2>
          <p className="cta-section__sub">
            We&apos;ll listen. Ask questions. And tell you honestly what we can do — and how. No pressure, no pitch deck, no obligation.
          </p>
          <div className="cta-section__btns">
            <a href="mailto:hello@inovaqo.com" className="ino-btn ino-btn--primary ino-btn--lg">
              Start a Conversation
            </a>
            <a href="#case-studies" className="ino-btn ino-btn--ghost ino-btn--lg">
              See all case studies <ArrowIcon />
            </a>
          </div>
          <p className="cta-section__contact">
            <a href="tel:+13053232490">Miami: +1 305 323 2490</a>
            {' · '}
            <a href="tel:+923227878708">Pakistan: +92 322 7878 7080</a>
            {' · '}
            <a href="mailto:hello@inovaqo.com">hello@inovaqo.com</a>
          </p>
        </div>
      </div>
    </section>
  );
}
