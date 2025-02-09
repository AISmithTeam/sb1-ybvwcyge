import React from 'react';
import { Upload } from 'lucide-react';
import SliderControl from '../common/SliderControl';
import type { LLMFeaturesConfig } from './types';

interface LLMFeaturesProps {
  config: LLMFeaturesConfig;
  onChange: (updates: Partial<LLMFeaturesConfig>) => void;
}

const LLMFeatures = ({ config, onChange }: LLMFeaturesProps) => {
  const handleChange = <K extends keyof LLMFeaturesConfig>(
    key: K,
    value: LLMFeaturesConfig[K]
  ) => {
    onChange({ [key]: value });
  };

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-slate-800 dark:text-white">Additional Configuration</h3>
      
      <div className="grid grid-cols-2 gap-6">
        <SliderControl
          label="Temperature"
          value={config.temperature}
          onChange={(value) => handleChange('temperature', value)}
          min={0}
          max={2}
          step={0.1}
          icon="temperature"
          description="Controls randomness in responses (0 = focused, 2 = creative)"
          formatter={(value) => value.toFixed(1)}
        />

        <SliderControl
          label="Maximum Length"
          value={config.maxTokens}
          onChange={(value) => handleChange('maxTokens', value)}
          min={1}
          max={250}
          step={1}
          icon="tokens"
          description="Maximum length of generated responses"
          formatter={(value) => `${value} tokens`}
        />
      </div>

      <div className="space-y-4">
        <label className="block">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">First Message</span>
          <textarea
            className="mt-1 block w-full"
            rows={4}
            placeholder="Enter initial message..."
            value={config.first_message}
            onChange={(e) => handleChange('first_message', e.target.value)}
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">System Prompt</span>
          <textarea
            className="mt-1 block w-full"
            rows={4}
            placeholder="Enter system prompt..."
            value={config.systemPrompt}
            onChange={(e) => handleChange('systemPrompt', e.target.value)}
          />
        </label>

        <div className="mt-4">
          <span className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            Upload Training File
          </span>
          <div className="border-2 border-dashed border-slate-200 dark:border-dark-700 rounded-xl p-8 text-center hover:border-primary-400 transition-colors">
            <input 
              type="file" 
              className="hidden" 
              id="file-upload" 
              onChange={(e) => handleChange('trainingFile', e.target.files?.[0] || null)}
              accept=".pdf,.doc,.docx,.txt"
            />
            <label htmlFor="file-upload" className="cursor-pointer">
              <div className="space-y-2">
                <div className="mx-auto w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-500/10 flex items-center justify-center">
                  <Upload className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div className="text-sm">
                  {config.trainingFile ? (
                    <span className="text-primary-600 dark:text-primary-400 font-medium">
                      {config.trainingFile.name}
                    </span>
                  ) : (
                    <>
                      <span className="text-primary-600 dark:text-primary-400 font-medium">
                        Click to upload
                      </span>
                      <span className="text-slate-600 dark:text-slate-400"> or drag and drop</span>
                    </>
                  )}
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">PDF, DOC, TXT up to 10MB</p>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LLMFeatures;