export interface Assistant {
  id: string;
  name: string;
  type: string;
  config: ConfigValidation;
  createdAt: string;
  status: 'active' | 'inactive';
}