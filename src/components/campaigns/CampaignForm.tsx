import React from 'react';
import Card from '../common/Card';
import Button from '../common/Button';
import CampaignNameInput from './form/CampaignNameInput';
import TimeRangeInput from './form/TimeRangeInput';
import AssistantSelect from './form/AssistantSelect';
import PhoneNumberSelect from './form/PhoneNumberSelect';
import CampaignTypeSelect from './form/CampaignTypeSelect';
import FileUpload from './form/FileUpload';
import { useCampaignForm } from '../../hooks/useCampaignForm';
import { usePhoneNumbers } from '../../hooks/usePhoneNumbers';
import type { Assistant } from '../../types/assistant';

interface CampaignFormProps {
  assistants: Assistant[];
  onClose: () => void;
}

const CampaignForm = ({ assistants, onClose }: CampaignFormProps) => {
  const { formData, hasChanges, showValidation, handleInputChange, handleSubmit } = useCampaignForm();
  const { phoneNumbers } = usePhoneNumbers();

  return (
    <Card className="p-6">
      <div className="space-y-6">
        <CampaignNameInput
          value={formData.name}
          onChange={(value) => handleInputChange('name', value)}
          showError={showValidation}
        />

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <AssistantSelect
              assistants={assistants}
              value={formData.assistantId}
              onChange={(value) => handleInputChange('assistantId', value)}
              showError={showValidation}
            />

            <CampaignTypeSelect
              value={formData.type}
              onChange={(value) => handleInputChange('type', value)}
              showError={showValidation}
            />

            <PhoneNumberSelect
              phoneNumbers={phoneNumbers}
              value={formData.phoneNumberId}
              onChange={(value) => handleInputChange('phoneNumberId', value)}
              showError={showValidation}
            />
          </div>

          <div className="space-y-4">
            <TimeRangeInput
              startTime={formData.timeRange.start}
              endTime={formData.timeRange.end}
              onStartTimeChange={(value) => handleInputChange('timeRange', { ...formData.timeRange, start: value })}
              onEndTimeChange={(value) => handleInputChange('timeRange', { ...formData.timeRange, end: value })}
              showError={showValidation}
            />

            <label className="block">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Recalls Interval *</span>
              <input
                type="number"
                className={`mt-1 block w-full ${
                  showValidation && formData.recallsInterval <= 0 ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : ''
                }`}
                min="0"
                placeholder="Enter interval in minutes"
                value={formData.recallsInterval}
                onChange={(e) => handleInputChange('recallsInterval', parseInt(e.target.value))}
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Maximum Calls to Client *</span>
              <input
                type="number"
                className={`mt-1 block w-full ${
                  showValidation && formData.maxCalls <= 0 ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : ''
                }`}
                min="0"
                placeholder="Enter maximum calls"
                value={formData.maxCalls}
                onChange={(e) => handleInputChange('maxCalls', parseInt(e.target.value))}
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
            disabled={!hasChanges}
            onClick={handleSubmit}
            className={`transition-opacity duration-200 ${hasChanges ? 'opacity-100' : 'opacity-50 cursor-not-allowed'}`}
          >
            Save & Continue
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default CampaignForm;