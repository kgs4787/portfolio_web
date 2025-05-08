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
      question: "어떤 개발자가 되고 싶나요?",
      answer: "사용자와 동료 모두에게 신뢰를 주는 개발자가 되고 싶습니다. 단순히 기능을 만드는 것을 넘어, 실제 사용자의 문제를 해결하고 긍정적인 경험을 제공하며, 동료들과는 원활한 소통과 협업으로 함께 성장하는 개발자를 목표로 합니다."
    },
    {
      question: "문제를 마주했을 때 어떤 방식으로 접근하나요?",
      answer: "문제를 마주하면, 먼저 문제의 현상과 범위를 명확히 정의하고 다양한 관점에서 원인을 분석하려 합니다. 작은 단위로 나누어 단계적으로 해결책을 모색하며, 필요하다면 동료 개발자들과 적극적으로 논의하고 협력하여 최적의 해결책을 찾습니다."
    },
    {
      question: "당신이 만든 기능 중 가장 '사용자 가치'를 담고 있다고 생각하는 것은?",
      answer: "인턴십 당시 개발했던 '토큰 기반 사용자 데이터 동기화 기능'이 가장 사용자 가치를 담고 있다고 생각합니다. 이 기능을 통해 여러 환경에서 일관된 사용자 경험을 제공하고, 데이터 불일치로 인한 사용자의 혼란과 불편함을 해소하여 서비스 만족도를 높이는 데 기여했습니다."
    },
    {
      question: "내가 생각하는 좋은 코드란?",
      answer: "제가 생각하는 좋은 코드란 무엇보다 읽기 쉽고 이해하기 쉬워 유지보수가 용이한 코드입니다. 명확한 로직과 일관된 스타일을 가지며, 다른 개발자와의 효율적인 협업을 가능하게 하고, 장기적으로 서비스의 안정성과 확장성에 기여하는 코드가 좋은 코드라고 생각합니다."
    },
    {
      question: "협업할 때 가장 중요하다고 생각하는 점은?",
      answer: "협업 시 가장 중요한 것은 명확하고 적극적인 소통이라고 생각합니다. 서로의 의견을 존중하며 건설적인 피드백을 주고받고, 공동의 목표를 향해 각자의 역할을 책임감 있게 수행하며 시너지를 내는 것이 중요하다고 믿습니다."
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