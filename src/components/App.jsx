import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  function handleAddClick() {
    setCartCount(cartCount + 1);
  }

  function handleRemoveClick() {
    if (cartCount - 1 >= 0) {
      setCartCount(cartCount - 1);
    }
  }

  return (
    <>
      <Navbar cart={cartCount} />
      <Outlet
        context={{
          handleAddClick,
          handleRemoveClick,
          cartCount,
          setCartItems,
          cartItems,
        }}
      />
      <Footer />
    </>
  );
}

export default App;
