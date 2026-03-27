import * as model from "./model.js";
import { renderProducts } from "./views/productsView";
import { renderCategories } from "./views/filterCategoriesView";
import { addHandlerCategoryChange } from "./views/filterCategoriesView";

console.log("Working");

const init = async function () {
  await model.loadData();
  renderProducts(model.state.products);
  renderCategories(model.state.categories);
  addHandlerCategoryChange(categorySelect);
};
function categorySelect(category) {
  const filteredProducts = model.filterByCategory(category);
  renderProducts(filteredProducts);
}

init();
