import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ConfigSectionProps {
  title: string;
  icon: React.ReactNode;
  description?: string;
  children: React.ReactNode;
}

const ConfigSection = ({ title, icon, description, children }: ConfigSectionProps) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="group">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between p-4 rounded-xl
          bg-white/70 dark:bg-dark-800/70 backdrop-blur-sm border border-slate-200/60 dark:border-dark-700/60
          hover:border-primary-400/60 hover:shadow-lg hover:shadow-primary-500/5
          transition-all duration-300 ease-in-out
          ${isOpen ? 'shadow-lg shadow-primary-500/5 border-primary-400/60' : ''}
        `}
      >
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg bg-primary-50 dark:bg-primary-500/10 text-primary-500 dark:text-primary-400`}>
            {icon}
          </div>
          <div className="text-left">
            <span className="font-medium text-slate-700 dark:text-slate-200">{title}</span>
            {description && (
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">{description}</p>
            )}
          </div>
        </div>
        <div className={`p-1.5 rounded-lg transition-colors duration-300
          ${isOpen ? 'bg-primary-50 dark:bg-primary-500/10 text-primary-500 dark:text-primary-400' : 'text-primary-500 dark:text-primary-400 group-hover:bg-primary-50 dark:group-hover:bg-primary-500/10'}
        `}>
          {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </div>
      </button>
      
      <div className={`overflow-hidden transition-all duration-300 ease-in-out
        ${isOpen ? 'max-h-[800px] opacity-100 mt-3' : 'max-h-0 opacity-0'}
      `}>
        <div className="p-5 rounded-xl bg-white/70 dark:bg-dark-800/70 backdrop-blur-sm border border-slate-200/60 dark:border-dark-700/60 shadow-lg shadow-slate-200/20 dark:shadow-dark-900/30">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ConfigSection;