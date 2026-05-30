// CREDIT
// Component inspired by @BalintFerenczy on X
// https://codepen.io/BalintFerenczy/pen/KwdoyEN

import React from 'react';
import AntigravityHoverButton from '../components/AntigravityHoverButton';
import ElectricBorder from '../components/splashcursor';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-gutter pt-16 grid-mesh overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-surface pointer-events-none"></div>

      <ElectricBorder
        color="#7df9ff"
        speed={1}
        chaos={0.12}
        borderRadius={16}
        style={{ borderRadius: 16 }}
        className="relative z-10 max-w-3xl w-full"
      >
        <div className="text-center space-y-md animate-fade-in px-md py-lg md:px-lg md:py-xl bg-surface-container-low/80 backdrop-blur-sm">
          <div className="flex items-center justify-center gap-base mb-sm text-secondary">
            <span className="material-symbols-outlined text-lg">location_on</span>
            <span className="text-sm font-medium tracking-widest uppercase">
              Shanghai, China
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-on-surface mb-base tracking-tight leading-tight">
            Huihui
          </h1>

          <p className="text-2xl md:text-4xl text-on-surface-variant max-w-2xl mx-auto font-semibold">
            Design & Development with Precision
          </p>

          <div className="pt-lg flex flex-col sm:flex-row gap-md justify-center items-center">
            <AntigravityHoverButton
              onClick={() => scrollToSection('projects')}
              className="bg-primary text-on-primary text-sm font-medium px-lg py-md rounded-lg transition-transform hover:scale-105 active:opacity-80"
            >
              View My Work
            </AntigravityHoverButton>
            <AntigravityHoverButton
              onClick={() => scrollToSection('contact')}
              className="border border-outline-variant text-on-surface text-sm font-medium px-lg py-md rounded-lg hover:bg-surface-container-high transition-colors"
            >
              Get In Touch
            </AntigravityHoverButton>
          </div>
        </div>
      </ElectricBorder>

      <div className="absolute bottom-xl left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <span className="material-symbols-outlined">expand_more</span>
      </div>
    </section>
  );
};

export default Hero;
