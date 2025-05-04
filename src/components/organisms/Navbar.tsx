import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const navItems = [
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
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link
          to="home"
          smooth
          duration={500}
          className="text-xl font-bold text-blue-600 cursor-pointer"
        >
          김강산
        </Link>
        <div className="space-x-6">
          {navItems.map(({ label, target }) => (
            <Link
              key={label}
              to={target}
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
              className="cursor-pointer text-gray-700 hover:text-blue-600 transition font-medium"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
