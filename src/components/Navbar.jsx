/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import styles from "../styles/Navbar.module.css";

function Navbar({ cart }) {
  return (
    <div id={styles.navbar}>
      <img className={styles.logo} src={logo} />

      <nav className={styles.items}>
        <ul>
          <li className={styles.item}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.item}>
            <Link to="/shop">Shop</Link>
          </li>
          <li className={styles.item}>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <nav className={styles.items}>
        <ul>
          <li className={styles.cart}>
            <Link to="/cart">Cart: {cart}</Link>
          </li>
        </ul>
      </nav>

      {/* only shows on mobile devices */}
      <h2 className={styles.hamburger}>[=]</h2>
    </div>
  );
}

export default Navbar;
