import React from 'react';
import { Settings } from 'lucide-react';

interface BackgroundSoundSelectProps {
  value: string;
  onChange: (value: string) => void;
}

const backgroundOptions = [
  { value: 'office', label: 'Office' },
  { value: 'cafe', label: 'Café' },
  { value: 'nature', label: 'Nature' },
  { value: 'none', label: 'None' }
];

const BackgroundSoundSelect = ({ value, onChange }: BackgroundSoundSelectProps) => (
  <label className="block">
    <span className="text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2">
      <Settings className="w-4 h-4 text-primary-500 dark:text-primary-400" />
      Background Sound
    </span>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="mt-1 block w-full rounded-lg border-slate-200 dark:border-dark-700 dark:bg-dark-800 dark:text-slate-200"
    >
      {backgroundOptions.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </label>
);

export default BackgroundSoundSelect;