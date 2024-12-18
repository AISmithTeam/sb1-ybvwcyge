import { useState } from 'react';
import type { Campaign, CampaignFormData, CampaignValidation } from '../types';

const initialFormData: CampaignFormData = {
  name: '',
  assistantId: '',
  type: '',
  phoneNumberId: '',
  timeRange: {
    start: '09:00',
    end: '17:00'
  },
  recallsInterval: 30,
  maxCalls: 1,
  file: null
};

export const useCampaignForm = (onSave: (campaign: Campaign) => void) => {
  const [formData, setFormData] = useState<CampaignFormData>(initialFormData);
  const [showValidation, setShowValidation] = useState(false);

  const handleInputChange = (field: keyof CampaignFormData, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNumberInputChange = (field: 'recallsInterval' | 'maxCalls', value: string) => {
    const numValue = value === '' ? 0 : parseInt(value, 10);
    if (!isNaN(numValue) && numValue >= 0) {
      handleInputChange(field, numValue);
    }
  };

  const isRequiredFieldsValid = () => {
    return Boolean(
      formData.name.trim() &&
      formData.assistantId &&
      formData.type &&
      formData.phoneNumberId
    );
  };

  const handleSubmit = () => {
    setShowValidation(true);
    if (!isRequiredFieldsValid()) return;

    const campaign: Campaign = {
      id: Date.now(),
      name: formData.name.trim(),
      assistantId: formData.assistantId,
      maxCalls: formData.maxCalls || 1,
      days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      time: formData.timeRange,
      type: formData.type,
      numberId: formData.phoneNumberId,
      status: 'active',
      file: formData.file?.name
    };

    onSave(campaign);
  };

  return {
    formData,
    showValidation,
    handleInputChange,
    handleNumberInputChange,
    handleSubmit,
    isRequiredFieldsValid
  };
};