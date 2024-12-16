export interface LogEntry {
  id: string;
  type: 'Phone Inbound' | 'Web' | 'Phone Outbound';
  callId: string;
  cost: number;
  endedReason: string;
  assistant: string;
  phoneNumber: string;
  customer: string;
  callTime: string;
  duration: string;
  waveformData?: number[];
}
// empty comment
export interface TranscriptEntry {
  speaker: 'AI' | 'User';
  text: string;
}

export interface LogDetails {
  transcript: TranscriptEntry[];
  waveformData: number[];
  duration: string;
}