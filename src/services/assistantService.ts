import type { Assistant, ConfigValidation } from '../types';

export interface CreateAssistantParams {
  name: string;
  config: ConfigValidation;
}

export const createAssistant = async (params: CreateAssistantParams): Promise<Assistant> => {
  // TODO: Replace with actual API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: Math.random().toString(36).substr(2, 9),
        name: params.name,
        config: params.config,
        createdAt: new Date().toISOString(),
        status: 'active'
      });
    }, 1000);
  });
};