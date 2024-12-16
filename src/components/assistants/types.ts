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

export interface ValidationProps {
  validation: ConfigValidation;
  onValidationChange: (type: 'stt' | 'llm' | 'tts', updates: { provider?: string; model?: string }) => void;
}

export interface RequiredFieldProps {
  showError?: boolean;
  isRequired?: boolean;
}