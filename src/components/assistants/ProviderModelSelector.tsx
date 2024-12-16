import React from 'react';
import RequiredFieldIndicator from './RequiredFieldIndicator';
import type { RequiredFieldProps } from './types';

interface ProviderModelSelectorProps extends RequiredFieldProps {
  label: string;
  providers: Array<{
    id: string;
    name: string;
    models: Array<{
      id: string;
      name: string;
      description?: string;
    }>;
  }>;
  selectedProvider: string;
  selectedModel: string;
  onProviderChange: (providerId: string) => void;
  onModelChange: (modelId: string) => void;
}

const ProviderModelSelector = ({
  label,
  providers,
  selectedProvider,
  selectedModel,
  onProviderChange,
  onModelChange,
  isRequired = false,
  showError = false,
}: ProviderModelSelectorProps) => {
  const selectedProviderData = providers.find(p => p.id === selectedProvider);
  const selectedModelData = selectedProviderData?.models.find(m => m.id === selectedModel);
  const errorClass = showError ? 'border-red-300 dark:border-red-500 focus:border-red-500 focus:ring-red-500' : '';

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
          {label} Provider
          {isRequired && <RequiredFieldIndicator />}
        </label>
        <select
          value={selectedProvider}
          onChange={(e) => onProviderChange(e.target.value)}
          className={`w-full rounded-lg border-slate-200 dark:border-dark-700 dark:bg-dark-800 dark:text-slate-200 ${errorClass}`}
        >
          <option value="">Select Provider</option>
          {providers.map(provider => (
            <option key={provider.id} value={provider.id}>
              {provider.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
          {label} Model
          {isRequired && <RequiredFieldIndicator />}
        </label>
        <select
          value={selectedModel}
          onChange={(e) => onModelChange(e.target.value)}
          className={`w-full rounded-lg border-slate-200 dark:border-dark-700 dark:bg-dark-800 dark:text-slate-200 ${errorClass}`}
          disabled={!selectedProvider}
        >
          <option value="">Select Model</option>
          {selectedProviderData?.models.map(model => (
            <option key={model.id} value={model.id}>
              {model.name}
            </option>
          ))}
        </select>
        {selectedModelData?.description && (
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            {selectedModelData.description}
          </p>
        )}
      </div>
    </div>
  );
};

export default ProviderModelSelector;