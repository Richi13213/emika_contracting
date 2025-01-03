import { InitialValiesInterface } from "@typing/constants";
import axios from "axios";

export const sendContact = async (values: InitialValiesInterface) => {
  try {
    const { data } = await axios.post("https://backend-emika-1b5936e56e3c.herokuapp.com/contacts/create", values);
    return data.success;
  } catch (error) {
    console.error(error);
    return false;
  }
};