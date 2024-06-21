import { products } from "../data";
import Listing from "./Listing";
import styles from "../styles/Shop.module.css";

function Shop() {
  return (
    <div className={styles.main}>
      {products.map((listing) => (
        <Listing key={listing.id} name={listing.name} />
      ))}
    </div>
  );
}

export default Shop;
