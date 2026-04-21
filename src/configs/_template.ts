/**
 * 새 업체 추가 방법:
 *  1. 이 파일을 복사해서 src/configs/[업체명].ts 로 저장
 *  2. 아래 값들을 채우기 (STUDIO_TEMPLATE.md 참고)
 *  3. src/main.tsx 에서 import 교체
 *
 * 필드 옆 주석:  ★ 필수  /  (선택) 없애도 됨
 */

import type { StudioConfig } from '../types/config';

const config: StudioConfig = {
  // ─── 기본 정보 ────────────────────────────────────────────────
  studioName:   'STUDIO NAME',  // ★ 영문 상호명
  studioNameKr: '스튜디오 이름', // (선택) 한글 상호명

  // ─── 테마 ─────────────────────────────────────────────────────
  theme: {
    primaryColor: '#5a6247', // ★ HEX 컬러 — 파생 색상 자동 계산
    // heroVariant: 'editorial' | 'centered' | 'split'
    heroVariant:  'editorial',
    // tone: 'cream' | 'mono' | 'warm'
    tone:         'cream',
  },

  // ─── 섹션 ON/OFF (모두 true가 기본, 끄려면 false) ──────────────
  sections: {
    about:    true,
    programs: true,
    trainers: true,
    gallery:  true,
    pricing:  true,
    location: true,
    contact:  true,
  },

  // ─── 히어로 ───────────────────────────────────────────────────
  hero: {
    overline:     'BOUTIQUE WELLNESS · SEOUL', // ★
    // <br> 줄바꿈, <em> 이탤릭+포인트 컬러
    headline:     '당신만의<br><em>사원</em>을<br>찾으세요.', // ★
    subtext:      '한 줄 부제 설명을 여기에 입력하세요.', // ★
    ctaPrimary:   '무료 체험 예약', // ★
    ctaSecondary: '둘러보기',       // (선택)
    // bgStyle: "url('/hero.jpg') center/cover no-repeat", // (선택) 배경 이미지
  },

  // ─── 소개 ─────────────────────────────────────────────────────
  about: {
    overline:    '01 · 소개',
    headline:    '공간보다<br><em>호흡</em>을 설계합니다.',
    description: '스튜디오 소개 문장을 2–4문장으로 입력하세요.',
    stats: [
      { value: '00',  label: 'LABEL A' }, // value: 숫자나 짧은 텍스트
      { value: '000', label: 'LABEL B' },
      { value: '0.0', label: 'LABEL C' },
    ],
  },

  // ─── 프로그램 ─────────────────────────────────────────────────
  programs: {
    overline:    '02 · 프로그램',
    headline:    '<em>네 가지</em> 움직임의<br>언어.',
    description: '선택 사항 — 데스크탑에서만 표시됩니다.', // (선택)
    items: [
      { num: '01', name: '프로그램 이름 1', description: '한 줄 설명' },
      { num: '02', name: '프로그램 이름 2', description: '한 줄 설명' },
      { num: '03', name: '프로그램 이름 3', description: '한 줄 설명' },
      { num: '04', name: '프로그램 이름 4', description: '한 줄 설명' },
      // 필요한 만큼 추가/삭제 가능
    ],
  },

  // ─── 트레이너 ─────────────────────────────────────────────────
  trainers: {
    overline:    '03 · 트레이너',
    headline:    '이 공간을<br>만드는 <em>사람들</em>.',
    description: '선택 사항 — 데스크탑에서만 표시됩니다.', // (선택)
    items: [
      {
        name:     '홍길동',
        role:     'HEAD INSTRUCTOR', // 영문 대문자 직책
        tags:     ['전문 분야 1', '전문 분야 2'],
        // imageUrl: '/images/trainer1.jpg', // (선택) 실제 사진
        // bgStyle: 'repeating-linear-gradient(...)', // imageUrl 없을 때 플레이스홀더
      },
      {
        name: '김철수',
        role: 'INSTRUCTOR',
        tags: ['전문 분야 1'],
      },
      // 필요한 만큼 추가/삭제 가능
    ],
  },

  // ─── 갤러리 ───────────────────────────────────────────────────
  gallery: {
    overline: '04 · 공간',
    headline: '빛이 머무는<br><em>자리</em>.',
    tiles: [
      // 순서 고정: A(대형), B, C(소형), D, E(중형) — 최대 5개
      { label: 'main space'  /*, imageUrl: '/space1.jpg'*/ },
      { label: 'lounge'      /*, imageUrl: '/space2.jpg'*/ },
      { label: 'shower'      /*, imageUrl: '/space3.jpg'*/ },
      { label: 'entry'       /*, imageUrl: '/space4.jpg'*/ },
      { label: 'locker'      /*, imageUrl: '/space5.jpg'*/ },
    ],
  },

  // ─── 가격/회원권 ──────────────────────────────────────────────
  pricing: {
    overline:    '05 · 회원권',
    headline:    '단순한<br><em>세 가지</em> 선택.',
    description: '선택 사항.', // (선택)
    tiers: [
      {
        name:     '체험',
        price:    '₩ 00,000',
        unit:     '/ 1회',
        features: ['설명 항목 1', '설명 항목 2'],
        ctaLabel: '체험 예약하기',
      },
      {
        name:     '월 0회',
        price:    '₩ 000,000',
        unit:     '/ 월',
        features: ['설명 항목 1', '설명 항목 2', '설명 항목 3'],
        featured: true,          // ★ 강조 카드 — 1개만 지정
        badge:    'MOST CHOSEN', // featured 카드의 배지 문구
        ctaLabel: '가입하기',
      },
      {
        name:     '월 0회',
        price:    '₩ 000,000',
        unit:     '/ 월',
        features: ['설명 항목 1', '설명 항목 2'],
        ctaLabel: '가입하기',
      },
      // 요금제 개수 자유롭게 조정 가능 (2–4개 권장)
    ],
  },

  // ─── 오시는 길 ────────────────────────────────────────────────
  location: {
    overline:      '06 · 오시는 길',
    headline:      '동네 이름의<br>조용한 <em>골목</em>.',
    district:      '서울 구 동',       // 지도 핀 라벨
    address:       '서울 구 도로명 00', // ★
    addressDetail: '0층',              // (선택)
    hoursWeekday:  '평일 00:00 — 00:00',
    hoursWeekend:  '주말 00:00 — 00:00 · 공휴일 휴무',
    transit:       '○○역 ○번 출구 도보 ○분',
    parking:       '주차 ○시간 무료', // (선택)
    phone:         '02-000-0000',    // ★
    kakao:         '@handle',        // (선택)
    email:         'hello@studio.kr', // (선택)
  },

  // ─── 상담 문의 ────────────────────────────────────────────────
  contact: {
    overline:       '07 · 상담 문의',
    headline:       '첫 걸음,<br>이곳에서 <em>시작</em>하세요.',
    description:    '빠르게 답변드리겠습니다.',
    programOptions: ['프로그램 1', '프로그램 2', '프로그램 3'],
    // → 6. 프로그램 items[].name 과 일치시키면 자연스럽습니다
  },

  // ─── 하단 고정 CTA ────────────────────────────────────────────
  // (선택) 제거하려면 이 블록 전체를 삭제하세요
  stickyCta: {
    label:    '첫 체험',
    sublabel: '00,000원 · 00분 프라이빗',
    btnLabel: '예약 →',
  },

  // ─── 푸터 ─────────────────────────────────────────────────────
  footer: {
    address: '서울 구 도로명 00, 0층', // ★
    phone:   '02-000-0000',           // ★
    email:   'hello@studio.kr',        // (선택)
    socials: [
      // label: 'IG' | 'YT' | 'FB' | 'KT' | 'NB' | 'TW'
      { label: 'IG', url: 'https://instagram.com/' },
      { label: 'YT', url: 'https://youtube.com/' },
    ],
    legalLinks: [
      { label: '이용약관',       url: '/terms' },
      { label: '개인정보처리방침', url: '/privacy' },
      { label: '환불정책',       url: '/refund' },
    ],
    businessNumber: '000-00-00000', // (선택)
    copyright:      '© 2026 Studio Name',
  },
};

export default config;
