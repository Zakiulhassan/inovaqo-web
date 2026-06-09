'use client';
import { useState } from 'react';
import { FadeUp } from '@/components/ui/FadeUp';

const services = ['AI Transformation', 'Data Science & ETL', 'Cloud Architecture', 'Product Engineering', 'Not sure yet'];
const stages = ['Idea / Pre-seed', 'MVP / Early stage', 'Growth / Scaling', 'Enterprise'];
const timelines = ['ASAP (under 1 month)', '1–3 months', '3–6 months', 'Flexible'];
const budgets = ['Under $10k', '$10k–$50k', '$50k–$150k', '$150k+', 'Not decided yet'];

export function CTA() {
  const [selected, setSelected] = useState<string[]>([]);
  const toggle = (v: string) => setSelected(p => p.includes(v) ? p.filter(x => x !== v) : [...p, v]);

  return (
    <section className="cta-section" id="contact">
      <div className="ino-wrap">
        <FadeUp>
          <span className="ino-eye">Start Building</span>
          <h2 className="ino-h2">Tell us what you&apos;re trying to build.</h2>
          <p className="cta-section__sub">
            We&apos;ll listen, ask good questions, and give you a straight answer about what&apos;s possible.
            No sales pitch. No obligation.
          </p>
        </FadeUp>

        <FadeUp delay={0.15}>
          <div className="cta-two-col">
            <div className="cta-form-col">
              <form className="cta-form" onSubmit={e => e.preventDefault()}>
                <div className="cta-form__row">
                  <input className="ino-input-field" type="text" placeholder="Your name" required />
                  <input className="ino-input-field" type="email" placeholder="Work email" required />
                </div>
                <input className="ino-input-field" type="text" placeholder="Company / Project name" />

                <div className="cta-form__group">
                  <label className="cta-form__label">What do you need help with?</label>
                  <div className="cta-chips">
                    {services.map(s => (
                      <button
                        key={s}
                        type="button"
                        className={`cta-chip${selected.includes(s) ? ' cta-chip--on' : ''}`}
                        onClick={() => toggle(s)}
                      >{s}</button>
                    ))}
                  </div>
                </div>

                <div className="cta-form__row cta-form__row--3">
                  <div className="cta-form__group">
                    <label className="cta-form__label">Project stage</label>
                    <select className="ino-input-field ino-select">
                      <option value="">Select…</option>
                      {stages.map(s => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                  <div className="cta-form__group">
                    <label className="cta-form__label">Timeline</label>
                    <select className="ino-input-field ino-select">
                      <option value="">Select…</option>
                      {timelines.map(t => <option key={t}>{t}</option>)}
                    </select>
                  </div>
                  <div className="cta-form__group">
                    <label className="cta-form__label">Budget range</label>
                    <select className="ino-input-field ino-select">
                      <option value="">Select…</option>
                      {budgets.map(b => <option key={b}>{b}</option>)}
                    </select>
                  </div>
                </div>

                <textarea className="ino-input-field ino-textarea" rows={4} placeholder="Tell us about your project or challenge. The more context, the better." />

                <button type="submit" className="ino-btn ino-btn--primary ino-btn--lg" style={{ width: '100%' }}>
                  Book a Discovery Call →
                </button>
                <p className="cta-form__note">We respond within 1 business day. No spam, ever.</p>
              </form>
            </div>

            <div className="cta-info-col">
              <div className="cta-info-block">
                <h3>Not ready to commit?</h3>
                <p>That&apos;s fine. Browse our case studies to see what we&apos;ve shipped, or explore our services to understand how we work.</p>
                <div className="cta-info-links">
                  <a href="#work" className="ino-btn ino-btn--ghost">View Case Studies</a>
                  <a href="#services" className="ino-btn ino-btn--ghost">Explore Services</a>
                </div>
              </div>
              <div className="cta-info-block">
                <h3>Prefer direct contact?</h3>
                <div className="cta-contacts">
                  <a href="mailto:hello@inovaqo.com">hello@inovaqo.com</a>
                  <span>Miami: +1 305 323 2490</span>
                  <span>Pakistan: +92 322 7878 7080</span>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
