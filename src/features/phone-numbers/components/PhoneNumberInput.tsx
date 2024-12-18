import React from 'react';
import { PhoneNumberValidation } from '../types';

interface PhoneNumberInputProps {
  value: string;
  validation: PhoneNumberValidation;
  onChange: (value: string) => void;
}

const PhoneNumberInput = ({ value, validation, onChange }: PhoneNumberInputProps) => {
  return (
    <label className="block">
      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
        Phone Number *
      </span>
      <input
        type="tel"
        className={`mt-1 block w-full ${!validation.isValid ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : ''}`}
        placeholder="+1 234 567 8900"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {validation.error && (
        <p className="mt-1 text-xs text-red-500">{validation.error}</p>
      )}
      <p className="mt-1 text-xs text-slate-500">
        Enter number in international format with country code (e.g., +1 for US, +44 for UK)
      </p>
    </label>
  );
};

export default PhoneNumberInput;