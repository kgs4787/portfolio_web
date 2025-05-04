# 김강산의 포트폴리오 웹사이트

React, TypeScript, Tailwind CSS를 사용하여 개발한 개인 포트폴리오 웹사이트입니다.

## 🚀 주요 기능

- 반응형 디자인
- 다크 모드 지원
- 프로젝트 상세 페이지
- 접근성 고려
- 애니메이션 효과

## 🛠 기술 스택

- **프론트엔드**
  - React
  - TypeScript
  - Tailwind CSS
  - Framer Motion
  - React Router

## 📁 프로젝트 구조

```
src/
├── components/
│   ├── atoms/
│   ├── molecules/
│   └── organisms/
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Projects.tsx
│       ├── ProjectDetail.tsx
│       ├── Contact.tsx
│       └── Footer.tsx
├── context/
│   └── ThemeContext.tsx
├── data/
│   └── projects.ts
├── types/
│   └── project.ts
└── App.tsx
```

## 🚀 시작하기

### 필수 조건

- Node.js (v14 이상)
- npm 또는 yarn

### 설치

1. 저장소 클론
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. 의존성 설치
```bash
npm install
```

3. 개발 서버 실행
```bash
npm run dev
```

4. 빌드
```bash
npm run build
```

## 🔧 빌드

```bash
# 프로덕션 빌드
npm run build

# 빌드 결과물 실행
npm run start
```

## 📝 라이센스

이 프로젝트는 MIT 라이센스를 따릅니다.

## 📞 연락처

- 이메일: [이메일 주소]
- GitHub: [GitHub 프로필 링크]
- LinkedIn: [LinkedIn 프로필 링크]

## 🔍 주요 컴포넌트 설명

### Navbar
- 반응형 네비게이션 바
- 다크 모드 토글 버튼
- 스크롤 시 투명도 조절

### Hero
- 자기소개 섹션
- 애니메이션 효과
- 다크 모드 지원

### About
- 기술 스택 표시
- 경력 및 교육 정보
- 다크 모드 지원

### Projects
- 프로젝트 카드 그리드
- 프로젝트 상세 페이지 링크
- 기술 스택 태그

### ProjectDetail
- 프로젝트 상세 정보
- 주요 기능 설명
- 도전 과제 및 해결 방법
- GitHub 및 Live Demo 링크

### Contact
- 연락처 정보
- 소셜 미디어 링크
- 다크 모드 지원

### Footer
- 저작권 정보
- 다크 모드 지원

## 🌓 다크 모드

- 시스템 테마 자동 감지
- 수동 테마 전환
- 부드러운 전환 애니메이션

## 🔗 라우팅

- React Router 사용
- 프로젝트 상세 페이지 라우팅
- 404 처리

## 📋 접근성

- ARIA 레이블
- 키보드 네비게이션
- 색상 대비
- 시맨틱 HTML

## 📋 배포

Vercel을 사용하여 배포되었습니다.
