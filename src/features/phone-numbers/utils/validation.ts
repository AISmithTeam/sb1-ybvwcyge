// Handles phone number validation logic
export const validatePhoneNumber = (number: string): boolean => {
  const phoneRegex = /^\+\d{1,3}[ ]?\d{1,4}([ ]?\d{1,4})*$/;
  const digitsOnly = number.replace(/\D/g, '');
  
  return phoneRegex.test(number) && digitsOnly.length >= 7 && digitsOnly.length <= 15;
};

export const getPhoneNumberError = (number: string): string | undefined => {
  if (!number) return 'Phone number is required';
  if (!validatePhoneNumber(number)) {
    return 'Please enter a valid international phone number';
  }
  return undefined;
};