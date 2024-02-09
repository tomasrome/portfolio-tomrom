import styles from "./TechIcons.module.css";

function TechIcons({ image, text, color }) {
  return (
    <div className={styles.techIcon}>
      <div style={{ color: `${color}` }} className={styles.container}>
        <img className={styles.image} src={image} alt="" />
        <span
          className={styles.tooltip}
          style={{ border: `2px solid ${color}`, color: { color } }}
        >
          {text}
        </span>
      </div>
    </div>
  );
}

export default TechIcons;
