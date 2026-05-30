import React from 'react';
import AntigravityHover from '../components/AntigravityHover';

const TechStack: React.FC = () => {
  const techItems = [
    {
      icon: 'cloud',
      color: 'text-primary',
      hoverColor: '#adc6ff',
      title: 'Cloud Platforms',
      description: 'AWS, Vercel, Google Cloud, Alibaba Cloud',
    },
    {
      icon: 'terminal',
      color: 'text-secondary',
      hoverColor: '#4edea3',
      title: 'Dev Environment',
      description: 'Docker, Kubernetes, VS Code, Unix/Linux',
    },
  ];

  return (
    <section className="py-xl px-gutter max-w-container-max mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-xl items-center">
        <div className="space-y-md">
          <h2 className="text-5xl md:text-6xl font-bold text-on-surface">
            Infrastructure & Ops
          </h2>
          <p className="text-on-surface-variant text-lg">
            I build resilient foundations using industry-standard cloud platforms
            and development environments, ensuring security and high availability.
          </p>

          <div className="space-y-sm">
            {techItems.map((item, index) => (
              <AntigravityHover
                key={index}
                color={item.hoverColor}
                className="rounded-lg cursor-pointer"
                contentClassName="flex items-center gap-md p-sm rounded-lg border border-outline-variant bg-surface-container-low"
              >
                <div
                  className={`w-12 h-12 flex items-center justify-center bg-surface-container-high rounded ${item.color}`}
                >
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <div>
                  <h5 className="text-sm font-medium text-on-surface">
                    {item.title}
                  </h5>
                  <p className="text-xs text-on-surface-variant">
                    {item.description}
                  </p>
                </div>
              </AntigravityHover>
            ))}
          </div>
        </div>

        <AntigravityHover
          color="#5227FF"
          className="rounded-xl aspect-video cursor-pointer"
          contentClassName="relative rounded-xl overflow-hidden border border-outline-variant bg-surface-container-high"
        >
          <div className="w-full h-full min-h-[175px] flex items-center justify-center">
            <div className="text-center space-y-4">
              <span className="material-symbols-outlined text-6xl text-primary opacity-20">
                developer_board
              </span>
              <p className="text-on-surface-variant text-sm">
                Technical Environment Visualization
              </p>
            </div>
          </div>
        </AntigravityHover>
      </div>
    </section>
  );
};

export default TechStack;
