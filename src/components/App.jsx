import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function App() {
  const [cartCount, setCartCount] = useState(0);

  function handleAddProductClick() {
    setCartCount(cartCount + 1);
  }

  function handleRemoveProductClick() {
    if (cartCount - 1 >= 0) {
      setCartCount(cartCount - 1);
    }
  }

  return (
    <>
      <Navbar cart={cartCount} />
      {/* This will render the matched child route (home, shop, about) */}
      <Outlet />
      <button onClick={handleAddProductClick}>Buy more stuff!</button>
      <button onClick={handleRemoveProductClick}>No you gotta consooom!</button>
      <Footer />
    </>
  );
}

export default App;
