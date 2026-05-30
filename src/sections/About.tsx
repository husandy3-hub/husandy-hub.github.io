import React, { useEffect, useRef } from 'react';

const About: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const dots = document.querySelectorAll('.timeline-dot');
      dots.forEach((dot) => {
        const rect = dot.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          dot.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="about" className="py-xl px-gutter max-w-container-max mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-xl">
        <div className="md:col-span-7 space-y-md">
          <h2 className="text-5xl md:text-6xl font-bold text-on-surface">
            Hello, I'm Huihui
          </h2>
          <div className="w-24 h-1 bg-primary rounded-full"></div>
          
          <p className="text-lg text-on-surface-variant leading-relaxed">
            I am a multidisciplinary designer and engineer focused on building digital products 
            that balance technical rigor with aesthetic clarity. My approach is rooted in the 
            belief that great design is not just how something looks, but how it functions under pressure.
          </p>
          
          <p className="text-lg text-on-surface-variant leading-relaxed">
            Beyond the screen, I find inspiration in complex systems, architectural minimalism, 
            and the disciplined pursuit of craft. Whether it's architecting a scalable cloud 
            environment or refining a UI transition, I strive for precision in every pixel and 
            line of code.
          </p>

          <div className="pt-md">
            <h4 className="text-sm font-medium text-on-surface uppercase mb-sm tracking-wider">
              Current Interests
            </h4>
            <div className="flex flex-wrap gap-sm">
              <span className="px-md py-xs rounded-full bg-surface-container-high border border-outline-variant text-xs font-semibold">
                Generative Design
              </span>
              <span className="px-md py-xs rounded-full bg-surface-container-high border border-outline-variant text-xs font-semibold">
                DevOps Architecture
              </span>
              <span className="px-md py-xs rounded-full bg-surface-container-high border border-outline-variant text-xs font-semibold">
                Minimalist Photography
              </span>
            </div>
          </div>
        </div>

        <div ref={timelineRef} className="md:col-span-5 relative pl-lg">
          <div className="absolute left-0 top-0 bottom-0 timeline-line"></div>
          <div className="space-y-xl">
            <div className="relative">
              <div className="absolute -left-[30px] top-1 timeline-dot active"></div>
              <div>
                <span className="text-xs font-semibold text-secondary uppercase">
                  Education
                </span>
                <h3 className="text-3xl font-semibold text-on-surface mt-xs">
                  Hello, Huihui University
                </h3>
                <p className="text-on-surface-variant">
                  Bachelor of Science in Engineering & Visual Communication
                </p>
                <p className="text-outline text-xs mt-xs">2018 — 2022</p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[30px] top-1 timeline-dot"></div>
              <div>
                <span className="text-xs font-semibold text-primary uppercase">
                  Career Highlights
                </span>
                <h3 className="text-3xl font-semibold text-on-surface mt-xs">
                  Military Service Background
                </h3>
                <p className="text-on-surface-variant">
                  Honorable service, instilling discipline, strategic planning, and 
                  operational excellence in high-stakes environments.
                </p>
                <p className="text-outline text-xs mt-xs">2022 — 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
