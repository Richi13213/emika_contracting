import * as styles from "./Loader.styles";

export default function Loader() {
  return (
    <div className={styles.container} role="status" aria-live="polite">
      <div className={styles.panel}>
        <div className={styles.spinner}></div>
        <p className={styles.loader}>Sending your request...</p>
      </div>
    </div>
  )
}
