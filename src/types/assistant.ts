export interface Assistant {
  id: string;
  name: string;
  config: ConfigValidation;
  createdAt: string;
  status: 'active' | 'inactive';
}