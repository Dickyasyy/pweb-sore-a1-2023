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
