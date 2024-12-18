import React from 'react';
import FeatureToggle from '../common/FeatureToggle';
import BackgroundSoundSelect from './BackgroundSoundSelect';
import MinCharactersInput from './MinCharactersInput';
import type { TTSFeaturesProps } from './types';

const TTSFeatures = ({ config, onChange }: TTSFeaturesProps) => {
  const handleChange = <K extends keyof typeof config>(
    key: K,
    value: typeof config[K]
  ) => {
    onChange({ [key]: value });
  };

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-slate-800 dark:text-white">
        Additional Configuration
      </h3>
      
      <div className="grid grid-cols-2 gap-6">
        <BackgroundSoundSelect
          value={config.backgroundSound}
          onChange={(value) => handleChange('backgroundSound', value)}
        />

        <MinCharactersInput
          value={config.minCharacters}
          onChange={(value) => handleChange('minCharacters', value)}
        />

        <FeatureToggle
          label="Filler Injection"
          description="Determines whether fillers are injected into the Model output before inputting it into the Voice provider."
          checked={config.fillerInjection}
          onChange={(checked) => handleChange('fillerInjection', checked)}
        />

        <FeatureToggle
          label="Backchanneling"
          description="Make the bot say words like 'mhmm', 'ya' etc. while listening to make the conversation sounds natural."
          checked={config.backchanneling}
          onChange={(checked) => handleChange('backchanneling', checked)}
        />
      </div>
    </div>
  );
};

export default TTSFeatures;