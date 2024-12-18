import React, { useState, useEffect } from 'react';
import Card from '../common/Card';
import Button from '../common/Button';
import PhoneNumberInput from './form/PhoneNumberInput';
import AccountDetailsInput from './form/AccountDetailsInput';
import type { PhoneNumber, PhoneNumberFormData } from '../../types/phoneNumber';

interface PhoneNumberFormProps {
  initialData?: PhoneNumber | null;
  onSubmit: (data: PhoneNumberFormData) => void;
  onClose: () => void;
}

const PhoneNumberForm = ({ initialData, onSubmit, onClose }: PhoneNumberFormProps) => {
  const [formData, setFormData] = useState<PhoneNumberFormData>({
    number: '',
    accountSid: '',
    authToken: ''
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        number: initialData.number,
        accountSid: initialData.accountSid,
        authToken: initialData.authToken
      });
    }
  }, [initialData]);

  const handleChange = (field: keyof PhoneNumberFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = () => {
    if (!formData.number || !formData.accountSid || !formData.authToken) return;
    onSubmit(formData);
  };

  const hasChanges = Boolean(formData.number || formData.accountSid || formData.authToken);
  const isValid = Boolean(formData.number && formData.accountSid && formData.authToken);

  return (
    <Card className="p-6">
      <div className="space-y-6">
        <h2 className="text-lg font-semibold text-slate-800 dark:text-white">
          {initialData ? 'Edit Phone Number' : 'Add New Phone Number'}
        </h2>

        <PhoneNumberInput
          value={formData.number}
          onChange={(value) => handleChange('number', value)}
        />

        <AccountDetailsInput
          accountSid={formData.accountSid}
          authToken={formData.authToken}
          onAccountSidChange={(value) => handleChange('accountSid', value)}
          onAuthTokenChange={(value) => handleChange('authToken', value)}
        />

        <div className="flex justify-end gap-3">
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button
            disabled={!hasChanges || !isValid}
            onClick={handleSubmit}
            className={`transition-opacity duration-200 ${
              hasChanges && isValid ? 'opacity-100' : 'opacity-50 cursor-not-allowed'
            }`}
          >
            {initialData ? 'Update Phone Number' : 'Add Phone Number'}
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default PhoneNumberForm;