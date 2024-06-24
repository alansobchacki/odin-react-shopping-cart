import { useOutletContext } from "react-router-dom";

function Cart() {
  const { cartCount, cartItems } = useOutletContext();

  let totalPrice = 0;

  cartItems.forEach((item) => {
    totalPrice += item.price;
  });

  return (
    <>
      <p>ooooo you bought: {cartCount}</p>
      <p>Your stuff:</p>
      {cartItems.map((item, index) => (
        <div key={index}>
          <p>{item.name}</p>
          <p>{item.price}</p>
          <p>{item.count}</p>
        </div>
      ))}

      <p>Total price: {totalPrice}</p>
    </>
  );
}

export default Cart;
