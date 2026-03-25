export const state = {
  products: [],
};

export const loadData = async function () {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();

  state.products = data.products;
  console.log(state.products);
};
