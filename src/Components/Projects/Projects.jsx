import styles from "./Projects.module.css";
import tomi from "../../assets/img-pro.webp";
import hover from "../../assets/img-hover.webp";
import actor from "../../assets/tomi-port.webp";

export default function Projects() {
  return (
    <section className={styles.sectionProjects}>
      <article className={styles.article}>
        <h2 id="proyectos" className={styles.titulo}>
          MIS PROYECTOS
        </h2>
        <div className={styles.cardSection}>
          <div className={styles.cardProject}>
            <div className={styles.card}>
              <div className={styles.divImg}>
                <img
                  className={styles.cardImg}
                  src={tomi}
                  alt="Portfolio Actor"
                />
                {/*<img
                  className={styles.tomi}
                  src={hover}
                  alt="Portfolio Actor"
                />*/}
                <div className={styles.btnContainer}>
                  <button>Web</button>
                  <button>Codigo</button>
                </div>
              </div>
              <div className={styles.divDes}>
                <ul className={styles.language}>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>React</li>
                </ul>
                <p>
                  Desarrolle un portfolio para destacar la versatilidad,
                  habilidades y experiencia de un talentoso actor.
                  <br /> Desde la presentación de su demo reel hasta una galería
                  de fotos y una sección de biografía, el portfolio ofrece una
                  experiencia inmersiva para los visitantes, permitiéndoles
                  conocer más sobre el actor y su trabajo en la industria del
                  entretenimiento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
