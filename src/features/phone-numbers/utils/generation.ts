export const generateCredentials = () => {
  const generateString = (length: number, charset: string): string => {
    return Array.from(
      { length }, 
      () => charset.charAt(Math.floor(Math.random() * charset.length))
    ).join('');
  };

  const generateAccountSid = () => generateString(32, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789');
  const generateAuthToken = () => generateString(32, 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789');

  return { generateAccountSid, generateAuthToken };
};