import { Route, Routes } from "react-router-dom";
import styles from "./Navbar.module.css";
import CV from "../../assets/CV - Tomás Romero.pdf";
import logo from "../../assets/trlogo.png";

function Navbar() {
  return (
    <section className={styles.navbar}>
      <div className={styles.logoDiv}>
        <img src={logo} className={styles.logo} alt="" />
        <span>&#60;&#47;Tomás Romero / </span>
        <span className={styles.effect}>Full-Stack Developer</span>
      </div>
      <ul className={styles.menu}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#proyectos">Proyectos</a>
        </li>
        <li>
          <a href="#tech">Tecnologias</a>
        </li>
        <li>
          <a href="#tech">Contacto</a>
        </li>
      </ul>
      <ul className={styles.linksContainer}>
        <li>
          <a href={CV} download="CV - Tomás Romero - Full Stack Developer">
            <button className={styles.btnCv}>
              Descargar CV
              <svg
                className={styles.svgDownload}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                aria-label="download"
              >
                <path
                  fill="currentColor"
                  d="m12 16l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11zm-6 4q-.825 0-1.412-.587T4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413T18 20z"
                ></path>
              </svg>
            </button>
          </a>

          <a
            href="https://www.linkedin.com/in/tom%C3%A1s-alberto-romero-07b117212/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className={styles.links}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              version="1.1"
            >
              <title>linkedin</title>
              <path d="M28.778 1.004h-25.56c-0.008-0-0.017-0-0.027-0-1.199 0-2.172 0.964-2.186 2.159v25.672c0.014 1.196 0.987 2.161 2.186 2.161 0.010 0 0.019-0 0.029-0h25.555c0.008 0 0.018 0 0.028 0 1.2 0 2.175-0.963 2.194-2.159l0-0.002v-25.67c-0.019-1.197-0.994-2.161-2.195-2.161-0.010 0-0.019 0-0.029 0h0.001zM9.9 26.562h-4.454v-14.311h4.454zM7.674 10.293c-1.425 0-2.579-1.155-2.579-2.579s1.155-2.579 2.579-2.579c1.424 0 2.579 1.154 2.579 2.578v0c0 0.001 0 0.002 0 0.004 0 1.423-1.154 2.577-2.577 2.577-0.001 0-0.002 0-0.003 0h0zM26.556 26.562h-4.441v-6.959c0-1.66-0.034-3.795-2.314-3.795-2.316 0-2.669 1.806-2.669 3.673v7.082h-4.441v-14.311h4.266v1.951h0.058c0.828-1.395 2.326-2.315 4.039-2.315 0.061 0 0.121 0.001 0.181 0.003l-0.009-0c4.5 0 5.332 2.962 5.332 6.817v7.855z" />
            </svg>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/tomasrome"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={styles.links}
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Navbar;
