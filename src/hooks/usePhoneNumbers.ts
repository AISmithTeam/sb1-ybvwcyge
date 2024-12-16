import { useState, useEffect } from 'react';
import type { PhoneNumber } from '../types/phoneNumber';

const STORAGE_KEY = 'aismith_phone_numbers';

export const usePhoneNumbers = () => {
  // Initialize state from localStorage
  const [phoneNumbers, setPhoneNumbers] = useState<PhoneNumber[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  // Persist to localStorage whenever phoneNumbers changes
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

  return {
    phoneNumbers,
    createPhoneNumber,
    updatePhoneNumber,
    deletePhoneNumber
  };
};