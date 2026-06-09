/* Inovaqo marketing homepage — composes DS primitives (Button, Card, Badge,
   Avatar, Input, GrowingLine, IconButton are injected as globals by index.html). */

/* ---- page-level CSS (hover/layout the tokens can't express inline) -------- */
(function injectSiteCSS(){
  if (document.getElementById('ino-site-css')) return;
  const s = document.createElement('style'); s.id = 'ino-site-css';
  s.textContent = `
  .ino-site { font-family: var(--font-sans); color: var(--text); }
  .ino-wrap { max-width: 1200px; margin: 0 auto; padding: 0 32px; }
  .ino-eye { font-family: var(--font-mono); font-size: 12px; font-weight:700; letter-spacing:.16em; text-transform:uppercase; color: var(--brand); }
  .ino-h2 { font-family: var(--font-display); font-weight:700; font-size: clamp(30px,4vw,46px); line-height:1.04; letter-spacing:-0.02em; color: var(--text-strong); margin:14px 0 0; text-wrap:balance; }
  .scriptword { font-family: var(--font-display); font-style: italic; font-weight:700; color: var(--brand); }

  /* nav */
  .nav { position: sticky; top:0; z-index:50; backdrop-filter: blur(10px); background: color-mix(in oklch, var(--n-950) 72%, transparent); border-bottom:1px solid rgba(255,255,255,.07); }
  .nav__row { display:flex; align-items:center; justify-content:space-between; height:74px; }
  .nav__links { display:flex; gap:30px; align-items:center; }
  .nav__links a { font-size:14px; font-weight:600; color: #C7DAD6; }
  .nav__links a:hover { color:#fff; }
  @media (max-width: 860px){ .nav__links { display:none; } }

  /* hero */
  .hero { position:relative; background: var(--n-950); color:#fff; overflow:hidden; padding: 76px 0 0; }
  .hero::before { content:""; position:absolute; top:-30%; left:50%; transform:translateX(-50%); width:900px; height:700px; background: radial-gradient(closest-side, rgba(16,213,200,.20), transparent 70%); pointer-events:none; }
  .hero__grid { position:relative; display:grid; grid-template-columns: 1.15fr .85fr; gap:48px; align-items:center; }
  @media (max-width: 920px){ .hero__grid { grid-template-columns:1fr; gap:28px; } }
  .hero h1 { font-family: var(--font-display); font-weight:700; font-size: clamp(40px,6vw,74px); line-height:1.04; letter-spacing:-0.03em; margin:18px 0 0; color:#fff; text-wrap:balance; }
  .hero p.lead { font-size: clamp(16px,1.4vw,19px); line-height:1.6; color:#A9C3BE; max-width:46ch; margin:26px 0 0; }
  .hero__cta { display:flex; gap:14px; margin-top:30px; flex-wrap:wrap; }
  .hero__stats { display:flex; gap:38px; margin-top:46px; padding-bottom:8px; flex-wrap:wrap; }
  .stat .n { font-family: var(--font-display); font-weight:700; font-size:34px; color:#fff; letter-spacing:-0.02em; }
  .stat .l { font-size:12.5px; color:#7E948F; margin-top:2px; }
  .hero__panel { position:relative; aspect-ratio: 4/5; border-radius: var(--radius-xl); background:
      var(--gradient-deep);
      border:1px solid rgba(16,213,200,.18); overflow:hidden; box-shadow: var(--shadow-xl); }
  .hero__panel .mark { position:absolute; inset:0; display:grid; place-items:center; }
  .hero__panel .mark img { width:62%; opacity:.9; }
  .hero__panel .chip { position:absolute; left:18px; bottom:18px; right:18px; display:flex; gap:10px; align-items:center; background: rgba(9,25,27,.55); border:1px solid rgba(255,255,255,.08); border-radius: var(--radius-md); padding:12px 14px; backdrop-filter: blur(6px); }
  .hero__panel .chip .t { font-size:13px; color:#CFE7E2; font-weight:600; }
  .hero__panel .chip .s { font-size:11px; color:#7E948F; }

  /* sections */
  .section { padding: 88px 0; }
  .section--alt { background: var(--surface-2); }
  .section__head { max-width: 640px; }

  .svc-grid { display:grid; grid-template-columns: repeat(3,1fr); gap:20px; margin-top:44px; }
  @media (max-width: 920px){ .svc-grid { grid-template-columns:1fr; } }
  .svc-ico { width:50px; height:50px; border-radius: var(--radius-md); display:grid; place-items:center; background: var(--brand-soft); color: var(--brand-press); }
  .svc-ico svg { width:24px; height:24px; }
  .svc h3 { font-family: var(--font-display); font-weight:700; font-size:21px; letter-spacing:-0.01em; color: var(--text-strong); margin:0; }
  .svc p { font-size:14.5px; line-height:1.6; color: var(--text-muted); margin:0; }
  .svc .more { font-family: var(--font-mono); font-size:11px; font-weight:700; letter-spacing:.1em; text-transform:uppercase; color: var(--brand-press); display:inline-flex; gap:6px; align-items:center; margin-top:auto; }
  .svc .more svg { width:14px; height:14px; }
  .svc h3 + p { margin-top:2px; }

  .cap-row { display:flex; flex-wrap:wrap; gap:10px; margin-top:26px; }

  .work-grid { display:grid; grid-template-columns: repeat(3,1fr); gap:20px; margin-top:44px; }
  @media (max-width: 920px){ .work-grid { grid-template-columns:1fr; } }
  .work__thumb { aspect-ratio: 16/11; border-radius: var(--radius-md); position:relative; overflow:hidden; display:grid; place-items:center; border:1px solid rgba(255,255,255,.06); }
  .work__thumb img { width:46%; opacity:.85; }
  .work__thumb .ph { position:absolute; bottom:10px; right:12px; font-family:var(--font-mono); font-size:9.5px; letter-spacing:.1em; color: rgba(255,255,255,.4); text-transform:uppercase; }
  .work h3 { font-family: var(--font-display); font-weight:700; font-size:18px; color: var(--text-strong); margin:14px 0 0; }
  .work .tags { display:flex; gap:6px; margin-top:8px; }

  /* mission band */
  .mission { position:relative; background: var(--cyan-900); color:#fff; overflow:hidden; padding: 90px 0; }
  .mission__stmt { font-family: var(--font-display); font-weight:600; font-size: clamp(26px,3.4vw,42px); line-height:1.26; letter-spacing:-0.01em; max-width: 17ch; margin:18px 0 0; }
  .mission__stmt em { font-family: var(--font-display); font-style:italic; font-weight:700; margin-right:.04em; }
  .mission__stmt .c { color: var(--cyan-400); } .mission__stmt .w { color:#fff; }

  /* process */
  .proc { position:relative; }
  .proc__line { position:relative; height:200px; margin-top:30px; }
  .proc__line svg { position:absolute; inset:0; width:100%; height:100%; }
  .proc__node { fill: var(--surface); stroke: var(--brand); stroke-width:2.5; }
  .proc__lab { position:absolute; transform:translateX(-50%); text-align:center; width:160px; }
  .proc__lab .k { font-family:var(--font-mono); font-size:11px; font-weight:700; letter-spacing:.1em; text-transform:uppercase; color: var(--text-strong); }
  .proc__lab .d { font-size:12px; color: var(--text-muted); margin-top:3px; }

  /* contact */
  .contact { background: var(--n-950); color:#fff; padding: 86px 0; }
  .contact__grid { display:grid; grid-template-columns: 1fr 1fr; gap:54px; align-items:center; }
  @media (max-width: 920px){ .contact__grid { grid-template-columns:1fr; } }
  .contact h2 { color:#fff; }
  .contact__form { background: #0E2123; border:1px solid rgba(255,255,255,.08); border-radius: var(--radius-xl); padding:28px; display:grid; gap:16px; box-shadow: var(--shadow-xl); }
  .contact__form .two { display:grid; grid-template-columns:1fr 1fr; gap:14px; }
  .contact__form .ino-field__label { color:#fff; }
  .contact__form .ino-field__hint { color:#8FA8A4; }
  .sent { display:grid; gap:8px; place-items:center; text-align:center; padding:30px 10px; }
  .sent .ok { width:54px;height:54px;border-radius:50%; background: var(--brand); color: var(--n-950); display:grid; place-items:center; }
  .sent .ok svg { width:26px; height:26px; }

  /* footer */
  .footer { background: var(--n-950); color:#9FB3AF; border-top:1px solid rgba(255,255,255,.07); padding: 40px 0; }
  .footer__row { display:flex; align-items:center; justify-content:space-between; gap:20px; flex-wrap:wrap; }
  .footer__social { display:flex; gap:8px; }
  `;
  document.head.appendChild(s);
})();

const LOGO = '../../assets/inovaqo-logo-white.svg';
const LOGO_CYAN = '../../assets/inovaqo-logo.svg';

/* ---- icons (Lucide-style, 24px stroke) ----------------------------------- */
const I = {
  brain: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5a3 3 0 1 0-5.997.142 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.142 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/></svg>,
  spark: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.94 14.06 7 21l5-3 5 3-2.94-6.94"/><path d="M12 2v6"/><path d="m4.9 9 4.6 2"/><path d="m19.1 9-4.6 2"/></svg>,
  phone: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg>,
  chart: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="m19 9-5 5-4-4-3 3"/></svg>,
  arrow: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>,
  check: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>,
  x: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>,
};
const social = {
  gh: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.34 1.12 2.91.85.09-.66.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.05 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.4 9.4 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.92-2.34 4.79-4.57 5.04.36.32.68.94.68 1.9v2.82c0 .27.18.6.69.49A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z"/></svg>,
  in: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6 0h3.8v1.64h.05c.53-1 1.83-2.06 3.77-2.06C20.4 8.58 22 10.3 22 13.9V21h-4v-6.2c0-1.48-.03-3.38-2.06-3.38-2.06 0-2.38 1.6-2.38 3.27V21H9V9Z"/></svg>,
  x2: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7.5 8.6L23 22h-6.8l-5.3-7-6.1 7H1.6l8-9.2L1 2h7l4.8 6.4L18.9 2Zm-2.4 18h1.9L7.6 4H5.6l10.9 16Z"/></svg>,
};

function Nav(){
  return (
    <nav className="nav"><div className="ino-wrap nav__row">
      <a href="#top"><img src={LOGO} alt="Inovaqo" style={{height:22, display:'block'}}/></a>
      <div className="nav__links">
        <a href="#services">Services</a>
        <a href="#work">Work</a>
        <a href="#mission">Mission</a>
        <a href="#process">Process</a>
        <Button variant="inverse" size="sm" iconRight={I.arrow} as="a" href="#contact">Start a project</Button>
      </div>
    </div></nav>
  );
}

function Hero(){
  return (
    <header className="hero" id="top">
      <div className="ino-wrap hero__grid">
        <div>
          <span className="ino-eye">Software Studio</span>
          <h1>We engineer software that <span className="scriptword">makes a difference.</span></h1>
          <p className="lead">Smart web and mobile apps for teams that want to move fast and build right. Some of it runs on AI. Some turns messy data into insight. All of it ships sharp, scalable, and real.</p>
          <div className="hero__cta">
            <Button variant="primary" size="lg" iconRight={I.arrow} as="a" href="#contact">Start a project</Button>
            <Button variant="ghost" size="lg" as="a" href="#work" style={{color:'#fff'}}>See our work</Button>
          </div>
          <div className="hero__stats">
            <div className="stat"><div className="n">40+</div><div className="l">Products shipped</div></div>
            <div className="stat"><div className="n">9</div><div className="l">Years building</div></div>
            <div className="stat"><div className="n">98%</div><div className="l">Client retention</div></div>
          </div>
        </div>
        <div className="hero__panel">
          <div className="mark"><img src={LOGO} alt=""/></div>
          <div className="chip">
            <Badge variant="solid">AI / ML</Badge>
            <div><div className="t">Insight engine</div><div className="s">Live · processing 2.4M events/day</div></div>
          </div>
        </div>
      </div>
      <GrowingLine variant="loop" height={140} style={{marginTop:30, display:'block'}}/>
    </header>
  );
}

function Services(){
  const items = [
    { ic:I.brain, t:'AI & Machine Learning', d:'Models that read your data, predict, and automate — built into the product, not bolted on.' },
    { ic:I.chart, t:'Data → Insight', d:'We turn messy, scattered data into dashboards and signals your team can actually act on.' },
    { ic:I.phone, t:'Web & Mobile Apps', d:'Fast, accessible, beautifully engineered apps across web, iOS, and Android.' },
  ];
  return (
    <section className="section" id="services"><div className="ino-wrap">
      <div className="section__head">
        <span className="ino-eye">What we do</span>
        <h2 className="ino-h2">Clear communication, strong engineering.</h2>
      </div>
      <div className="svc-grid">
        {items.map((s,i)=>(
          <Card key={i} variant="raised" interactive className="svc">
            <div className="svc-ico">{s.ic}</div>
            <h3>{s.t}</h3>
            <p>{s.d}</p>
            <span className="more">Learn more {I.arrow}</span>
          </Card>
        ))}
      </div>
      <div className="cap-row">
        {['Discovery','Product design','Cloud & DevOps','LLM integration','Data pipelines','QA & testing','Maintenance'].map(c=>(
          <Badge key={c} variant="outline">{c}</Badge>
        ))}
      </div>
    </div></section>
  );
}

function Work(){
  const items = [
    { t:'Fleetly', tags:['Mobile','Data'], grad:'linear-gradient(145deg,#0E2C2D,#0A3C40)' },
    { t:'Northwind AI', tags:['AI / ML','Web'], grad:'var(--gradient-brand)' },
    { t:'Ledgerline', tags:['Fintech','Web'], grad:'linear-gradient(145deg,#09191B,#0E2C2D)' },
  ];
  return (
    <section className="section section--alt" id="work"><div className="ino-wrap">
      <div className="section__head">
        <span className="ino-eye">Selected work</span>
        <h2 className="ino-h2">Products we made sharp, scalable, and real.</h2>
      </div>
      <div className="work-grid">
        {items.map((w,i)=>(
          <div key={i} className="work">
            <div className="work__thumb" style={{background:w.grad}}>
              <img src={LOGO} alt=""/>
              <span className="ph">Project preview</span>
            </div>
            <h3>{w.t}</h3>
            <div className="tags">{w.tags.map(t=><Badge key={t} variant="soft">{t}</Badge>)}</div>
          </div>
        ))}
      </div>
    </div></section>
  );
}

function Mission(){
  return (
    <section className="mission" id="mission">
      <div className="ino-wrap">
        <span className="ino-eye" style={{color:'var(--cyan-300)'}}>Brand Mission</span>
        <p className="mission__stmt">To provide <em className="c">intuitive</em> and <em className="w">efficient</em> tools that streamline workflows, enhance focus, and optimise time.</p>
      </div>
      <GrowingLine variant="wave" height={90} style={{marginTop:36}}/>
    </section>
  );
}

function Process(){
  const nodes = [
    { x:8,  y:150, k:'Discovery', d:'Scope the real problem' },
    { x:36, y:62,  k:'Design',    d:'Shape the system' },
    { x:66, y:120, k:'Engineering', d:'Build it right' },
    { x:93, y:80,  k:'Launch',    d:'Ship & scale' },
  ];
  return (
    <section className="section" id="process"><div className="ino-wrap proc">
      <div className="section__head">
        <span className="ino-eye">How we work</span>
        <h2 className="ino-h2">No bloated process. No buzzword soup.</h2>
      </div>
      <div className="proc__line">
        <svg viewBox="0 0 1000 200" preserveAspectRatio="none" fill="none">
          <path className="ino-line__path ino-line__path--flow" d="M 80 150 C 220 150, 260 62, 360 62 C 470 62, 520 120, 660 120 C 800 120, 850 80, 930 80" style={{strokeWidth:2.5}}/>
        </svg>
        <svg viewBox="0 0 1000 200" preserveAspectRatio="none" fill="none">
          {nodes.map((n,i)=><circle key={i} className="proc__node" cx={n.x*10} cy={n.y} r="7" vectorEffect="non-scaling-stroke"/>)}
        </svg>
        {nodes.map((n,i)=>(
          <div key={i} className="proc__lab" style={{left:`${n.x}%`, top: n.y>110 ? `${n.y+16}px` : `${n.y-46}px`}}>
            <div className="k">{n.k}</div><div className="d">{n.d}</div>
          </div>
        ))}
      </div>
    </div></section>
  );
}

function Contact(){
  const [sent,setSent] = React.useState(false);
  return (
    <section className="contact" id="contact"><div className="ino-wrap contact__grid">
      <div>
        <span className="ino-eye">Start a project</span>
        <h2 className="ino-h2">Tell us what you're building.</h2>
        <p style={{color:'#A9C3BE', fontSize:16, lineHeight:1.6, maxWidth:'40ch', marginTop:16}}>
          Whatever you're building, we're here to make it sharp, scalable, and real. We'll reply within one business day.
        </p>
        <div style={{display:'flex',gap:12,alignItems:'center',marginTop:28}}>
          <Avatar name="Sara Khan" status="online"/>
          <Avatar name="Amir Patel"/>
          <Avatar name="Lina Vo"/>
          <span style={{fontSize:13,color:'#7E948F'}}>Your team, on call.</span>
        </div>
      </div>
      <div className="contact__form">
        {sent ? (
          <div className="sent">
            <div className="ok">{I.check}</div>
            <div style={{fontFamily:'var(--font-display)',fontWeight:700,fontSize:22,color:'#fff'}}>Message sent</div>
            <div style={{color:'#A9C3BE',fontSize:14}}>Thanks — we'll be in touch shortly.</div>
            <Button variant="ghost" size="sm" style={{color:'#fff',marginTop:6}} onClick={()=>setSent(false)}>Send another</Button>
          </div>
        ) : (
          <React.Fragment>
            <div className="two">
              <Input label="Name" placeholder="Jane Doe"/>
              <Input label="Company" placeholder="Acme Inc."/>
            </div>
            <Input label="Work email" type="email" placeholder="jane@acme.com" required/>
            <Input label="What are you building?" placeholder="A mobile app with AI at the core…"/>
            <Button variant="primary" size="lg" iconRight={I.arrow} onClick={()=>setSent(true)}>Send message</Button>
          </React.Fragment>
        )}
      </div>
    </div></section>
  );
}

function Footer(){
  return (
    <footer className="footer"><div className="ino-wrap footer__row">
      <img src={LOGO} alt="Inovaqo" style={{height:20}}/>
      <span style={{fontSize:13}}>© 2026 Inovaqo. Built sharp, scalable, and real.</span>
      <div className="footer__social">
        <IconButton variant="ghost" label="GitHub" style={{color:'#9FB3AF'}}>{social.gh}</IconButton>
        <IconButton variant="ghost" label="LinkedIn" style={{color:'#9FB3AF'}}>{social.in}</IconButton>
        <IconButton variant="ghost" label="X" style={{color:'#9FB3AF'}}>{social.x2}</IconButton>
      </div>
    </div></footer>
  );
}

function App(){
  return (
    <div className="ino-site">
      <Nav/><Hero/><Services/><Work/><Mission/><Process/><Contact/><Footer/>
    </div>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
