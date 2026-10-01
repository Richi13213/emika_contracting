export const endpoint = 'https://q2baaxwcjimj3vimfaf6ucipqm0ghmqg.lambda-url.us-east-1.on.aws/';
export const fieldNames = ['first_name', 'last_name', 'email', 'phone_number', 'service'] as const;
export type FieldName = typeof fieldNames[number];
export type Inquiry = Record<FieldName, string>;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneRegex = /^(?:\+?1[-.\s]?)?(?:\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/;

export function validateInquiry(values: Inquiry): Partial<Record<FieldName, string>> {
  const errors: Partial<Record<FieldName, string>> = {};
  for (const field of fieldNames) {
    const value = String(values[field] ?? '').trim();
    if (!value) errors[field] = 'Field required';
    else if (field === 'email' && !emailRegex.test(value)) errors[field] = 'Enter a valid email address';
    else if (field === 'phone_number' && !phoneRegex.test(value)) errors[field] = 'Enter a valid North American phone number';
  }
  return errors;
}

export function normalizePhone(phone: string) {
  return phone.replace(/\D/g, '').replace(/^1/, '');
}

export function makePayload(values: Inquiry): Inquiry {
  return {
    first_name: values.first_name,
    last_name: values.last_name,
    email: values.email,
    phone_number: normalizePhone(values.phone_number),
    service: values.service,
  };
}

export async function sendInquiry(values: Inquiry, fetcher: typeof fetch = fetch): Promise<boolean> {
  const response = await fetcher(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(makePayload(values)),
  });
  if (!response.ok) return false;
  const data = await response.json();
  return Boolean(data?.ok);
}
