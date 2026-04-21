import type { StudioConfig } from '../../types/config';

type PricingConfig = NonNullable<StudioConfig['pricing']>;
const d = (ms: number) => ({ '--reveal-delay': `${ms}ms` } as React.CSSProperties);

export default function Pricing({ config }: { config: PricingConfig }) {
  return (
    <section className="bg-sage section-py">
      <div className="wrap">
        <div className="md:flex md:items-end md:justify-between md:gap-12 mb-7 md:mb-10">
          <div>
            {config.overline && (
              <div className="sec-label" data-animate style={{ color: 'var(--primary-container)', ...d(0) }}>
                {config.overline}
              </div>
            )}
            <h3 className="section-h3" data-animate style={{ color: 'var(--on-primary)', ...d(80) }}
              dangerouslySetInnerHTML={{ __html: config.headline }} />
          </div>
          {config.description && (
            <p className="section-p hidden md:block md:max-w-xs md:text-right"
              data-animate style={{ color: 'var(--on-primary)', opacity: 0.75, ...d(120) }}
              dangerouslySetInnerHTML={{ __html: config.description }} />
          )}
        </div>

        {/* Event card */}
        {config.event && (
          <div data-animate className="flex flex-col md:grid md:grid-cols-[1fr_auto]"
            style={{ ...d(120), borderRadius: 20, overflow: 'hidden', marginBottom: 12,
              background: 'rgba(255,255,255,0.10)', backdropFilter: 'blur(8px)',
              boxShadow: 'inset 0 0.5px 0 rgba(255,255,255,0.18)',
            }}>
            {/* Text */}
            <div style={{ padding: '22px 22px 16px', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {config.event.badge && (
                <span style={{
                  display: 'inline-block', alignSelf: 'flex-start',
                  fontSize: 9, letterSpacing: '1.2px', textTransform: 'uppercase', fontWeight: 700,
                  padding: '4px 10px', borderRadius: 99,
                  background: 'var(--primary-container)', color: 'var(--on-primary-container)',
                }}>
                  {config.event.badge}
                </span>
              )}
              <div style={{
                fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 'clamp(15px, 1.4vw, 18px)',
                color: 'var(--on-primary)', letterSpacing: '-0.3px', lineHeight: 1.35,
              }}>
                {config.event.title}
              </div>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 7 }}>
                {config.event.bullets.map((b) => (
                  <li key={b} style={{ fontSize: 12, color: 'rgba(255,255,255,0.80)', display: 'flex', alignItems: 'flex-start', gap: 7, lineHeight: 1.6, wordBreak: 'keep-all', overflowWrap: 'anywhere' }}>
                    <span style={{ width: 3, height: 3, borderRadius: 99, background: 'var(--primary-container)', flexShrink: 0, marginTop: 6 }} />
                    <span dangerouslySetInnerHTML={{ __html: b }} />
                  </li>
                ))}
              </ul>
            </div>
            {/* Image — bottom on mobile, right on sm+ */}
            {config.event.imageUrl && (
              <div className="max-md:pb-5 md:py-4 md:pr-4" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={config.event.imageUrl} alt={config.event.title}
                  style={{ height: 'auto', display: 'block', borderRadius: 14,
                    width: 'clamp(140px, 18vw, 220px)' }} />
              </div>
            )}
          </div>
        )}

        {/* Tier cards — 2-col on mobile, keep in grid on desktop */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12, alignItems: 'stretch' }}>
          {config.tiers.map((tier, i) => (
            <div key={tier.name} data-animate style={{ ...d(200 + i * 100), borderRadius: 20,
              padding: '20px 18px',
              background: tier.featured ? 'var(--surface)' : 'rgba(255,255,255,0.08)',
              color: tier.featured ? 'var(--on-surface)' : 'var(--on-primary)',
              backdropFilter: tier.featured ? undefined : 'blur(8px)',
              boxShadow: tier.featured ? '0 16px 40px rgba(49,51,48,0.12)' : 'inset 0 0.5px 0 rgba(255,255,255,0.15)',
              display: 'flex', flexDirection: 'column',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10, gap: 6 }}>
                <h4 style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 16, letterSpacing: '-0.3px', margin: 0, lineHeight: 1.3 }}>{tier.name}</h4>
                {tier.badge && (
                  <span style={{
                    fontSize: 8, letterSpacing: '0.8px', textTransform: 'uppercase',
                    padding: '3px 7px', borderRadius: 99, fontWeight: 700, whiteSpace: 'nowrap', flexShrink: 0,
                    background: 'var(--primary-container)', color: 'var(--on-primary-container)',
                  }}>{tier.badge}</span>
                )}
              </div>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 26, fontWeight: 500, letterSpacing: '-0.6px', lineHeight: 1, marginBottom: 12 }}>
                {tier.price}
                <span style={{ fontFamily: 'var(--sans)', fontSize: 11, fontWeight: 500, marginLeft: 3,
                  color: tier.featured ? 'var(--on-surface-var)' : 'rgba(255,255,255,0.65)' }}>{tier.unit}</span>
              </div>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6, flex: 1 }}>
                {tier.features.map((f) => (
                  <li key={f} style={{ fontSize: 12, display: 'flex', alignItems: 'flex-start', gap: 7, opacity: 0.85, lineHeight: 1.4 }}>
                    <span style={{ width: 3, height: 3, borderRadius: 99, background: 'currentColor', flexShrink: 0, marginTop: 5 }} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8" data-animate style={d(400)}>
          <button
            className="btn btn-primary"
            style={{ background: 'var(--surface)', color: 'var(--on-surface)', minWidth: 200, justifyContent: 'center' }}
            onClick={() => {
              const lenis = (window as unknown as Record<string, unknown>).__lenis as { scrollTo: (t: HTMLElement, o?: object) => void } | undefined;
              const el = document.getElementById('contact');
              if (el) lenis ? lenis.scrollTo(el, { offset: -64 }) : el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            수업 문의하기
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ width: 14, height: 14 }}>
              <path d="M2 8h12M9 3l5 5-5 5" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
