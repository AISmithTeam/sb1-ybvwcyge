export interface Campaign {
  id: number;
  name: string;
  assistant: string;
  maxCalls: number;
  days: string[];
  time: {
    start: string;
    end: string;
  };
  type: string;
  number: string;
  status: 'active' | 'stopped';
  file?: string;
}