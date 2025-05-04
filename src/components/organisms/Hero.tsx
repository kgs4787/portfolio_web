import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            안녕하세요, <br />
            <span className="text-blue-600 dark:text-blue-400">김강산</span>입니다.
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            프론트엔드 개발자
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <a
              href="#contact"
              className="inline-block bg-blue-600 dark:bg-blue-500 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
            >
              연락하기
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 