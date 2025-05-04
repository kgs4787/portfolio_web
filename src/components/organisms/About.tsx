import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { skills } from '../../data/skills';
import { Skill } from '../../types/skill';

const About = () => {
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

  const qnaItems = [
    {
      question: "개발자로서의 강점은 무엇인가요?",
      answer: "사용자 경험을 최우선으로 생각하며, 코드의 가독성과 유지보수성을 중요시합니다. 또한 새로운 기술을 배우고 적용하는 것을 즐기며, 팀원들과의 협업을 통해 더 나은 결과를 만들어 나가는 것을 좋아합니다."
    },
    {
      question: "프로젝트에서 가장 중요하게 생각하는 것은 무엇인가요?",
      answer: "코드의 품질과 사용자 경험을 가장 중요하게 생각합니다. 깔끔한 코드 구조와 문서화를 통해 유지보수가 용이한 코드를 작성하고, 사용자의 피드백을 적극적으로 반영하여 더 나은 제품을 만들어 나가고자 합니다."
    },
    {
      question: "협업 경험이 있나요?",
      answer: "Git을 활용한 팀 프로젝트 경험이 있으며, 코드 리뷰와 피드백을 통해 서로의 코드를 개선해 나가는 과정을 경험했습니다. 또한 스크럼 방식의 애자일 개발 방법론을 통해 팀원들과 효율적으로 소통하며 프로젝트를 진행한 경험이 있습니다."
    },
    {
      question: "앞으로의 목표는 무엇인가요?",
      answer: "더 나은 사용자 경험을 제공하는 웹 애플리케이션을 개발하고, 최신 기술 트렌드를 주시하며 지속적으로 성장하는 개발자가 되는 것이 목표입니다. 또한 다양한 프로젝트 경험을 통해 풀스택 개발자로 성장하고 싶습니다."
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </motion.div>

        {/* Q&A 섹션 */}
        <div className="mb-16">
          <div className="space-y-8">
            {qnaItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {item.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 기술 스택 섹션 */}
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
      </div>
    </section>
  );
};

export default About; 