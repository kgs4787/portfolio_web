import { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 'portfolio',
    title: '포트폴리오 웹사이트',
    description: 'React와 TypeScript를 사용하여 만든 개인 포트폴리오 웹사이트',
    longDescription: '이 웹사이트는 React, TypeScript, Tailwind CSS를 사용하여 제작되었습니다. 다크 모드 지원, 반응형 디자인, 접근성 등을 고려하여 개발했습니다.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    image: '/projects/portfolio.png',
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
    id: 'ecommerce',
    title: '쇼핑몰 웹사이트',
    description: 'Next.js를 사용하여 만든 반응형 쇼핑몰 웹사이트',
    longDescription: 'Next.js와 TypeScript를 사용하여 개발한 쇼핑몰 웹사이트입니다. 상품 검색, 장바구니, 결제 기능 등을 구현했습니다.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
    image: '/projects/ecommerce.png',
    githubUrl: 'https://github.com/yourusername/ecommerce',
    liveUrl: 'https://your-ecommerce.com',
    features: [
      '상품 검색 및 필터링',
      '장바구니 기능',
      '결제 시스템 연동',
      '상품 리뷰 시스템',
      '관리자 대시보드'
    ],
    challenges: [
      '결제 시스템 통합',
      '상품 데이터 관리',
      '성능 최적화'
    ],
    solutions: [
      'Stripe API 연동',
      '상태 관리 라이브러리 사용',
      '이미지 최적화 및 캐싱'
    ]
  },
  {
    id: 'todo',
    title: '투두 리스트 앱',
    description: 'React와 Firebase를 사용하여 만든 실시간 투두 리스트 앱',
    longDescription: 'React와 Firebase를 사용하여 개발한 실시간 투두 리스트 앱입니다. 사용자 인증, 실시간 데이터 동기화, 오프라인 지원 등의 기능을 구현했습니다.',
    technologies: ['React', 'Firebase', 'Material UI'],
    image: '/projects/todo.png',
    githubUrl: 'https://github.com/yourusername/todo-app',
    liveUrl: 'https://your-todo-app.com',
    features: [
      '실시간 데이터 동기화',
      '사용자 인증',
      '오프라인 지원',
      '다크 모드',
      '드래그 앤 드롭'
    ],
    challenges: [
      '실시간 데이터 동기화',
      '오프라인 지원',
      '사용자 경험 개선'
    ],
    solutions: [
      'Firebase Realtime Database 사용',
      'Service Worker 구현',
      '애니메이션 및 피드백 추가'
    ]
  }
]; 