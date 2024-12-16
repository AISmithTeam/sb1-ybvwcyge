import React from 'react';
import { Bot, Clock, Trash2 } from 'lucide-react';
import Card from '../common/Card';
import ActionButton from '../common/ActionButton';
import ConfigDetail from './ConfigDetail';
import type { Assistant } from '../../types/assistant';
import { formatDate } from '../../utils/dateUtils';

interface AssistantCardProps {
  assistant: Assistant;
  onEdit: (assistant: Assistant) => void;
  onDelete: (assistantId: string) => void;
}

const AssistantCard = ({ assistant, onEdit, onDelete }: AssistantCardProps) => {
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this assistant?')) {
      onDelete(assistant.id);
    }
  };

  return (
    <Card variant="glass" className="group hover:shadow-lg transition-shadow duration-200">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary-50 dark:bg-primary-500/10">
              <Bot className="w-5 h-5 text-primary-500 dark:text-primary-400" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 dark:text-white">{assistant.name}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-1">
                <Clock className="w-4 h-4" />
                {formatDate(assistant.createdAt)}
              </p>
            </div>
          </div>
          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <ActionButton
              variant="edit"
              showText={false}
              onClick={() => onEdit(assistant)}
              className="bg-white/80 dark:bg-dark-800/80"
            />
            <ActionButton
              variant="delete"
              showText={false}
              onClick={handleDelete}
              className="bg-white/80 dark:bg-dark-800/80"
            />
          </div>
        </div>

        <div className="space-y-3">
          <ConfigDetail
            label="Speech-to-Text"
            provider={assistant.config.stt.provider}
            model={assistant.config.stt.model}
          />
          <ConfigDetail
            label="Language Model"
            provider={assistant.config.llm.provider}
            model={assistant.config.llm.model}
          />
          <ConfigDetail
            label="Text-to-Speech"
            provider={assistant.config.tts.provider}
            model={assistant.config.tts.model}
          />
        </div>
      </div>
    </Card>
  );
};

export default AssistantCard;