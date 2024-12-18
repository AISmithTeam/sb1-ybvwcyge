export interface Assistant {
  id: string;
  name: string;
  prompt: string;
  config: ConfigValidation;
  createdAt: string;
  status: 'active' | 'inactive';
}