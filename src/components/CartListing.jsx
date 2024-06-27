function cartListing({
  id,
  name,
  price,
  count,
  onAdd,
  onRemove,
  setCartItems,
}) {
  const initialPrice = 2;

  function handleCartAddClick() {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              count: item.count + 1,
              price: item.price + initialPrice,
            }
          : item
      )
    );

    onAdd();
  }

  function handleCartRemoveClick() {
    setCartItems((prevItems) => {
      const itemIndex = prevItems.findIndex((item) => item.name === name);

      if (itemIndex !== -1) {
        if (prevItems[itemIndex].count > 1) {
          return prevItems.map((item) =>
            item.id === id
              ? {
                  ...item,
                  price: item.price - initialPrice,
                  count: item.count - 1,
                }
              : item
          );
        } else {
          return prevItems.filter((_, index) => index !== itemIndex);
        }
      }
    });

    onRemove();
  }

  return (
    <div>
      <p>Name: {name}</p>
      <p>Price: {price.toFixed(2)}</p>
      <p>Item count: {count}</p>
      <button onClick={handleCartAddClick}>+</button>
      <button onClick={handleCartRemoveClick}>-</button>
    </div>
  );
}

export default cartListing;
