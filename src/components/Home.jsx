// import { useState } from "react";
import styles from "../styles/Home.module.css";
import model from "../assets/model.png";

function Home() {
  return (
    <div className={styles.main}>
      <img className={styles.photo} src={model}></img>
      <h1>Protect The Planet / Live To Explore</h1>
      <p>
        Step into the journey of your life with our stylish jeans and sneakers.{" "}
      </p>
      <p>
        Whether you&apos;re chasing waves or dreams, embrace the adventure in
        every step.
      </p>
      <p>Welcome to Fictional Store, where fashion meets freedom.</p>
    </div>
  );
}

export default Home;
