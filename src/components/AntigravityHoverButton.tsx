import React from 'react';
import AntigravityHover from './AntigravityHover';

interface AntigravityHoverButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  color?: string;
}

const AntigravityHoverButton: React.FC<AntigravityHoverButtonProps> = ({
  children,
  onClick,
  className = '',
  type = 'button',
  color,
}) => {
  return (
    <AntigravityHover className="inline-block rounded-lg" color={color}>
      <button type={type} onClick={onClick} className={className}>
        {children}
      </button>
    </AntigravityHover>
  );
};

export default AntigravityHoverButton;
