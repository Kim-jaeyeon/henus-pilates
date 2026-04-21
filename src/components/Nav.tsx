import { useState } from 'react';
import type { StudioConfig } from '../types/config';
import MenuDrawer from './MenuDrawer';

interface NavProps {
  studioName: string;
  logoUrl?: string;
  sections: NonNullable<StudioConfig['sections']>;
}

interface NavItem { label: string; href: string; sectionKey: string }

const NAV_ITEMS: NavItem[] = [
  { label: '공간',      href: '#gallery',  sectionKey: 'gallery' },
  { label: '소개',      href: '#about',    sectionKey: 'about' },
  { label: '프로그램',  href: '#programs', sectionKey: 'programs' },
  { label: '강사진',    href: '#trainers', sectionKey: 'trainers' },
  { label: '회원권',    href: '#pricing',  sectionKey: 'pricing' },
  { label: '오시는 길', href: '#location', sectionKey: 'location' },
  { label: '문의',      href: '#contact',  sectionKey: 'contact' },
];

export default function Nav({ studioName, logoUrl, sections }: NavProps) {
  const [open, setOpen] = useState(false);
  const mark = (studioName || 'S').trim().charAt(0).toUpperCase();

  const visibleLinks = NAV_ITEMS.filter(
    item => sections[item.sectionKey as keyof typeof sections] !== false
  );

  function scrollTo(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    e.preventDefault();
    const el = document.querySelector(href) as HTMLElement | null;
    if (!el) return;
    const lenis = (window as unknown as Record<string, unknown>).__lenis as { scrollTo: (t: HTMLElement, o?: object) => void } | undefined;
    lenis ? lenis.scrollTo(el, { offset: -64 }) : el.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <nav className="nav-bar">
        <div className="nav-inner">
          {/* Brand */}
          <a href="#" className="nav-brand">
            {logoUrl
              ? <img src={logoUrl} alt={studioName} className="nav-brand-logo" />
              : <span className="nav-brand-mark">{mark}</span>
            }
            <span className="nav-brand-name">{studioName}</span>
          </a>

          {/* Desktop links */}
          <div className="nav-links">
            {visibleLinks.map(item => (
              <a key={item.href} href={item.href} className="nav-link"
                onClick={e => scrollTo(e, item.href)}>
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="hamburger-btn"
            onClick={() => setOpen(true)}
            aria-label="메뉴 열기"
            aria-expanded={open}
          >
            <span className="ham-line" />
            <span className="ham-line" />
            <span className="ham-line short" />
          </button>
        </div>
      </nav>

      <MenuDrawer
        open={open}
        onClose={() => setOpen(false)}
        studioName={studioName}
        sections={sections}
      />
    </>
  );
}
