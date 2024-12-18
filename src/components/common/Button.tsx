import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
  icon?: LucideIcon;
  size?: 'sm' | 'md' | 'lg';
}

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  icon: Icon, 
  className = '',
  disabled,
  ...props 
}: ButtonProps) => {
  const baseStyles = 'rounded-xl font-medium flex items-center gap-2 transition-all duration-200';
  
  const variants = {
    primary: `bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 
      text-white shadow-lg shadow-primary-500/20 hover:shadow-primary-500/30 
      dark:shadow-primary-500/10 dark:hover:shadow-primary-500/20
      disabled:from-primary-600/50 disabled:to-primary-500/50 disabled:cursor-not-allowed`,
    secondary: 'bg-slate-100 hover:bg-slate-200 text-slate-800 dark:bg-dark-700 dark:hover:bg-dark-600 dark:text-slate-200',
    danger: 'bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white shadow-lg shadow-red-500/20 hover:shadow-red-500/30 dark:shadow-red-500/10 dark:hover:shadow-red-500/20',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {Icon && <Icon className={`${size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-6 h-6' : 'w-5 h-5'}`} />}
      {children}
    </button>
  );
};

export default Button;