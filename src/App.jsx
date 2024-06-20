// import { useState } from 'react'
// import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import styles from "./styles/App.module.css";

function App() {
  return (
    <div className={styles.main}>
      <Navbar />
      <h1>[This is the main page!]</h1>
      <p>[Stuff inside brackets are placeholders!]</p>
    </div>
  );
}

export default App;
