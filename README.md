# 김강산 포트폴리오

프론트엔드 개발자 김강산의 개인 포트폴리오 웹사이트입니다.  
주요 프로젝트, 기술 스택, 소개, 연락처 등을 한눈에 볼 수 있도록 구성되어 있습니다.

## 데모
- [배포 링크](https://your-deploy-url.com)  
(실제 배포 주소로 변경해 주세요)

## 주요 기능
- 반응형 디자인 및 다크/라이트 모드 지원
- Hero(인트로) 섹션: 임팩트 있는 자기소개 및 소셜 링크
- 프로젝트 목록 및 상세 페이지
- 기술 스택 아이콘 및 공식 사이트 링크
- About, Contact 등 다양한 섹션
- 애니메이션 및 부드러운 전환 효과

## 기술 스택
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Vite (또는 CRA 등 빌드 도구)
- 기타: 이메일 전송, 아이콘 등

## 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 빌드 결과물 프리뷰
npm run preview
```

## 폴더 구조

```
src/
  components/   # UI 컴포넌트
  data/         # 프로젝트/기술스택 등 데이터
  types/        # 타입 정의
  assets/       # 이미지, 아이콘 등
  ...
```

## 커스텀 방법
- `src/data/skills.ts` : 기술 스택 수정
- `src/data/projects.ts` : 프로젝트 목록/이미지/설명 수정
- `src/components/organisms/Hero.tsx` : 자기소개, 소셜 링크 수정

## 배포
- Vercel, Netlify, GitHub Pages 등 다양한 플랫폼에 쉽게 배포 가능

## 라이선스
본 프로젝트는 MIT 라이선스를 따릅니다.

---

문의 및 피드백은 언제든 환영합니다!
