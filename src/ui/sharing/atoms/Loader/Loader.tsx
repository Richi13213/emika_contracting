import * as styles from "./Loader.styles";

export default function Loader() {
  return (
    <div className={styles.container}>
      <h2 className={styles.loader}>Loading</h2>
      <div className="loader"></div>
    </div>
  )
}
