import { useState } from 'react';

interface CampaignFormData {
  name: string;
  assistantId: string;
  type: string;
  phoneNumberId: string;
  timeRange: {
    start: string;
    end: string;
  };
  recallsInterval: number;
  maxCalls: number;
  file: File | null;
}

const initialFormData: CampaignFormData = {
  name: '',
  assistantId: '',
  type: '',
  phoneNumberId: '',
  timeRange: {
    start: '09:00',
    end: '18:00'
  },
  recallsInterval: 0,
  maxCalls: 0,
  file: null
};

export const useCampaignForm = () => {
  const [formData, setFormData] = useState<CampaignFormData>(initialFormData);
  const [hasChanges, setHasChanges] = useState(false);
  const [showValidation, setShowValidation] = useState(false);

  const handleInputChange = (field: keyof CampaignFormData, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    setHasChanges(true);
  };

  const isValid = () => {
    return (
      formData.name.trim() !== '' &&
      formData.assistantId !== '' &&
      formData.type !== '' &&
      formData.phoneNumberId !== '' &&
      formData.timeRange.start !== '' &&
      formData.timeRange.end !== '' &&
      formData.recallsInterval > 0 &&
      formData.maxCalls > 0
    );
  };

  const handleSubmit = async () => {
    setShowValidation(true);
    if (!isValid()) return;

    // TODO: Implement campaign creation logic
    console.log('Submitting campaign:', formData);
  };

  return {
    formData,
    hasChanges,
    showValidation,
    handleInputChange,
    handleSubmit,
    isValid
  };
};