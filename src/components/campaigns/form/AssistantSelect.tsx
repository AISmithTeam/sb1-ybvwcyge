import React from 'react';
import RequiredFieldIndicator from '../../common/RequiredFieldIndicator';
import type { Assistant } from '../../../types/assistant';

interface AssistantSelectProps {
  assistants: Assistant[];
  value: string;
  onChange: (value: Assistant | undefined) => void;
  showError?: boolean;
}

const AssistantSelect = ({ assistants, value, onChange, showError }: AssistantSelectProps) => (
  <label className="block">
    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
      Assistant
      <RequiredFieldIndicator />
    </span>
    <select 
      className={`mt-1 block w-full ${
        showError && !value ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : ''
      }`}
      value={value}
      onChange={(e) => onChange(assistants.find(p => {
        const id_and_type = e.target.value.split(" ", 2);
        return p.id.toString() === id_and_type[0] && p.type == id_and_type[1];
      }))}
    >
      <option value="">Select an assistant</option>
      {assistants.map((assistant) => (
        <option key={assistant.id} value={assistant.id + ' ' + assistant.type}>
          {assistant.name}
        </option>
      ))}
    </select>
    {showError && !value && (
      <p className="mt-1 text-xs text-red-500">Please select an assistant</p>
    )}
  </label>
);

export default AssistantSelect;