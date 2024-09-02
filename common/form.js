import Swal from "/node_modules/sweetalert2/src/sweetalert2.js";
export const productName = document.getElementById("name");
export const productDescription = document.getElementById("description");
export const productBrand = document.getElementById("brand");
export const productImageUrl = document.getElementById("imageUrl");
export const productPrice = document.getElementById("price");
export const form = document.getElementById("form");

export function initForm(productId) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    request(productId ? "PUT" : "POST", productId ? productId : undefined, {
      name: productName.value,
      description: productDescription.value,
      brand: productBrand.value,
      imageUrl: productImageUrl.value,
      price: productPrice.value,
    }).then(() => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `The Product has been ${productId ? "modified" : "created"}!`,
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        window.location.href = "/backoffice/backoffice.html";
      });
    });
  });
}
