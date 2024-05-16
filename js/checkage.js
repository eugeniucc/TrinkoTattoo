// сделать проверку возраста если есть 18

"use strict";

function checkAge() {
  const confirmAge = window.confirm(
    "Если вам уже исполнилось 18 нажмите Ок. Продолжить?"
  );
  if (!confirmAge) {
    alert(
      "Вы несовершеннолетний. Скоро будете перенаправлены на другую страницу."
    );
    window.location.href = "http://www.google.com";
  } else {
    return;
  }
}

checkAge();
