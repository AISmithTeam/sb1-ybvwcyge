import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'glass';
}

const Card = ({ children, className = '', variant = 'default' }: CardProps) => {
  const variants = {
    default: 'bg-white dark:bg-dark-800 shadow-lg shadow-slate-200/50 dark:shadow-dark-900/50',
    glass: 'bg-white/70 dark:bg-dark-800/70 backdrop-blur-xl shadow-glass dark:shadow-dark-900/30',
  };

  return (
    <div className={`rounded-2xl border border-slate-200/50 dark:border-dark-700/50 ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
};

export default Card;