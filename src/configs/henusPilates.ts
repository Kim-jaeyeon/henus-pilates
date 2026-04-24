import type { StudioConfig } from '../types/config';

const henusPilates: StudioConfig = {
  studioName:   'HENUS PILATES',
  studioNameKr: '헤너스 필라테스 동탄점',
  logoUrl:      '/assets/henuspilates/logo.webp',

  theme: {
    primaryColor: '#8b6f6f', // 로즈-누드 — 비너스 모티브
    heroVariant:  'centered',
    tone:         'cream',
  },

  hero: {
    overline:   'REFORMER PILATES · DONGTAN',
    headline:   '나를 아름답게<br>만드는 공간,<br><em>헤너스 필라테스</em>.',
    subtext:    '동탄원천로 위너스타빌딩 10층.<br>리포머·캐딜락·체어·바렐 4대 기구와 함께하는<br>프리미엄 기구 필라테스.',
    ctaPrimary: '둘러보기',
    bgStyle: "url('/assets/henuspilates/hero.jpg') center/cover no-repeat",
  },

  about: {
    overline:    '02 · 소개',
    headline:    '비너스를 모티브로,<br><em>건강하고 아름다운</em> 삶.',
    description: '헤너스(HENUS)는 미의 여신 비너스(VENUS)에서 영감을 받아<br>탄생한 프리미엄 필라테스 스튜디오입니다.<br>1:1 프라이빗룸, 그룹룸, 포토존, 카페 같은 휴식공간까지 갖춘<br>동탄의 감각적인 공간에서 당신만의 움직임을 시작하세요.',
    stats: [
      { value: '4대',   label: 'APPARATUS' },
      { value: '1:1',   label: 'PRIVATE ROOM' },
      { value: '5:1',   label: 'GROUP CLASS' },
    ],
    images: [
      '/assets/henuspilates/about-left.jpg',
      '/assets/henuspilates/about-right.jpg',
    ],
  },

  programs: {
    overline:    '03 · 프로그램',
    headline:    '4대 기구로 완성하는<br><em>맞춤</em> 필라테스.',
    description: '리포머·캐딜락·체어·바렐로 전신을 균형 있게.',
    items: [
      { num: '01', name: '1:1 프라이빗',   description: '개인 전용룸 · 1:1 맞춤 지도 · 체형 교정 집중' },
      { num: '02', name: '듀엣 2:1',        description: '2인 프라이빗 레슨 · 함께 시작하는 필라테스' },
      { num: '03', name: '5:1 그룹',        description: '소그룹 기구 수업 · 리포머 중심 그룹 클래스' },
      { num: '04', name: '리포머',          description: '대표 필라테스 기구 · 전신 근력·유연성 향상' },
      { num: '05', name: '캐딜락',          description: '재활·교정 특화 · 깊은 근육 활성화' },
      { num: '06', name: '체어 & 바렐',     description: '코어 강화 · 균형 및 안정성 트레이닝' },
    ],
  },

  trainers: {
    overline:    '04 · 전문가',
    headline:    '당신의 몸을<br><em>가장 잘 아는</em> 강사진.',
    description: '전문 자격 보유 강사 · 체계적인 1:1 케어.',
    items: [
      {
        name:     '이경빈',
        role:     'DIRECTOR · INSTRUCTOR',
        tags:     ['개인 레슨', '2:1 레슨', '그룹 레슨'],
        imageUrl: '/assets/henuspilates/trainer-1.jpg',
      },
      {
        name:     '권민경',
        role:     'INSTRUCTOR',
        tags:     ['그룹 레슨', '월·수·금 오후'],
        imageUrl: '/assets/henuspilates/trainer-2.jpg',
      },
      {
        name:     '김규리',
        role:     'INSTRUCTOR',
        tags:     ['그룹 레슨', '화·목 오전'],
        imageUrl: '/assets/henuspilates/trainer-3.jpg',
      },
      {
        name:     '최다혜',
        role:     'INSTRUCTOR',
        tags:     ['그룹 레슨', '화·목 오후'],
        imageUrl: '/assets/henuspilates/trainer-4.jpg',
      },
      {
        name:     '장재은',
        role:     'INSTRUCTOR',
        tags:     ['그룹 레슨', '월·수 오후'],
        imageUrl: '/assets/henuspilates/trainer-5.jpg',
      },
      {
        name:     '임재희',
        role:     'INSTRUCTOR',
        tags:     ['그룹 레슨', '토요일'],
        imageUrl: '/assets/henuspilates/trainer-6.jpg',
      },
    ],
  },

  gallery: {
    overline: '01 · 공간',
    headline: '감각적인 공간에서<br><em>나만의 시간</em>.',
    tiles: [
      { label: 'reformer studio', cols: 4, aspectRatio: '4/3',       bgStyle: "url('/assets/henuspilates/gallery-reformer.jpg') center/cover no-repeat" },
      { label: 'lounge',          cols: 2, aspectRatio: '817/1280',   bgStyle: "url('/assets/henuspilates/gallery-lounge.jpg') center/cover no-repeat" },
      { label: 'cadillac room',   cols: 3, aspectRatio: '4/3',        bgStyle: "url('/assets/henuspilates/gallery-cadillac.jpg') center/cover no-repeat" },
      { label: 'private room',    cols: 3, aspectRatio: '1280/884',   bgStyle: "url('/assets/henuspilates/gallery-private.jpg') center/cover no-repeat" },
      { label: 'studio',          cols: 6, aspectRatio: '16/9',       bgStyle: "url('/assets/henuspilates/gallery-photo.jpg') center/cover no-repeat" },
    ],
  },

  pricing: {
    overline:    '05 · 이용권',
    headline:    '나에게 맞는<br><em>수업</em>을 선택하세요.',
    description: '체험 레슨으로 먼저 경험해보세요.',
    event: {
      badge:   '1:5 GROUP · 50MIN',
      title:   '그룹 정기권 가격 (VAT별도)',
      bullets: [
        '8회 → <strong>240,000원</strong> (25%↓) · 1회 30,000원',
        '16회 → <strong>416,000원</strong> (35%↓) · 1회 26,000원',
        '24회 → <strong>576,000원</strong> (40%↓) · 1회 24,000원',
        '36회 → <strong>720,000원</strong> (50%↓) · 1회 20,000원',
        '48회 → <strong>864,000원</strong> (55%↓) · 1회 18,000원',
        '72회 → <strong>1,008,000원</strong> (65%↓) · 1회 14,000원',
        '100회 → <strong>990,000원</strong> (75%↓) · 1회 9,900원',
      ],
    },
    tiers: [
      {
        name:     '개인 레슨 체험',
        price:    '50,000',
        unit:     '원 / 1회',
        features: [
          '1:1 프라이빗 레슨',
          '전용룸 이용',
          '체형 문진 포함',
        ],
        ctaLabel: '체험 예약하기',
      },
      {
        name:     '5:1 그룹 체험',
        price:    '15,000',
        unit:     '원 / 1회',
        features: [
          '소그룹 기구 수업',
          '리포머 기구 체험',
          '합리적인 가격',
        ],
        featured: true,
        badge:    'POPULAR',
        ctaLabel: '체험 예약하기',
      },
    ],
  },

  location: {
    overline:      '06 · 오시는 길',
    headline:      '동탄원천로<br><em>위너스타빌딩</em> 10층.',
    district:      '경기 화성시 동탄',
    address:       '경기도 화성시 동탄원천로 163',
    addressDetail: '위너스타빌딩 10층 10호',
    hoursWeekday:  '평일 · 문의',
    hoursWeekend:  '주말 · 문의',
    hours: {
      rows: [
        { day: '월', time: '09:00 – 22:00' },
        { day: '화', time: '09:00 – 22:00' },
        { day: '수', time: '09:00 – 22:00' },
        { day: '목', time: '09:00 – 22:00' },
        { day: '금', time: '09:00 – 22:00' },
        { day: '토', time: '10:00 – 12:00' },
        { day: '일', time: '정기휴무', closed: true },
      ],
      note: '※ 05/01 노동절 · 05/05 어린이날 휴무',
    },
    transit:       '동탄 버스 정류장 인근',
    phone:         '010-7653-2354',
    email:         'henuspilates@naver.com',
  },

  contact: {
    overline:       '07 · 상담 문의',
    headline:       '첫 수업,<br><em>부담 없이</em> 시작하세요.',
    description:    '체험 레슨 예약 및 프로그램 상담을 도와드립니다.',
    programOptions: ['1:1 프라이빗', '듀엣 2:1', '5:1 그룹', '리포머', '캐딜락', '체어·바렐'],
    phone:          '010-7653-2354',
    naverBookingUrl: 'https://naver.me/GvcE5hgv',
    instagramUrl:   'https://www.instagram.com/henus_.pilates',
  },

  footer: {
    address:  '경기도 화성시 동탄원천로 163, 위너스타빌딩 10층 10호',
    phone:    '010-7653-2354',
    email:    'henuspilates@naver.com',
    legalLinks: [
      { label: '이용약관' },
      { label: '개인정보처리방침' },
    ],
    copyright: '© 2026 Henus Pilates · 헤너스 필라테스 동탄점',
  },
};

export default henusPilates;
