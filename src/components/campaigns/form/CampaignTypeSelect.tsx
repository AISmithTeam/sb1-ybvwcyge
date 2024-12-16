import React from 'react';

interface CampaignTypeSelectProps {
  value: string;
  onChange: (value: string) => void;
}

const CampaignTypeSelect = ({ value, onChange }: CampaignTypeSelectProps) => (
  <label className="block">
    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Campaign Type *</span>
    <select 
      className="mt-1 block w-full"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="">Select campaign type</option>
      <option value="inbound">Inbound</option>
      <option value="outbound">Outbound</option>
    </select>
  </label>
);

export default CampaignTypeSelect;