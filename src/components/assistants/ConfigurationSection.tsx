import React from 'react';
import RequiredFieldsNote from './RequiredFieldsNote';
import type { ConfigValidation } from './types';

interface ConfigurationSectionProps {
  children: React.ReactNode;
  title: string;
}

const ConfigurationSection = ({ children, title }: ConfigurationSectionProps) => (
  <div className="space-y-4">
    <div className="flex items-center justify-between">
      <h3 className="text-lg font-semibold text-slate-800 dark:text-white">{title}</h3>
      <RequiredFieldsNote />
    </div>
    {children}
  </div>
);

export default ConfigurationSection;