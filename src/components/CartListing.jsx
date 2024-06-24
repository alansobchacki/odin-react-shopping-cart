// import { useState } from "react";

function cartListing({ name, price, count, onAdd, onRemove }) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Price: {price}</p>
      <p>Item count: {count}</p>
      <button>+</button>
      <button>-</button>
    </div>
  );
}

export default cartListing;
