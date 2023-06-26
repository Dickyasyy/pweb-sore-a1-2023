const navbarmid = document.querySelector(".navbar-mid");
// hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarmid.classList.toggle("active");
};

// Untuk menghilangkan hamburger menu di luar icon
const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target)) {
    navbarmid.classList.remove("active");
  }
});

const productContainer = document.querySelector(".row-product ul");

fetch("json/produk.json")
  .then((Response) => Response.json())
  .then((data) => {
    let contentHTML = "";
    data.produk.forEach((produk) => {
      contentHTML += `
    <div class= "card">
    <img src="${produk.gambar}" alt="${produk.nama}" />
    <h1>${produk.nama}</h1>
    <h5>${produk.deskripsi}</h5>
    <h3>${produk.pembayaran}</h3>
    </div>
    `;
    });
    productContainer.innerHTML = contentHTML;
  })
  .catch((err) => {
    console.log(err);
  });
