import styles from "../styles/Shop.module.css";

function About() {
  return (
    <div className={styles.main}>
      <h1>Hello!</h1>
      <p>
        You&apos;re here either because you clicked on the <i>About</i> button
        in the nav bar...{" "}
      </p>
      <p>
        Or because you actually bothered to test how the shopping cart works!
      </p>
      <p>Either way, I&apos;m glad to have you here.</p>
      <p>
        This is a fictional e-commerce store, created as part of a course I'm
        taking. So, if you were hoping to buy something, sorry to burst your
        bubble!
      </p>
      <p>
        But hey, feel free to browse around, add items to your cart, and enjoy
        the experience. Who knows, maybe you&apos;ll find some inspiration for
        your own projects!
      </p>
      <p>Thanks for stopping by, and happy coding!</p>
    </div>
  );
}

export default About;
