import React from 'react';
import RequiredFieldIndicator from '../../../components/common/RequiredFieldIndicator';
import type { Assistant } from '../../../types/assistant';

interface AssistantSelectProps {
  assistants: Assistant[];
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

const AssistantSelect = ({ assistants, value, onChange, error }: AssistantSelectProps) => (
  <label className="block">
    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
      Assistant
      <RequiredFieldIndicator />
    </span>
    <select 
      className={`mt-1 block w-full ${
        error ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : ''
      }`}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="">Select an assistant</option>
      {assistants.map((assistant) => (
        <option key={assistant.id} value={assistant.id}>
          {assistant.name}
        </option>
      ))}
    </select>
    {error && (
      <p className="mt-1 text-xs text-red-500">{error}</p>
    )}
  </label>
);

export default AssistantSelect;