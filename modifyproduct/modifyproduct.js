import {
  productName,
  productDescription,
  productBrand,
  productImageUrl,
  productPrice,
  submitForm,
} from "../common/form.js";
const id = new URLSearchParams(window.location.search).get("id");

request("GET", id).then((data) => {
  productName.value = data.name;
  productDescription.value = data.description;
  productBrand.value = data.brand;
  productImageUrl.value = data.imageUrl;
  productPrice.value = data.price;
});

submitForm(id);
