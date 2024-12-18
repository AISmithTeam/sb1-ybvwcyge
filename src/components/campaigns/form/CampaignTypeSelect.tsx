import React from 'react';
import RequiredFieldIndicator from '../../common/RequiredFieldIndicator';

interface CampaignTypeSelectProps {
  value: string;
  onChange: (value: string) => void;
  showError?: boolean;
}

const CampaignTypeSelect = ({ value, onChange, showError }: CampaignTypeSelectProps) => (
  <label className="block">
    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
      Campaign Type
      <RequiredFieldIndicator />
    </span>
    <select 
      className={`mt-1 block w-full ${
        showError && !value ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : ''
      }`}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="">Select campaign type</option>
      <option value="inbound">Inbound</option>
      <option value="outbound">Outbound</option>
    </select>
    {showError && !value && (
      <p className="mt-1 text-xs text-red-500">Please select a campaign type</p>
    )}
  </label>
);

export default CampaignTypeSelect;