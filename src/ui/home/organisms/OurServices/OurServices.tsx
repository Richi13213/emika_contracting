import type { CSSProperties } from "react";
import { cx } from "@emotion/css";
import { Title } from "@sharing/atoms";
import { ServiceCard } from "@molecules";
import { useParallax, useReveal } from "@hooks";
import { ServiceCardData } from "@typing/props";
import { servicesData } from "@data/services";
import * as motion from "@styles/motion";
import * as styles from "./OurServices.styles";

const delayStyle = (delay: number) =>
  ({
    "--delay": `${delay}ms`,
  }) as CSSProperties;

export default function OurServices() {
  const { ref: sectionRef, isVisible } = useReveal<HTMLElement>();
  const beamRef = useParallax<HTMLDivElement>({
    speed: 0.08,
    clamp: 16,
  });

  return (
    <section
      ref={sectionRef}
      id="services"
      className={styles.main_container}
      aria-labelledby="services-title"
    >
      <div className={styles.container}>
        <div
          ref={beamRef}
          className={cx(
            styles.ambient_beam,
            motion.parallax_layer,
            motion.pulse_glow
          )}
          aria-hidden="true"
        />

        <div className={styles.heading_row}>
          <div className={styles.heading_copy}>
            <p
              className={cx(styles.eyebrow, motion.reveal_up)}
              data-visible={isVisible}
              style={delayStyle(30)}
            >
              Services
            </p>
            <Title
              id="services-title"
              className={motion.reveal_up}
              data-visible={isVisible}
              style={delayStyle(110)}
            >
              Exterior and maintenance services that strengthen first
              impressions.
            </Title>
            <p
              className={cx(styles.description, motion.reveal_up)}
              data-visible={isVisible}
              style={delayStyle(180)}
            >
              A flexible service mix for properties that need dependable upkeep,
              visible quality and a team that understands operational realities.
            </p>
          </div>

          <a
            href="#contact"
            className={cx(styles.section_cta, motion.reveal_right)}
            data-visible={isVisible}
            style={delayStyle(240)}
          >
            Get a tailored quote
          </a>
        </div>

        <div className={styles.services_grid}>
          {servicesData.map((data: ServiceCardData, index) => (
            <div
              className={cx(styles.service_item, motion.reveal_up)}
              data-visible={isVisible}
              style={delayStyle(320 + index * 90)}
              key={`service-card-${index}`}
            >
              <ServiceCard {...data} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
