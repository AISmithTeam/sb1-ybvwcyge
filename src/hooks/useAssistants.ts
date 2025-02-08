import { useState, useEffect } from 'react';
import type { Assistant } from '../types/assistant';
import type { ConfigValidation } from '../components/assistants/types';
import axios from 'axios';

const STORAGE_KEY = 'aismith_assistants';

export const useAssistants = (fetch_assistants: Boolean = true) => {
  const [assistants, setAssistants] = useState<Assistant[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  });
  const [isAssistantsFetched, setIsAssistantsFetched] = useState(false);
  const baseUrl = 'https://api.voice.aismith.co/api';
  const accessToken = localStorage.getItem("access_token");

  if (fetch_assistants && !isAssistantsFetched) {
    axios
    .get(`${baseUrl}/assistants?jwt_token=${accessToken}`)
    .then((response) => {
      const data = response.data;
      if (data) {
        const existingAssistants = Array();
        for (let i = 0; i < data.length; i++) {
          const assistantData = data[i];
          if (assistantData) {
            const newAssistant: Assistant = {
                id: assistantData.id,
                name: assistantData.assistant_name,
                type: assistantData.assistant_type,
                config: {
                  stt: {
                    provider: assistantData.transcriber_provider ? assistantData.transcriber_provider : null,
                    model: assistantData.stt_model ? assistantData.stt_model : null,
                  },
                  llm: {
                    model: assistantData.llm ? assistantData.llm : null,
                    provider: assistantData.llm_provider ? assistantData.llm_provider : null,
                    prompt: assistantData.prompt,
                  },
                  tts: {
                    voice: assistantData.voice,
                    model: assistantData.tts_model,
                    provider: assistantData.voice_provider,
                  },
                },
                createdAt: assistantData.created_at,
                status: "active"
              }
            existingAssistants.push(newAssistant);
          }
        }
        setAssistants(existingAssistants);
        setIsAssistantsFetched(true);
      }
    });
  }

  // Persist assistants to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(assistants));
  }, [assistants]);

  const createAssistant = (name: string, config: ConfigValidation) => {
    const type = config.tts.provider == "elevenlabs" ? "elevenlabs" : "openai-realtime";
    const newAssistant: Assistant = {
      id: crypto.randomUUID(),
      name,
      type,
      config,
      createdAt: new Date().toISOString(),
      status: 'active'
    };

    console.log(newAssistant.config.llm.first_message, newAssistant.config.llm.prompt);

    axios.post(`${baseUrl}/assistants?jwt_token=${accessToken}`, 
      {
        first_message: newAssistant.config.llm.first_message,
        prompt: newAssistant.config.llm.prompt,
        voice: "cjVigY5qzO86Huf0OWal", // FIXME must be voice
        llm_provider: newAssistant.config.llm.provider,
        voice_provider: newAssistant.config.tts.provider,
        transcriber_provider: newAssistant.config.stt.provider,
        transcriber: newAssistant.config.stt.model,
        llm: newAssistant.config.llm.model,
        language: "ru", // FIXME add field to choose language
        tts_model: newAssistant.config.tts.model,
        assistant_type: newAssistant.type,
        assistant_name: newAssistant.name,
      }
    ).then(
      (response) => {
        newAssistant.id = response.data.assistant_id;
        setAssistants(prev => [...prev, newAssistant]);
        return newAssistant;
      }
    );
  };

  const updateAssistant = (id: string, updates: Partial<Assistant>) => {
    axios.patch(`${baseUrl}/assistant?jwt_token=${accessToken}`, {
      prompt: updates.config.llm.prompt, 
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