// Format phone number to international format
export const formatPhoneNumber = (number: string = ''): string => {
  // Remove all non-digit characters except +
  const cleaned = number.replace(/[^\d+]/g, '');
  
  // If number doesn't start with +, assume it needs one
  const withPrefix = cleaned.startsWith('+') ? cleaned : `+${cleaned}`;
  
  // Format based on length and country code
  const groups = withPrefix.match(/^\+(\d{1,3})(\d{1,4})?(\d{1,4})?(\d{1,4})?$/);
  
  if (!groups) return withPrefix;
  
  const [, countryCode, ...parts] = groups;
  const formattedParts = parts.filter(Boolean);
  
  return `+${countryCode} ${formattedParts.join(' ')}`;
};

// Validate international phone number format
export const isValidPhoneNumber = (number: string = ''): boolean => {
  // Basic international phone number validation
  // Allows:
  // - Must start with +
  // - Country code (1-3 digits)
  // - Remaining numbers (6-12 digits)
  // - Optional spaces between groups
  const phoneRegex = /^\+\d{1,3}[ ]?\d{1,4}([ ]?\d{1,4})*$/;
  const digitsOnly = number.replace(/\D/g, '');
  
  return phoneRegex.test(number) && digitsOnly.length >= 7 && digitsOnly.length <= 15;
};

// Generate a random account SID
export const generateRandomId = (): string => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  return Array.from(
    { length: 32 }, 
    () => chars.charAt(Math.floor(Math.random() * chars.length))
  ).join('');
};

// Generate a random auth token
export const generateRandomToken = (): string => {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  return Array.from(
    { length: 32 }, 
    () => chars.charAt(Math.floor(Math.random() * chars.length))
  ).join('');
};