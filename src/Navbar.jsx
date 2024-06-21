import { Link } from "react-router-dom";
import styles from "./styles/Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <h2 className={styles.title}>[SweatshopLogotype]</h2>

      <nav className={styles.items}>
        <ul>
          <li className={styles.item}>
            <Link to="profile">Home</Link>
          </li>
          <li className={styles.item}>
            <Link to="profile">Shop</Link>
          </li>
          <li className={styles.item}>
            <Link to="profile">About</Link>
          </li>
        </ul>
      </nav>

      <h2 className={styles.cart}>[Cart]</h2>

      {/* only shows on mobile devices */}
      <h2 className={styles.hamburger}>[=]</h2>
    </div>
  );
}

export default Navbar;
