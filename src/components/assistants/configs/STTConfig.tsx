import React, { useState } from 'react';
import { sttProviders } from './sttProviders';
import STTFeatures from './STTFeatures';
import ProviderModelSelector from '../ProviderModelSelector';
import type { STTFeaturesConfig } from './types';
import { defaultSTTConfig } from './constants';

interface STTConfigProps {
  config: {
    provider: string;
    model: string;
  };
  onChange: (updates: { provider?: string; model?: string }) => void;
  showValidationErrors?: boolean;
}

const STTConfig = ({ config, onChange, showValidationErrors }: STTConfigProps) => {
  const [features, setFeatures] = useState<STTFeaturesConfig>(defaultSTTConfig);

  const handleProviderChange = (providerId: string) => {
    const provider = sttProviders.find(p => p.id === providerId);
    onChange({
      provider: providerId,
      model: provider?.models[0]?.id || ''
    });
  };

  const handleModelChange = (modelId: string) => {
    onChange({ model: modelId });
  };

  const handleFeaturesChange = (updates: Partial<STTFeaturesConfig>) => {
    setFeatures(prev => ({ ...prev, ...updates }));
  };

  return (
    <div className="space-y-8">
      <ProviderModelSelector
        label="Speech-to-Text"
        providers={sttProviders}
        selectedProvider={config.provider}
        selectedModel={config.model}
        onProviderChange={handleProviderChange}
        onModelChange={handleModelChange}
        isRequired={true}
        showError={showValidationErrors && (!config.provider || !config.model)}
      />

      <STTFeatures
        config={features}
        onChange={handleFeaturesChange}
      />
    </div>
  );
};

export default STTConfig;