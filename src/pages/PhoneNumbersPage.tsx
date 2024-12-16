import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import Button from '../components/common/Button';
import PhoneNumberList from '../components/phone-numbers/PhoneNumberList';
import PhoneNumberForm from '../components/phone-numbers/PhoneNumberForm';
import { usePhoneNumbers } from '../hooks/usePhoneNumbers';

const PhoneNumbersPage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { createPhoneNumber } = usePhoneNumbers();

  const handleNewPhoneNumber = () => {
    setIsEditing(true);
  };

  const handleSubmit = (number: string, accountSid: string, authToken: string) => {
    createPhoneNumber(number, accountSid, authToken);
    setIsEditing(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Phone Numbers</h1>
        <Button icon={Plus} onClick={handleNewPhoneNumber}>New Phone Number</Button>
      </div>

      {isEditing && (
        <PhoneNumberForm
          onSubmit={handleSubmit}
          onClose={() => setIsEditing(false)}
        />
      )}

      <PhoneNumberList />
    </div>
  );
};

export default PhoneNumbersPage;