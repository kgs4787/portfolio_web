import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

interface NavItem {
  label: string;
  target: string;
}

const navItems: NavItem[] = [
  { label: "Home", target: "home" },
  { label: "About", target: "about" },
  { label: "Projects", target: "projects" },
  { label: "Contact", target: "contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.nav
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-sm"
      role="navigation"
      aria-label="메인 네비게이션"
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link
          to="home"
          smooth
          duration={500}
          className="text-xl font-bold text-blue-600 dark:text-blue-400 cursor-pointer hover:text-blue-700 transition-colors"
          aria-label="홈으로 이동"
        >
          김강산
        </Link>
        <div className="flex items-center space-x-6">
          <div className="hidden md:flex space-x-6">
            {navItems.map(({ label, target }) => (
              <Link
                key={label}
                to={target}
                smooth={true}
                duration={500}
                offset={-70}
                spy={true}
                className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition font-medium"
                aria-label={`${label} 섹션으로 이동`}
              >
                {label}
              </Link>
            ))}
          </div>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
            aria-label={theme === 'light' ? '다크 모드로 전환' : '라이트 모드로 전환'}
          >
            {theme === 'light' ? (
              <svg 
                className="w-5 h-5 transform transition-transform duration-300 hover:rotate-12" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            ) : (
              <svg 
                className="w-5 h-5 transform transition-transform duration-300 hover:rotate-12" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            )}
          </button>
        </div>
        <button 
          className="md:hidden text-gray-700 hover:text-blue-600"
          aria-label="모바일 메뉴 열기"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </motion.nav>
  );
}
