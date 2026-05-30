import React from 'react';
import AntigravityHover from '../components/AntigravityHover';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: 'code',
      color: 'text-primary',
      hoverColor: '#adc6ff',
      title: 'Programming',
      skills: ['TypeScript / JavaScript', 'Python / Rust', 'Go / C++'],
    },
    {
      icon: 'layers',
      color: 'text-secondary',
      hoverColor: '#4edea3',
      title: 'Frameworks',
      skills: ['React / Next.js', 'Tailwind CSS', 'Node.js / Express'],
    },
    {
      icon: 'tactic',
      color: 'text-tertiary',
      hoverColor: '#ffb786',
      title: 'Project Mgmt',
      skills: ['Agile / Scrum', 'Linear / Jira', 'Strategic Planning'],
    },
    {
      icon: 'groups',
      color: 'text-on-surface',
      hoverColor: '#c2c6d6',
      title: 'Collaboration',
      skills: ['Figma Design Systems', 'Git Workflow', 'Cross-functional Sync'],
    },
  ];

  return (
    <section id="skills" className="py-xl bg-surface-container-low">
      <div className="px-gutter max-w-container-max mx-auto">
        <div className="mb-lg">
          <h2 className="text-5xl md:text-6xl font-bold text-on-surface">
            Capability Stack
          </h2>
          <p className="text-on-surface-variant mt-sm">
            Forging the bridge between logic and aesthetics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md">
          {skillCategories.map((category, index) => (
            <AntigravityHover
              key={index}
              color={category.hoverColor}
              className="rounded-xl cursor-pointer"
              contentClassName="glass-panel p-md rounded-xl"
            >
              <span
                className={`material-symbols-outlined ${category.color} mb-sm text-[32px]`}
              >
                {category.icon}
              </span>
              <h4 className="text-xl font-semibold text-on-surface mb-sm">
                {category.title}
              </h4>
              <ul className="space-y-xs text-on-surface-variant text-xs">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="flex items-center gap-xs">
                    <span
                      className={`w-1 h-1 ${category.color.replace(
                        'text-',
                        'bg-'
                      )} rounded-full`}
                    ></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </AntigravityHover>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
