import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant w-full py-xl mt-xl">
      <div className="flex flex-col md:flex-row justify-between items-center gap-md px-gutter max-w-container-max mx-auto">
        <div className="flex flex-col gap-xs items-center md:items-start">
          <span className="text-sm font-bold text-on-surface uppercase tracking-widest">
            PORTFOLIO
          </span>
          <p className="text-base text-on-surface-variant">
            © 2024 Portfolio. Designed with precision.
          </p>
        </div>
        <div className="flex gap-md items-center">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface-variant text-base hover:bg-secondary hover:text-on-secondary transition-all duration-300 rounded-full px-4 py-1"
          >
            GitHub
          </a>
          <a
            href="https://pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface-variant text-base hover:bg-secondary hover:text-on-secondary transition-all duration-300 rounded-full px-4 py-1"
          >
            Pinterest
          </a>
          <a
            href="https://zhihu.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface-variant text-base hover:bg-secondary hover:text-on-secondary transition-all duration-300 rounded-full px-4 py-1"
          >
            Zhihu
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
