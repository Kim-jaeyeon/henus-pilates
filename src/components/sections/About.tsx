import type { StudioConfig } from '../../types/config';

type AboutConfig = NonNullable<StudioConfig['about']>;
const d = (ms: number) => ({ '--reveal-delay': `${ms}ms` } as React.CSSProperties);

export default function About({ config }: { config: AboutConfig }) {
  return (
    <section className="bg-surface section-py">
      <div className="wrap">
        <div className="md:grid md:grid-cols-2 md:gap-16 md:items-start">

          {/* Left — text + stats */}
          <div>
            {config.overline && (
              <div className="sec-label" data-animate style={d(0)}>{config.overline}</div>
            )}
            <h3
              className="section-h3"
              data-animate style={d(80)}
              dangerouslySetInnerHTML={{ __html: config.headline }}
            />
            <p className="section-p mt-3" style={{ maxWidth: 460, ...d(160) }} data-animate
              dangerouslySetInnerHTML={{ __html: config.description }} />

            <div className="grid grid-cols-3 gap-2 mt-8" data-animate style={d(240)}>
              {config.stats.map((s) => (
                <div key={s.label} className="rounded-2xl p-4"
                  style={{ background: 'var(--surface-lowest)' }}>
                  <div style={{
                    fontFamily: 'var(--serif)', fontWeight: 500,
                    fontSize: 'clamp(22px, 2.5vw, 34px)',
                    lineHeight: 1, letterSpacing: '-0.6px', color: 'var(--primary)',
                    whiteSpace: 'nowrap',
                  }}>{s.value}</div>
                  <div style={{
                    fontSize: 10, color: 'var(--on-surface-var)', marginTop: 5,
                    letterSpacing: '0.4px', whiteSpace: 'nowrap',
                  }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — images */}
          <div className="hidden md:grid grid-cols-2 gap-3 md:mt-0">
            <div
              className="rounded-2xl overflow-hidden relative"
              data-animate="scale" style={{ height: 'clamp(200px, 28vw, 360px)', ...d(200),
                background: config.images
                  ? `url('${config.images[0]}') center/cover no-repeat`
                  : 'repeating-linear-gradient(38deg, #e3ddd2 0 12px, #d4ccbd 12px 24px)',
              }}
            >
              {!config.images && <span className="about-img-label">reformer · room</span>}
            </div>
            <div
              className="rounded-2xl overflow-hidden relative md:translate-y-8"
              data-animate="scale" style={{ height: 'clamp(160px, 22vw, 280px)', ...d(320),
                background: config.images
                  ? `url('${config.images[1]}') center/cover no-repeat`
                  : 'repeating-linear-gradient(52deg, #d6dec3 0 12px, #c5cfb0 12px 24px)',
              }}
            >
              {!config.images && <span className="about-img-label">mat · natural light</span>}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
