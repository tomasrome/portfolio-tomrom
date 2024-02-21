import styles from "./Home.module.css";
import foto from "../../assets/foto3.webp";

export default function Home() {
  const sr = ScrollReveal({
    distance: "65px",
    duration: 2600,
    delay: 450,
    reset: true,
  });

  sr.reveal("#tr", { delay: 200, origin: "left" });

  return (
    <section className={styles.home}>
      <h1 className={styles.tr} id="tr">
        Tomás Romero - <strong>Desarrollador Full Stack</strong>
      </h1>
      <p className={styles.parrafo}>
        ¡Hola! Soy un apasionado Full Stack Developer con una sólida experiencia
        en el diseño y desarrollo de soluciones web completas. Mi enfoque va más
        allá del simple código, me esfuerzo por crear experiencias digitales
        intuitivas y eficientes. <br />
        Con habilidades tanto en el frontend como en el backend, disfruto
        traduciendo ideas creativas en aplicaciones funcionales y robustas. Mi
        compromiso con la mejora continua y la resolución de problemas me
        impulsa a mantenerme actualizado con las últimas tecnologías.
        <br /> Bienvenido a mi portfolio, donde puedes explorar proyectos que
        reflejan mi dedicación a la excelencia técnica y mi pasión por construir
        soluciones innovadoras.
      </p>
    </section>
  );
}
