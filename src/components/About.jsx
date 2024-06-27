import logo from "../assets/logo.png";
import styles from "../styles/About.module.css";

function About() {
  return (
    <div id={styles.main}>
      <div id={styles.wall_of_text}>
        <h1>Hello!</h1>

        <p>
          You&apos;re here either because you clicked on the <i>About</i> button
          in the nav bar...{" "}
        </p>
        <p>
          Or because you actually bothered to test how the shopping cart works!
        </p>
        <p>Either way, I&apos;m glad to have you here.</p>
        <br></br>

        <p>
          If you&apos;re still reading this, you&apos;re probably curious on
          what I used to build this site:
        </p>
        <p>
          This site was built with Vite + React, and for the CSS, I used CSS
          modules and flexbox. <i>Tons</i> of flexbox.
        </p>
        <p>
          There is no back-end, since this is a simple front-end project
          assignment.
        </p>
        <p>
          The models pictures were made with Midjourney, the products were
          fetched from{" "}
          <a href="https://fakestoreapi.com/" target="_blank">
            {" "}
            FakeStore API
          </a>
          , and the store logo was made by myself via Adobe Photoshop.
        </p>
        <br></br>

        <p>And that&apos;s it. Now give me a job or something.</p>
      </div>

      <img id={styles.logo} src={logo}></img>
    </div>
  );
}

export default About;
