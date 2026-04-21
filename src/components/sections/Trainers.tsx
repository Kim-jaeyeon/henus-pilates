import { useState, useEffect, useRef } from 'react';
import type { StudioConfig } from '../../types/config';

type TrainersConfig = NonNullable<StudioConfig['trainers']>;
type Trainer = TrainersConfig['items'][number];

const d = (ms: number) => ({ '--reveal-delay': `${ms}ms` } as React.CSSProperties);

function TrainerModal({ trainer, onClose }: { trainer: Trainer; onClose: () => void }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setVisible(true));
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') handleClose(); };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, []);

  function handleClose() {
    setVisible(false);
    setTimeout(onClose, 320);
  }

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 300,
        background: `rgba(20,18,16,${visible ? 0.6 : 0})`,
        backdropFilter: `blur(${visible ? 12 : 0}px)`,
        WebkitBackdropFilter: `blur(${visible ? 12 : 0}px)`,
        transition: 'background 320ms ease, backdrop-filter 320ms ease',
        display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
      }}
      onClick={handleClose}
    >
      <div
        style={{
          width: '100%', maxWidth: 480,
          background: 'var(--surface)',
          borderRadius: '24px 24px 0 0',
          overflow: 'hidden',
          transform: visible ? 'translateY(0)' : 'translateY(100%)',
          transition: 'transform 360ms cubic-bezier(0.16, 1, 0.3, 1)',
          maxHeight: '92svh',
          display: 'flex', flexDirection: 'column',
        }}
        onClick={e => e.stopPropagation()}
      >
        <div style={{ display: 'flex', justifyContent: 'center', padding: '12px 0 0' }}>
          <div style={{ width: 36, height: 4, borderRadius: 99, background: 'var(--surface-mid)' }} />
        </div>
        {trainer.imageUrl && (
          <div style={{ margin: '16px 20px 0', borderRadius: 16, overflow: 'hidden', flexShrink: 0 }}>
            <img src={trainer.imageUrl} alt={trainer.name}
              style={{ width: '100%', display: 'block', objectFit: 'contain' }} />
          </div>
        )}
        <div style={{ padding: '20px 24px 40px', overflowY: 'auto' }}>
          <div style={{ fontSize: 10, letterSpacing: '1.4px', textTransform: 'uppercase', color: 'var(--secondary)', fontWeight: 600, marginBottom: 4 }}>
            {trainer.role}
          </div>
          <div style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 26, letterSpacing: '-0.4px', marginBottom: 12 }}>
            {trainer.name}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {trainer.tags.map(tag => (
              <span key={tag} className="chip" style={{ fontSize: 12, padding: '5px 12px' }}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const CARD_W = 260;
const GAP = 12;
const SPEED = 0.7; // px per frame

function TrainerCarousel({ items, onSelect }: { items: Trainer[]; onSelect: (t: Trainer) => void }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);
  const rafRef = useRef<number>();
  const pausedRef = useRef(false);
  const touchStartX = useRef(0);
  const touchStartPos = useRef(0);
  const touchMovedRef = useRef(false);
  const halfWidth = items.length * (CARD_W + GAP);

  useEffect(() => {
    function tick() {
      if (!pausedRef.current) {
        posRef.current -= SPEED;
        if (posRef.current <= -halfWidth) posRef.current += halfWidth;
      }
      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(${posRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    }
    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [halfWidth]);

  function onTouchStart(e: React.TouchEvent) {
    pausedRef.current = true;
    touchMovedRef.current = false;
    touchStartX.current = e.touches[0].clientX;
    touchStartPos.current = posRef.current;
  }

  function onTouchMove(e: React.TouchEvent) {
    touchMovedRef.current = true;
    let next = touchStartPos.current + (e.touches[0].clientX - touchStartX.current);
    if (next <= -halfWidth) next += halfWidth;
    if (next > 0) next -= halfWidth;
    posRef.current = next;
  }

  function onTouchEnd(e: React.TouchEvent) {
    pausedRef.current = false;
    // suppress click if it was a swipe
    if (touchMovedRef.current && Math.abs(e.changedTouches[0].clientX - touchStartX.current) > 10) {
      e.preventDefault();
    }
  }

  const slides = [...items, ...items];

  return (
    <div style={{ overflow: 'hidden', margin: '0 -24px' }}>
      <div
        ref={trackRef}
        style={{ display: 'flex', gap: GAP, width: 'max-content', paddingLeft: 24, willChange: 'transform' }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {slides.map((trainer, i) => (
          <div
            key={`${trainer.name}-${i}`}
            style={{ width: CARD_W, flexShrink: 0, background: 'var(--surface-lowest)', borderRadius: 20, overflow: 'hidden', cursor: 'pointer' }}
            onClick={() => !touchMovedRef.current && onSelect(trainer)}
          >
            <div style={{
              aspectRatio: '3/4',
              background: trainer.imageUrl
                ? `url('${trainer.imageUrl}') center/cover no-repeat`
                : 'repeating-linear-gradient(32deg, #d4d9c4 0 14px, #c3c9b1 14px 28px)',
            }} />
            <div style={{ padding: '12px 16px 16px' }}>
              <div style={{ fontSize: 10, letterSpacing: '1.2px', textTransform: 'uppercase', color: 'var(--secondary)', fontWeight: 600 }}>
                {trainer.role}
              </div>
              <div style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 18, margin: '3px 0 7px', letterSpacing: '-0.2px' }}>
                {trainer.name}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                {trainer.tags.map(tag => (
                  <span key={tag} className="chip">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Trainers({ config }: { config: TrainersConfig }) {
  const [selected, setSelected] = useState<Trainer | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return (
    <section className="bg-surface section-py">
      <div className="wrap">
        <div className="md:flex md:items-end md:justify-between md:gap-12 mb-7 md:mb-10">
          <div>
            {config.overline && (
              <div className="sec-label" data-animate style={d(0)}>{config.overline}</div>
            )}
            <h3 className="section-h3" data-animate style={d(80)}
              dangerouslySetInnerHTML={{ __html: config.headline }} />
          </div>
          {config.description && (
            <p className="section-p hidden md:block md:max-w-xs md:text-right"
              data-animate style={d(120)} dangerouslySetInnerHTML={{ __html: config.description }} />
          )}
        </div>

        {isMobile ? (
          <TrainerCarousel items={config.items} onSelect={setSelected} />
        ) : (
          <div className="trainer-rail" data-animate="left" style={d(160)}>
            {config.items.map((trainer) => (
              <div
                key={trainer.name}
                className="trainer-card"
                style={{ background: 'var(--surface-lowest)', cursor: 'pointer' }}
                onClick={() => setSelected(trainer)}
              >
                <div
                  className="trainer-img"
                  style={{
                    background: trainer.imageUrl
                      ? `url('${trainer.imageUrl}') center/cover no-repeat`
                      : trainer.bgStyle ?? 'repeating-linear-gradient(32deg, #d4d9c4 0 14px, #c3c9b1 14px 28px)',
                  }}
                >
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'rgba(20,18,16,0)',
                    transition: 'background 220ms ease',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }} className="trainer-hover-overlay">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
                      stroke="rgba(255,255,255,0)" strokeWidth="1.5" strokeLinecap="round"
                      style={{ transition: 'stroke 220ms ease' }} className="trainer-zoom-icon">
                      <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35M11 8v6M8 11h6" />
                    </svg>
                  </div>
                </div>
                <div style={{ padding: '12px 16px 16px' }}>
                  <div style={{ fontSize: 10, letterSpacing: '1.2px', textTransform: 'uppercase', color: 'var(--secondary)', fontWeight: 600, whiteSpace: 'nowrap' }}>
                    {trainer.role}
                  </div>
                  <div style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 18, margin: '3px 0 7px', letterSpacing: '-0.2px', whiteSpace: 'nowrap' }}>
                    {trainer.name}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {trainer.tags.map((tag) => (
                      <span key={tag} className="chip">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {selected && <TrainerModal trainer={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
