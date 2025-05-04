import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/organisms/Hero';
import About from './components/organisms/About';
import Projects from './components/organisms/Projects';
import ProjectDetail from './components/organisms/ProjectDetail';
import Contact from './components/organisms/Contact';
import Footer from './components/organisms/Footer';
import FloatingButtons from './components/molecules/FloatingButtons';
import { ThemeProvider } from './context/ThemeContext';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <FloatingButtons />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <Projects />
                  <Contact />
                </>
              }
            />
            <Route path="/projects/:id" element={<ProjectDetail />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
