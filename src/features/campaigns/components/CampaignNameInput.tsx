import React from 'react';
import RequiredFieldIndicator from '../../../components/common/RequiredFieldIndicator';

interface CampaignNameInputProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

const CampaignNameInput = ({ value, onChange, error }: CampaignNameInputProps) => (
  <label className="block">
    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
      Campaign Name
      <RequiredFieldIndicator />
    </span>
    <input
      type="text"
      className={`mt-1 block w-full ${
        error ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : ''
      }`}
      placeholder="Enter campaign name..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
    {error && (
      <p className="mt-1 text-xs text-red-500">{error}</p>
    )}
  </label>
);

export default CampaignNameInput;