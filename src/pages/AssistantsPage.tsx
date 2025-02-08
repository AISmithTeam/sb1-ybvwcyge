import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import AIConfigSection from '../components/assistants/AIConfigSection';
import AssistantNameField from '../components/assistants/AssistantNameField';
import ConfigurationSection from '../components/assistants/ConfigurationSection';
import AssistantList from '../components/assistants/AssistantList';
import { useAssistants } from '../hooks/useAssistants';
import type { ConfigValidation } from '../components/assistants/types';
import type { Assistant } from '../types/assistant';

const AssistantsPage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [assistantName, setAssistantName] = useState('');
  const [assistantPrompt, setAssistantPrompt] = useState('');
  const [validation, setValidation] = useState<ConfigValidation>({
    stt: { provider: '', model: '' },
    llm: { provider: '', model: '', prompt: '', first_message: '' },
    tts: { provider: '', model: '', voice: '' }
  });
  const [showValidationErrors, setShowValidationErrors] = useState(false);
  const [editingAssistant, setEditingAssistant] = useState<Assistant | null>(null);
  
  const { assistants, createAssistant, updateAssistant, deleteAssistant } = useAssistants();

  const handleNewAssistant = () => {
    setIsEditing(true);
    setEditingAssistant(null);
    setShowValidationErrors(false);
    setAssistantName('');
    setValidation({
      stt: { provider: '', model: '' },
      llm: { provider: '', model: '', prompt: '', first_message: '' },
      tts: { provider: '', model: '', voice: '' }
    });
  };

  const handleEditAssistant = (assistant: Assistant) => {
    setIsEditing(true);
    setEditingAssistant(assistant);
    setAssistantName(assistant.name);
    setValidation(assistant.config);
    setShowValidationErrors(false);
  };

  const handleValidationChange = (newValidation: ConfigValidation) => {
    setValidation(newValidation);
  };

  const isFormValid = () => {
    return assistantName.trim() !== '' &&
           Object.values(validation).every(config => config.provider && config.model);
  };

  const handleSave = async () => {
    if (!isFormValid()) {
      setShowValidationErrors(true);
      return;
    }

    if (editingAssistant) {
      updateAssistant(editingAssistant.id, {
        name: assistantName.trim(),
        config: validation,
      });
    } else {
      createAssistant(assistantName.trim(), validation);
    }

    // Reset form
    setIsEditing(false);
    setEditingAssistant(null);
    setShowValidationErrors(false);
    setAssistantName('');
    setValidation({
      stt: { provider: '', model: '' },
      llm: { provider: '', model: '', prompt: '', first_message: '' },
      tts: { provider: '', model: '', voice: '' }
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-800 dark:text-white">AI Assistants</h1>
        <Button icon={Plus} onClick={handleNewAssistant}>New Assistant</Button>
      </div>

      {isEditing && (
        <Card className="p-6 space-y-6">
          <ConfigurationSection title={editingAssistant ? 'Edit Assistant' : 'New Assistant'}>
            <AssistantNameField
              nameValue={assistantName}
              promptValue={assistantPrompt}
              onNameChange={setAssistantName}
              onPromptChange={setAssistantPrompt}
              showError={showValidationErrors && !assistantName.trim()}
            />
            <AIConfigSection 
              onValidationChange={handleValidationChange}
              initialValidation={editingAssistant?.config}
              showValidationErrors={showValidationErrors}
            />
          </ConfigurationSection>

          <div className="flex justify-end gap-3">
            <Button
              variant="secondary"
              onClick={() => {
                setIsEditing(false);
                setEditingAssistant(null);
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={handleSave}
              disabled={!isFormValid()}
            >
              {editingAssistant ? 'Update Assistant' : 'Create Assistant'}
            </Button>
          </div>
        </Card>
      )}

      <AssistantList
        assistants={assistants}
        onEdit={handleEditAssistant}
        onDelete={deleteAssistant}
      />
    </div>
  );
};

export default AssistantsPage;