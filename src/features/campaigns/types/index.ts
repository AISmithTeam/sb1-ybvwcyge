export interface Campaign {
  id: number;
  name: string;
  assistantId: string;
  assistantName: string;
  maxCalls: number;
  days: string[];
  time: { 
    start: string; 
    end: string; 
  };
  type: string;
  numberId: string;
  number: string;
  status: 'active' | 'stopped';
  file: string;
}

export interface CampaignFormData {
  name: string;
  assistantId: string;
  type: string;
  phoneNumberId: string;
  timeRange: {
    start: string;
    end: string;
  };
  recallsInterval: number;
  maxCalls: number;
  file: File | null;
}

export interface CampaignValidation {
  isValid: boolean;
  errors: Record<string, string>;
}