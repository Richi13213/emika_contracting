import { ServiceCardData } from "@typing/props";
import * as styles from "./ServiceCard.styles";

export default function ServiceCard({
  eyebrow,
  title,
  description,
  image,
}: ServiceCardData) {
  return (
    <article className={styles.card}>
      <div className={styles.image_wrap}>
        <img
          {...image}
          className={styles.image}
          loading="lazy"
          decoding="async"
        />
        <div className={styles.image_scrim} aria-hidden="true" />
      </div>

      <div className={styles.text_card}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{description}</p>
        <div className={styles.footer_row}>
          <span className={styles.footer_text}>Commercial site scope</span>
          <span className={styles.footer_mark}>+</span>
        </div>
      </div>
    </article>
  );
}
