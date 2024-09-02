let products = [];
const dataSearch = document.getElementById("dataSearch");
const searchForm = document.getElementById("searchForm");
const propertiesToSearch = ["name", "brand", "description", "price"];

function initEventListener() {
  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    cardsContainer.innerHTML = "";
    products.forEach((product) => {
      if (
        Object.entries(product)
          .filter(([key, value]) => {
            return propertiesToSearch.includes(key);
          })
          .some(([key, value]) => {
            return String(value).includes(dataSearch.value);
          })
      )
        cardsContainer.appendChild(createCard(product, false));
    });
  });
}
