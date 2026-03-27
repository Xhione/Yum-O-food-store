export function renderCategories(categories) {
  const html = categories
    .map((category) => {
      return `<option value="${category}">${category}</option>`;
    })
    .join("");

  const selectCategory = document.querySelector(".category");
  selectCategory.insertAdjacentHTML("beforeend", html);
}

export function addHandlerCategoryChange(handler) {
  const selectCategory = document.querySelector(".category");
  selectCategory.addEventListener("change", function () {
    handler(this.value);
    // function categorySelect(category) {
    //   const filteredProducts = model.filterByCategory(category);
    //   renderProducts(filteredProducts);
    // }
  });
}
