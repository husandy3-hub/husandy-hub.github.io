import React, { useState } from 'react';
import AntigravityHover from '../components/AntigravityHover';
import AntigravityHoverButton from '../components/AntigravityHoverButton';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  tags: string[];
  hoverColor: string;
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All Projects');

  const projects: Project[] = [
    {
      id: 1,
      title: 'Neural Distributed Mesh',
      description:
        'A high-performance mesh network simulator built for analyzing node failure recovery in large-scale distributed systems.',
      category: 'University',
      tags: ['C++', 'Go', 'Docker'],
      hoverColor: '#adc6ff',
    },
    {
      id: 2,
      title: 'Echo Engine V2',
      description:
        'A lightweight event-driven state management library for React focusing on zero-boilerplate and low-latency updates.',
      category: 'Open Source',
      tags: ['TypeScript', 'React', 'Rollup'],
      hoverColor: '#4edea3',
    },
    {
      id: 3,
      title: 'Aura Creative Suite',
      description:
        'A bespoke content management system tailored for visual artists, featuring automated image optimization and AR previews.',
      category: 'Personal',
      tags: ['Next.js', 'Three.js', 'Vercel'],
      hoverColor: '#ffb786',
    },
    {
      id: 4,
      title: 'Synergy Workflows',
      description:
        'Real-time collaboration platform for remote engineering teams featuring integrated pair-programming terminals.',
      category: 'Collaborative',
      tags: ['Rust', 'WebAssembly', 'Redis'],
      hoverColor: '#adc6ff',
    },
    {
      id: 5,
      title: 'Quantum Logic Gates',
      description:
        'A theoretical framework and software implementation for simulating qubit decoherence in noise-heavy environments.',
      category: 'University',
      tags: ['Python', 'Qiskit', 'Latex'],
      hoverColor: '#c2c6d6',
    },
    {
      id: 6,
      title: 'Sentinel OSINT',
      description:
        'A modular reconnaissance tool for automated open-source intelligence gathering and threat pattern visualization.',
      category: 'Personal',
      tags: ['Python', 'Elasticsearch', 'Kibana'],
      hoverColor: '#5227FF',
    },
  ];

  const filters = [
    'All Projects',
    'University Projects',
    'Personal Projects',
    'Open Source',
    'Collaborative',
  ];

  return (
    <section id="projects" className="pt-xl pb-xl">
      <div className="max-w-container-max mx-auto px-gutter">
        <AntigravityHover
          color="#5227FF"
          className="rounded-xl mb-lg cursor-pointer"
          contentClassName="p-md rounded-xl"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-on-surface mb-md">
            Selected <span className="text-primary">Works</span>
          </h1>
          <p className="text-lg text-on-surface-variant max-w-2xl">
            A curated selection of technical challenges and creative solutions
            across academic, personal, and professional environments.
          </p>
        </AntigravityHover>

        <div className="flex flex-wrap gap-sm mb-lg">
          {filters.map((filter) => (
            <AntigravityHoverButton
              key={filter}
              onClick={() => setActiveFilter(filter)}
              color="#5227FF"
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter
                  ? 'bg-primary text-on-primary'
                  : 'bg-surface-container border border-outline-variant text-on-surface-variant'
              }`}
            >
              {filter}
            </AntigravityHoverButton>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
          {projects.map((project) => (
            <AntigravityHover
              key={project.id}
              color={project.hoverColor}
              className="rounded-xl cursor-pointer"
              contentClassName="group bg-surface-container-low border border-outline-variant rounded-xl flex flex-col"
            >
              <div className="aspect-video relative overflow-hidden bg-surface-container-highest">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-6xl text-outline opacity-20">
                    folder_open
                  </span>
                </div>
                <div className="absolute top-sm left-sm">
                  <span className="bg-surface/60 backdrop-blur-md text-on-surface text-xs font-semibold px-3 py-1 rounded-full border border-outline-variant">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-md flex flex-col flex-grow">
                <h3 className="text-3xl font-semibold text-on-surface mb-xs">
                  {project.title}
                </h3>
                <p className="text-base text-on-surface-variant mb-md flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-xs mb-md">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-surface-container-highest text-on-surface px-2 py-0.5 rounded text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  className="w-full py-3 bg-primary text-on-primary rounded-lg text-sm font-medium"
                >
                  View Details
                </button>
              </div>
            </AntigravityHover>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
