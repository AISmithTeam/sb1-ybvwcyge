import { useState } from 'react';
import { PhoneNumberFormData, PhoneNumberValidation } from '../types';
import { formatPhoneNumber } from '../utils/formatting';
import { validatePhoneNumber, getPhoneNumberError } from '../utils/validation';
import { generateCredentials } from '../utils/generation';

export const usePhoneNumberForm = (onSubmit: (data: PhoneNumberFormData) => void) => {
  const [formData, setFormData] = useState<PhoneNumberFormData>({
    number: '',
    accountSid: '',
    authToken: ''
  });

  const [validation, setValidation] = useState<PhoneNumberValidation>({
    isValid: false
  });

  const handleNumberChange = (value: string) => {
    const formatted = formatPhoneNumber(value);
    const error = getPhoneNumberError(formatted);
    
    setFormData(prev => ({ ...prev, number: formatted }));
    setValidation({
      isValid: !error,
      error
    });
  };

  const generateNewCredentials = () => {
    const { accountSid, authToken } = generateCredentials();
    setFormData(prev => ({ ...prev, accountSid, authToken }));
  };

  const handleSubmit = () => {
    if (validatePhoneNumber(formData.number) && formData.accountSid && formData.authToken) {
      onSubmit(formData);
    }
  };

  return {
    formData,
    validation,
    handleNumberChange,
    generateNewCredentials,
    handleSubmit
  };
};