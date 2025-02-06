import { Assistant } from "../../types/assistant";

export interface Campaign {
  id: number;
  name: string;
  assistant: Assistant | undefined; // FIXME change to default assistant
  maxCalls: number;
  recallsInterval: number;
  days: string[];
  time: {
    start: string;
    end: string;
  };
  type: string;
  number: string;
  status: 'running' | 'stopped';
  file?: File | null;
  fileName: string;
}