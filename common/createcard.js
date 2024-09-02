const cardsContainer = document.querySelector(".cardsContainer");

function createCard(product, isDetail, isBackOffice) {
  const div = document.createElement("div");
  div.innerHTML = `<img src="${product.imageUrl}" class="card-img-top" alt="${
    product.description
  }">
        <div class="card-body">
        <h5 class="card-title">${product.name}</h5>
        <p class="card-text">${product.price}</p>${
    isDetail
      ? `<p class="card-text">${product.brand}</p>
        <p class="card-text">${product.description}</p>`
      : `<a href="/productdetails/productdetails.html?id=${product._id}" class="btn btn-primary">Show Details</a>`
  }
  ${
    isBackOffice
      ? `<a href="/modifyproduct/modifyproduct.html?id=${product._id}"><button class="btn btn-info" id="buttonModify${product._id}">Modify</button></a> <button class="btn btn-danger" id="buttonDelete${product._id}">Delete</button>`
      : ``
  }
        </div>`;
  div.classList.add("card");
  return div;
}
