import { useState, useEffect } from 'react';
import type { Assistant } from '../types/assistant';
import type { ConfigValidation } from '../components/assistants/types';
import axios from 'axios';

const STORAGE_KEY = 'aismith_assistants';

export const useAssistants = () => {
  const [assistants, setAssistants] = useState<Assistant[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  });
  const baseUrl = 'https://api.voice.aismith.co/api';
  const accessToken = localStorage.getItem("access_token");

  // Persist assistants to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(assistants));
  }, [assistants]);

  const createAssistant = (name: string, prompt: string, config: ConfigValidation) => {
    const newAssistant: Assistant = {
      id: crypto.randomUUID(),
      name,
      prompt,
      config,
      createdAt: new Date().toISOString(),
      status: 'active'
    };

    axios.post(`${baseUrl}/assistants?jwt_token=${accessToken}`, 
      {
        prompt: newAssistant.prompt, // fixme должен быть промпт на фронтенде нет поля для этого
        voice: newAssistant.config.tts.model,
        assistant_name: newAssistant.name,
      }
    ).then(
      (response) => {
        newAssistant.id = response.data.assistant_id
        console.log(newAssistant);
      }
    );

    setAssistants(prev => [...prev, newAssistant]);
    return newAssistant;
  };

  const updateAssistant = (id: string, updates: Partial<Assistant>) => {
    axios.patch(`${baseUrl}/assistant?jwt_token=${accessToken}`, {
      prompt: updates.prompt, // fixme должен быть промпт 
      voice: updates.config.tts.model,
      assistant_name: updates.name,
      assistant_id: id,
      uploaded_files: []
    });

    setAssistants(prev =>
      prev.map(assistant =>
        assistant.id === id ? { ...assistant, ...updates } : assistant
      )
    );
  };

  const deleteAssistant = (id: string) => {
    axios.delete(`${baseUrl}/assistant?assistant_id=${id}&jwt_token=${accessToken}`);
    setAssistants(prev => prev.filter(assistant => assistant.id !== id));
  };

  return {
    assistants,
    createAssistant,
    updateAssistant,
    deleteAssistant
  };
};