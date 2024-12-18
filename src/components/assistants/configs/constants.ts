// TTS Configuration Constants
export const defaultTTSConfig = {
  backgroundSound: 'none',
  minCharacters: 1,
  fillerInjection: false,
  backchanneling: false
} as const;

// STT Configuration Constants
export const defaultSTTConfig = {
  noiseSuppression: 0.5,
  vadThreshold: 0.5,
  silenceTimeout: 1000
} as const;

// LLM Configuration Constants
export const defaultLLMConfig = {
  temperature: 0.7,
  maxTokens: 125,
  systemPrompt: '',
  trainingFile: null
} as const;