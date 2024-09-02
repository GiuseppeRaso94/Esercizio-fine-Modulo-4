request("GET").then((data) => {
  products = data;
  data.forEach((product) => {
    cardsContainer.appendChild(createCard(product, false));
  });
});

initEventListener();
