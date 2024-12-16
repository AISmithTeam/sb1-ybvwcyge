import React, { useState } from 'react';
import Card from '../common/Card';
import Button from '../common/Button';
import PhoneNumberInput from './form/PhoneNumberInput';
import AccountDetailsInput from './form/AccountDetailsInput';
import type { PhoneNumberFormData } from '../../types/phoneNumber';

interface PhoneNumberFormProps {
  onSubmit: (number: string, accountSid: string, authToken: string) => void;
  onClose: () => void;
}

const PhoneNumberForm = ({ onSubmit, onClose }: PhoneNumberFormProps) => {
  const [formData, setFormData] = useState<PhoneNumberFormData>({
    number: '',
    accountSid: '',
    authToken: ''
  });

  const handleChange = (field: keyof PhoneNumberFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = () => {
    if (!formData.number || !formData.accountSid || !formData.authToken) return;
    onSubmit(formData.number, formData.accountSid, formData.authToken);
    onClose();
  };

  const hasChanges = Boolean(formData.number || formData.accountSid || formData.authToken);
  const isValid = Boolean(formData.number && formData.accountSid && formData.authToken);

  return (
    <Card className="p-6">
      <div className="space-y-6">
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
            Add Phone Number
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default PhoneNumberForm;