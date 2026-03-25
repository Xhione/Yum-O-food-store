import { state, loadData } from "./model";
import { renderProducts } from "./views/productsView";
console.log("Working");

const init = async function () {
  await loadData();
  renderProducts(state.products);
};

init();
