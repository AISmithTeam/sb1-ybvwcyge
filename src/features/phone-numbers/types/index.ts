export interface PhoneNumber {
  id: string;
  number: string;
  accountSid: string;
  authToken: string;
  status: 'active' | 'inactive';
}

export interface PhoneNumberFormData {
  number: string;
  accountSid: string;
  authToken: string;
}

export interface PhoneNumberValidation {
  isValid: boolean;
  error?: string;
}