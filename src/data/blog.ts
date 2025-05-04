import { BlogPost } from '../types/blog';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: '당신의 소소한 영웅들 - 안전지도 앱 개발기',
    content: `안전지도 앱 "당신의 소소한 영웅들"을 개발하면서 겪은 경험을 공유합니다. 이 앱은 중앙대학교 학생들을 위한 안전 정보 제공 서비스로, 교통사고 위험 지역, 음식점 위생 정보, 일몰 시간 알림 등 다양한 안전 관련 정보를 제공합니다.

주요 기능:
- 교통사고 위험 지역 알림
- 음식점 위생 정보 제공
- 일몰 시간 알림
- 조명 센서 기반 손전등 기능
- 긴급 상황 대비 가짜 전화 기능

개발 과정에서 가장 큰 도전은 실시간 데이터 처리와 사용자 경험 최적화였습니다. 특히 안드로이드 센서를 활용한 기능 구현과 AWS 서버 연동에서 많은 시행착오를 겪었습니다.

이 프로젝트를 통해 안전한 캠퍼스 환경을 만들고자 하는 목표를 달성할 수 있었습니다.`,
    excerpt: '중앙대학교 학생들을 위한 안전지도 앱 개발 경험을 공유합니다.',
    date: '2024-03-20',
    author: '김강산',
    tags: ['Android', 'AWS', '안전지도', '캠퍼스'],
    image: '/blog/small-heroes.jpg'
  },
  {
    id: '2',
    title: 'React와 TypeScript로 포트폴리오 웹사이트 만들기',
    content: `React와 TypeScript를 사용하여 포트폴리오 웹사이트를 만드는 과정을 설명합니다. Atomic Design 패턴을 적용하여 컴포넌트를 구조화하고, Tailwind CSS를 활용하여 반응형 디자인을 구현했습니다.

주요 구현 내용:
- Atomic Design 패턴 적용
- 다크 모드 지원
- 반응형 디자인
- 애니메이션 효과
- 접근성 고려

이 프로젝트를 통해 모던 웹 개발의 다양한 기술을 경험하고, 사용자 경험을 개선하는 방법을 배울 수 있었습니다.`,
    excerpt: 'React와 TypeScript를 활용한 포트폴리오 웹사이트 개발 경험을 공유합니다.',
    date: '2024-03-15',
    author: '김강산',
    tags: ['React', 'TypeScript', 'Tailwind CSS', '포트폴리오'],
    image: '/blog/portfolio.jpg'
  },
  {
    id: '3',
    title: 'Atomic Design 패턴 적용하기',
    content: 'Atomic Design 패턴을 프로젝트에 적용한 경험을 공유합니다...',
    excerpt: 'Atomic Design 패턴을 활용한 컴포넌트 설계 방법을 설명합니다.',
    date: '2024-03-10',
    author: '김강산',
    tags: ['Atomic Design', 'UI/UX', '컴포넌트'],
    image: '/blog/atomic-design.jpg'
  },
  {
    id: '4',
    title: '다크 모드 구현하기',
    content: 'React와 Tailwind CSS를 사용하여 다크 모드를 구현하는 방법을 설명합니다...',
    excerpt: '웹사이트에 다크 모드 기능을 추가하는 방법을 알아봅니다.',
    date: '2024-03-05',
    author: '김강산',
    tags: ['다크모드', 'Tailwind CSS', 'React'],
    image: '/blog/dark-mode.jpg'
  }
]; 