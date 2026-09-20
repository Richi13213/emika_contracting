import type { CSSProperties } from "react";
import { cx } from "@emotion/css";
import { companyInfo, navigationItems } from "@data/landing";
import { useReveal } from "@hooks";
import * as motion from "@styles/motion";
import * as styles from "./Footer.styles";

const delayStyle = (delay: number) =>
  ({
    "--delay": `${delay}ms`,
  }) as CSSProperties;

export default function Footer() {
  const year = new Date().getFullYear();
  const { ref, isVisible } = useReveal<HTMLElement>({
    threshold: 0.1,
  });

  return (
    <footer ref={ref} className={styles.footer}>
      <div className={styles.container}>
        <div
          className={cx(styles.ambient_orb, motion.drift_slow)}
          aria-hidden="true"
        />

        <div
          className={cx(styles.brand_block, motion.reveal_up)}
          data-visible={isVisible}
          style={delayStyle(40)}
        >
          <a href="#top" className={styles.logo}>
            {companyInfo.name}
          </a>
          <p className={styles.description}>
            Built for properties that need dependable execution, clean curb
            appeal and maintenance support that respects daily operations.
          </p>
        </div>

        <div className={styles.columns}>
          <div
            className={cx(styles.column, motion.reveal_up)}
            data-visible={isVisible}
            style={delayStyle(140)}
          >
            <h2 className={styles.info_title}>Explore</h2>
            {navigationItems.map(({ href, label, section }) => (
              <a key={section} href={href} className={styles.info_link}>
                {label}
              </a>
            ))}
          </div>

          <div
            className={cx(styles.column, motion.reveal_up)}
            data-visible={isVisible}
            style={delayStyle(220)}
          >
            <h2 className={styles.info_title}>Reach us</h2>
            <a
              href={`mailto:${companyInfo.email}`}
              className={styles.info_link}
            >
              {companyInfo.email}
            </a>
            <a href={companyInfo.phoneHref} className={styles.info_link}>
              {companyInfo.phoneDisplay}
            </a>
            <p className={styles.info_text}>{companyInfo.location}</p>
          </div>
        </div>

        <div
          className={cx(styles.bottom_bar, motion.reveal_up)}
          data-visible={isVisible}
          style={delayStyle(300)}
        >
          <p className={styles.bottom_text}>
            © {year} {companyInfo.name}. Commercial construction and
            maintenance in Barrie, Ontario.
          </p>
        </div>
      </div>
    </footer>
  );
}
