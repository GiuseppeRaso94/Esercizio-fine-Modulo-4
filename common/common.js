const token =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmQ0NjVmODY5OGY0ODAwMTVlNDZkMTEiLCJpYXQiOjE3MjUxOTU3NjgsImV4cCI6MTcyNjQwNTM2OH0.Tql7neMleYRWF31FMQF5QH1j61A6EeD-I1_ul1ueTqc";

async function request(method, id, body, headers) {
  id = id || "";
  const loader = document.getElementById("loader");
  if (loader) {
    loader.classList.add("d-block");
  }
  return fetch("https://striveschool-api.herokuapp.com/api/product/" + id, {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
      ...headers,
    },
    method,
    body: JSON.stringify(body),
  })
    .catch(console.error)
    .then((res) => res.json())
    .finally(() => {
      if (loader) {
        loader.classList.remove("d-block");
        loader.classList.add("d-none");
      }
    });
}
