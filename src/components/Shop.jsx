import { useOutletContext } from "react-router-dom";
import { products } from "../data";
import ShopListing from "./ShopListing";
import styles from "../styles/Shop.module.css";

function Shop() {
  const { handleAddClick, handleRemoveClick, setCartItems } =
    useOutletContext();

  return (
    <div className={styles.main}>
      {products.map((listing) => (
        <ShopListing
          key={listing.id}
          name={listing.name}
          price={listing.price}
          onAdd={handleAddClick}
          onRemove={handleRemoveClick}
          setCartItems={setCartItems}
        />
      ))}
    </div>
  );
}

export default Shop;
