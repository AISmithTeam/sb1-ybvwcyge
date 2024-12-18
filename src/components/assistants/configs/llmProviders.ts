import { Provider } from './types';

export const llmProviders: Provider[] = [
  {
    id: 'openai',
    name: 'OpenAI',
    models: [
      {
        id: 'gpt-4',
        name: 'GPT-4 - Most Capable',
        description: 'Most capable model, best at complex tasks and reasoning',
        voices: []
      },
      {
        id: 'gpt-4-turbo',
        name: 'GPT-4 Turbo - Fastest',
        description: 'Optimized for speed while maintaining high capability',
        voices: []
      },
      {
        id: 'gpt-3.5-turbo',
        name: 'GPT-3.5 Turbo - Balanced',
        description: 'Great balance of speed and capability',
        voices: []
      }
    ]
  },
  {
    id: 'anthropic',
    name: 'Anthropic',
    models: [
      {
        id: 'claude-3-opus',
        name: 'Claude 3 Opus - Most Capable',
        description: 'Most powerful model for complex tasks',
        voices: []
      },
      {
        id: 'claude-3-sonnet',
        name: 'Claude 3 Sonnet - Balanced',
        description: 'Balanced performance and efficiency',
        voices: []
      },
      {
        id: 'claude-3-haiku',
        name: 'Claude 3 Haiku - Fastest',
        description: 'Optimized for speed and efficiency',
        voices: []
      }
    ]
  },
  {
    id: 'google',
    name: 'Google',
    models: [
      {
        id: 'gemini-pro',
        name: 'Gemini Pro',
        description: 'Advanced language model for general tasks',
        voices: []
      },
      {
        id: 'gemini-pro-vision',
        name: 'Gemini Pro Vision',
        description: 'Multimodal model supporting text and vision',
        voices: []
      }
    ]
  },
  {
    id: 'meta',
    name: 'Meta AI',
    models: [
      {
        id: 'llama-2-70b',
        name: 'Llama 2 70B',
        description: 'Largest and most capable Llama 2 model',
        voices: []
      },
      {
        id: 'llama-2-13b',
        name: 'Llama 2 13B',
        description: 'Balanced model for general use',
        voices: []
      },
      {
        id: 'llama-2-7b',
        name: 'Llama 2 7B',
        description: 'Efficient model for basic tasks',
        voices: []
      }
    ]
  },
  {
    id: 'mistral',
    name: 'Mistral AI',
    models: [
      {
        id: 'mistral-large',
        name: 'Mistral Large',
        description: 'Most powerful Mistral model',
        voices: []
      },
      {
        id: 'mistral-medium',
        name: 'Mistral Medium',
        description: 'Balanced performance model',
        voices: []
      },
      {
        id: 'mistral-small',
        name: 'Mistral Small',
        description: 'Efficient model for basic tasks',
        voices: []
      }
    ]
  }
];