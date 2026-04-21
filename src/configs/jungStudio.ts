import type { StudioConfig } from '../types/config';

const jungStudio: StudioConfig = {
  studioName: 'JUNG STUDIO',
  studioNameKr: '정 스튜디오',

  theme: {
    primaryColor: '#5a6247',
    heroVariant: 'editorial',
    tone: 'cream',
  },

  hero: {
    overline: 'BOUTIQUE WELLNESS · SEOUL',
    headline: '당신만의<br><em>사원</em>을<br>찾으세요.',
    subtext: '한 사람에게 집중하는 프라이빗 필라테스·PT·스트렝스 스튜디오. 움직임의 본질로 돌아갑니다.',
    ctaPrimary: '무료 체험 예약',
    ctaSecondary: '둘러보기',
  },

  about: {
    overline: '01 · 소개',
    headline: '공간보다<br><em>호흡</em>을 설계합니다.',
    description: '복작이는 도시 한복판, 조용히 숨을 고르는 여섯 평의 스튜디오. 전직 무용수가 이끄는 원·투 프라이빗 세션으로 시작해 지금은 세 명의 교사가 함께합니다.',
    stats: [
      { value: '06', label: 'REFORMER BEDS' },
      { value: '218', label: 'MEMBERS' },
      { value: '4.9', label: 'RATING' },
    ],
  },

  programs: {
    overline: '02 · 프로그램',
    headline: '<em>네 가지</em> 움직임의<br>언어.',
    description: '필라테스부터 PT, 스트렝스, 회복까지 — 당신의 신체와 목적에 맞게 선택하세요.',
    items: [
      { num: '01', name: '프라이빗 필라테스', description: '리포머 · 매트 · 바렐 · 50분 세션, 1:1 또는 듀엣' },
      { num: '02', name: '1:1 퍼스널 트레이닝', description: '체형 분석 기반 맞춤 PT · 부상 회복 · 자세 교정' },
      { num: '03', name: '스트렝스 & 컨디셔닝', description: '근력 · 기능성 운동 · 소그룹 최대 4인' },
      { num: '04', name: '회복 & 모빌리티', description: '스트레칭 · 근막이완 · 호흡 트레이닝' },
    ],
  },

  trainers: {
    overline: '03 · 트레이너',
    headline: '이 공간을<br>만드는 <em>사람들</em>.',
    description: '저마다 다른 배경, 같은 철학. 움직임은 회복이어야 합니다.',
    items: [
      {
        name: '정지혜',
        role: 'HEAD INSTRUCTOR',
        tags: ['필라테스', '재활'],
        bgStyle: 'repeating-linear-gradient(32deg, #d4d9c4 0 14px, #c3c9b1 14px 28px)',
      },
      {
        name: '박민호',
        role: 'PT SPECIALIST',
        tags: ['스트렝스', '자세교정'],
        bgStyle: 'repeating-linear-gradient(50deg, #e6d5ae 0 14px, #d9c493 14px 28px)',
      },
      {
        name: '이소현',
        role: 'INSTRUCTOR',
        tags: ['바렐', '모빌리티'],
        bgStyle: 'repeating-linear-gradient(24deg, #d4d9c4 0 12px, #bfc7ad 12px 24px)',
      },
    ],
  },

  gallery: {
    overline: '04 · 공간',
    headline: '빛이 머무는<br><em>자리</em>.',
    tiles: [
      { label: 'reformer room' },
      { label: 'lounge' },
      { label: 'shower' },
      { label: 'entry' },
      { label: 'locker' },
    ],
  },

  pricing: {
    overline: '05 · 회원권',
    headline: '단순한<br><em>세 가지</em> 선택.',
    description: '부담 없이 시작하고, 필요에 맞게 확장하세요.',
    tiers: [
      {
        name: '체험',
        price: '₩ 50,000',
        unit: '/ 1회',
        features: ['프라이빗 50분 세션', '체형·움직임 분석 포함'],
        ctaLabel: '체험 예약하기',
      },
      {
        name: '월 8회',
        price: '₩ 560,000',
        unit: '/ 월',
        features: ['주 2회, 50분 프라이빗', '모든 프로그램 이용', '라커 · 샤워 · 어메니티', '스케줄 자유 변경'],
        featured: true,
        badge: 'MOST CHOSEN',
        ctaLabel: '가입하기',
      },
      {
        name: '월 12회',
        price: '₩ 780,000',
        unit: '/ 월',
        features: ['주 3회, 50분 프라이빗', '무제한 회복 세션'],
        ctaLabel: '가입하기',
      },
    ],
  },

  location: {
    overline: '06 · 오시는 길',
    headline: '한남동의<br>조용한 <em>골목</em>.',
    district: '서울 용산구 한남동',
    address: '서울 용산구 한남대로 00길 00',
    addressDetail: '2층, 03000',
    hoursWeekday: '평일 06:30 — 22:00',
    hoursWeekend: '주말 08:00 — 18:00 · 공휴일 휴무',
    transit: '한남역 2번 출구 도보 7분',
    parking: '주차 2시간 무료 (건물 지하 B2)',
    phone: '02-000-0000',
    kakao: '@jungstudio',
  },

  contact: {
    overline: '07 · 상담 문의',
    headline: '첫 걸음,<br>이곳에서 <em>시작</em>하세요.',
    description: '빠르게 답변드리겠습니다. 체험은 보통 24시간 이내에 배정됩니다.',
    programOptions: ['필라테스', 'PT', '스트렝스', '회복'],
  },

  stickyCta: {
    label: '첫 체험',
    sublabel: '50,000원 · 50분 프라이빗',
    btnLabel: '예약 →',
  },

  footer: {
    address: '서울 용산구 한남대로 00길 00, 2층',
    phone: '02-000-0000',
    email: 'hello@jungstudio.kr',
    socials: [
      { label: 'IG' },
      { label: 'NB' },
      { label: 'KT' },
      { label: 'YT' },
    ],
    legalLinks: [
      { label: '이용약관' },
      { label: '개인정보처리방침' },
      { label: '환불정책' },
    ],
    businessNumber: '000-00-00000',
    copyright: '© 2026 Jung Studio',
  },
};

export default jungStudio;
