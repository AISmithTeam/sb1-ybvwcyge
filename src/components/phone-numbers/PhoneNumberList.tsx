import React from 'react';
import PhoneNumberCard from './PhoneNumberCard';
import { usePhoneNumbers } from '../../hooks/usePhoneNumbers';
import type { PhoneNumber } from '../../types/phoneNumber';

const PhoneNumberList = () => {
  const { phoneNumbers, deletePhoneNumber } = usePhoneNumbers();

  const handleEdit = (phoneNumber: PhoneNumber) => {
    // TODO: Implement edit functionality
    console.log('Edit phone number:', phoneNumber);
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-6">
        Existing Phone Numbers
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {phoneNumbers.map((phoneNumber) => (
          <PhoneNumberCard
            key={phoneNumber.id}
            phoneNumber={phoneNumber}
            onDelete={deletePhoneNumber}
            onEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
};

export default PhoneNumberList;