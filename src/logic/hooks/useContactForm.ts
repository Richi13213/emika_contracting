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

  const handleLoading = (value: boolean) => {
    setLoading(value);
  };

  const handleSuccessMessage = (value: boolean) => {
    setSuccesMesssage(value);
  };

  const handleErrorMessage = (value: boolean) => {
    setErrorMesssage(value);
  };

  const loginFormik = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema: ContactSchema,
    onSubmit: async (values) => {
      try {
        handleLoading(true);
        const result = await sendContact({
          ...values,
          phone_number: values.phone_number.toString(),
        });
        setTimeout(()=> {
          handleLoading(false);
          if (!result) {
            handleErrorMessage(true);
            setTimeout(() => {
              handleErrorMessage(false);
            }, 5000);
            return;
          }
          handleSuccessMessage(true);
          setTimeout(() => {
            handleSuccessMessage(false);
          }, 5000);
        }, 4000);
      } catch (error) {
        console.error(error);
        handleLoading(false);
        handleErrorMessage(true);
        setTimeout(() => {
          handleErrorMessage(false);
        }, 5000);
        return;
      } 
      return;
    },
  });

  const handleManualValues = ({ field, value }: FormikHandlerParams) => {
    loginFormik.setFieldValue(field, value);
  };

  const handleManualTouched = ({ field }: FormikHandlerParams) => {
    loginFormik.setFieldTouched(field, true);
  };

  const handleManualError = ({ field }: FormikHandlerParams) => {
    loginFormik.setFieldError(field, "");
  };

  return {
    formikSubmit: loginFormik.handleSubmit,
    getFieldProps: loginFormik.getFieldProps,
    touched: loginFormik.touched,
    errors: loginFormik.errors,
    handleManualValues,
    handleManualTouched,
    handleManualError,
    loading,
    successMessage,
    errorMessage
  };
};

export default useContactForm;
