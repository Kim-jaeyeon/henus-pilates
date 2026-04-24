import React from 'react';
import type { StudioConfig } from '../../types/config';

type LocationConfig = NonNullable<StudioConfig['location']>;
const d = (ms: number) => ({ '--reveal-delay': `${ms}ms` } as React.CSSProperties);

export default function Location({ config }: { config: LocationConfig }) {
  const contactSub = [config.kakao && `카카오채널 ${config.kakao}`, config.email].filter(Boolean).join(' · ') || undefined;

  const hoursNode = config.hours ? (
    <div>
      {config.hours.rows.map((row) => (
        <div key={row.day} style={{ display: 'flex', gap: 10, fontSize: 14, lineHeight: 1.7 }}>
          <span style={{ minWidth: 18, fontWeight: 600, color: 'var(--secondary)', fontSize: 11, letterSpacing: '0.5px', paddingTop: 2 }}>{row.day}</span>
          <span style={{ color: row.closed ? 'var(--secondary)' : 'var(--on-surface)' }}>{row.time}</span>
        </div>
      ))}
      {config.hours.note && (
        <div style={{ marginTop: 5, fontSize: 11, color: 'var(--secondary)', letterSpacing: '0.2px' }}>{config.hours.note}</div>
      )}
    </div>
  ) : null;

  const items: { key: string; strong?: string; sub?: string; node?: React.ReactNode }[] = [
    { key: '주소', strong: config.address, sub: config.addressDetail },
    {
      key: '운영',
      node: hoursNode ?? undefined,
      strong: hoursNode ? undefined : config.hoursWeekday,
      sub: hoursNode ? undefined : config.hoursWeekend,
    },
    { key: '교통', strong: config.transit, sub: config.parking },
    { key: '연락', strong: config.phone, sub: contactSub },
  ];

  return (
    <section className="bg-surface section-py">
      <div className="wrap">
        <div className="md:grid md:grid-cols-2 md:gap-16 md:items-start">

          {/* Left — text + details */}
          <div>
            {config.overline && (
              <div className="sec-label" data-animate style={d(0)}>{config.overline}</div>
            )}
            <h3 className="section-h3" data-animate style={d(80)}
              dangerouslySetInnerHTML={{ __html: config.headline }} />

            <div className="flex flex-col gap-3 mt-7">
              {items.map(({ key, strong, sub, node }, i) => (
                <div key={key} className="grid gap-4 items-baseline"
                  data-animate style={{ gridTemplateColumns: '56px 1fr', ...d(160 + i * 80) }}>
                  <div style={{
                    fontSize: 10, letterSpacing: '1.4px', textTransform: 'uppercase',
                    color: 'var(--secondary)', fontWeight: 700, paddingTop: 3,
                  }}>
                    {key}
                  </div>
                  <div style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--on-surface)' }}>
                    {node ?? (
                      <>
                        <strong style={{
                          fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 17,
                          display: 'block', marginBottom: 2, wordBreak: 'keep-all', overflowWrap: 'anywhere',
                        }}>
                          {strong}
                        </strong>
                        {sub && (
                          <span style={{ wordBreak: 'keep-all' }}>{sub}</span>
                        )}
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — map */}
          <div
            className="relative overflow-hidden rounded-2xl mt-10 md:mt-0"
            data-animate="scale" style={{ height: 'clamp(240px, 30vw, 420px)', background: 'var(--surface-low)', ...d(200) }}
          >
            <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className="w-full h-full block">
              <defs>
                <pattern id="mg" width="24" height="24" patternUnits="userSpaceOnUse">
                  <path d="M24 0H0v24" stroke="#d8d5cd" strokeWidth="0.5" fill="none" />
                </pattern>
              </defs>
              <rect width="400" height="300" fill="#f5f3f0" />
              <rect width="400" height="300" fill="url(#mg)" />
              <path d="M-20 120 Q 140 80 220 160 T 420 220" stroke="#e3ddce" strokeWidth="22" fill="none" />
              <path d="M80 -20 Q 110 140 200 250 T 300 380" stroke="#e8e3d5" strokeWidth="16" fill="none" />
              <rect x="20" y="40" width="70" height="50" rx="8" fill="#d6dec3" opacity="0.6" />
              <rect x="300" y="80" width="80" height="60" rx="8" fill="#d6dec3" opacity="0.5" />
              <circle cx="200" cy="150" r="28" fill="var(--primary)" fillOpacity="0.13" />
              <circle cx="200" cy="150" r="13" fill="var(--primary)" />
              <circle cx="200" cy="150" r="5.5" fill="#fff" />
            </svg>
            <div className="absolute top-4 left-4 flex items-center gap-2 px-4 py-2 rounded-full"
              style={{
                background: 'rgba(251,249,246,0.85)',
                backdropFilter: 'blur(12px)',
                fontSize: 12, fontWeight: 600,
                boxShadow: '0 2px 12px rgba(49,51,48,0.08)',
                whiteSpace: 'nowrap',
              }}>
              <span style={{ width: 6, height: 6, borderRadius: 99, background: 'var(--primary)', display: 'block' }} />
              {config.district}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
