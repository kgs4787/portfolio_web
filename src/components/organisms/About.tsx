import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'HTML/CSS',
    'Tailwind CSS',
    'Git',
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

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              안녕하세요, 김강산입니다.
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              프론트엔드 개발자로서 사용자 경험을 중요시하며, 
              최신 웹 기술을 활용하여 반응형이고 접근성이 좋은 웹 애플리케이션을 개발합니다.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              지속적인 학습과 성장을 통해 더 나은 개발자로 성장하기 위해 노력하고 있습니다.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 