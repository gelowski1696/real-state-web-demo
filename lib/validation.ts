export type InquiryValues = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  consent: boolean;
};

export type InquiryErrors = Partial<Record<keyof InquiryValues, string>>;

export function validateInquiry(values: InquiryValues): InquiryErrors {
  const errors: InquiryErrors = {};
  if (!values.name.trim()) errors.name = 'Please enter your name.';
  if (!values.email.trim()) errors.email = 'Please enter your email address.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = 'Please enter a valid email address.';
  if (!values.message.trim()) errors.message = 'Please tell us how we can help.';
  if (!values.consent) errors.consent = 'Please confirm you understand this is a demo form.';
  return errors;
}
