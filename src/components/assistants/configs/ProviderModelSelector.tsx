import React from 'react';
import type { Provider } from './types';

interface ProviderModelSelectorProps {
  providers: Provider[];
  selectedProvider: string;
  selectedModel: string;
  onProviderChange: (providerId: string) => void;
  onModelChange: (modelId: string) => void;
}

const ProviderModelSelector = ({
  providers,
  selectedProvider,
  selectedModel,
  onProviderChange,
  onModelChange,
}: ProviderModelSelectorProps) => {
  const selectedProviderData = providers.find(p => p.id === selectedProvider);
  const selectedModelData = selectedProviderData?.models.find(m => m.id === selectedModel);

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
          Provider
        </label>
        <select
          value={selectedProvider}
          onChange={(e) => onProviderChange(e.target.value)}
          className="w-full rounded-lg border-slate-200 dark:border-dark-700 dark:bg-dark-800 dark:text-slate-200"
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
          Model
        </label>
        <select
          value={selectedModel}
          onChange={(e) => onModelChange(e.target.value)}
          className="w-full rounded-lg border-slate-200 dark:border-dark-700 dark:bg-dark-800 dark:text-slate-200"
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