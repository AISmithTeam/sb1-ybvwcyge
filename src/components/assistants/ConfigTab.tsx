import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ConfigTabProps {
  isActive: boolean;
  onClick: () => void;
  icon: LucideIcon;
  label: string;
  description: string;
}

const ConfigTab = ({ isActive, onClick, icon: Icon, label, description }: ConfigTabProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex-1 p-4 rounded-xl border transition-all duration-200 text-left
        ${isActive 
          ? 'bg-primary-50 dark:bg-primary-500/10 border-primary-200 dark:border-primary-500/20' 
          : 'bg-white dark:bg-dark-800 border-slate-200 dark:border-dark-700 hover:border-primary-200 dark:hover:border-primary-500/20'
        }`}
    >
      <div className="flex items-center gap-3">
        <div className={`p-2 rounded-lg ${
          isActive 
            ? 'bg-primary-100 dark:bg-primary-500/20 text-primary-600 dark:text-primary-400' 
            : 'bg-slate-100 dark:bg-dark-700 text-slate-600 dark:text-slate-400'
          }`}>
          <Icon className="w-5 h-5" />
        </div>
        <div>
          <h3 className={`font-medium ${
            isActive 
              ? 'text-primary-900 dark:text-primary-100' 
              : 'text-slate-900 dark:text-slate-100'
            }`}>
            {label}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">{description}</p>
        </div>
      </div>
    </button>
  );
};

export default ConfigTab;