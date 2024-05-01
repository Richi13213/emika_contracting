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
        </div>
      </div>
    </section>
  );
}
