import { object, string } from "yup";

export const ContactSchema = object({
  first_name: string().required(),
  last_name: string().required(),
  email: string().required(),
  phone_number: string().required(),
  service: string().required(),
});
