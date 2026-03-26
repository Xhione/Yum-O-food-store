export function renderCategories(categories) {
  const html = categories
    .map((category) => {
      return `<option value="${category}">${category}</option>`;
    })
    .join("");

  const selectCategory = document.querySelector(".category");
  selectCategory.insertAdjacentHTML("beforeend", html);
}
