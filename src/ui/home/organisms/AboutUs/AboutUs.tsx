import type { CSSProperties } from "react";
import { cx } from "@emotion/css";
import { aboutHighlights } from "@data/landing";
import { companyInfo } from "@data/landing";
import { useParallax, useReveal } from "@hooks";
import { Title } from "@sharing/atoms";
import Image from "@images/about_us/image.webp";
import * as motion from "@styles/motion";
import * as styles from "./AboutUs.styles";

const delayStyle = (delay: number) =>
  ({
    "--delay": `${delay}ms`,
  }) as CSSProperties;

export default function AboutUs() {
  const content = [
    "At EMIKA, we're dedicated to providing a wide range of construction and maintenance services tailored to your property needs.",
    "From line painting to snow removal, we deliver practical solutions with professionalism, care and a strong focus on how the space operates every day.",
  ];
  const { ref: sectionRef, isVisible } = useReveal<HTMLElement>();
  const visualPanelRef = useParallax<HTMLDivElement>({
    speed: 0.14,
    reverse: true,
    clamp: 24,
  });

  return (
    <section
      ref={sectionRef}
      id="about_us"
      className={styles.main_container}
      aria-labelledby="about-title"
    >
      <div className={styles.container}>
        <div className={styles.copy}>
          <p
            className={cx(styles.eyebrow, motion.reveal_up)}
            data-visible={isVisible}
            style={delayStyle(40)}
          >
            About EMIKA
          </p>
          <Title
            id="about-title"
            className={motion.reveal_up}
            data-visible={isVisible}
            style={delayStyle(120)}
          >
            Construction support that feels as dependable as your operations
            team.
          </Title>
          <p
            className={cx(styles.lead, motion.reveal_up)}
            data-visible={isVisible}
            style={delayStyle(190)}
          >
            We bring together maintenance, repair and improvement services that
            help properties stay safer, sharper and easier to manage.
          </p>

          {content.map((text, index) => (
            <p
              key={`about-us-section-text-${index}`}
              className={cx(styles.text, motion.reveal_up)}
              data-visible={isVisible}
              style={delayStyle(250 + index * 80)}
            >
              {text}
            </p>
          ))}

          <div className={styles.highlight_grid}>
            {aboutHighlights.map(({ title, description }, index) => (
              <article
                key={title}
                className={cx(styles.highlight_card, motion.reveal_up)}
                data-visible={isVisible}
                style={delayStyle(390 + index * 90)}
              >
                <h3 className={styles.highlight_title}>{title}</h3>
                <p className={styles.highlight_text}>{description}</p>
              </article>
            ))}
          </div>
        </div>

        <div
          ref={visualPanelRef}
          className={cx(
            styles.visual_panel,
            motion.parallax_layer,
            motion.reveal_right
          )}
          data-visible={isVisible}
          style={delayStyle(240)}
        >
          <span className={styles.location_chip}>{companyInfo.location}</span>
          <img
            className={styles.img}
            src={Image}
            alt="EMIKA Construction team reviewing a property site"
            loading="lazy"
            decoding="async"
          />
          <div className={cx(styles.quote_card, motion.drift_slow)}>
            <p className={styles.quote}>
              From the first walkthrough to the final detail, we focus on work
              that looks professional and lasts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
