import React, { useState } from 'react';
import Antigravity from './huhuhu';

export const defaultAntigravityProps = {
  count: 120,
  magnetRadius: 6,
  ringRadius: 7,
  waveSpeed: 0.4,
  waveAmplitude: 1,
  particleSize: 1.5,
  lerpSpeed: 0.05,
  color: '#5227FF',
  autoAnimate: true,
  particleVariance: 1,
  rotationSpeed: 0,
  depthFactor: 1,
  pulseSpeed: 3,
  particleShape: 'capsule' as const,
  fieldStrength: 10,
};

interface AntigravityHoverProps {
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
  color?: string;
  count?: number;
}

const AntigravityHover: React.FC<AntigravityHoverProps> = ({
  children,
  className = '',
  contentClassName = '',
  color = defaultAntigravityProps.color,
  count = defaultAntigravityProps.count,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`absolute inset-0 z-0 transition-opacity duration-300 pointer-events-none ${
          hovered ? 'opacity-100' : 'opacity-0'
        }`}
        aria-hidden
      >
        {hovered && (
          <Antigravity {...defaultAntigravityProps} color={color} count={count} />
        )}
      </div>

      <div
        className={`relative z-10 h-full transition-colors duration-300 ${
          hovered ? 'bg-surface-container-low/85 backdrop-blur-sm' : ''
        } ${contentClassName}`}
      >
        {children}
      </div>
    </div>
  );
};

export default AntigravityHover;
