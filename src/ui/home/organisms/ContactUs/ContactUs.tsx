import { Title } from "@sharing/atoms";
import { ContactForm } from "@molecules";
import * as styles from "./ContactUs.styles";

export default function ContactUs() {
  return (
    <section id="contact" className={styles.main_container}>
      <div className={styles.container}>
        <Title>Contact Us</Title>
        <div className={styles.content_container}>
          <ContactForm />
          <div className={styles.text_container}>
            <p className={styles.text}>
              <b>Ready to start your next project with Emika Construction?</b>
            </p>
            <p className={styles.text}>
              Contact us today for a free consultation and discover how we can
              help you achieve your construction and maintenance goals
              efficiently and cost-effectively!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
