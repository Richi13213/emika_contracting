import { InputForm } from "@sharing/molecules";
import { Select, Loader } from "@sharing/atoms";
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
    loading,
    successMessage,
    errorMessage,
  } = useContactForm();
  const { value: serviceValue } = getFieldProps("service");

  return (
    <>
      {loading && <Loader />}
      <form className={styles.form} onSubmit={formikSubmit} noValidate>
        <p className={styles.form_intro}>
          Tell us what your property needs and we&apos;ll follow up shortly.
        </p>

        {successMessage && (
          <div className={styles.notice("success")} role="status" aria-live="polite">
            Your request was sent successfully. We&apos;ll be in touch soon.
          </div>
        )}

        {errorMessage && (
          <div className={styles.notice("error")} role="alert">
            We couldn&apos;t send your request right now. Please try again or
            contact us directly by phone or email.
          </div>
        )}

        <InputForm
          id="first_name"
          type="text"
          error={errors.first_name || ""}
          label="First name"
          touched={touched.first_name || false}
          placeholder="Alex"
          autoComplete="given-name"
          {...getFieldProps("first_name")}
        />
        <InputForm
          id="last_name"
          type="text"
          error={errors.last_name || ""}
          label="Last name"
          touched={touched.last_name || false}
          placeholder="Morgan"
          autoComplete="family-name"
          {...getFieldProps("last_name")}
        />
        <InputForm
          id="email"
          type="email"
          error={errors.email || ""}
          label="Email"
          touched={touched.email || false}
          placeholder="name@company.com"
          autoComplete="email"
          {...getFieldProps("email")}
        />
        <InputForm
          id="phone_number"
          type="tel"
          error={errors.phone_number || ""}
          label="Phone number"
          touched={touched.phone_number || false}
          placeholder="(555) 555-5555"
          autoComplete="tel"
          {...getFieldProps("phone_number")}
        />
        <Select
          id="service"
          value={serviceValue}
          error={errors.service || ""}
          label="Service needed"
          touched={touched.service || false}
          handleManualTouched={handleManualTouched}
          handleManualError={handleManualError}
          handleManualValues={handleManualValues}
        />
        <div className={styles.button_container}>
          <button type="submit" className={styles.button}>
            Request consultation
          </button>
          <p className={styles.disclaimer}>
            We only use your information to respond to this request.
          </p>
        </div>
      </form>
    </>
  );
}
