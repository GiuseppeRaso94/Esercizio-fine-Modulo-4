const id = new URLSearchParams(window.location.search).get("id");

request("GET", id).then((data) => {
  cardsContainer
    .appendChild(createCard(data, true))
    .classList.remove("col-md-6", "col-lg-4");
});
