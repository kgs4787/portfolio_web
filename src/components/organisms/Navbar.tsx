import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

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
  return (
    <motion.nav
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 bg-white shadow-sm"
      role="navigation"
      aria-label="메인 네비게이션"
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link
          to="home"
          smooth
          duration={500}
          className="text-xl font-bold text-blue-600 cursor-pointer hover:text-blue-700 transition-colors"
          aria-label="홈으로 이동"
        >
          김강산
        </Link>
        <div className="hidden md:flex space-x-6">
          {navItems.map(({ label, target }) => (
            <Link
              key={label}
              to={target}
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
              className="cursor-pointer text-gray-700 hover:text-blue-600 transition-colors font-medium"
              aria-label={`${label} 섹션으로 이동`}
            >
              {label}
            </Link>
          ))}
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
