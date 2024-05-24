const promo = document.querySelector(".promo");
const showPromo = document.querySelector(".header_nav-menu--span-red");

const promoBtnClose = document.querySelector(".promo_wrapper-btn--close");

showPromo.addEventListener("click", () => {
  promo.classList.toggle("promo_show");
});
promoBtnClose.addEventListener("click", () => {
  promo.classList.remove("promo_show");
});
