import React from 'react';
import RequiredFieldIndicator from './RequiredFieldIndicator';

interface AssistantNameFieldProps {
  value: string;
  onChange: (value: string) => void;
  showError?: boolean;
}

const AssistantNameField = ({ value, onChange, showError }: AssistantNameFieldProps) => (
  <div className="space-y-2">
    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
      Assistant Name
      <RequiredFieldIndicator />
    </label>
    <input
      type="text"
      className={`block w-full ${
        showError && !value.trim() 
          ? 'border-red-300 dark:border-red-500 focus:border-red-500 focus:ring-red-500' 
          : ''
      }`}
      placeholder="Enter assistant name..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

export default AssistantNameField;