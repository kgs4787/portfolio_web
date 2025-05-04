import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { skills } from '../../data/skills';
import { Skill } from '../../types/skill';

const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const categories = ['all', 'frontend', 'tools'];

  const filteredSkills = selectedCategory === 'all'
    ? skills
    : skills.filter(skill => skill.category === selectedCategory);

  const getCategoryName = (category: string): string => {
    const categoryNames: { [key: string]: string } = {
      all: '전체',
      frontend: '프론트엔드',
      tools: '도구',
    };
    return categoryNames[category] || category;
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          기술 스택
        </h2>

        {/* 카테고리 필터 */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {getCategoryName(category)}
            </button>
          ))}
        </div>

        {/* 기술 스택 그리드 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {filteredSkills.map((skill) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => window.open(skill.url, '_blank')}
              >
                <div
                  className="mb-4 transition-transform hover:scale-110"
                  style={{ color: skill.color }}
                >
                  <Icon size={40} />
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills; 