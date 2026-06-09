'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Avatar } from '@/components/ui/Avatar';
import { Input } from '@/components/ui/Input';

const ArrowIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5"/>
  </svg>
);

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section className="contact" id="contact">
      <div className="ino-wrap contact__grid">
        <div>
          <span className="ino-eye">Start a project</span>
          <h2 className="ino-h2">Tell us what you&apos;re building.</h2>
          <p style={{ color: '#A9C3BE', fontSize: 16, lineHeight: 1.6, maxWidth: '40ch', marginTop: 16 }}>
            Whatever you&apos;re building, we&apos;re here to make it sharp, scalable, and real.
            We&apos;ll reply within one business day.
          </p>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginTop: 28 }}>
            <Avatar name="Sara Khan" status="online" />
            <Avatar name="Amir Patel" />
            <Avatar name="Lina Vo" />
            <span style={{ fontSize: 13, color: '#7E948F' }}>Your team, on call.</span>
          </div>
        </div>
        <div className="contact__form">
          {sent ? (
            <div className="sent">
              <div className="ok"><CheckIcon /></div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, color: '#fff' }}>
                Message sent
              </div>
              <div style={{ color: '#A9C3BE', fontSize: 14 }}>Thanks — we&apos;ll be in touch shortly.</div>
              <Button variant="ghost" size="sm" style={{ color: '#fff', marginTop: 6 }} onClick={() => setSent(false)}>
                Send another
              </Button>
            </div>
          ) : (
            <>
              <div className="two">
                <Input label="Name" placeholder="Jane Doe" />
                <Input label="Company" placeholder="Acme Inc." />
              </div>
              <Input label="Work email" type="email" placeholder="jane@acme.com" required />
              <Input label="What are you building?" placeholder="A mobile app with AI at the core…" />
              <Button variant="primary" size="lg" iconRight={<ArrowIcon />} onClick={() => setSent(true)}>
                Send message
              </Button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
