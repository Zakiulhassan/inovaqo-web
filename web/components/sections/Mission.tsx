import { GrowingLine } from '@/components/ui/GrowingLine';

export function Mission() {
  return (
    <section className="mission" id="mission">
      <div className="ino-wrap">
        <span className="ino-eye" style={{ color: 'var(--cyan-300)' }}>Brand Mission</span>
        <p className="mission__stmt">
          To provide{' '}
          <em className="c">intuitive</em> and{' '}
          <em className="w">efficient</em>{' '}
          tools that streamline workflows, enhance focus, and optimise time.
        </p>
      </div>
      <GrowingLine variant="wave" height={90} style={{ marginTop: 36 }} />
    </section>
  );
}
