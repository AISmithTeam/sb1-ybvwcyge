import React, { useState } from 'react';
import { llmProviders } from './llmProviders';
import LLMFeatures from './LLMFeatures';
import ProviderModelSelector from '../ProviderModelSelector';
import type { LLMFeaturesConfig } from './types';
import { defaultLLMConfig } from './constants';

interface LLMConfigProps {
  config: {
    provider: string;
    model: string;
  };
  onChange: (updates: { provider?: string; model?: string }) => void;
  showValidationErrors?: boolean;
}

const LLMConfig = ({ config, onChange, showValidationErrors }: LLMConfigProps) => {
  const [features, setFeatures] = useState<LLMFeaturesConfig>(defaultLLMConfig);

  const handleProviderChange = (providerId: string) => {
    const provider = llmProviders.find(p => p.id === providerId);
    onChange({
      provider: providerId,
      model: provider?.models[0]?.id || ''
    });
  };

  const handleModelChange = (modelId: string) => {
    onChange({ model: modelId });
  };

  const handleFeaturesChange = (updates: Partial<LLMFeaturesConfig>) => {
    setFeatures(prev => ({ ...prev, ...updates }));
  };

  return (
    <div className="space-y-8">
      <ProviderModelSelector
        label="Language Model"
        providers={llmProviders}
        selectedProvider={config.provider}
        selectedModel={config.model}
        onProviderChange={handleProviderChange}
        onModelChange={handleModelChange}
        isRequired={true}
        showError={showValidationErrors && (!config.provider || !config.model)}
      />

      <LLMFeatures
        config={features}
        onChange={handleFeaturesChange}
      />
    </div>
  );
};

export default LLMConfig;