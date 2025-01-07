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
              href="mailto:info@emikaconstruction.ca"
              className={styles.info_link}
            >
              info@emikaconstruction.ca
            </a>
          </p>
          <p className={styles.info_text}>
            <span>Phone:</span> +1 6478015900
          </p>
        </div>
      </div>
    </footer>
  );
}
