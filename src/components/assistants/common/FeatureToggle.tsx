import React from 'react';
import { Settings } from 'lucide-react';

interface FeatureToggleProps {
  label: string;
  description: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const FeatureToggle = ({ label, description, checked, onChange }: FeatureToggleProps) => (
  <div>
    <label className="flex items-center justify-between">
      <span className="text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2">
        <Settings className="w-4 h-4 text-primary-500 dark:text-primary-400" />
        {label}
      </span>
      <div className="relative inline-block w-12 h-6 rounded-full bg-slate-200 dark:bg-dark-700">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="sr-only"
        />
        <div
          className={`absolute left-1 top-1 w-4 h-4 rounded-full transition-transform duration-200 ${
            checked 
              ? 'transform translate-x-6 bg-primary-500' 
              : 'bg-slate-400 dark:bg-slate-600'
          }`}
        />
      </div>
    </label>
    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
      {description}
    </p>
  </div>
);

export default FeatureToggle;