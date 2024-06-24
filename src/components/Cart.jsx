import { useOutletContext } from "react-router-dom";
import CartListing from "./CartListing";

function Cart() {
  const { handleAddClick, handleRemoveClick, cartCount, cartItems } =
    useOutletContext();

  let totalPrice = 0;

  cartItems.forEach((item) => {
    totalPrice += item.price;
  });

  return (
    <>
      <p>ooooo you bought: {cartCount}</p>
      <p>Your stuff:</p>
      {cartItems.map((item, index) => (
        <CartListing
          key={index}
          name={item.name}
          price={item.price}
          count={item.count}
          onAdd={handleAddClick}
          onRemove={handleRemoveClick}
        />
      ))}

      <p>Total price: {totalPrice}</p>
      <button>Checkout</button>
    </>
  );
}

export default Cart;
