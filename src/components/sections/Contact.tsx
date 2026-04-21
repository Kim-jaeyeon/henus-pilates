import { Phone, ArrowRight } from 'lucide-react';
import type { StudioConfig } from '../../types/config';

const d = (ms: number) => ({ '--reveal-delay': `${ms}ms` } as React.CSSProperties);

type ContactConfig = NonNullable<StudioConfig['contact']>;

interface Props {
  config: ContactConfig;
}

const NaverIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

export default function Contact({ config }: Props) {
  return (
    <section className="bg-surface-low section-py" style={{ paddingBottom: 'clamp(72px, 10vh, 120px)' }}>
      <div className="wrap">
        <div className="md:grid md:grid-cols-[1fr_1.2fr] md:gap-20 md:items-start">

          {/* Left — headline */}
          <div className="md:sticky md:top-24">
            {config.overline && <div className="sec-label" data-animate style={d(0)}>{config.overline}</div>}
            <h3 className="section-h3" data-animate style={d(80)} dangerouslySetInnerHTML={{ __html: config.headline }} />
            {config.description && (
              <p className="section-p mt-3" data-animate style={{ maxWidth: 360, ...d(160) }}
                dangerouslySetInnerHTML={{ __html: config.description }} />
            )}
          </div>

          {/* Right — action buttons */}
          <div className="flex flex-col gap-3 mt-10 md:mt-0">
            {config.phone && (
              <a href={`tel:${config.phone}`} className="quick-action-btn" data-animate style={d(200)}>
                <Phone size={20} strokeWidth={1.75} style={{ flexShrink: 0, color: 'var(--primary)' }} />
                <span className="quick-action-text">
                  <span className="quick-action-label">전화 문의</span>
                  <span className="quick-action-sub">{config.phone}</span>
                </span>
                <ArrowRight size={14} style={{ flexShrink: 0, color: 'var(--on-surface-var)' }} />
              </a>
            )}
            {config.naverBookingUrl && (
              <a href={config.naverBookingUrl} target="_blank" rel="noopener noreferrer"
                className="quick-action-btn" data-animate style={d(280)}>
                <span style={{ flexShrink: 0, color: '#03C75A', display: 'flex' }}>
                  <NaverIcon />
                </span>
                <span className="quick-action-text">
                  <span className="quick-action-label">네이버로 예약 및 문의하기</span>
                  <span className="quick-action-sub">실시간 예약 · 바로 확인</span>
                </span>
                <ArrowRight size={14} style={{ flexShrink: 0, color: 'var(--on-surface-var)' }} />
              </a>
            )}
            {config.instagramUrl && (
              <a href={config.instagramUrl} target="_blank" rel="noopener noreferrer"
                className="quick-action-btn" data-animate style={d(360)}>
                <span style={{ flexShrink: 0, color: '#C13584', display: 'flex' }}>
                  <InstagramIcon />
                </span>
                <span className="quick-action-text">
                  <span className="quick-action-label">DM으로 문의하기</span>
                  <span className="quick-action-sub">@henus_.pilates</span>
                </span>
                <ArrowRight size={14} style={{ flexShrink: 0, color: 'var(--on-surface-var)' }} />
              </a>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
