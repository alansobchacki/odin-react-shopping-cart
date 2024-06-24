import { useState } from "react";

// eslint-disable-next-line react/prop-types
function Listing({ name, price, onAdd, onRemove, setCartItems }) {
  const [listingCount, setListingCount] = useState(0);

  function handleAddClick() {
    // Increment the listing count
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
    if (listingCount > 0) {
      // Decrement the listing count
      setListingCount(listingCount - 1);

      // Use the functional form of setCartItems
      setCartItems((prevCartItems) => {
        // Check if the item already exists in the cart
        const itemIndex = prevCartItems.findIndex((item) => item.name === name);

        if (itemIndex !== -1) {
          // If the item count is greater than 1, decrease its count and adjust the price
          if (prevCartItems[itemIndex].count > 1) {
            return prevCartItems.map((item, index) =>
              index === itemIndex
                ? { ...item, price: item.price - price, count: item.count - 1 }
                : item
            );
          } else {
            // If the item count is 1, remove the item from the cart
            return prevCartItems.filter((_, index) => index !== itemIndex);
          }
        }

        // If the item is not found, return the previous state
        return prevCartItems;
      });

      // Then the shopping cart counter is updated.
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
