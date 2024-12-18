import React from 'react';
import RequiredFieldIndicator from '../../common/RequiredFieldIndicator';

interface CampaignNameInputProps {
  value: string;
  onChange: (value: string) => void;
  showError?: boolean;
}

const CampaignNameInput = ({ value, onChange, showError }: CampaignNameInputProps) => {
  const isValid = value.trim().length > 0;

  return (
    <label className="block">
      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
        Campaign Name
        <RequiredFieldIndicator />
      </span>
      <input
        type="text"
        className={`mt-1 block w-full ${
          showError && !isValid ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : ''
        }`}
        placeholder="Enter campaign name..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {showError && !isValid && (
        <p className="mt-1 text-xs text-red-500">Campaign name is required</p>
      )}
    </label>
  );
};

export default CampaignNameInput;