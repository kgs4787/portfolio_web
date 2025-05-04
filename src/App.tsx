import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Navbar from './components/organisms/Navbar';
import Hero from './components/organisms/Hero';
import About from './components/organisms/About';
import Projects from './components/organisms/Projects';
import Contact from './components/organisms/Contact';
import Footer from './components/organisms/Footer';
import ProjectDetail from './components/organisms/ProjectDetail';
import { ThemeProvider } from './context/ThemeContext';
import { projects } from './data/projects';

const ProjectDetailWrapper = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return <div className="text-center py-20">프로젝트를 찾을 수 없습니다.</div>;
  }

  return <ProjectDetail project={project} />;
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
          <Navbar />
          <main>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <section id="home">
                      <Hero />
                    </section>
                    <section id="about">
                      <About />
                    </section>
                    <section id="projects">
                      <Projects />
                    </section>
                    <section id="contact">
                      <Contact />
                    </section>
                  </>
                }
              />
              <Route path="/projects/:id" element={<ProjectDetailWrapper />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
