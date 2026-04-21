export type HeroVariant = 'editorial' | 'centered' | 'split';
export type Tone = 'cream' | 'mono' | 'warm';

export interface Stat {
  value: string;
  label: string;
}

export interface Program {
  num: string;
  name: string;
  description: string;
}

export interface Trainer {
  name: string;
  role: string;
  tags: string[];
  bgStyle?: string;
  imageUrl?: string;
}

export interface PricingTier {
  name: string;
  price: string;
  unit: string;
  features: string[];
  featured?: boolean;
  badge?: string;
  ctaLabel: string;
}

export interface Social {
  label: string;
  url?: string;
}

export interface LegalLink {
  label: string;
  url?: string;
}

export interface StickyCtaConfig {
  label: string;
  sublabel: string;
  btnLabel: string;
}

export interface StudioConfig {
  // ─── Identity ───────────────────────────────────────────
  studioName: string;
  studioNameKr?: string;
  logoUrl?: string;

  // ─── Theme ──────────────────────────────────────────────
  theme: {
    primaryColor: string;
    heroVariant: HeroVariant;
    tone: Tone;
  };

  // ─── Section visibility (all true by default) ───────────
  sections?: {
    about?: boolean;
    programs?: boolean;
    trainers?: boolean;
    gallery?: boolean;
    pricing?: boolean;
    location?: boolean;
    contact?: boolean;
  };

  // ─── Hero ───────────────────────────────────────────────
  hero: {
    overline: string;
    // HTML string — wrap italic/colored text in <em>
    headline: string;
    subtext: string;
    ctaPrimary: string;
    ctaSecondary?: string;
    bgStyle?: string; // CSS background for hero image area
  };

  // ─── About ──────────────────────────────────────────────
  about?: {
    overline?: string;
    headline: string;
    description: string;
    stats: Stat[];
    images?: [string, string]; // [좌측 이미지 URL, 우측 이미지 URL]
  };

  // ─── Programs ───────────────────────────────────────────
  programs?: {
    overline?: string;
    headline: string;
    description?: string;
    items: Program[];
  };

  // ─── Trainers ───────────────────────────────────────────
  trainers?: {
    overline?: string;
    headline: string;
    description?: string;
    items: Trainer[];
  };

  // ─── Gallery ────────────────────────────────────────────
  gallery?: {
    overline?: string;
    headline: string;
    tiles?: {
      label: string;
      bgStyle?: string;
      cols?: number;        // grid-column span override
      aspectRatio?: string; // e.g. '4/3', '817/1280', '16/9'
    }[];
  };

  // ─── Pricing ────────────────────────────────────────────
  pricing?: {
    overline?: string;
    headline: string;
    description?: string;
    tiers: PricingTier[];
    event?: {
      badge?: string;
      title: string;
      bullets: string[];
      imageUrl?: string;
    };
  };

  // ─── Location ───────────────────────────────────────────
  location?: {
    overline?: string;
    headline: string;
    district: string;
    address: string;
    addressDetail?: string;
    hoursWeekday: string;
    hoursWeekend: string;
    transit: string;
    parking?: string;
    phone: string;
    kakao?: string;
    email?: string;
  };

  // ─── Contact ────────────────────────────────────────────
  contact?: {
    overline?: string;
    headline: string;
    description?: string;
    programOptions: string[];
    formspreeId?: string;
    phone?: string;
    naverBookingUrl?: string;
    instagramUrl?: string;
  };

  // ─── Sticky CTA ─────────────────────────────────────────
  stickyCta?: StickyCtaConfig;

  // ─── Footer ─────────────────────────────────────────────
  footer: {
    address: string;
    phone: string;
    email?: string;
    socials?: Social[];
    legalLinks?: LegalLink[];
    businessNumber?: string;
    copyright?: string;
  };
}
