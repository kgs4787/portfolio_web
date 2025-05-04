import { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 'portfolio',
    title: '포트폴리오 웹사이트',
    description: 'React와 TypeScript를 사용하여 만든 개인 포트폴리오 웹사이트',
    longDescription: '이 웹사이트는 React, TypeScript, Tailwind CSS를 사용하여 제작되었습니다. 다크 모드 지원, 반응형 디자인, 접근성 등을 고려하여 개발했습니다.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    images: ['/projects/portfolio.png', '/projects/portfolio-dark.png', '/projects/portfolio-mobile.png'],
    period: '2024.04 - 2024.05',
    githubUrl: 'https://github.com/yourusername/portfolio',
    liveUrl: 'https://your-portfolio.com',
    features: [
      '반응형 디자인',
      '다크 모드 지원',
      '애니메이션 효과',
      '접근성 고려',
      'SEO 최적화'
    ],
    challenges: [
      '다크 모드 상태 관리',
      '반응형 디자인 구현',
      '성능 최적화'
    ],
    solutions: [
      'Context API를 사용한 테마 관리',
      'Tailwind CSS의 반응형 클래스 활용',
      '이미지 최적화 및 코드 스플리팅'
    ]
  },
  {
    id: 'platform',
    title: 'UI/UX Platform 개발',
    description: 'React와 Next.js를 활용한 회사 UI/UX Platform 개발',
    longDescription: 'Next.js와 React를 기반으로 한 회사 UI/UX Platform 개발 프로젝트입니다. Atomic 디자인 패턴을 적용하여 컴포넌트를 체계적으로 구성하고, Redux를 사용한 전역 상태 관리를 구현했습니다.',
    technologies: ['React', 'Next.js', 'Redux', 'TypeScript', 'Atomic Design'],
    images: ['/projects/platform.png', '/projects/platform-components.png', '/projects/platform-docs.png'],
    period: '2024.01 - 2024.02',
    githubUrl: 'https://github.com/yourusername/platform',
    features: [
      'Next.js 기반의 페이지 라우팅 시스템',
      'Atomic 디자인 패턴 적용',
      'Redux를 활용한 전역 상태 관리',
      '컴포넌트 재사용성 최적화',
      '환경별 설정 관리'
    ],
    challenges: [
      'Atomic 디자인 패턴의 효과적인 적용',
      '복잡한 상태 관리 구현',
      '컴포넌트 재사용성 확보'
    ],
    solutions: [
      '체계적인 컴포넌트 구조 설계',
      'Redux를 통한 중앙 집중식 상태 관리',
      '재사용 가능한 컴포넌트 라이브러리 구축'
    ]
  },
  {
    id: '1',
    title: '당신의 소소한 영웅들',
    description: '중앙대학교 학생들을 위한 생활안전지도 앱',
    longDescription: '중앙대학교 학생들의 일상생활 속 안전을 지켜주는 생활안전지도 앱입니다. 교통안전, 식품안전, 어두운 길, 수상한 자 등 다양한 안전 관련 기능을 제공합니다.',
    technologies: ['Android', 'Java', 'Node.js', 'AWS', 'MySQL'],
    images: ['/projects/heroes.png', '/projects/heroes-map.png', '/projects/heroes-review.png'],
    period: '2023.09 - 2023.12',
    features: [
      '교통안전: 보행자 사고다발구간 알람, 횡단보도 표시',
      '식품안전: 음식점 리뷰 시스템, 커스텀 카메라 리뷰',
      '어두운 길: 일몰시간 알림, 조도 센서 기반 플래시',
      '수상한 자: 가짜 전화 받기 기능'
    ],
    challenges: [
      '다양한 센서(자이로, 가속도, 조도)의 정확한 데이터 처리',
      '실시간 위치 기반 서비스 구현',
      'OPEN API 연동 및 데이터 처리'
    ],
    solutions: [
      '센서 데이터 필터링 및 캘리브레이션 구현',
      '효율적인 위치 추적 알고리즘 개발',
      '비동기 데이터 처리 및 캐싱 구현'
    ],
    githubUrl: 'https://github.com/yourusername/your-heroes',
    liveUrl: 'https://play.google.com/store/apps/details?id=com.yourheroes.app'
  }
]; 