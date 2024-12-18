import React from 'react';
import SliderControl from '../common/SliderControl';
import type { STTFeaturesConfig } from './types';

interface STTFeaturesProps {
  config: STTFeaturesConfig;
  onChange: (updates: Partial<STTFeaturesConfig>) => void;
}

const STTFeatures = ({ config, onChange }: STTFeaturesProps) => {
  const handleChange = <K extends keyof STTFeaturesConfig>(
    key: K,
    value: STTFeaturesConfig[K]
  ) => {
    onChange({ [key]: value });
  };

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-slate-800 dark:text-white">Additional Configuration</h3>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-6">
          <SliderControl
            label="Noise Suppression"
            value={config.noiseSuppression}
            onChange={(value) => handleChange('noiseSuppression', value)}
            min={0}
            max={1}
            step={0.1}
            icon="noise"
            formatter={(v) => `${(v * 100).toFixed(0)}%`}
            description="Level of background noise reduction"
          />
        </div>
        <div className="space-y-6">
          <SliderControl
            label="Voice Activity Detection"
            value={config.vadThreshold}
            onChange={(value) => handleChange('vadThreshold', value)}
            min={0}
            max={1}
            step={0.1}
            icon="voice"
            formatter={(v) => `${(v * 100).toFixed(0)}%`}
            description="Sensitivity for detecting speech vs silence"
          />
          <SliderControl
            label="Silence Timeout"
            value={config.silenceTimeout}
            onChange={(value) => handleChange('silenceTimeout', value)}
            min={500}
            max={5000}
            step={100}
            icon="timer"
            formatter={(v) => `${v}ms`}
            description="Duration of silence before stopping recognition"
          />
        </div>
      </div>
    </div>
  );
};

export default STTFeatures;