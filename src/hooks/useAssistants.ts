import { useState, useEffect } from 'react';
import type { Assistant } from '../types/assistant';
import type { ConfigValidation } from '../components/assistants/types';

const STORAGE_KEY = 'aismith_assistants';

export const useAssistants = () => {
  const [assistants, setAssistants] = useState<Assistant[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  // Persist assistants to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(assistants));
  }, [assistants]);

  const createAssistant = (name: string, config: ConfigValidation) => {
    const newAssistant: Assistant = {
      id: crypto.randomUUID(),
      name,
      config,
      createdAt: new Date().toISOString(),
      status: 'active'
    };

    setAssistants(prev => [...prev, newAssistant]);
    return newAssistant;
  };

  const updateAssistant = (id: string, updates: Partial<Assistant>) => {
    setAssistants(prev =>
      prev.map(assistant =>
        assistant.id === id ? { ...assistant, ...updates } : assistant
      )
    );
  };

  const deleteAssistant = (id: string) => {
    setAssistants(prev => prev.filter(assistant => assistant.id !== id));
  };

  return {
    assistants,
    createAssistant,
    updateAssistant,
    deleteAssistant
  };
};