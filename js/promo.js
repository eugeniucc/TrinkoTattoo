const promo = document.querySelector(".promo");
const showPromo = document.querySelector(".header_nav-menu--span-red");
const promoOverlay = document.querySelector(".promo_overlay");

const promoBtnClose = document.querySelector(".promo_wrapper-btn--close");

showPromo.addEventListener("click", () => {
  promo.classList.toggle("promo_show");
  promoOverlay.classList.toggle("promo_show");
});
promoBtnClose.addEventListener("click", () => {
  promo.classList.remove("promo_show");
  promoOverlay.classList.remove("promo_show");
});
promoOverlay.addEventListener("click", () => {
  promo.classList.remove("promo_show");
  promoOverlay.classList.remove("promo_show");
});
