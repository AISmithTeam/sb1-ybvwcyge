import React from 'react';
import { Check } from 'lucide-react';

interface Model {
  value: string;
  label: string;
}

interface ProviderOption {
  provider: string;
  models: Model[];
}

interface ModelSelectorProps {
  label: string;
  options: ProviderOption[];
  value: string;
  onChange: (value: string) => void;
}

const ModelSelector = ({ label, options, value, onChange }: ModelSelectorProps) => {
  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
        {label}
      </label>
      <div className="space-y-2">
        {options.map((option) => (
          <div key={option.provider} className="space-y-2">
            <div className="text-sm font-medium text-slate-600 dark:text-slate-400">
              {option.provider}
            </div>
            {option.models.map((model) => (
              <label
                key={model.value}
                className={`flex items-center gap-3 p-3 rounded-lg border border-slate-200 dark:border-dark-700
                  hover:border-primary-400 dark:hover:border-primary-400 hover:bg-primary-50/50 dark:hover:bg-primary-500/5
                  cursor-pointer transition-all duration-200 group
                  ${value === model.value ? 'border-primary-400 bg-primary-50/50 dark:bg-primary-500/5' : ''}`}
              >
                <input
                  type="radio"
                  name="model"
                  value={model.value}
                  checked={value === model.value}
                  onChange={(e) => onChange(e.target.value)}
                  className="hidden"
                />
                <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center
                  ${value === model.value 
                    ? 'border-primary-400 bg-primary-50' 
                    : 'border-slate-300 dark:border-dark-600'}`}
                >
                  {value === model.value && (
                    <div className="w-2 h-2 rounded-full bg-primary-500" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="font-medium text-slate-700 dark:text-slate-300">
                    {model.label}
                  </div>
                </div>
                <Check className={`w-4 h-4 text-primary-500 transition-opacity duration-200
                  ${value === model.value ? 'opacity-100' : 'opacity-0'}`} />
              </label>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModelSelector;