// Generate a random account SID
export const generateRandomId = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < 32; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

// Generate a random auth token
export const generateRandomToken = () => {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < 32; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

// Format phone number to a consistent format
export const formatPhoneNumber = (number: string) => {
  const cleaned = number.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{1})(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `+${match[1]} (${match[2]}) ${match[3]}-${match[4]}`;
  }
  return number;
};

// Validate phone number format
export const isValidPhoneNumber = (number: string) => {
  const phoneRegex = /^\+\d{1,2}\s?\(\d{3}\)\s?\d{3}-\d{4}$/;
  return phoneRegex.test(number);
};