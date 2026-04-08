import { InitialValiesInterface } from "@typing/constants";
import axios from "axios";
export const sendContact = async (values: InitialValiesInterface) => {
  try {
    const { data } = await axios.post(
      "https://q2baaxwcjimj3vimfaf6ucipqm0ghmqg.lambda-url.us-east-1.on.aws/",
      values,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return Boolean(data?.ok);
  } catch (error) {
    console.error("Error sending contact form:", error);
    return false;
  }
};