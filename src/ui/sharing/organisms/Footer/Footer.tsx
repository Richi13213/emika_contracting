import * as styles from "./Footer.styles";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.logo}>EMIKA</p>
        <div className={styles.info_container("info")}>
          <h4 className={styles.info_title}>Contact information</h4>
          <p className={styles.info_text}>
            <span>Address:</span> Barrie, Ontario, Canadá
          </p>
          <p className={styles.info_text}>
            <span>Email:</span>{" "}
            <a
              href="mailto:info@emikacontracting.ca"
              className={styles.info_link}
            >
              info@emikacontracting.ca
            </a>
          </p>
          <p className={styles.info_text}>
            <span>Phone:</span> +1 705-309-9360
          </p>
        </div>
        <div className={styles.info_container("follow")}>
          <h4 className={styles.info_title}>Follow us</h4>
          <p className={styles.info_text}>
            <a className={styles.info_link} href="https://facebook.com">
              Facebook
            </a>
          </p>
        </div>
        <div className={styles.info_container("legal")}>
          <h4 className={styles.info_title}>Legal information</h4>
          <a className={styles.info_link} href="#">
            Privacy policies
          </a>
          <a className={styles.info_link} href="#">
            Terms and conditions
          </a>
          <a className={styles.info_link} href="#">
            Disclaimer
          </a>
        </div>
      </div>
    </footer>
  );
}
