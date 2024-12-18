import { useState } from 'react';
import { createAssistant, type CreateAssistantParams } from '../services/assistantService';
import type { Assistant } from '../types/assistant';

export const useAssistantCreation = () => {
  const [isCreating, setIsCreating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createNewAssistant = async (params: CreateAssistantParams) => {
    setIsCreating(true);
    setError(null);

    try {
      const assistant = await createAssistant(params);
      return assistant;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create assistant');
      throw err;
    } finally {
      setIsCreating(false);
    }
  };

  return {
    createNewAssistant,
    isCreating,
    error
  };
};