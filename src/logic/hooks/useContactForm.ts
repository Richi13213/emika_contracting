import { useFormik } from "formik";
import { ContactSchema } from "@schemas/contact";
const useContactForm = () => {
  const contactFormik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: ContactSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return {
    contactFormik,
  };
};

export default useContactForm;
