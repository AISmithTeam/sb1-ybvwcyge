import React, { useState } from 'react';
import { ttsProviders } from './ttsProviders';
import TTSFeatures from './TTSFeatures';
import ProviderModelSelector from '../ProviderModelSelector';
import type { TTSFeaturesConfig } from './types';
import { defaultTTSConfig } from './constants';

interface TTSConfigProps {
  config: {
    provider: string;
    model: string;
    voice: string;
  };
  onChange: (updates: { provider?: string; model?: string; voice?: string; }) => void;
  showValidationErrors?: boolean;
}

const TTSConfig = ({ config, onChange, showValidationErrors }: TTSConfigProps) => {
  const [features, setFeatures] = useState<TTSFeaturesConfig>(defaultTTSConfig);

  const handleProviderChange = (providerId: string) => {
    const provider = ttsProviders.find(p => p.id === providerId);
    onChange({
      provider: providerId,
      model: provider?.models[0]?.id || ''
    });
  };

  const handleModelChange = (modelId: string) => {
    onChange({ model: modelId });
  };

  const handleVoiceChange = (voiceId: string) => {
    onChange({ voice: voiceId });
  };

  const handleFeaturesChange = (updates: Partial<TTSFeaturesConfig>) => {
    setFeatures(prev => ({ ...prev, ...updates }));
  };

  return (
    <div className="space-y-8">
      <ProviderModelSelector
        label="Text-to-Speech"
        providers={ttsProviders}
        selectedProvider={config.provider}
        selectedModel={config.model}
        selectedVoice={config.voice}
        onProviderChange={handleProviderChange}
        onModelChange={handleModelChange}
        onVoiceChange={handleVoiceChange}
        isRequired={true}
        showError={showValidationErrors && (!config.provider || !config.model)}
      />

      <TTSFeatures
        config={features}
        onChange={handleFeaturesChange}
      />
    </div>
  );
};

export default TTSConfig;