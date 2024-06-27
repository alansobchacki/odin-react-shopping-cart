async function getProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products?limit=12");
    const products = await response.json();
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export default getProducts;
