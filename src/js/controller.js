import { state, loadData } from "./model";
import { renderProducts } from "./views/productsView";
import { renderCategories } from "./views/filterCategoriesView";
console.log("Working");

const init = async function () {
  await loadData();
  renderProducts(state.products);
  renderCategories(state.categories);
};

init();
