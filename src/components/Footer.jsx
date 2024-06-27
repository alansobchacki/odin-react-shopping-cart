import styles from "../styles/Footer.module.css";
import githubLogo from "../assets/github-mark-white.png";

function Footer() {
  return (
    <div className={styles.footer}>
      <p>
        This is a fictional store built as an assignment from The Odin Project.
      </p>
      <p>https://github.com/alansobchacki</p>
      <img src={githubLogo} className={styles.logo}></img>
    </div>
  );
}

export default Footer;
