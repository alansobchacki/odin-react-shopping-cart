/* eslint-disable react/prop-types */
import { useState } from "react";

function ShopListing({ id, name, price, onAdd, onRemove, setCartItems }) {
  const [listingCount, setShopListingCount] = useState(0);

  // Handles the + button on items in our shop. When clicked, it will:
  // 1 - Update the number in our shopping cart icon by += 1.
  // 2 - Check if our shopping cart already has that item. If so, increase its count and value.
  // 3 - Otherwise, add this new product to our shopping cart.
  function handleAddClick() {
    setShopListingCount(listingCount + 1);

    setCartItems((prevCartItems) => {
      const itemIndex = prevCartItems.findIndex((item) => item.name === name);

      if (itemIndex !== -1) {
        return prevCartItems.map((item, index) =>
          index === itemIndex
            ? {
                ...item,
                id: id,
                price: item.price + price,
                count: item.count + 1,
              }
            : item
        );
      }

      return [
        ...prevCartItems,
        { name: name, id: id, count: listingCount + 1, price: price },
      ];
    });

    onAdd();
  }

  // Handles the - button on items in our shop. When clicked, it will:
  // 1 - Update the number in our shopping cart icon by -= 1. Will not run if its 0.
  // 2 - Check if our shopping cart already has that item. If so, decrease its count and value.
  // 3 - If the item is decreased to 0, it is removed from our shopping cart.
  function handleRemoveClick() {
    if (listingCount > 0) {
      setShopListingCount(listingCount - 1);

      setCartItems((prevCartItems) => {
        const itemIndex = prevCartItems.findIndex((item) => item.name === name);

        if (itemIndex !== -1) {
          if (prevCartItems[itemIndex].count > 1) {
            return prevCartItems.map((item, index) =>
              index === itemIndex
                ? { ...item, price: item.price - price, count: item.count - 1 }
                : item
            );
          } else {
            return prevCartItems.filter((_, index) => index !== itemIndex);
          }
        }

        return prevCartItems;
      });

      onRemove();
    }
  }

  return (
    <div>
      <p>{name}</p>
      <p>{price.toFixed(2)}</p>
      <p>Number of items you bought: {listingCount}</p>
      <button onClick={handleAddClick}>+</button>
      <button onClick={handleRemoveClick}>-</button>
    </div>
  );
}

export default ShopListing;
