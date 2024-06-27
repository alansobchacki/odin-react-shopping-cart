// We fetch our data from FakeStore API here
// We combine two API calls to get both women and men's clothing items

async function getProducts() {
  try {
    const [menResponse, womenResponse] = await Promise.all([
      fetch("https://fakestoreapi.com/products/category/men's clothing"),
      fetch("https://fakestoreapi.com/products/category/women's clothing"),
    ]);

    const [menProducts, womenProducts] = await Promise.all([
      menResponse.json(),
      womenResponse.json(),
    ]);

    const products = [...menProducts, ...womenProducts];
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export default getProducts;
