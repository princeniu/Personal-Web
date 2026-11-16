export const MAX_EMAIL_LENGTH = 512;
export const MAX_MESSAGE_LENGTH = 4096;
export const MAX_CONTACT_BODY_BYTES = 32768;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateContactFields(formData, content) {
  const rawEmail = formData.get('email');
  const rawMessage = formData.get('message');
  const email = typeof rawEmail === 'string' ? rawEmail.trim() : '';
  const message = typeof rawMessage === 'string' ? rawMessage.replace(/\r\n?/g, '\n').trim() : '';
  const errors = {};

  if (typeof rawEmail !== 'string' || formData.getAll('email').length !== 1 || !EMAIL_PATTERN.test(email)) {
    errors.email = content.errorEmailInvalid;
  }
  if (typeof rawMessage !== 'string' || formData.getAll('message').length !== 1 || !message) {
    errors.message = content.errorMessageRequired;
  }
  if (email.length > MAX_EMAIL_LENGTH) {
    errors.email = content.errorEmailTooLong.replace('{max}', MAX_EMAIL_LENGTH);
  }
  if (message.length > MAX_MESSAGE_LENGTH) {
    errors.message = content.errorMessageTooLong.replace('{max}', MAX_MESSAGE_LENGTH);
  }

  return {
    email,
    message,
    errors,
    values: {
      email: typeof rawEmail === 'string' ? rawEmail.slice(0, MAX_EMAIL_LENGTH) : '',
      message: typeof rawMessage === 'string' ? rawMessage.slice(0, MAX_MESSAGE_LENGTH) : '',
    },
  };
}
