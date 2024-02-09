import styles from "./Projects.module.css";
import tomi from "../../assets/tomi-port.webp";
import actor from "../../assets/actor.webp";

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
              <img
                className={styles.cardImg}
                src={actor}
                alt="Portfolio Actor"
              />
              <img className={styles.tomi} src={tomi} alt="Portfolio Actor" />
              <ul className={styles.language}>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
              </ul>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consequatur eius dolore incidunt pariatur deserunt nostrum quam.
                Voluptate sed fugit odio amet? Temporibus explicabo expedita,
                asperiores sunt dolorum reprehenderit modi sed?
              </p>
              <div className={styles.btnContainer}>
                <button>Web</button>
                <button>Codigo</button>
              </div>
            </div>
          </div>
          <div className={styles.cardProject}>
            <div className={styles.card}>
              <img
                className={styles.cardImg}
                src={actor}
                alt="Portfolio Actor"
              />
              <img className={styles.tomi} src={tomi} alt="Portfolio Actor" />
              <ul className={styles.language}>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
              </ul>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consequatur eius dolore incidunt pariatur deserunt nostrum quam.
                Voluptate sed fugit odio amet? Temporibus explicabo expedita,
                asperiores sunt dolorum reprehenderit modi sed?
              </p>
              <div className={styles.btnContainer}>
                <button>Web</button>
                <button>Codigo</button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
