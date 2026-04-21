import type { StudioConfig } from '../../types/config';

type ProgramsConfig = NonNullable<StudioConfig['programs']>;
const d = (ms: number) => ({ '--reveal-delay': `${ms}ms` } as React.CSSProperties);

export default function Programs({ config }: { config: ProgramsConfig }) {
  return (
    <section className="bg-surface-low section-py">
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

        <div className="flex flex-col gap-3 md:grid md:grid-cols-2 md:gap-4">
          {config.items.map((item, i) => (
            <div
              key={item.num}
              className="program-card"
              data-animate
              style={{
                background: i % 2 === 1 ? 'var(--surface-mid)' : 'var(--surface-lowest)',
                ...d(80 + i * 70),
              }}
            >
              <div style={{
                fontFamily: 'var(--serif)', fontStyle: 'italic',
                fontSize: 24, fontWeight: 500, color: 'var(--secondary)', lineHeight: 1,
              }}>
                {item.num}
              </div>
              <div>
                <h4 style={{
                  fontFamily: 'var(--serif)', fontWeight: 500,
                  fontSize: 'clamp(16px, 1.4vw, 20px)', margin: '0 0 3px', letterSpacing: '-0.3px',
                  whiteSpace: 'nowrap',
                }}>{item.name}</h4>
                <p style={{ fontSize: 12, color: 'var(--on-surface-var)', margin: 0, lineHeight: 1.5 }}>
                  {item.description}
                </p>
              </div>
              <div className="program-arrow">→</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
