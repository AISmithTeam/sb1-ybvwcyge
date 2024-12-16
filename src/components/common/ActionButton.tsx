import React from 'react';
import { LucideIcon, Pencil, Trash2 } from 'lucide-react';

interface ActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'edit' | 'delete';
  showText?: boolean;
}

const ActionButton = ({ variant, showText = true, className = '', ...props }: ActionButtonProps) => {
  const variants = {
    edit: {
      icon: Pencil,
      text: 'Edit',
      styles: 'text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-500/10 focus:ring-blue-200 dark:focus:ring-blue-500/20',
    },
    delete: {
      icon: Trash2,
      text: 'Delete',
      styles: 'text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-500/10 focus:ring-red-200 dark:focus:ring-red-500/20',
    },
  };

  const { icon: Icon, text, styles } = variants[variant];

  return (
    <button
      className={`inline-flex items-center gap-1.5 p-1.5 text-sm font-medium rounded-lg 
        transition-all duration-200 focus:outline-none focus:ring-2 ${styles} ${className}`}
      {...props}
    >
      <Icon className="w-4 h-4" />
      {showText && <span>{text}</span>}
    </button>
  );
};

export default ActionButton;