import { ReactNode } from 'react';
import React from 'react';

export interface Skill {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'tools';
  icon: React.ComponentType<{ size?: number }>;
  color: string;
} 