import { useFormik } from "formik";
import { INITIAL_VALUES } from "@constants/contact";
import { ContactSchema } from "@schemas/contact";
import { FormikHandlerParams } from "@typing/props";

const useContactForm = () => {
  const loginFormik = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema: ContactSchema,
    onSubmit: (values) => {
      console.log(values);
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
  };
};

export default useContactForm;
