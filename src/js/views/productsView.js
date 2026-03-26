const productContainer = document.querySelector(".products");
export const renderProducts = function (products) {
  const html = products
    .map((prod) => {
      return `<article class="product-card">
                <img
                  src=" ${prod?.thumbnail}"
                  alt="Product image"
                  class="product-img"
                />
                <div class="product-content">
                  <p class="product-sale">SALE</p>
                  <h3 class="product-name"> ${prod?.title}</h3>
                  <p class="product-category"> ${prod?.category}</p>
                  <p class="product-description">
                   ${prod?.description}
                  </p>

                  <div class="product-footer">
                    <button class="btn product-btn">Add to cart</button>
                    <p class="product-price">${+prod?.price}</p>
                  </div>
                </div>
              </article>`;
    })
    .join("");
  clear();
  productContainer.insertAdjacentHTML("beforeend", html);
};

const clear = function () {
  productContainer.innerHTML = "";
};
