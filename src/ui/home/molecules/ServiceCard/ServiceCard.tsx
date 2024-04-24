import { ServiceCardData } from "@typing/props";
import * as styles from "./ServiceCard.styles";

export default function ServiceCard({
  title,
  image,
  content,
}: ServiceCardData) {
  return (
    <div className={styles.card}>
      <h5 className={styles.title}>{title}</h5>
      <img {...image} className={styles.image} />
      <p className={styles.text}>{content}</p>
    </div>
  );
}
