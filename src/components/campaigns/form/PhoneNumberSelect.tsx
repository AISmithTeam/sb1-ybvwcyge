import React from 'react';
import type { PhoneNumber } from '../../../types/phoneNumber';

interface PhoneNumberSelectProps {
  phoneNumbers: PhoneNumber[];
  value: string;
  onChange: (value: string) => void;
}

const PhoneNumberSelect = ({ phoneNumbers, value, onChange }: PhoneNumberSelectProps) => (
  <label className="block">
    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Phone Numbers for Campaign *</span>
    <select 
      className="mt-1 block w-full"
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
    {phoneNumbers.length === 0 && (
      <p className="mt-1 text-sm text-red-500">
        No phone numbers available. Please add a phone number first.
      </p>
    )}
  </label>
);

export default PhoneNumberSelect;