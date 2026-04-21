import type { StudioConfig } from '../types/config';

type FooterConfig = StudioConfig['footer'];

interface Props {
  studioName: string;
  config: FooterConfig;
}

export default function Footer({ studioName, config }: Props) {
  return (
    <footer className="site-footer">
      <div className="wrap">

        {/* Desktop: 4-col | Mobile: stacked */}
        <div className="md:grid md:grid-cols-[2fr_1fr_1fr_1fr] md:gap-12 md:items-start">

          {/* Brand column */}
          <div>
            <div style={{ fontFamily: 'var(--serif)', color: '#fff', fontSize: 22, fontWeight: 500, letterSpacing: '-0.3px', marginBottom: 12 }}>
              {studioName}
            </div>
            <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, lineHeight: 1.6 }}>
              {config.address}
            </div>
            <div style={{ fontSize: 13, marginTop: 4, color: 'rgba(255,255,255,0.5)' }}>
              {config.phone}
            </div>
            {config.email && (
              <a href={`mailto:${config.email}`} style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', display: 'block', marginTop: 2 }}>
                {config.email}
              </a>
            )}

            {/* Socials */}
            {config.socials && config.socials.length > 0 && (
              <div className="flex gap-[8px] mt-5">
                {config.socials.map((s) => (
                  <a key={s.label} href={s.url ?? '#'} className="footer-social">{s.label}</a>
                ))}
              </div>
            )}
          </div>

          {/* Legal links — hidden on mobile, visible in desktop grid */}
          <div className="hidden md:block">
            <div style={{ fontSize: 11, letterSpacing: '1.2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 14, fontWeight: 600 }}>
              Legal
            </div>
            {config.legalLinks?.map((l) => (
              <a key={l.label} href={l.url ?? '#'}
                style={{ display: 'block', fontSize: 13, color: 'rgba(255,255,255,0.5)', marginBottom: 8 }}>
                {l.label}
              </a>
            ))}
          </div>

          {/* Placeholder columns for visual balance */}
          <div className="hidden md:block" />
          <div className="hidden md:block" />
        </div>

        {/* Bottom bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mt-10 pt-6"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.4px' }}>
            {config.copyright}
            {config.businessNumber && ` · 사업자등록 ${config.businessNumber}`}
          </div>

          {/* Mobile legal links */}
          {config.legalLinks && (
            <div className="flex gap-4 md:hidden">
              {config.legalLinks.map((l) => (
                <a key={l.label} href={l.url ?? '#'}
                  style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>
                  {l.label}
                </a>
              ))}
            </div>
          )}
        </div>

      </div>
    </footer>
  );
}
