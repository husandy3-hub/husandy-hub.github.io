import React from 'react';
import './styles/App.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import TechStack from './sections/TechStack';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

const App: React.FC = () => {
  return (
    <div className="app dark">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <TechStack />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
