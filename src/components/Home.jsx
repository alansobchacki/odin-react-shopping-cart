import { useNavigate } from "react-router-dom";
import styles from "../styles/Home.module.css";
import logo from "../assets/logo.png";
import model from "../assets/model.png";
import leftDisplay from "../assets/left.png";
import rightDisplay from "../assets/right.png";

function Home() {
  // used to redirect the user to the top of the page, in case they click the bottom "visit our shop" button
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <div id={styles.main}>
      <img id={styles.top} src={model}></img>
      <h1>Protect The Planet / Live To Explore</h1>
      <p>
        Step into the journey of your life with our stylish jeans and sneakers.{" "}
      </p>
      <p>
        Whether you&apos;re chasing waves or dreams, embrace the adventure in
        every step.
      </p>
      <p>Welcome to Fictional Store, where fashion meets freedom.</p>

      <div id={styles.mid}>
        <img className={styles.photo} src={rightDisplay}></img>
        <img className={styles.photo} src={leftDisplay}></img>
      </div>

      <div id={styles.bottom}>
        <button id={styles.buy_now} onClick={() => handleClick("/shop")}>
          Visit Our Shop
        </button>
        <img id={styles.logo} src={logo}></img>
      </div>
    </div>
  );
}

export default Home;
