export const state = {
  products: [],
  categories: [],
};

export const loadData = async function () {
  const res = await fetch("https://dummyjson.com/products");

  const data = await res.json();

  state.products = data.products;

  state.categories = [
    ...new Set(data.products.map((product) => product.category)),
  ];
  console.log(state.products);
  console.log(state.categories);
};

export function filterByCategory(category) {
  return category === "all"
    ? state.products
    : state.products.filter((option) => option.category == category);
}
