const cardsContainer = document.querySelector(".cardsContainer");

function createCard(product, isDetail, isBackOffice) {
  const div = document.createElement("div");
  div.innerHTML = `<div class="card flex-column w-100 h-100">
    <div class="col-12 p-3 flex-grow-1">
      <img id="cardImg" class="img-fluid w-100 h-100" src="${
        product.imageUrl
      }" alt="${product.description}">
    </div>
    <div class="card-body">
      <h5 class="card-title m-0">${product.name}</h5>
      <p class="card-text p-2 m-0">${product.price} $</p>${
    isDetail
      ? `<p class="card-text p-1 m-0">${product.brand}</p> <p class="card-text">${product.description}</p>`
      : `<a href="/productdetails/productdetails.html?id=${product._id}" class="btn btn-primary">Show Details</a>`
  }
      ${
        isBackOffice
          ? `<a href="/modifyproduct/modifyproduct.html?id=${product._id}"> <button class="btn btn-info" id="buttonModify${product._id}">Modify</button></a> <button class="btn btn-danger" id="buttonDelete${product._id}">Delete</button>`
          : ``
      }
    </div>
  </div>`;
  div.classList.add(
    "col-12",
    "col-md-6",
    "col-lg-4",
    "text-center",
    "d-flex",
    "align-items-center",
    "justify-content-center",
    "my-3"
  );
  return div;
}
