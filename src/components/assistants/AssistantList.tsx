import React from 'react';
import AssistantCard from './AssistantCard';
import type { Assistant } from '../../types/assistant';

interface AssistantListProps {
  assistants: Assistant[];
  onEdit: (assistant: Assistant) => void;
  onDelete: (assistantId: string) => void;
}

const AssistantList = ({ assistants, onEdit, onDelete }: AssistantListProps) => {
  if (assistants.length === 0) {
    return (
      <div className="text-center py-8 text-slate-500 dark:text-slate-400">
        No assistants created yet. Click "New Assistant" to get started.
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {assistants.map(assistant => (
        <AssistantCard
          key={assistant.id}
          assistant={assistant}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default AssistantList;