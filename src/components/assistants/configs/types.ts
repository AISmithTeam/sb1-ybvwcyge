export interface Voice {
  id: string;
  name: string;
  description: string;
  recording: string; // path to recording file
}

export interface Model {
  id: string;
  name: string;
  description?: string;
  voices?: Voice[];
}

export interface Provider {
  id: string;
  name: string;
  models: Model[];
}

export interface ConfigValidation {
  stt: {
    provider: string;
    model: string;
  };
  llm: {
    provider: string;
    model: string;
  };
  tts: {
    provider: string;
    model: string;
  };
}

export interface LLMFeaturesConfig {
  temperature: number;
  maxTokens: number;
  systemPrompt: string;
  initialMessage: string;
  trainingFile: File | null;
}

export interface TTSFeaturesConfig {
  backgroundSound: string;
  minCharacters: number;
  fillerInjection: boolean;
  backchanneling: boolean;
}

export interface STTFeaturesConfig {
  noiseSuppression: number;
  vadThreshold: number;
  silenceTimeout: number;
}

export interface TTSFeaturesProps {
  config: TTSFeaturesConfig;
  onChange: (updates: Partial<TTSFeaturesConfig>) => void;
}