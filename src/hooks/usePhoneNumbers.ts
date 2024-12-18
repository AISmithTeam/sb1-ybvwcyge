import { useState, useEffect } from 'react';
import type { PhoneNumber } from '../types/phoneNumber';

import axios from 'axios';

const STORAGE_KEY = 'aismith_phone_numbers';

export const usePhoneNumbers = () => {
  const [phoneNumbers, setPhoneNumbers] = useState<PhoneNumber[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  const baseUrl = 'https://api.voice.aismith.co/api'
  const accessToken = localStorage.getItem("access_token");

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

    axios
      .post(`${baseUrl}/phone-numbers?jwt_token=${accessToken}`, {
        phone_number: number,
        account_sid: accountSid,
        auth_token: authToken
      })
      .then((response) => {
        newPhoneNumber.id = response.data.id;
        console.log(newPhoneNumber);
        setPhoneNumbers(prev => [...prev, newPhoneNumber]);
        return newPhoneNumber;
      });
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