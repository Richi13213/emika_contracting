import { InputForm } from "@sharing/molecules";
import { Select } from "@sharing/atoms";
import { useContactForm } from "@hooks";
import * as styles from "./ContactForm.styles";

export default function ContactForm() {
  const {
    formikSubmit,
    getFieldProps,
    touched,
    errors,
    handleManualValues,
    handleManualTouched,
    handleManualError,
  } = useContactForm();
  const { value: serviceValue } = getFieldProps("service");

  return (
    <form className={styles.form} onSubmit={formikSubmit}>
      <InputForm
        id="first_name"
        type="text"
        error={errors.first_name || ""}
        label="First name"
        touched={touched.first_name || false}
        {...getFieldProps("first_name")}
      />
      <InputForm
        id="last_name"
        type="text"
        error={errors.last_name || ""}
        label="Last name"
        touched={touched.last_name || false}
        {...getFieldProps("last_name")}
      />
      <InputForm
        id="email"
        type="text"
        error={errors.email || ""}
        label="Email"
        touched={touched.email || false}
        {...getFieldProps("email")}
      />
      <InputForm
        id="phone_number"
        type="text"
        error={errors.phone_number || ""}
        label="Phone Number"
        touched={touched.phone_number || false}
        {...getFieldProps("phone_number")}
      />
      <Select
        id="service"
        value={serviceValue}
        error={errors.service || ""}
        label="Services"
        touched={touched.service || false}
        handleManualTouched={handleManualTouched}
        handleManualError={handleManualError}
        handleManualValues={handleManualValues}
      />
    </form>
  );
}
