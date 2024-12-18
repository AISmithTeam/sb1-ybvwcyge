// Handles phone number formatting logic
export const formatPhoneNumber = (number: string): string => {
  const cleaned = number.replace(/[^\d+]/g, '');
  const withPrefix = cleaned.startsWith('+') ? cleaned : `+${cleaned}`;
  const groups = withPrefix.match(/^\+(\d{1,3})(\d{1,4})?(\d{1,4})?(\d{1,4})?$/);
  
  if (!groups) return number;
  
  const [, countryCode, ...parts] = groups;
  const formattedParts = parts.filter(Boolean);
  
  return `+${countryCode} ${formattedParts.join(' ')}`;
};