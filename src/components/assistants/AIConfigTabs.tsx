import React, { useState } from 'react';
import { Mic, Brain, Volume2 } from 'lucide-react';
import ConfigTab from './ConfigTab';
import STTConfig from './configs/STTConfig';
import LLMConfig from './configs/LLMConfig';
import TTSConfig from './configs/TTSConfig';
import type { ConfigValidation, ValidationProps } from './types';

interface AIConfigTabsProps extends ValidationProps {
  showValidationErrors?: boolean;
}

const tabs = [
  {
    id: 'stt',
    label: 'Speech-to-Text',
    icon: Mic,
    description: 'Configure speech recognition settings'
  },
  {
    id: 'llm',
    label: 'Language Model',
    icon: Brain,
    description: 'Fine-tune language processing capabilities'
  },
  {
    id: 'tts',
    label: 'Text-to-Speech',
    icon: Volume2,
    description: 'Customize voice and speech settings'
  }
];

const AIConfigTabs = ({ validation, onValidationChange, showValidationErrors }: AIConfigTabsProps) => {
  const [activeTab, setActiveTab] = useState('stt');

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  const handleConfigChange = (type: 'stt' | 'llm' | 'tts', updates: { provider?: string; model?: string }) => {
    onValidationChange(type, updates);
  };

  return (
    <div className="space-y-6">
      <div className="flex gap-4">
        {tabs.map((tab) => {
          const config = validation[tab.id as keyof ConfigValidation];
          const isComplete = config.provider && config.model;
          const hasError = showValidationErrors && !isComplete;

          return (
            <ConfigTab
              key={tab.id}
              isActive={activeTab === tab.id}
              onClick={() => handleTabChange(tab.id)}
              icon={tab.icon}
              label={tab.label}
              description={tab.description}
              isComplete={isComplete}
              hasError={hasError}
            />
          );
        })}
      </div>

      <div className="bg-white dark:bg-dark-800 rounded-xl shadow-lg p-6 border border-slate-200/50 dark:border-dark-700/50">
        {activeTab === 'stt' && (
          <STTConfig
            config={validation.stt}
            onChange={(updates) => handleConfigChange('stt', updates)}
            showValidationErrors={showValidationErrors}
          />
        )}
        {activeTab === 'llm' && (
          <LLMConfig
            config={validation.llm}
            onChange={(updates) => handleConfigChange('llm', updates)}
            showValidationErrors={showValidationErrors}
          />
        )}
        {activeTab === 'tts' && (
          <TTSConfig
            config={validation.tts}
            onChange={(updates) => handleConfigChange('tts', updates)}
            showValidationErrors={showValidationErrors}
          />
        )}
      </div>
    </div>
  );
};

export default AIConfigTabs;