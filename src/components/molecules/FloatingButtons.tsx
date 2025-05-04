import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { motion } from 'framer-motion';

const FloatingButtons: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-4">
      <button
        onClick={toggleTheme}
        className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300"
        aria-label={theme === 'dark' ? '라이트 모드로 전환' : '다크 모드로 전환'}
      >
        {theme === 'dark' ? (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

export default FloatingButtons; 