const popupWindow = document.querySelector(".popup");
const popupOverlay = document.querySelector(".popup_overlay");
const popupButton = document.querySelector(".popup_form-close");
const popupForm = document.querySelector(".popup_form");
const userName = document.getElementById("name");
const userTel = document.getElementById("tel");

const sendUserData = document.querySelector(".popup_form-submit");

const regex = /[\d!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/;

const regexTel = /^\d+$/;

popupForm.addEventListener("submit", function (e) {
  e.preventDefault();
  if (!regex.test(userName.value) && regexTel.test(userTel.value)) {
    sendUserData.textContent = "Отправлено";
    setTimeout(() => {
      sendUserData.textContent = "Отправить";
    }, 2000);
    userName.value = "";
    userName.classList.remove("error");
    userTel.value = "";
    userTel.classList.remove("error");
  } else {
    userName.value = "";
    userName.classList.add("error");
    userName.setAttribute(
      "placeholder",
      "Поле должно быть заполнено корректно"
    );
    userTel.value = "";
    userTel.classList.add("error");
    userTel.setAttribute("placeholder", "Поле должно содержать только цифры");
  }
});

function showModal() {
  popupWindow.classList.add("popup_show");
  popupOverlay.classList.add("popup_show");
}

let timerId = setTimeout(showModal, 15000);

popupButton.addEventListener("click", () => {
  popupWindow.classList.remove("popup_show");
  popupOverlay.classList.remove("popup_show");
  clearTimeout(timerId);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    popupWindow.classList.remove("popup_show");
    popupOverlay.classList.remove("popup_show");
  }
});

popupOverlay.addEventListener("click", () => {
  popupWindow.classList.remove("popup_show");
  popupOverlay.classList.remove("popup_show");
});
