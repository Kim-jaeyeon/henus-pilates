# 스튜디오 랜딩 설정 가이드

새 업체를 추가할 때 이 문서를 기준으로 정보를 수집하세요.  
작성이 끝나면 `src/configs/_template.ts`를 복사해 값을 채우고,  
`src/main.tsx`에서 import만 교체하면 됩니다.

---

## 1. 기본 정보

| 항목 | 설명 | 예시 |
|------|------|------|
| `studioName` | 영문 상호명 (네비 / 푸터에 표시) | `JUNG STUDIO` |
| `studioNameKr` | 한글 상호명 (선택) | `정 스튜디오` |

---

## 2. 테마

### 메인 컬러 (`primaryColor`)
HEX 코드로 입력. 버튼·강조·포인트 색상 전체에 적용됩니다.  
파생 색상(연한 버전, 컨테이너 등)은 자동으로 계산됩니다.

| 프리셋 이름 | HEX |
|------------|-----|
| 세이지 그린 (기본) | `#5a6247` |
| 차콜 블랙 | `#2a2a28` |
| 브라운 | `#7d5a3a` |
| 딥 블루 | `#3d5b6e` |
| 골드 | `#a6894f` |
| 버건디 | `#8b3a3a` |

### 히어로 레이아웃 (`heroVariant`)
| 값 | 설명 |
|----|------|
| `editorial` | 텍스트 좌측 하단 정렬 (기본, 가장 세련됨) |
| `centered` | 텍스트 가운데 정렬 |
| `split` | 텍스트 좌측 하단, 약간 더 낮게 |

### 전체 색조 (`tone`)
| 값 | 설명 |
|----|------|
| `cream` | 따뜻한 아이보리 계열 (기본) |
| `mono` | 무채색 그레이 계열 |
| `warm` | 더 진한 웜 베이지 계열 |

---

## 3. 섹션 ON / OFF

표시하지 않을 섹션은 `false`로 지정합니다.  
기본값은 모두 `true`입니다.

| 섹션 | 키 | 기본 |
|------|----|------|
| 소개 | `about` | ✅ |
| 프로그램 | `programs` | ✅ |
| 트레이너 | `trainers` | ✅ |
| 공간 갤러리 | `gallery` | ✅ |
| 가격/회원권 | `pricing` | ✅ |
| 오시는 길 | `location` | ✅ |
| 상담 문의 폼 | `contact` | ✅ |

---

## 4. 히어로 섹션

| 항목 | 설명 | 예시 |
|------|------|------|
| `overline` | 상단 소제목 (영문 대문자 권장) | `BOUTIQUE WELLNESS · SEOUL` |
| `headline` | 메인 헤드라인. `<br>`로 줄바꿈, `<em>`으로 이탤릭+포인트 컬러 | `당신만의<br><em>사원</em>을<br>찾으세요.` |
| `subtext` | 부제 설명 (1–2문장) | `한 사람에게 집중하는 프라이빗 필라테스...` |
| `ctaPrimary` | 메인 버튼 문구 | `무료 체험 예약` |
| `ctaSecondary` | 보조 버튼 문구 (선택) | `둘러보기` |
| `bgStyle` | 히어로 배경 CSS (선택, 이미지 URL 가능) | `url('/hero.jpg') center/cover` |

---

## 5. 소개 섹션

| 항목 | 설명 |
|------|------|
| `overline` | 소제목 (예: `01 · 소개`) |
| `headline` | `<em>`, `<br>` 사용 가능 |
| `description` | 소개 본문 (2–4문장) |
| `stats` | 숫자 강조 3개 (배열) |

### stats 항목 구성
```
{ value: "06", label: "REFORMER BEDS" }
{ value: "218", label: "MEMBERS" }
{ value: "4.9", label: "RATING" }
```
- `value`: 숫자 또는 짧은 텍스트
- `label`: 영문 대문자 라벨 (짧게)

---

## 6. 프로그램 섹션

| 항목 | 설명 |
|------|------|
| `overline` | 예: `02 · 프로그램` |
| `headline` | `<em>`, `<br>` 사용 가능 |
| `description` | 선택 사항 (데스크탑에서만 표시) |
| `items` | 프로그램 목록 (배열, 개수 제한 없음) |

### items 항목 구성
```
{ num: "01", name: "프라이빗 필라테스", description: "리포머 · 매트 · 50분 세션" }
```
- `num`: 순서 번호 (01, 02, ...)
- `name`: 프로그램 이름
- `description`: 한 줄 설명

---

## 7. 트레이너 섹션

| 항목 | 설명 |
|------|------|
| `overline` | 예: `03 · 트레이너` |
| `headline` | `<em>`, `<br>` 사용 가능 |
| `description` | 선택 사항 (데스크탑에서만 표시) |
| `items` | 트레이너 목록 (배열) |

### items 항목 구성
```
{
  name: "정지혜",
  role: "HEAD INSTRUCTOR",       ← 영문 대문자 직책
  tags: ["필라테스", "재활"],     ← 전문 분야 태그 (2–3개 권장)
  imageUrl: "/images/trainer1.jpg"  ← 실제 사진 URL (선택)
}
```
- `imageUrl`이 없으면 자동 생성된 플레이스홀더 이미지 표시
- `bgStyle`: `imageUrl` 대신 CSS 배경값 직접 지정 가능

---

## 8. 갤러리 섹션

| 항목 | 설명 |
|------|------|
| `overline` | 예: `04 · 공간` |
| `headline` | `<em>`, `<br>` 사용 가능 |
| `tiles` | 갤러리 타일 목록 (최대 5개, 순서 고정) |

### tiles 항목 구성
```
{ label: "reformer room", imageUrl: "/space1.jpg" }
```
- `label`: 타일 위에 표시되는 라벨 (영문 소문자 권장)
- `imageUrl`: 실제 이미지 URL (선택, 없으면 플레이스홀더)

### 타일 배치 구조 (변경 불가)
```
┌─────────────────┬────────┐
│                 │   B    │
│       A         ├────────┤
│                 │   C    │
├─────────┬───────┴────────┤
│    D    │       E        │
└─────────┴────────────────┘
```
> A: 메인 대형 / B·C: 우측 소형 / D·E: 하단 중형

---

## 9. 가격/회원권 섹션

| 항목 | 설명 |
|------|------|
| `overline` | 예: `05 · 회원권` |
| `headline` | `<em>`, `<br>` 사용 가능 |
| `description` | 선택 사항 |
| `tiers` | 요금제 목록 (2–4개 권장) |

### tiers 항목 구성
```
{
  name: "월 8회",
  price: "₩ 560,000",
  unit: "/ 월",
  features: ["주 2회, 50분 프라이빗", "모든 프로그램 이용"],
  featured: true,          ← 강조 카드 (1개만 지정)
  badge: "MOST CHOSEN",   ← 배지 문구 (featured일 때만)
  ctaLabel: "가입하기"
}
```

---

## 10. 오시는 길 섹션

| 항목 | 설명 | 예시 |
|------|------|------|
| `overline` | 예: `06 · 오시는 길` | |
| `headline` | `<em>`, `<br>` 사용 가능 | |
| `district` | 지역명 (지도 핀 라벨) | `서울 용산구 한남동` |
| `address` | 도로명 주소 | `서울 용산구 한남대로 00길 00` |
| `addressDetail` | 상세 주소 (선택) | `2층, 03000` |
| `hoursWeekday` | 평일 운영시간 | `평일 06:30 — 22:00` |
| `hoursWeekend` | 주말·공휴일 | `주말 08:00 — 18:00 · 공휴일 휴무` |
| `transit` | 대중교통 안내 | `한남역 2번 출구 도보 7분` |
| `parking` | 주차 안내 (선택) | `주차 2시간 무료 (건물 지하 B2)` |
| `phone` | 대표 전화 | `02-000-0000` |
| `kakao` | 카카오채널 (선택) | `@jungstudio` |
| `email` | 이메일 (선택) | `hello@studio.kr` |

---

## 11. 상담 문의 섹션

| 항목 | 설명 |
|------|------|
| `overline` | 예: `07 · 상담 문의` |
| `headline` | `<em>`, `<br>` 사용 가능 |
| `description` | 선택 사항 |
| `programOptions` | 관심 프로그램 선택지 목록 (배열) |

```
programOptions: ["필라테스", "PT", "스트렝스", "회복"]
```

---

## 12. 하단 고정 CTA (선택)

모바일 하단에 고정되는 예약 유도 버튼입니다.

| 항목 | 설명 | 예시 |
|------|------|------|
| `label` | 굵은 텍스트 | `첫 체험` |
| `sublabel` | 작은 설명 | `50,000원 · 50분 프라이빗` |
| `btnLabel` | 버튼 문구 | `예약 →` |

> 제거하려면 `stickyCta` 항목 자체를 삭제하세요.

---

## 13. 푸터

| 항목 | 설명 | 예시 |
|------|------|------|
| `address` | 표시 주소 | `서울 용산구 한남대로 00길 00, 2층` |
| `phone` | 전화번호 | `02-000-0000` |
| `email` | 이메일 (선택) | `hello@studio.kr` |
| `socials` | SNS 목록 (배열, 선택) | |
| `legalLinks` | 법적 링크 목록 (배열, 선택) | |
| `businessNumber` | 사업자등록번호 (선택) | `000-00-00000` |
| `copyright` | 저작권 문구 | `© 2026 Jung Studio` |

### socials 항목
```
{ label: "IG", url: "https://instagram.com/..." }
{ label: "YT", url: "https://youtube.com/..." }
```
지원 라벨: `IG` `YT` `FB` `KT` `NB` `TW` (최대 6개 권장)

### legalLinks 항목
```
{ label: "이용약관", url: "/terms" }
{ label: "개인정보처리방침", url: "/privacy" }
{ label: "환불정책", url: "/refund" }
```

---

## 빠른 체크리스트

새 업체 추가 시 아래 순서로 진행하세요.

- [ ] `src/configs/_template.ts` 복사 → `src/configs/[업체명].ts`로 저장
- [ ] 1–13번 항목 채우기
- [ ] `src/main.tsx`에서 import 교체
- [ ] 불필요한 섹션은 `sections: { ... : false }` 처리
- [ ] 실제 이미지가 있으면 `public/` 폴더에 넣고 URL 지정
- [ ] `npm run dev`로 확인
- [ ] `npm run build`로 배포 빌드
