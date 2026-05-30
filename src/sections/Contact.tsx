// CREDIT
// Component inspired by @BalintFerenczy on X
// https://codepen.io/BalintFerenczy/pen/KwdoyEN

import React from 'react';
import ElectricBorder from '../components/splashcursor';

const Contact: React.FC = () => {
  const socialLinks = [
    { icon: 'mail', label: 'Email', href: 'mailto:hello@huihui.me' },
    { icon: 'hub', label: 'GitHub', href: 'https://github.com' },
    { icon: 'brush', label: 'Pinterest', href: 'https://pinterest.com' },
    { icon: 'share', label: 'Share', href: '#' },
  ];

  return (
    <section id="contact" className="py-xl px-gutter max-w-container-max mx-auto">
      <ElectricBorder
        color="#7df9ff"
        speed={1}
        chaos={0.12}
        borderRadius={24}
        style={{ borderRadius: 24 }}
        className="w-full"
      >
        <div className="glass-panel rounded-3xl p-lg md:p-xl flex flex-col md:flex-row gap-xl items-center">
          <div className="flex-1 space-y-md text-center md:text-left">
            <h2 className="text-5xl md:text-6xl font-extrabold text-on-surface">
              Let's Connect
            </h2>
            <p className="text-on-surface-variant text-lg max-w-md">
              Open for collaborations, interesting projects, or just a coffee chat
              in Shanghai.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-md pt-md">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-surface-container-highest hover:bg-primary hover:text-on-primary transition-all duration-300"
                  aria-label={link.label}
                >
                  <span className="material-symbols-outlined">{link.icon}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="w-48 h-48 bg-surface-container-highest border border-outline-variant rounded-2xl flex flex-col items-center justify-center p-sm group cursor-pointer overflow-hidden relative">
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="w-32 h-32 bg-white/5 rounded-lg flex items-center justify-center mb-base border border-dashed border-outline-variant">
              <span className="material-symbols-outlined text-[48px] text-outline opacity-40">
                qr_code_2
              </span>
            </div>
            <span className="text-xs font-semibold text-on-surface-variant">
              WeChat
            </span>
          </div>
        </div>
      </ElectricBorder>
    </section>
  );
};

export default Contact;
