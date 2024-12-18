import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import Button from '../components/common/Button';
import PhoneNumberList from '../components/phone-numbers/PhoneNumberList';
import PhoneNumberForm from '../components/phone-numbers/PhoneNumberForm';
import { usePhoneNumbers } from '../hooks/usePhoneNumbers';
import type { PhoneNumber, PhoneNumberFormData } from '../types/phoneNumber';

const PhoneNumbersPage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [editingPhoneNumber, setEditingPhoneNumber] = useState<PhoneNumber | null>(null);
  const { phoneNumbers, createPhoneNumber, updatePhoneNumber } = usePhoneNumbers();

  const handleNewPhoneNumber = () => {
    setEditingPhoneNumber(null);
    setIsEditing(true);
  };

  const handleEditPhoneNumber = (phoneNumber: PhoneNumber) => {
    setEditingPhoneNumber(phoneNumber);
    setIsEditing(true);
  };

  const handleSubmit = (data: PhoneNumberFormData) => {
    if (editingPhoneNumber) {
      updatePhoneNumber(editingPhoneNumber.id, {
        ...editingPhoneNumber,
        ...data
      });
    } else {
      createPhoneNumber(data.number, data.accountSid, data.authToken);
    }
    setIsEditing(false);
    setEditingPhoneNumber(null);
  };

  const handleClose = () => {
    setIsEditing(false);
    setEditingPhoneNumber(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Phone Numbers</h1>
        <Button icon={Plus} onClick={handleNewPhoneNumber}>New Phone Number</Button>
      </div>

      {isEditing && (
        <PhoneNumberForm
          initialData={editingPhoneNumber}
          onSubmit={handleSubmit}
          onClose={handleClose}
        />
      )}

      <PhoneNumberList 
        phoneNumbers={phoneNumbers}
        onEdit={handleEditPhoneNumber}
      />
    </div>
  );
};

export default PhoneNumbersPage;