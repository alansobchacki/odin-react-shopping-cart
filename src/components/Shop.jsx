import { useOutletContext } from "react-router-dom";
import { products } from "../data";
import ShopListing from "./ShopListing";
import styles from "../styles/Shop.module.css";

function Shop() {
  const { handleShopAddClick, handleShopRemoveClick, setCartItems } =
    useOutletContext();

  return (
    <div className={styles.main}>
      {products.map((listing) => (
        <ShopListing
          key={listing.id}
          id={listing.id}
          name={listing.name}
          price={listing.price}
          onAdd={handleShopAddClick}
          onRemove={handleShopRemoveClick}
          setCartItems={setCartItems}
        />
      ))}
    </div>
  );
}

export default Shop;
