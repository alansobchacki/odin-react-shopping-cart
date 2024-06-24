import { useState } from "react";

// eslint-disable-next-line react/prop-types
function Listing({ name, price, onAdd, onRemove, setCartItems }) {
  const [listingCount, setListingCount] = useState(0);

  function handleAddClick() {
    // Its count goes up by 1
    setListingCount(listingCount + 1);

    setCartItems((prevCartItems) => {
      // Check if the item was already added to cartItems
      const itemIndex = prevCartItems.findIndex((item) => item.name === name);

      // If the item was already added, we update its price and count values
      if (itemIndex !== -1) {
        return prevCartItems.map((item, index) =>
          index === itemIndex
            ? { ...item, price: item.price + price, count: item.count + 1 }
            : item
        );
      }

      // If the item was not added, add it to the cart
      return [
        ...prevCartItems,
        { name: name, count: listingCount + 1, price: price },
      ];
    });

    // Then the shopping cart counter is updated.
    onAdd();
  }

  function handleRemoveClick() {
    if (listingCount >= 0) {
      setListingCount(listingCount - 1);
      onRemove();
    }
  }

  return (
    <div>
      <p>{name}</p>
      <p>{price}</p>
      <p>Number of items you bought: {listingCount}</p>
      <button onClick={handleAddClick}>+</button>
      <button onClick={handleRemoveClick}>-</button>
    </div>
  );
}

export default Listing;
