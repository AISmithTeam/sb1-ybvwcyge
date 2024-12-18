import React from 'react';
import RequiredFieldIndicator from './RequiredFieldIndicator';

interface AssistantNameFieldProps {
  nameValue: string;
  promptValue: string;
  onNameChange: (value: string) => void;
  onPromptChange: (value: string) => void;
  showError?: boolean;
}

const AssistantNameField = ({ nameValue, promptValue, onNameChange, onPromptChange, showError }: AssistantNameFieldProps) => (
  <div>
    <div className="space-y-2">
      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
        Assistant Name
        <RequiredFieldIndicator />
      </label>
      <input
        type="text"
        className={`block w-full ${
          showError && !nameValue.trim() 
            ? 'border-red-300 dark:border-red-500 focus:border-red-500 focus:ring-red-500' 
            : ''
        }`}
        placeholder="Enter assistant name..."
        value={nameValue}
        onChange={(e) => onNameChange(e.target.value)}
      />
    </div>
    <div className="space-y-3">
      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
        Assistant Prompt
        <RequiredFieldIndicator />
      </label>
      <textarea
        className={`block w-full ${
          showError && !promptValue.trim() 
            ? 'border-red-300 dark:border-red-500 focus:border-red-500 focus:ring-red-500' 
            : ''
        }`}
        placeholder="Enter assistant prompt..."
        value={promptValue}
        onChange={(e) => onPromptChange(e.target.value)}
      />
    </div>
  </div>
);

export default AssistantNameField;