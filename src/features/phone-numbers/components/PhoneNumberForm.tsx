import React from 'react';
import Card from '../../../components/common/Card';
import Button from '../../../components/common/Button';
import PhoneNumberInput from './PhoneNumberInput';
import AccountDetailsInput from './AccountDetailsInput';
import { usePhoneNumberForm } from '../hooks/usePhoneNumberForm';
import type { PhoneNumberFormData } from '../types';

interface PhoneNumberFormProps {
  onSubmit: (data: PhoneNumberFormData) => void;
  onClose: () => void;
}

const PhoneNumberForm = ({ onSubmit, onClose }: PhoneNumberFormProps) => {
  const {
    formData,
    validation,
    handleNumberChange,
    generateNewCredentials,
    handleSubmit
  } = usePhoneNumberForm(onSubmit);

  const isValid = validation.isValid && formData.accountSid && formData.authToken;
  const hasChanges = Boolean(formData.number || formData.accountSid || formData.authToken);

  return (
    <Card className="p-6">
      <div className="space-y-6">
        <PhoneNumberInput
          value={formData.number}
          validation={validation}
          onChange={handleNumberChange}
        />

        <AccountDetailsInput
          accountSid={formData.accountSid}
          authToken={formData.authToken}
          onGenerateNew={generateNewCredentials}
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