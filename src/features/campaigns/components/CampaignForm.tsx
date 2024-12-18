import React from 'react';
import Card from '../../../components/common/Card';
import Button from '../../../components/common/Button';
import CampaignNameInput from './CampaignNameInput';
import AssistantSelect from './AssistantSelect';
import CampaignTypeSelect from './CampaignTypeSelect';
import PhoneNumberSelect from './PhoneNumberSelect';
import TimeRangeInput from './TimeRangeInput';
import FileUpload from './FileUpload';
import { useCampaignForm } from '../hooks/useCampaignForm';
import { usePhoneNumbers } from '../../../hooks/usePhoneNumbers';
import type { Assistant } from '../../../types/assistant';
import type { Campaign } from '../types';

interface CampaignFormProps {
  assistants: Assistant[];
  onClose: () => void;
  onSave: (campaign: Campaign) => void;
}

const CampaignForm = ({ assistants, onClose, onSave }: CampaignFormProps) => {
  const { 
    formData, 
    showValidation, 
    handleInputChange, 
    handleNumberInputChange, 
    handleSubmit, 
    isRequiredFieldsValid 
  } = useCampaignForm(onSave);
  const { phoneNumbers } = usePhoneNumbers();

  return (
    <Card className="p-6">
      <div className="space-y-6">
        <CampaignNameInput
          value={formData.name}
          onChange={(value) => handleInputChange('name', value)}
          error={showValidation && !formData.name.trim() ? 'Campaign name is required' : undefined}
        />

        <div className="grid gap-6 md:grid-cols-2">
          <AssistantSelect
            assistants={assistants}
            value={formData.assistantId}
            onChange={(value) => handleInputChange('assistantId', value)}
            error={showValidation && !formData.assistantId ? 'Assistant is required' : undefined}
          />

          <CampaignTypeSelect
            value={formData.type}
            onChange={(value) => handleInputChange('type', value)}
            error={showValidation && !formData.type ? 'Campaign type is required' : undefined}
          />

          <PhoneNumberSelect
            phoneNumbers={phoneNumbers}
            value={formData.phoneNumberId}
            onChange={(value) => handleInputChange('phoneNumberId', value)}
            error={showValidation && !formData.phoneNumberId ? 'Phone number is required' : undefined}
          />

          <TimeRangeInput
            startTime={formData.timeRange.start}
            endTime={formData.timeRange.end}
            onStartTimeChange={(value) => handleInputChange('timeRange', { ...formData.timeRange, start: value })}
            onEndTimeChange={(value) => handleInputChange('timeRange', { ...formData.timeRange, end: value })}
          />

          <div>
            <label className="block">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Recalls Interval (minutes)
              </span>
              <input
                type="number"
                className="mt-1 block w-full"
                min="0"
                placeholder="Enter interval in minutes"
                value={formData.recallsInterval || ''}
                onChange={(e) => handleNumberInputChange('recallsInterval', e.target.value)}
              />
              <p className="mt-1 text-xs text-slate-500">Optional: Time between recall attempts</p>
            </label>
          </div>

          <div>
            <label className="block">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Maximum Calls to Client
              </span>
              <input
                type="number"
                className="mt-1 block w-full"
                min="1"
                placeholder="Enter maximum calls"
                value={formData.maxCalls || ''}
                onChange={(e) => handleNumberInputChange('maxCalls', e.target.value)}
              />
              <p className="mt-1 text-xs text-slate-500">Optional: Maximum number of call attempts</p>
            </label>
          </div>
        </div>

        <FileUpload
          onFileSelect={(file) => handleInputChange('file', file)}
        />

        <div className="flex justify-end gap-3">
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={!isRequiredFieldsValid()}
          >
            Save & Continue
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default CampaignForm;