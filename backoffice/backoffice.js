function getProduct() {
  request("GET").then((data) => {
    data.forEach((product) => {
      cardsContainer.appendChild(createCard(product, false, true));
      document
        .getElementById(`buttonDelete${product._id}`)
        .addEventListener("click", () => deleteProduct(product._id));
    });
  });
}

function deleteProduct(productId) {
  request("DELETE", productId).then(() => {
    cardsContainer.innerHTML = "";
    getProduct();
  });
}

getProduct();
initEventListener();
