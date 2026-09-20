import { contactBenefits } from "@data/landing";
import { cx } from "@emotion/css";
import { useParallax, useReveal } from "@hooks";
import { ContactForm } from "@molecules";
import { Title } from "@sharing/atoms";
import * as motion from "@styles/motion";
import type { CSSProperties } from "react";
import * as styles from "./ContactUs.styles";

const delayStyle = (delay: number) =>
  ({
    "--delay": `${delay}ms`,
  }) as CSSProperties;

export default function ContactUs() {
  const { ref: sectionRef, isVisible } = useReveal<HTMLElement>();
  const infoRef = useParallax<HTMLDivElement>({
    speed: 0.1,
    reverse: true,
    clamp: 16,
  });
  const formRef = useParallax<HTMLDivElement>({
    speed: 0.08,
    clamp: 12,
  });

  return (
    <section
      ref={sectionRef}
      id="contact"
      className={styles.main_container}
      aria-labelledby="contact-title"
    >
      <div className={styles.container}>
        <div
          className={cx(styles.ambient_wash, motion.pulse_glow)}
          aria-hidden="true"
        />

        <div className={styles.section_intro}>
          <p
            className={cx(styles.eyebrow, motion.reveal_up)}
            data-visible={isVisible}
            style={delayStyle(30)}
          >
            Contact
          </p>
          <Title
            id="contact-title"
            className={motion.reveal_up}
            data-visible={isVisible}
            style={delayStyle(110)}
          >
            Let&apos;s scope the right solution for your property.
          </Title>
          <p
            className={cx(styles.description, motion.reveal_up)}
            data-visible={isVisible}
            style={delayStyle(180)}
          >
            Share the service you need and we&apos;ll follow up with a practical
            recommendation tailored to your site.
          </p>
        </div>

        <div className={styles.content_container}>
          <div
            ref={infoRef}
            className={cx(
              styles.info_panel,
              motion.parallax_layer,
              motion.reveal_left
            )}
            data-visible={isVisible}
            style={delayStyle(250)}
          >
            <div className={styles.text_container}>
              <p className={styles.text}>
                Ready to improve site safety, curb appeal or maintenance
                response? We&apos;ll help you define the next step with clarity.
              </p>
              <ul className={styles.benefit_list}>
                {contactBenefits.map((benefit, index) => (
                  <li
                    key={benefit}
                    className={cx(styles.benefit_item, motion.reveal_up)}
                    data-visible={isVisible}
                    style={delayStyle(560 + index * 80)}
                  >
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            ref={formRef}
            className={cx(
              styles.form_panel,
              motion.parallax_layer,
              motion.reveal_right
            )}
            data-visible={isVisible}
            style={delayStyle(340)}
          >
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
