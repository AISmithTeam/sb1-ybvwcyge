import React from 'react';
import RequiredFieldIndicator from './RequiredFieldIndicator';
import type { RequiredFieldProps } from './types';
import voices from '../../assets/voices/elevenlabs/elevnllabs_voices.json'
import { useState, useRef } from 'react';
import ActionButton from '../common/ActionButton';

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
  selectedVoice: string;
  onProviderChange: (providerId: string) => void;
  onModelChange: (modelId: string) => void;
  onVoiceChange: (voiceId: string) => void;
}

const ProviderModelSelector = ({
  label,
  providers,
  selectedProvider,
  selectedModel,
  selectedVoice,
  onProviderChange,
  onModelChange,
  onVoiceChange,
  isRequired = false,
  showError = false,
}: ProviderModelSelectorProps) => {
  const selectedProviderData = providers.find(p => p.id === selectedProvider);
  const selectedModelData = selectedProviderData?.models.find(m => m.id === selectedModel);
  const selectedVoiceData = voices.voices.find(v => v.voice_id == selectedVoice);
  const errorClass = showError ? 'border-red-300 dark:border-red-500 focus:border-red-500 focus:ring-red-500' : '';
  const defaultVoicePreview = 'https://storage.googleapis.com/eleven-public-prod/premade/voices/9BWtsMINqrJLrRacOk9x/405766b8-1f4e-4d3c-aba1-6f25333823ec.mp3';
  const voicePreviewAudio = new Audio(selectedVoiceData?.preview_url ? selectedVoiceData?.preview_url : defaultVoicePreview);
  const [playClicked, setPlayClicked] = useState(false);

  return (
    <div className={label == "Text-to-Speech"?"grid gap-6 md:grid-cols-3":"grid gap-6 md:grid-cols-2"}>
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

      {label == "Text-to-Speech" && <div>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
          {label} Voice
          {isRequired && <RequiredFieldIndicator />}
        </label>
        <div
          style={
            {
              display: "flex",
              flex: "row",
            }
          }
        >
          <select
            value={selectedVoice}
            onChange={(e) => onVoiceChange(e.target.value)}
            className={`w-full rounded-lg border-slate-200 dark:border-dark-700 dark:bg-dark-800 dark:text-slate-200 ${errorClass}`}
          >
            <option value="">Select Provider</option>
            {voices.voices.map(voice => (
              <option key={voice.voice_id} value={voice.voice_id}>
                {voice.name}
              </option>
            ))}
          </select>
          {selectedVoice && selectedVoice != '' &&
            <ActionButton 
              variant={!playClicked ? 'play' : 'pause'}
              showText={false}
              onClick={() => {
                console.log(voicePreviewAudio.src);
                !playClicked ? voicePreviewAudio.play() : voicePreviewAudio.pause();
                setPlayClicked(!playClicked);
              }
            }
            />
          }
        </div>
      </div>}
    </div>
  );
};

export default ProviderModelSelector;