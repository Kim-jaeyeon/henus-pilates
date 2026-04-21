import type { StudioConfig } from '../types/config';

const resortLab: StudioConfig = {
  studioName:   'RESORT LAB',
  studioNameKr: '리조트랩 요가&필라테스',
  logoUrl:      '/assets/resortlab/resortlab_logo.webp',

  theme: {
    primaryColor: '#2d5c6e', // 딥 블루그린 — 리조트·스파 무드
    heroVariant:  'editorial',
    tone:         'warm',
  },

  hero: {
    overline:     'YOGA & PILATES · DONGTAN',
    headline:     '진정한 쉼을<br>연구하는<br><em>휴양 연구소</em>.',
    subtext:      '동탄 타임테라스 속 도심 휴양지. 평균 경력 10년 이상의 전문가가 이끄는 요가·필라테스·스페셜 클래스.',
    ctaPrimary:   '둘러보기',
    bgStyle: "url('/assets/resortlab/hero.jpg') center/cover no-repeat",
  },

  about: {
    overline:    '02 · 소개',
    headline:    '압도적인 실력,<br><em>98%</em> 재등록률.',
    description: '2022년 오픈 이래 200개 이상의 리얼 후기와 98%의 높은 재등록률로 실력을 입증한 동탄 No.1 프리미엄 부티크 스튜디오. 법인 운영으로 체계적이고 안정적인 시스템을 갖추고 있습니다.',
    stats: [
      { value: '98%',  label: 'RE-ENROLLMENT' },
      { value: '200+', label: 'REAL REVIEWS' },
      { value: '10yr+', label: 'AVG. EXPERIENCE' },
    ],
    images: [
      '/assets/resortlab/about-left.jpg',
      '/assets/resortlab/about-right.jpg',
    ],
  },

  programs: {
    overline:    '03 · 프로그램',
    headline:    '요가부터 필라테스,<br><em>통합</em> 이용권.',
    description: '하나의 이용권으로 요가·필라테스·스페셜 클래스 모두 이용 가능합니다.',
    items: [
      { num: '01', name: '그룹 필라테스',   description: '최대 10인 · 5:1 · 6:1 소그룹 / 기구 & 매트' },
      { num: '02', name: '그룹 요가',       description: '다양한 요가 스타일 · 그룹 클래스' },
      { num: '03', name: '프라이빗 1:1',    description: '1:1 개인 레슨 · 맞춤 체형 교정 · 체험가 ₩45,000' },
      { num: '04', name: '듀엣 2:1',        description: '2인 프라이빗 레슨 · 체험가 ₩35,000' },
      { num: '05', name: '스페셜 클래스',   description: '매달 이색적인 테마 클래스 · 별도 진행' },
      { num: '06', name: '3D 체형 분석',    description: '3D 모티피지오 정밀 체형분석 + 인바디 측정' },
    ],
  },

  trainers: {
    overline:    '04 · 전문가',
    headline:    '검증된<br><em>전문가</em> 집단.',
    description: '전 강사 전문 자격 보유 · 매월 전문 교육 시행.',
    items: [
      {
        name:    '리조트랩 강사진',
        role:    'CERTIFIED INSTRUCTORS',
        tags:    ['필라테스', '요가', '체형교정'],
        bgStyle: 'repeating-linear-gradient(38deg, #b8cdd4 0 14px, #a5bec7 14px 28px)',
      },
    ],
  },

  gallery: {
    overline: '01 · 공간',
    headline: '타임테라스 속<br><em>도심 휴양지</em>.',
    tiles: [
      { label: 'pilates studio', bgStyle: "url('/assets/resortlab/gallery-pilates.jpg') center/cover no-repeat" },
      { label: 'yoga room',      bgStyle: "url('/assets/resortlab/gallery-yoga.jpg') center/cover no-repeat" },
      { label: 'lounge',         bgStyle: "url('/assets/resortlab/gallery-lounge.jpg') center/cover no-repeat" },
      { label: 'studio',         bgStyle: "url('/assets/resortlab/gallery-studio.jpg') center/cover no-repeat" },
      { label: 'lounge area',    bgStyle: "url('/assets/resortlab/gallery-lounge-area.jpg') center/cover no-repeat" },
    ],
  },

  pricing: {
    overline:    '05 · 이용권',
    headline:    '요가 & 필라테스<br><em>통합</em> 이용.',
    description: '하나의 이용권으로 모든 클래스를 자유롭게.',
    tiers: [
      {
        name:     '1:1 체험',
        price:    '₩ 45,000',
        unit:     '/ 1회',
        features: [
          '1:1 프라이빗 레슨',
          '체형 문진 포함',
          '전문 강사 1:1 케어',
        ],
        ctaLabel: '체험 예약하기',
      },
      {
        name:     '2:1 체험',
        price:    '₩ 35,000',
        unit:     '/ 1인',
        features: [
          '듀엣 프라이빗 레슨',
          '지인과 함께 시작',
          '개인 맞춤 지도',
        ],
        featured: true,
        badge:    'POPULAR',
        ctaLabel: '체험 예약하기',
      },
      {
        name:     '전문가 상담',
        price:    '무료',
        unit:     '',
        features: [
          '원장 직접 1:1 상담 (30분)',
          '운동 방향성 설정',
          '체형 정밀 분석',
        ],
        ctaLabel: '무료 상담 예약',
      },
    ],
  },

  location: {
    overline:      '06 · 오시는 길',
    headline:      '동탄 타임테라스<br><em>A블럭</em> 지하 2층.',
    district:      '경기 화성시 동탄구',
    address:       '경기 화성시 동탄구 동탄중앙로 220',
    addressDetail: '지하2층 B201-1호 (타임테라스 A블럭 · CGV 건물)',
    hoursWeekday:  '평일 09:00 — 22:00',
    hoursWeekend:  '주말 09:00 — 15:00',
    transit:       '메타폴리스(중) 36667 정류장 하차 → GATE 5',
    parking:       '타임테라스 주차장 3시간 무료',
    phone:         '0507-1334-6939',
    kakao:         'talk.naver.com/w48gij',
  },

  contact: {
    overline:       '07 · 상담 문의',
    headline:       '첫 수업,<br>전문가와 함께 <em>설계</em>하세요.',
    description:    '원장이 직접 상담합니다. 운동 경험이 없어도 괜찮습니다.',
    programOptions: ['그룹 필라테스', '그룹 요가', '1:1 프라이빗', '듀엣 2:1', '스페셜 클래스', '체형 분석'],
    formspreeId:    '',  // ← Formspree 가입 후 Form ID 입력 (예: 'xpwzabcd')
    phone:          '0507-1334-6939',
    naverBookingUrl: 'https://talk.naver.com/w48gij',
  },

  footer: {
    address:        '경기 화성시 동탄구 동탄중앙로 220, 지하2층 B201-1호',
    phone:          '0507-1334-6939',
    email:          'resortpeople.net',
    socials: [
      { label: 'IG', url: 'https://www.instagram.com/resortlab_official/' },
      { label: 'NB', url: 'https://blog.naver.com/resort_lab_ts' },
    ],
    legalLinks: [
      { label: '이용약관' },
      { label: '개인정보처리방침' },
    ],
    copyright: '© 2026 Resort Lab · 리조트랩 동탄 타임테라스점',
  },
};

export default resortLab;
