import React from 'react';
import { formatPhoneNumber, isValidPhoneNumber } from '../../../utils/phoneNumberUtils';

interface PhoneNumberInputProps {
  value: string;
  onChange: (value: string) => void;
  showError?: boolean;
}

const PhoneNumberInput = ({ value, onChange, showError = false }: PhoneNumberInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedNumber = formatPhoneNumber(e.target.value);
    onChange(formattedNumber);
  };

  const isValid = value === '' || isValidPhoneNumber(value);

  return (
    <label className="block">
      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Phone Number *</span>
      <input
        type="tel"
        className={`mt-1 block w-full ${!isValid ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : ''}`}
        placeholder="+1 234 567 8900"
        value={value || ''}
        onChange={handleChange}
      />
      {!isValid && (
        <p className="mt-1 text-xs text-red-500">
          Please enter a valid international phone number (e.g., +1 234 567 8900, +44 20 7123 4567)
        </p>
      )}
      <p className="mt-1 text-xs text-slate-500">
        Enter number in international format with country code (e.g., +1 for US, +44 for UK)
      </p>
    </label>
  );
};

export default PhoneNumberInput;