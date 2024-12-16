import React from 'react';
import type { Assistant } from '../../../types/assistant';

interface AssistantSelectProps {
  assistants: Assistant[];
  value: string;
  onChange: (value: string) => void;
}

const AssistantSelect = ({ assistants, value, onChange }: AssistantSelectProps) => (
  <label className="block">
    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Assistant *</span>
    <select 
      className="mt-1 block w-full"
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
  </label>
);

export default AssistantSelect;