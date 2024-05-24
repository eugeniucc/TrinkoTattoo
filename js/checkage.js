"use strict";

const checkAgeForm = document.querySelector(".checkage");
const checkAgeOverlay = document.querySelector(".checkage_overlay");

const confirm = document.querySelector(".checkage_wrapper-btn--confirm");
const cancel = document.querySelector(".checkage_wrapper-btn--cancel");

// показ окна

function showCheckAgeForm() {
  checkAgeForm.classList.add("checkage_show");
  checkAgeOverlay.classList.add("checkage_show");
}

setTimeout(showCheckAgeForm, 1000);

// подтверждение возраста

function checkAgeConfirm() {
  checkAgeForm.classList.remove("checkage_show");
  checkAgeOverlay.classList.remove("checkage_show");
}
confirm.addEventListener("click", checkAgeConfirm);

// меньше 18

function checkAgeCancel() {
  alert(
    "Вы несовершеннолетний. Скоро будете перенаправлены на другую страницу."
  );
  window.location.href = "http://www.google.com";
}

cancel.addEventListener("click", checkAgeCancel);
