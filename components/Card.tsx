
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ children, className = '', onClick }) => {
  const cardClasses = `
    bg-sentinel-gray-dark border border-sentinel-gray-medium rounded-lg shadow-lg
    transition-all duration-300 ease-in-out
    ${onClick ? 'cursor-pointer hover:border-sentinel-blue hover:shadow-cyan-500/10' : ''}
    ${className}
  `;

  return (
    <div className={cardClasses} onClick={onClick}>
      {children}
    </div>
  );
};

export default Card;
