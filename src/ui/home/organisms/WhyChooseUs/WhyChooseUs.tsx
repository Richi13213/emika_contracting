import type { CSSProperties } from "react";
import { cx } from "@emotion/css";
import { Title } from "@sharing/atoms";
import { useParallax, useReveal } from "@hooks";
import { processSteps, valuePillars } from "@data/landing";
import * as motion from "@styles/motion";
import * as styles from "./WhyChooseUs.styles";

const delayStyle = (delay: number) =>
  ({
    "--delay": `${delay}ms`,
  }) as CSSProperties;

export default function WhyChooseUs() {
  const { ref: sectionRef, isVisible } = useReveal<HTMLElement>();
  const processPanelRef = useParallax<HTMLDivElement>({
    speed: 0.1,
    reverse: true,
    clamp: 14,
  });

  return (
    <section
      ref={sectionRef}
      id="why_us"
      className={styles.main_container}
      aria-labelledby="why-title"
    >
      <div className={styles.container}>
        <div
          className={cx(styles.ambient_orb, motion.pulse_glow)}
          aria-hidden="true"
        />

        <div className={styles.intro}>
          <p
            className={cx(styles.eyebrow, motion.reveal_up)}
            data-visible={isVisible}
            style={delayStyle(40)}
          >
            Why EMIKA
          </p>
          <Title
            id="why-title"
            className={motion.reveal_up}
            data-visible={isVisible}
            style={delayStyle(120)}
          >
            A calm, accountable partner for properties that cannot afford
            guesswork.
          </Title>
          <p
            className={cx(styles.description, motion.reveal_up)}
            data-visible={isVisible}
            style={delayStyle(190)}
          >
            The goal is simple: make your site easier to maintain, safer to use
            and more professional to present, while keeping the process clear
            for everyone involved.
          </p>
        </div>

        <div className={styles.values_grid}>
          {valuePillars.map(({ title, description }, index) => (
            <article
              key={title}
              className={cx(styles.value_card, motion.reveal_up)}
              data-visible={isVisible}
              style={delayStyle(280 + index * 90)}
            >
              <span className={styles.value_index}>0{index + 1}</span>
              <h3 className={styles.value_title}>{title}</h3>
              <p className={styles.value_text}>{description}</p>
            </article>
          ))}
        </div>

        <div
          ref={processPanelRef}
          className={cx(
            styles.process_panel,
            motion.parallax_layer,
            motion.reveal_right
          )}
          data-visible={isVisible}
          style={delayStyle(430)}
        >
          <div className={styles.process_intro}>
            <h3 className={styles.process_title}>How we work</h3>
            <p className={styles.process_description}>
              A practical process that keeps decisions clear and execution
              aligned with the needs of the property.
            </p>
          </div>

          <ol className={styles.process_list}>
            {processSteps.map(({ step, title, description }, index) => (
              <li
                key={step}
                className={cx(styles.process_item, motion.reveal_up)}
                data-visible={isVisible}
                style={delayStyle(520 + index * 90)}
              >
                <span className={styles.process_step}>{step}</span>
                <div className={styles.process_content}>
                  <h4 className={styles.process_item_title}>{title}</h4>
                  <p className={styles.process_item_text}>{description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
