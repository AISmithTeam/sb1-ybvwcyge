import React from 'react';
import RequiredFieldIndicator from '../../../components/common/RequiredFieldIndicator';
import type { PhoneNumber } from '../../../types/phoneNumber';

interface PhoneNumberSelectProps {
  phoneNumbers: PhoneNumber[];
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

const PhoneNumberSelect = ({ phoneNumbers, value, onChange, error }: PhoneNumberSelectProps) => (
  <label className="block">
    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
      Phone Number
      <RequiredFieldIndicator />
    </span>
    <select 
      className={`mt-1 block w-full ${
        error ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : ''
      }`}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="">Select a phone number</option>
      {phoneNumbers
        .filter(phone => phone.status === 'active')
        .map(phone => (
          <option key={phone.id} value={phone.id}>
            {phone.number}
          </option>
        ))}
    </select>
    {error && (
      <p className="mt-1 text-xs text-red-500">{error}</p>
    )}
    {phoneNumbers.length === 0 && (
      <p className="mt-1 text-sm text-red-500">
        No phone numbers available. Please add a phone number first.
      </p>
    )}
  </label>
);

export default PhoneNumberSelect;