import { FaReact, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiHtml5, SiCss3, SiTailwindcss, SiNextdotjs } from 'react-icons/si';

export interface Skill {
  id: string;
  name: string;
  category: 'frontend' | 'tools';
  icon: React.ComponentType<{ size?: number }>;
  color: string;
  url: string;
}

export const skills: Skill[] = [
  {
    id: 'react',
    name: 'React',
    category: 'frontend',
    icon: FaReact,
    color: '#61DAFB',
    url: 'https://react.dev/',
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    category: 'frontend',
    icon: SiNextdotjs,
    color: '#000000',
    url: 'https://nextjs.org/',
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'frontend',
    icon: SiTypescript,
    color: '#3178C6',
    url: 'https://www.typescriptlang.org/',
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'frontend',
    icon: SiJavascript,
    color: '#F7DF1E',
    url: 'https://developer.mozilla.org/ko/docs/Web/JavaScript',
  },
  {
    id: 'html',
    name: 'HTML5',
    category: 'frontend',
    icon: SiHtml5,
    color: '#E34F26',
    url: 'https://developer.mozilla.org/ko/docs/Web/HTML',
  },
  {
    id: 'css',
    name: 'CSS3',
    category: 'frontend',
    icon: SiCss3,
    color: '#1572B6',
    url: 'https://developer.mozilla.org/ko/docs/Web/CSS',
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    category: 'frontend',
    icon: SiTailwindcss,
    color: '#06B6D4',
    url: 'https://tailwindcss.com/',
  },
  {
    id: 'git',
    name: 'Git',
    category: 'tools',
    icon: FaGitAlt,
    color: '#F05032',
    url: 'https://git-scm.com/',
  },
]; 