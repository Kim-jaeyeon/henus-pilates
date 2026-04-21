import type { StudioConfig } from '../types/config';

/**
 * 다른 업체 예시 — 요가 스튜디오
 * main.tsx에서 import해서 <App config={exampleYoga} /> 로 교체하면 됩니다.
 */
const exampleYoga: StudioConfig = {
  studioName: 'HANA YOGA',
  studioNameKr: '하나 요가',

  theme: {
    primaryColor: '#3d5b6e', // 딥 블루 계열
    heroVariant: 'centered',
    tone: 'warm',
  },

  sections: {
    trainers: false, // 트레이너 섹션 숨김
    gallery: false,  // 갤러리 섹션 숨김
  },

  hero: {
    overline: 'MINDFUL MOVEMENT · SEOUL',
    headline: '고요한<br><em>숨결</em>로<br>시작합니다.',
    subtext: '아침의 첫 호흡부터 저녁의 마지막 이완까지. 작은 공간에서 피어나는 큰 고요함.',
    ctaPrimary: '체험 수업 신청',
    ctaSecondary: '프로그램 보기',
  },

  about: {
    overline: '01 · 소개',
    headline: '몸과 마음이<br><em>하나</em>가 되는 곳.',
    description: '15년 경력의 수련 공간. 아쉬탕가부터 인 요가까지, 당신의 리듬에 맞는 수련을 찾아드립니다.',
    stats: [
      { value: '15', label: 'YEARS' },
      { value: '340', label: 'MEMBERS' },
      { value: '4.8', label: 'RATING' },
    ],
  },

  programs: {
    overline: '02 · 프로그램',
    headline: '다섯 가지<br><em>수련</em>의 길.',
    description: '초보자부터 수련자까지, 모든 단계를 위한 클래스.',
    items: [
      { num: '01', name: '하타 요가', description: '기초 자세와 호흡 · 초보자 환영 · 60분' },
      { num: '02', name: '아쉬탕가', description: '역동적 빈야사 흐름 · 중급 이상 권장' },
      { num: '03', name: '인 요가', description: '심층 스트레칭 · 경락 자극 · 75분' },
      { num: '04', name: '명상 & 프라나야마', description: '호흡 수련 · 마음챙김 · 45분' },
      { num: '05', name: '모성 요가', description: '임산부 특화 · 안전하고 부드러운 움직임' },
    ],
  },

  pricing: {
    overline: '03 · 수강권',
    headline: '내 페이스에 맞는<br><em>선택</em>.',
    description: '정기 수련일수록 더 깊어집니다.',
    tiers: [
      {
        name: '1일 체험',
        price: '₩ 25,000',
        unit: '/ 1회',
        features: ['원하는 수업 1회', '매트 · 소도구 제공'],
        ctaLabel: '체험 예약',
      },
      {
        name: '월 정기권',
        price: '₩ 180,000',
        unit: '/ 월',
        features: ['월 8회 (주 2회)', '모든 클래스 이용', '라커 이용 가능', '수련일지 제공'],
        featured: true,
        badge: 'POPULAR',
        ctaLabel: '등록하기',
      },
      {
        name: '무제한',
        price: '₩ 280,000',
        unit: '/ 월',
        features: ['무제한 수강', '개인 매트 보관', '스팟 수업 우선 예약'],
        ctaLabel: '등록하기',
      },
    ],
  },

  location: {
    overline: '04 · 오시는 길',
    headline: '연남동의<br>작은 <em>정원</em>.',
    district: '서울 마포구 연남동',
    address: '서울 마포구 연남로 00길 00',
    addressDetail: '3층',
    hoursWeekday: '평일 07:00 — 21:00',
    hoursWeekend: '주말 09:00 — 17:00',
    transit: '홍대입구역 3번 출구 도보 10분',
    phone: '02-000-1111',
    kakao: '@hanayoga',
  },

  contact: {
    overline: '05 · 문의',
    headline: '수련의<br><em>첫 발</em>을 내딛으세요.',
    description: '어떤 질문이든 환영합니다. 24시간 내 답변드립니다.',
    programOptions: ['하타', '아쉬탕가', '인 요가', '명상', '모성 요가'],
  },

  stickyCta: {
    label: '1일 체험',
    sublabel: '25,000원 · 원하는 클래스 1회',
    btnLabel: '신청 →',
  },

  footer: {
    address: '서울 마포구 연남로 00길 00, 3층',
    phone: '02-000-1111',
    email: 'hello@hanayoga.kr',
    socials: [
      { label: 'IG' },
      { label: 'YT' },
      { label: 'KT' },
    ],
    legalLinks: [
      { label: '이용약관' },
      { label: '개인정보처리방침' },
    ],
    businessNumber: '111-11-11111',
    copyright: '© 2026 Hana Yoga',
  },
};

export default exampleYoga;
