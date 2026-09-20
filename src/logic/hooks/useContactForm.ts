import { useState } from "react";
import { useFormik } from "formik";
import { INITIAL_VALUES } from "@constants/contact";
import { ContactSchema } from "@schemas/contact";
import { FormikHandlerParams } from "@typing/props";
import { sendContact } from "@services/contact";

const useContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccesMesssage] = useState(false);
  const [errorMessage, setErrorMesssage] = useState(false);

  const contactFormik = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema: ContactSchema,
    onSubmit: async (values) => {
      try {
        setLoading(true);
        setSuccesMesssage(false);
        setErrorMesssage(false);

        const normalizedPhone = values.phone_number
          .replace(/\D/g, "")
          .replace(/^1/, "");

        const result = await sendContact({
          ...values,
          phone_number: normalizedPhone,
        });

        if (!result) {
          setErrorMesssage(true);
          setTimeout(() => {
            setErrorMesssage(false);
          }, 5000);
          return;
        }

        contactFormik.resetForm();
        setSuccesMesssage(true);
        setTimeout(() => {
          setSuccesMesssage(false);
        }, 5000);
      } catch (error) {
        console.error(error);
        setErrorMesssage(true);
        setTimeout(() => {
          setErrorMesssage(false);
        }, 5000);
      } finally {
        setLoading(false);
      }
    },
  });

  const handleManualValues = ({ field, value }: FormikHandlerParams) => {
    contactFormik.setFieldValue(field, value);
  };

  const handleManualTouched = ({ field }: FormikHandlerParams) => {
    contactFormik.setFieldTouched(field, true);
  };

  const handleManualError = ({ field }: FormikHandlerParams) => {
    contactFormik.setFieldError(field, "");
  };

  return {
    formikSubmit: contactFormik.handleSubmit,
    getFieldProps: contactFormik.getFieldProps,
    touched: contactFormik.touched,
    errors: contactFormik.errors,
    handleManualValues,
    handleManualTouched,
    handleManualError,
    loading,
    successMessage,
    errorMessage,
  };
};

export default useContactForm;
