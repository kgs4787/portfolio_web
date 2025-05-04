import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' }
];

const PageNavigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      sections.forEach(section => {
        const element = document.getElementById(section.id);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const elementTop = top + window.scrollY;
          const elementBottom = bottom + window.scrollY;
          
          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed right-8 top-1/2 -translate-y-1/2 z-[9999]"
    >
      <div className="flex flex-col items-center gap-4">
        {sections.map((section) => (
          <motion.button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`relative group flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${
              activeSection === section.id
                ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/50'
                : 'bg-white/10 hover:bg-white/20 text-gray-600 dark:text-gray-300'
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute -right-24 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white dark:bg-gray-800 px-3 py-1 rounded-lg text-sm font-medium shadow-lg whitespace-nowrap">
              {section.label}
            </span>
            {activeSection === section.id && (
              <motion.div
                layoutId="activeSection"
                className="absolute inset-0 rounded-full bg-blue-500"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10 text-sm font-medium">
              {section.label.charAt(0)}
            </span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default PageNavigation; 