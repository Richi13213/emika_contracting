import { object, string } from "yup";
import { REQUIRED_ERROR, NUMBER_ERROR, EMAIL_ERROR } from "@constants/contact";
import { PHONE_REGEX, EMAIL_REGEX } from "@constants/regex";

export const ContactSchema = object({
  first_name: string().required(REQUIRED_ERROR),
  last_name: string().required(REQUIRED_ERROR),
  email: string().matches(EMAIL_REGEX, EMAIL_ERROR).required(REQUIRED_ERROR),
  phone_number: string().min(10).max(10).matches(PHONE_REGEX, NUMBER_ERROR).required(REQUIRED_ERROR),
  service: string().required(REQUIRED_ERROR),
});
