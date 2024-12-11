import { InitialValiesInterface } from "@typing/constants";
import axios from "axios";

export const sendContact = async (values: InitialValiesInterface) => {
  try {
    const { data } = await axios.post("https://backend-contacts-emika-9v1m0jpv7-richi13213s-projects.vercel.app/contacts/create", values);
    return data.success;
  } catch (error) {
    console.error(error);
    return false;
  }
};