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
    initialMessage: string;
    prompt: string;
  };
  onChange: (updates: { provider?: string; model?: string; prompt?: string; first_message?: string; }) => void;
  showValidationErrors?: boolean;
}

const LLMConfig = ({ config, onChange, showValidationErrors }: LLMConfigProps) => {
  const [features, setFeatures] = useState<LLMFeaturesConfig>(defaultLLMConfig);
  features.systemPrompt = config.prompt;
  features.initialMessage = config.initialMessage;
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
    updates.systemPrompt && onChange({ prompt: updates.systemPrompt });
    updates.initialMessage && onChange({ first_message: updates.initialMessage });
    //config.prompt = updates.systemPrompt ? updates.systemPrompt : config.prompt;
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