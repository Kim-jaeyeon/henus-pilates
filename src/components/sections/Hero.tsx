import type { HeroVariant } from '../../types/config';

interface HeroConfig {
  overline: string;
  headline: string;
  subtext: string;
  ctaPrimary: string;
  ctaSecondary?: string;
  bgStyle?: string;
}

interface Props {
  config: HeroConfig;
  variant: HeroVariant;
}

const ArrowRight = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M2 8h12M9 3l5 5-5 5" />
  </svg>
);

// Splits plain text into per-character animated spans
function CharReveal({ text, startDelay, charDelay = 28, color }: {
  text: string; startDelay: number; charDelay?: number; color?: string;
}) {
  let i = 0;
  return (
    <>
      {Array.from(text).map((ch, idx) => {
        const delay = startDelay + i * charDelay;
        if (ch !== ' ') i++;
        return (
          <span key={idx} style={{
            display: ch === ' ' ? 'inline' : 'inline-block',
            opacity: 0,
            color,
            animation: `heroCharIn 0.55s cubic-bezier(0.16,1,0.3,1) ${delay}ms forwards`,
          }}>{ch}</span>
        );
      })}
    </>
  );
}

// Parses headline HTML (supports <br> and <em>) and animates char by char
function HeadlineReveal({ html, startDelay, charDelay = 32, centered, color }: {
  html: string; startDelay: number; charDelay?: number; centered?: boolean; color?: string;
}) {
  type Seg = { type: 'text' | 'em' | 'br'; text?: string };
  const segments: Seg[] = [];
  const re = /(<br\s*\/?>|<em>([\s\S]*?)<\/em>|([^<]+))/gi;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html)) !== null) {
    if (/^<br/i.test(m[0])) segments.push({ type: 'br' });
    else if (/^<em/i.test(m[0])) segments.push({ type: 'em', text: m[2] });
    else segments.push({ type: 'text', text: m[0] });
  }

  let charCount = 0;
  const rendered = segments.map((seg, si) => {
    if (seg.type === 'br') return <br key={si} />;
    const chars = Array.from(seg.text ?? '');
    const spans = chars.map((ch, ci) => {
      const delay = startDelay + charCount * charDelay;
      if (ch !== ' ') charCount++;
      return (
        <span key={ci} style={{
          display: ch === ' ' ? 'inline' : 'inline-block',
          opacity: 0,
          animation: `heroCharIn 0.55s cubic-bezier(0.16,1,0.3,1) ${delay}ms forwards`,
        }}>{ch}</span>
      );
    });
    if (seg.type === 'em') return <em key={si} style={{ fontStyle: 'italic', color: 'var(--primary-container)' }}>{spans}</em>;
    return <span key={si}>{spans}</span>;
  });

  return (
    <h1 style={{
      fontFamily: 'var(--serif)', fontWeight: 500,
      fontSize: 'clamp(40px, 7vw, 96px)',
      lineHeight: 1.04, letterSpacing: 'clamp(-1.2px, -0.2vw, -2px)',
      margin: '20px 0 0', color: color ?? 'var(--on-surface)',
      textAlign: centered ? 'center' : 'left',
    }}>
      {rendered}
    </h1>
  );
}

const hi = (delay: number): React.CSSProperties => ({
  opacity: 0,
  animation: `heroFadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms forwards`,
});

export default function Hero({ config, variant }: Props) {
  const isCentered = variant === 'centered';
  const heroDefaultBg = 'repeating-linear-gradient(42deg, #c0c9ac 0 14px, #afb998 14px 28px)';

  return (
    <section style={{ position: 'relative', overflow: 'hidden', minHeight: '100svh', display: 'flex', flexDirection: 'column' }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: config.bgStyle ?? heroDefaultBg,
        animation: 'heroBgIn 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0ms forwards',
        opacity: 0,
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: isCentered
          ? 'rgba(20,18,16,0.52)'
          : 'linear-gradient(180deg, rgba(251,249,246,0.0) 0%, rgba(251,249,246,0.05) 45%, rgba(251,249,246,0.82) 80%)',
        animation: 'heroFadeIn 1.4s ease 0ms forwards',
        opacity: 0,
      }} />

      <div className="wrap" style={{
        position: 'relative', zIndex: 2,
        marginTop: 'auto',
        paddingBottom: 'clamp(56px, 8vh, 96px)',
        paddingTop: 80,
        textAlign: isCentered ? 'center' : 'left',
      }}>
        {isCentered
          ? <div style={{ maxWidth: 760, marginInline: 'auto' }}><HeroContent config={config} centered /></div>
          : <div style={{ maxWidth: 680 }}><HeroContent config={config} /></div>
        }
      </div>
    </section>
  );
}

function smoothScrollDown() {
  const hero = document.querySelector('section');
  if (!hero) return;
  const target = hero.getBoundingClientRect().bottom + window.scrollY;
  const start = window.scrollY;
  const distance = target - start;
  const duration = 200;
  let startTime: number | null = null;
  function step(timestamp: number) {
    if (!startTime) startTime = timestamp;
    const t = Math.min((timestamp - startTime) / duration, 1);
    window.scrollTo(0, start + distance * (t < 0.5 ? 8*t*t*t*t : 1 - Math.pow(-2*t+2,4)/2));
    if (t < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

function HeroContent({ config, centered }: { config: HeroConfig; centered?: boolean }) {
  // Count overline chars for headline start timing
  const overlineChars = Array.from(config.overline).filter(c => c !== ' ').length;
  const overlineStart = 80;
  const headlineStart = overlineStart + overlineChars * 28 * 0.4; // overlap at 40%
  const headlineChars = Array.from(config.headline.replace(/<[^>]+>/g, '')).filter(c => c !== ' ').length;
  const subtextStart = Math.round(headlineStart + headlineChars * 32 * 0.5);
  const btnStart = subtextStart + 220;

  return (
    <>
      <div className="sec-label" style={{
        display: centered ? 'flex' : 'block',
        justifyContent: centered ? 'center' : undefined,
        color: centered ? 'rgba(255,255,255,0.7)' : undefined,
      }}>
        <CharReveal text={config.overline} startDelay={overlineStart} charDelay={28} />
      </div>

      <HeadlineReveal
        html={config.headline}
        startDelay={Math.round(headlineStart)}
        charDelay={32}
        centered={centered}
        color={centered ? '#fff' : undefined}
      />

      <p style={{
        fontSize: 'clamp(14px, 1.2vw, 17px)', lineHeight: 1.65,
        color: centered ? 'rgba(255,255,255,0.75)' : 'var(--on-surface-var)',
        margin: '24px 0 36px',
        maxWidth: centered ? 480 : 400,
        marginLeft: centered ? 'auto' : undefined,
        marginRight: centered ? 'auto' : undefined,
        ...hi(subtextStart),
      }}
        dangerouslySetInnerHTML={{ __html: config.subtext }}
      />

      <div style={{
        display: 'flex', gap: 12, flexWrap: 'wrap',
        justifyContent: centered ? 'center' : 'flex-start',
        ...hi(btnStart),
      }}>
        <button className="btn btn-primary" onClick={smoothScrollDown}>
          {config.ctaPrimary}
          <ArrowRight />
        </button>
        {config.ctaSecondary && (
          <button className="btn btn-secondary">{config.ctaSecondary}</button>
        )}
      </div>
    </>
  );
}
