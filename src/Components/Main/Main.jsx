import styles from "./Main.module.css";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Home from "../Home/Home";

function Main() {
  return (
    <div className={styles.main}>
      <Home />
      <Projects />
      <Skills />
    </div>
  );
}

export default Main;
