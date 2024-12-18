import { useState, useEffect } from 'react';
import type { PhoneNumber } from '../types';

const STORAGE_KEY = 'aismith_phone_numbers';

export const usePhoneNumbers = () => {
  const [phoneNumbers, setPhoneNumbers] = useState<PhoneNumber[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(phoneNumbers));
  }, [phoneNumbers]);

  const createPhoneNumber = (number: string, accountSid: string, authToken: string) => {
    const newPhoneNumber: PhoneNumber = {
      id: crypto.randomUUID(),
      number,
      accountSid,
      authToken,
      status: 'active'
    };

    setPhoneNumbers(prev => [...prev, newPhoneNumber]);
    return newPhoneNumber;
  };

  const updatePhoneNumber = (id: string, updates: Partial<PhoneNumber>) => {
    setPhoneNumbers(prev =>
      prev.map(phone =>
        phone.id === id ? { ...phone, ...updates } : phone
      )
    );
  };

  const deletePhoneNumber = (id: string) => {
    if (window.confirm('Are you sure you want to delete this phone number?')) {
      setPhoneNumbers(prev => prev.filter(phone => phone.id !== id));
    }
  };

  const togglePhoneNumberStatus = (id: string) => {
    setPhoneNumbers(prev =>
      prev.map(phone =>
        phone.id === id
          ? { ...phone, status: phone.status === 'active' ? 'inactive' : 'active' }
          : phone
      )
    );
  };

  return {
    phoneNumbers,
    createPhoneNumber,
    updatePhoneNumber,
    deletePhoneNumber,
    togglePhoneNumberStatus
  };
};