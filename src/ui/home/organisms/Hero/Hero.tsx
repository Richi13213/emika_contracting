import type { CSSProperties } from "react";
import { cx } from "@emotion/css";
import { companyInfo, heroHighlights, heroStats } from "@data/landing";
import { useParallax, useReveal } from "@hooks";
import HeroImage from "@images/about_us/image.webp";
import LinePainting from "@images/our_services/line_painting.webp";
import SnowRemoval from "@images/our_services/snow_removal.webp";
import * as motion from "@styles/motion";
import * as styles from "./Hero.styles";

const delayStyle = (delay: number) =>
  ({
    "--delay": `${delay}ms`,
  }) as CSSProperties;

type SkylineBlock = {
  width: string;
  height: string;
  left: string;
  delay: number;
};

const skylineBack = [
  { width: "9%", height: "9rem", left: "3%", delay: 180 },
  { width: "11%", height: "11.5rem", left: "14%", delay: 240 },
  { width: "8%", height: "8.2rem", left: "28%", delay: 300 },
  { width: "12%", height: "13rem", left: "39%", delay: 360 },
  { width: "9%", height: "10.5rem", left: "56%", delay: 420 },
  { width: "10%", height: "12rem", left: "68%", delay: 500 },
  { width: "8%", height: "8.8rem", left: "82%", delay: 560 },
] as const;

const skylineFront = [
  { width: "11%", height: "12.4rem", left: "8%", delay: 260 },
  { width: "10%", height: "15rem", left: "23%", delay: 340 },
  { width: "9%", height: "11.2rem", left: "36%", delay: 420 },
  { width: "13%", height: "17rem", left: "48%", delay: 500 },
  { width: "10%", height: "13.8rem", left: "65%", delay: 580 },
  { width: "12%", height: "14.6rem", left: "79%", delay: 660 },
] as const;

const towerStyle = ({ width, height, left, delay }: SkylineBlock) =>
  ({
    width,
    height,
    left,
    animationDelay: `${delay}ms`,
  }) as CSSProperties;

export default function Hero() {
  const { ref: sectionRef, isVisible } = useReveal<HTMLElement>({
    threshold: 0.08,
    rootMargin: "0px 0px -8% 0px",
  });
  const skylineBackRef = useParallax<HTMLDivElement>({
    speed: 0.08,
    reverse: true,
    clamp: 18,
  });
  const skylineFrontRef = useParallax<HTMLDivElement>({
    speed: 0.14,
    clamp: 24,
  });
  const craneRef = useParallax<HTMLDivElement>({
    speed: 0.18,
    reverse: true,
    clamp: 24,
  });
  const mediaRef = useParallax<HTMLDivElement>({
    speed: 0.18,
    clamp: 34,
  });
  const primaryCardRef = useParallax<HTMLElement>({
    speed: 0.24,
    reverse: true,
    clamp: 22,
  });
  const secondaryCardRef = useParallax<HTMLElement>({
    speed: 0.16,
    clamp: 18,
  });

  return (
    <section
      ref={sectionRef}
      id="top"
      className={styles.main_container}
      aria-labelledby="hero-title"
    >
      <div className={styles.container}>
        <div
          className={cx(styles.ambient_orb, motion.pulse_glow)}
          aria-hidden="true"
        />
        <div className={styles.scene} data-visible={isVisible} aria-hidden="true">
          <div
            ref={skylineBackRef}
            className={cx(styles.skyline_back, motion.parallax_layer)}
          >
            {skylineBack.map((tower, index) => (
              <span
                key={`skyline-back-${index}`}
                className={cx(styles.tower, styles.tower_back)}
                style={towerStyle(tower)}
              />
            ))}
          </div>

          <div
            ref={skylineFrontRef}
            className={cx(styles.skyline_front, motion.parallax_layer)}
          >
            {skylineFront.map((tower, index) => (
              <span
                key={`skyline-front-${index}`}
                className={cx(styles.tower, styles.tower_front)}
                style={towerStyle(tower)}
              />
            ))}
          </div>

          <div
            ref={craneRef}
            className={cx(styles.crane, motion.parallax_layer)}
          >
            <span className={styles.crane_tower} />
            <span className={styles.crane_arm} />
            <span className={styles.crane_counter} />
            <span className={styles.crane_cable} />
            <span className={styles.crane_hook} />
          </div>
        </div>

        <div className={styles.copy}>
          <p
            className={cx(styles.eyebrow, motion.reveal_up)}
            data-visible={isVisible}
            style={delayStyle(40)}
          >
            {companyInfo.tagline}
          </p>
          <h1
            id="hero-title"
            className={cx(styles.title, motion.reveal_up)}
            data-visible={isVisible}
            style={delayStyle(120)}
          >
            Built to keep properties safe, polished and ready for business.
          </h1>
          <p
            className={cx(styles.description, motion.reveal_up)}
            data-visible={isVisible}
            style={delayStyle(190)}
          >
            {companyInfo.name} helps property owners and facility teams improve
            exterior presentation, site safety and day-to-day reliability with
            responsive maintenance and construction support in Barrie, Ontario.
          </p>

          <div
            className={cx(styles.actions, motion.reveal_up)}
            data-visible={isVisible}
            style={delayStyle(260)}
          >
            <a href="#contact" className={styles.primary_button}>
              Request a consultation
            </a>
            <a href="#services" className={styles.secondary_button}>
              Explore services
            </a>
          </div>

          <ul className={styles.highlight_list}>
            {heroHighlights.map((item, index) => (
              <li
                key={item}
                className={cx(styles.highlight_item, motion.reveal_up)}
                data-visible={isVisible}
                style={delayStyle(320 + index * 90)}
              >
                {item}
              </li>
            ))}
          </ul>

          <div className={styles.stats_grid}>
            {heroStats.map(({ value, label }, index) => (
              <article
                key={label}
                className={cx(styles.stat_card, motion.reveal_scale)}
                data-visible={isVisible}
                style={delayStyle(470 + index * 120)}
              >
                <strong className={styles.stat_value}>{value}</strong>
                <p className={styles.stat_label}>{label}</p>
              </article>
            ))}
          </div>
        </div>

        <div
          ref={mediaRef}
          className={cx(
            styles.media_shell,
            motion.parallax_layer,
            motion.reveal_right
          )}
          data-visible={isVisible}
          style={delayStyle(220)}
        >
          <div className={styles.media_frame}>
            <img
              className={styles.hero_image}
              src={HeroImage}
              alt="Commercial construction and maintenance team on site"
              fetchPriority="high"
            />
            <div className={styles.image_tint} aria-hidden="true" />
          </div>

          <article
            ref={primaryCardRef}
            className={cx(
              styles.floating_card_primary,
              motion.parallax_layer,
              motion.reveal_scale,
              motion.sheen_overlay
            )}
            data-visible={isVisible}
            style={delayStyle(380)}
          >
            <img
              src={LinePainting}
              alt=""
              aria-hidden="true"
              className={styles.floating_image}
            />
            <div className={styles.floating_content}>
              <span className={styles.floating_label}>Traffic clarity</span>
              <strong className={styles.floating_title}>Precise line painting</strong>
            </div>
          </article>

          <article
            ref={secondaryCardRef}
            className={cx(
              styles.floating_card_secondary,
              motion.parallax_layer,
              motion.reveal_scale
            )}
            data-visible={isVisible}
            style={delayStyle(470)}
          >
            <img
              src={SnowRemoval}
              alt=""
              aria-hidden="true"
              className={styles.floating_image}
            />
            <div className={styles.floating_content}>
              <span className={styles.floating_label}>Seasonal readiness</span>
              <strong className={styles.floating_title}>Fast winter response</strong>
            </div>
          </article>
        </div>
      </div>

      <div className={styles.trust_band}>
        <div
          className={cx(styles.trust_band_inner, motion.reveal_up)}
          data-visible={isVisible}
          style={delayStyle(620)}
        >
          <span className={styles.trust_label}>What we help protect</span>
          <div className={styles.trust_items}>
            <span>Parking lots</span>
            <span>Entrances and walkways</span>
            <span>Building exteriors</span>
            <span>Seasonal access routes</span>
          </div>
        </div>
      </div>
    </section>
  );
}
