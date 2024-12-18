import React from 'react';
import PhoneNumberCard from './PhoneNumberCard';
import { usePhoneNumbers } from '../hooks/usePhoneNumbers';
import type { PhoneNumber } from '../types';

interface PhoneNumberListProps {
  phoneNumbers: PhoneNumber[];
}

const PhoneNumberList = ({ phoneNumbers }: PhoneNumberListProps) => {
  const { deletePhoneNumber, updatePhoneNumber, togglePhoneNumberStatus } = usePhoneNumbers();

  const handleEdit = (phoneNumber: PhoneNumber) => {
    // TODO: Implement edit functionality with a modal or form
    console.log('Edit phone number:', phoneNumber);
  };

  if (phoneNumbers.length === 0) {
    return (
      <div className="text-center py-8 text-slate-500 dark:text-slate-400">
        No phone numbers added yet. Click "New Phone Number" to get started.
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {phoneNumbers.map((phoneNumber) => (
        <PhoneNumberCard
          key={phoneNumber.id}
          phoneNumber={phoneNumber}
          onDelete={deletePhoneNumber}
          onEdit={handleEdit}
          onToggleStatus={togglePhoneNumberStatus}
        />
      ))}
    </div>
  );
};

export default PhoneNumberList;