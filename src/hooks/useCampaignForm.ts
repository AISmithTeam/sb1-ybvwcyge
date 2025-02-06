import { useState } from 'react';
import type { Campaign } from '../components/campaigns/types';
import { Assistant } from '../types/assistant';

interface TimeRange {
  start: string;
  end: string;
}

interface CampaignFormData {
  name: string;
  assistant: Assistant | undefined;
  type: string;
  phoneNumberId: string;
  timeRange: TimeRange;
  recallsInterval: number;
  maxCalls: number;
  file: File | null;
}

const initialFormData: CampaignFormData = {
  name: '',
  assistant: undefined,
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

export const useCampaignForm = (campaign: Campaign | null, onSave: (campaign: Campaign) => void) => {
  const [formData, setFormData] = useState<CampaignFormData>(initialFormData);
  const [isEditing, setIsEditing] = useState(false);
  const [showValidation, setShowValidation] = useState(false);

  if (campaign && !isEditing) {
    setFormData( {
      name: campaign.name,
      assistant: campaign.assistant,
      type: campaign.type,
      phoneNumberId: campaign.number,
      timeRange: campaign.time,
      recallsInterval: 0,
      maxCalls: 1,
      file: null
    } );
    setIsEditing(true);
  }

  const handleInputChange = (field: keyof CampaignFormData, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNumberInputChange = (field: 'recallsInterval' | 'maxCalls', value: string) => {
    const numValue = parseInt(value, 10);
    if (!isNaN(numValue) && numValue >= 0) {
      handleInputChange(field, numValue);
    }
  };

  const isRequiredFieldsValid = () => {
    return Boolean(
      formData.name.trim() &&
      formData.assistant &&
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
      assistant: formData.assistant,
      maxCalls: formData.maxCalls,
      days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      time: formData.timeRange,
      type: formData.type,
      number: formData.phoneNumberId,
      status: 'active',
      file: formData.file,
      fileName: formData.file?.name || "no file provided"
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