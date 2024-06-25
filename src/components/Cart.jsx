import { useOutletContext } from "react-router-dom";
import CartListing from "./CartListing";

function Cart() {
  const { handleShopAddClick, handleShopRemoveClick, cartItems, setCartItems } =
    useOutletContext();

  let totalPrice = 0;

  cartItems.forEach((item) => {
    totalPrice += item.price;
  });

  return (
    <>
      <p>Your stuff:</p>
      {cartItems.map((item, index) => (
        <CartListing
          key={index}
          id={item.id}
          name={item.name}
          price={item.price}
          count={item.count}
          onAdd={handleShopAddClick}
          onRemove={handleShopRemoveClick}
          setCartItems={setCartItems}
        />
      ))}

      <p>Total price: {totalPrice}</p>
      <button>Checkout</button>
    </>
  );
}

export default Cart;
