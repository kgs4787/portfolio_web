import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../components/pages/Home";
import About from "../components/pages/About";
import Projects from "../components/pages/Projects";
import Contact from "../components/pages/Contact";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
