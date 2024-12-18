import React from 'react';
import PhoneNumberCard from './PhoneNumberCard';
import { usePhoneNumbers } from '../../hooks/usePhoneNumbers';
import type { PhoneNumber } from '../../types/phoneNumber';

interface PhoneNumberListProps {
  phoneNumbers: PhoneNumber[];
  onEdit: (phoneNumber: PhoneNumber) => void;
}

const PhoneNumberList = ({ phoneNumbers, onEdit }: PhoneNumberListProps) => {
  const { deletePhoneNumber, togglePhoneNumberStatus } = usePhoneNumbers();

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
          onEdit={onEdit}
          onToggleStatus={togglePhoneNumberStatus}
        />
      ))}
    </div>
  );
};

export default PhoneNumberList;