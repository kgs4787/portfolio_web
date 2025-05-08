export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  images: string[];
  period: string;
  githubUrl?: string;
  liveUrl?: string;
  features: string[];
  challenges: string[];
  solutions: string[];
} 