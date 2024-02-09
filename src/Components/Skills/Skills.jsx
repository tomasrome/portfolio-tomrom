import styles from "./Skills.module.css";
import mysql from "../../assets/Mysql.svg";
import js from "../../assets/js.svg";
import html from "../../assets/html.svg";
import css from "../../assets/css.svg";
import node from "../../assets/node.svg";
import react from "../../assets/react.svg";
import git from "../../assets/git.svg";
import firebase from "../../assets/firebase.svg";
import sqlserver from "../../assets/sqlserver.svg";

function Skills() {
  return (
    <section className={styles.sectionTech}>
      <article className={styles.skillsContainer}>
        <h1 id="tech" className={styles.tech}>
          -Tecnologias-
        </h1>
        <div className={styles.skillsList}>
          <div>
            <div className={styles.tooltipBox}>
              <img className={styles.html} src={html} alt=" HTML" />
              <span className={styles.tooltipTextHtml}>HTML</span>
            </div>
          </div>
          <div>
            <div className={styles.tooltipBox}>
              <img className={styles.css} src={css} alt="CSS" />
              <span className={styles.tooltipTextCss}>CSS</span>
            </div>
          </div>
          <div>
            <div className={styles.tooltipBox}>
              <img className={styles.js} src={js} alt="JavaScript" />
              <span className={styles.tooltipTextJs}>JavaScript</span>
            </div>
          </div>
          <div>
            <div className={styles.tooltipBox}>
              <img className={styles.react} src={react} alt="React" />
              <span className={styles.tooltipTextReact}>React</span>
            </div>
          </div>
          <div>
            <div className={styles.tooltipBox}>
              <img className={styles.firebase} src={firebase} alt="Firebase" />
              <span className={styles.tooltipTextFire}>Firebase</span>
            </div>
          </div>
          <div>
            <div className={styles.tooltipBox}>
              <img className={styles.node} src={node} alt="NodeJs" />
              <span className={styles.tooltipTextNode}>NodeJs</span>
            </div>
          </div>
          <div>
            <div className={styles.tooltipBox}>
              <img className={styles.git} src={git} alt="Git" />
              <span className={styles.tooltipTextGit}>Git</span>
            </div>
          </div>
          <div>
            <div className={styles.tooltipBox}>
              <img className={styles.firebase} src={firebase} alt="Firebase" />
              <span className={styles.tooltipTextFire}>Firebase</span>
            </div>
          </div>
          <div>
            <div className={styles.tooltipBox}>
              <img className={styles.css} src={css} alt="CSS" />
              <span className={styles.tooltipTextCss}>CSS</span>
            </div>
          </div>
          <div>
            <div className={styles.tooltipBox}>
              <img className={styles.Mysql} src={mysql} alt="MySQL" />
              <span className={styles.tooltipTextMysql}>MySQL</span>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Skills;
