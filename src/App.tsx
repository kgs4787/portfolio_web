import React from 'react';
import Navbar from './components/organisms/Navbar';
import Hero from './components/organisms/Hero';
import About from './components/organisms/About';
import Projects from './components/organisms/Projects';
import Contact from './components/organisms/Contact';
import Footer from './components/organisms/Footer';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
        <Navbar />
        <main>
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
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
