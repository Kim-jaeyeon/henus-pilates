import { useEffect } from 'react';
import type { StudioConfig } from '../types/config';

interface Props {
  open: boolean;
  onClose: () => void;
  studioName: string;
  sections: NonNullable<StudioConfig['sections']>;
}

interface NavItem { label: string; href: string }

const ALL_ITEMS: NavItem[] = [
  { label: '공간',      href: '#gallery' },
  { label: '소개',      href: '#about' },
  { label: '프로그램',  href: '#programs' },
  { label: '트레이너',  href: '#trainers' },
  { label: '회원권',    href: '#pricing' },
  { label: '오시는 길', href: '#location' },
  { label: '상담 문의', href: '#contact' },
];

const SECTION_KEYS = ['gallery', 'about', 'programs', 'trainers', 'pricing', 'location', 'contact'] as const;

export default function MenuDrawer({ open, onClose, studioName, sections }: Props) {
  // 열렸을 때 스크롤 잠금
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // ESC 닫기
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  const visibleItems = ALL_ITEMS.filter((_, i) => {
    const key = SECTION_KEYS[i];
    return sections[key] !== false;
  });

  function handleLink(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    e.preventDefault();
    onClose();
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 320);
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className="drawer-backdrop"
        data-open={open}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div className="drawer-panel" data-open={open} role="dialog" aria-modal="true">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <span style={{ fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 18, letterSpacing: '-0.3px', color: 'var(--on-surface)' }}>
            {studioName}
          </span>
          <button className="drawer-close-btn" onClick={onClose} aria-label="닫기">
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <path d="M3 3l10 10M13 3L3 13" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col gap-1">
          {visibleItems.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              className="drawer-link"
              style={{ transitionDelay: open ? `${i * 40 + 60}ms` : '0ms' }}
              data-open={open}
              onClick={(e) => handleLink(e, item.href)}
            >
              <span className="drawer-link-num">0{i + 1}</span>
              {item.label}
              <span className="drawer-link-arrow">→</span>
            </a>
          ))}
        </nav>

      </div>
    </>
  );
}
