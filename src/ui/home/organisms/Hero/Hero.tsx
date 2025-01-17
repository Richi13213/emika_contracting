import * as styles from "./Hero.styles";
function scrollToSmoothly(elementId: string) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });

  }
}
export default function Hero() {
  return (
    <section className={styles.main_container}>
      <div className={styles.container}>
        <article className={styles.article}>
          <h1 className={styles.title}>
            Welcome to EMIKA
            <br />
            Construction
          </h1>
          <h3 className={styles.subtitle}>
            Your Trusted Source for Expert
            <br />
            Construction and Maintenance
            <br />
            Services
          </h3>
          <button onClick={() => scrollToSmoothly("contact")} className={styles.button}>Learn more</button>
        </article>
      </div>
    </section>
  );
}
