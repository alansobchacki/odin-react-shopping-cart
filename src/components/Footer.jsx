import styles from "../styles/Footer.module.css";
import githubLogo from "../assets/github-mark-white.png";
import linkedinLogo from "../assets/linkedin.png";

function Footer() {
  return (
    <div id={styles.footer}>
      <p>
        This is a fictional store built with React as an assignment from{" "}
        <a href="https://www.theodinproject.com/dashboard">The Odin Project.</a>
      </p>
      <div id={styles.logos}>
        <a href="https://github.com/alansobchacki" target="_blank">
          <img src={githubLogo} id={styles.github} alt="GitHub Profile" />
        </a>
        <a
          href="https://www.linkedin.com/in/alansobchacki/?locale=en_US"
          target="_blank"
        >
          <img src={linkedinLogo} id={styles.linkedin} alt="LinkedIn Profile" />
        </a>
      </div>
      <p>&copy; 2024 Alan Sobchacki. All rights reserved.</p>
    </div>
  );
}

export default Footer;
