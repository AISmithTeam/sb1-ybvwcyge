import React, { useState, useEffect } from 'react';
import AIConfigTabs from './AIConfigTabs';
import type { ConfigValidation } from './types';

interface AIConfigSectionProps {
  onValidationChange?: (validation: ConfigValidation) => void;
  initialValidation?: ConfigValidation;
  showValidationErrors?: boolean;
}

const AIConfigSection = ({ 
  onValidationChange, 
  initialValidation,
  showValidationErrors = false 
}: AIConfigSectionProps) => {
  const [validation, setValidation] = useState<ConfigValidation>(
    initialValidation || {
      stt: { provider: '', model: '' },
      llm: { provider: '', model: '' },
      tts: { provider: '', model: '' }
    }
  );

  useEffect(() => {
    if (initialValidation) {
      setValidation(initialValidation);
    }
  }, [initialValidation]);

  const handleValidationChange = (type: 'stt' | 'llm' | 'tts', updates: { provider?: string; model?: string }) => {
    const newValidation = {
      ...validation,
      [type]: { ...validation[type], ...updates }
    };
    setValidation(newValidation);
    
    if (onValidationChange) {
      onValidationChange(newValidation);
    }
  };

  return (
    <div className="space-y-4 mt-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-slate-800 dark:text-white">Configuration</h3>
      </div>
      <AIConfigTabs 
        onValidationChange={handleValidationChange} 
        validation={validation}
        showValidationErrors={showValidationErrors}
      />
    </div>
  );
};

export default AIConfigSection;