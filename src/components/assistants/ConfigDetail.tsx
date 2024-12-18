import React from 'react';

interface ConfigDetailProps {
  label: string;
  provider: string;
  model: string;
}

const ConfigDetail = ({ label, provider, model }: ConfigDetailProps) => (
  <div>
    <div className="text-sm font-medium text-slate-700 dark:text-slate-300">{label}</div>
    <div className="text-sm text-slate-500 dark:text-slate-400">
      {provider} - {model}
    </div>
  </div>
);

export default ConfigDetail;