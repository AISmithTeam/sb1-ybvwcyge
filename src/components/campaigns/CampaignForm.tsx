import React from 'react';
import Card from '../common/Card';
import Button from '../common/Button';
import CampaignNameInput from './form/CampaignNameInput';
import AssistantSelect from './form/AssistantSelect';
import CampaignTypeSelect from './form/CampaignTypeSelect';
import PhoneNumberSelect from './form/PhoneNumberSelect';
import TimeRangeInput from './form/TimeRangeInput';
import FileUpload from './form/FileUpload';
import { useCampaignForm } from '../../hooks/useCampaignForm';
import { usePhoneNumbers } from '../../hooks/usePhoneNumbers';
import type { Assistant } from '../../types/assistant';
import type { Campaign } from './types';

interface CampaignFormProps {
  assistants: Assistant[];
  campaign: Campaign | null;
  onClose: () => void;
  onSave: (campaign: Campaign) => void;
}

const CampaignForm = ({ assistants, campaign, onClose, onSave }: CampaignFormProps) => {
  const { 
    formData,
    showValidation,
    handleInputChange,
    handleNumberInputChange,
    handleSubmit,
    isRequiredFieldsValid
  } = useCampaignForm(campaign, onSave);
  const { phoneNumbers } = usePhoneNumbers();

  return (
    <Card className="p-6">
      <div className="space-y-6">
        <CampaignNameInput
          value={formData.name}
          onChange={(value) => handleInputChange('name', value)}
          showError={showValidation && !formData.name.trim()}
        />

        <div className="grid gap-6 md:grid-cols-2">
          <AssistantSelect
            assistants={assistants}
            value={formData.assistant ? formData.assistant.id + ' ' + formData.assistant.type : ''}
            onChange={(value) => handleInputChange('assistant', value)}
            showError={showValidation && !formData.assistant?.id}
          />

          <CampaignTypeSelect
            value={formData.type}
            onChange={(value) => handleInputChange('type', value)}
            showError={showValidation && !formData.type}
          />

          <PhoneNumberSelect
            phoneNumbers={phoneNumbers}
            value={formData.phoneNumberId}
            onChange={(value) => handleInputChange('phoneNumberId', value)}
            showError={showValidation && !formData.phoneNumberId}
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