import { ServiceCardData } from "@typing/props";
import * as styles from "./ServiceCard.styles";

export default function ServiceCard({
  title,
  image,
}: ServiceCardData) {
  return (
    <div className={styles.card}>
      <div className={styles.text_card}>
        <h5 className={styles.title}>{title}</h5>
      </div>
      <img {...image} className={styles.image} />
    </div>
  );
}
