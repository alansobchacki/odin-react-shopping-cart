import { products } from "../data";

function cartListing({
  id,
  name,
  price,
  count,
  onAdd,
  onRemove,
  setCartItems,
}) {
  function handleCartAddClick() {
    console.log(id);

    onAdd();
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              count: item.count + 1,
              price: item.price + products[id].price,
            }
          : item
      )
    );
  }

  function handleCartRemoveClick() {
    onRemove();
    setCartItems((prevItems) => {
      if (prevItems[id].count > 1) {
        return prevItems.map((item) =>
          item.id === id
            ? {
                ...item,
                price: item.price - products[id].price,
                count: item.count - 1,
              }
            : item
        );
      } else {
        return prevItems.filter((_, index) => index !== id);
      }
    });
  }

  return (
    <div>
      <p>Name: {name}</p>
      <p>Price: {price}</p>
      <p>Item count: {count}</p>
      <button onClick={handleCartAddClick}>+</button>
      <button onClick={handleCartRemoveClick}>-</button>
    </div>
  );
}

export default cartListing;
