import React from 'react';
import { MessageSquare } from 'lucide-react';

interface MinCharactersInputProps {
  value: number;
  onChange: (value: number) => void;
}

const MinCharactersInput = ({ value, onChange }: MinCharactersInputProps) => (
  <label className="block">
    <span className="text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2">
      <MessageSquare className="w-4 h-4 text-primary-500 dark:text-primary-400" />
      Minimum Characters
    </span>
    <input
      type="number"
      value={value}
      onChange={(e) => onChange(parseInt(e.target.value))}
      min="1"
      max="100"
      className="mt-1 block w-full rounded-lg border-slate-200 dark:border-dark-700 dark:bg-dark-800 dark:text-slate-200"
    />
  </label>
);

export default MinCharactersInput;