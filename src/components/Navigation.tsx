import React, { useState, useEffect } from 'react';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full bg-surface/80 backdrop-blur-md border-b border-outline-variant z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-lg' : ''
      }`}
    >
      <div className="flex justify-between items-center h-16 px-gutter max-w-container-max mx-auto">
        <span className="text-2xl font-bold tracking-tighter text-on-surface">
          PORTFOLIO
        </span>

        <div className="hidden md:flex gap-lg items-center">
          <button
            onClick={() => scrollToSection('about')}
            className="text-sm font-medium text-on-surface-variant hover:text-on-surface transition-colors duration-200"
          >
            About Me
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-sm font-medium text-on-surface-variant hover:text-on-surface transition-colors duration-200"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('works')}
            className="text-sm font-medium text-on-surface-variant hover:text-on-surface transition-colors duration-200"
          >
            Works Showcase
          </button>
          <button
            onClick={() => scrollToSection('skills')}
            className="text-sm font-medium text-on-surface-variant hover:text-on-surface transition-colors duration-200"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-sm font-medium text-on-surface-variant hover:text-on-surface transition-colors duration-200"
          >
            Contact
          </button>
        </div>

        <button
          className="md:hidden text-on-surface"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-surface-container border-t border-outline-variant">
          <div className="flex flex-col gap-4 p-gutter">
            <button
              onClick={() => scrollToSection('about')}
              className="text-left text-sm font-medium text-on-surface-variant hover:text-on-surface transition-colors"
            >
              About Me
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-left text-sm font-medium text-on-surface-variant hover:text-on-surface transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('works')}
              className="text-left text-sm font-medium text-on-surface-variant hover:text-on-surface transition-colors"
            >
              Works Showcase
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-left text-sm font-medium text-on-surface-variant hover:text-on-surface transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-left text-sm font-medium text-on-surface-variant hover:text-on-surface transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
