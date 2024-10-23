// Проверка возраста

// const checkAgeForm = document.querySelector(".checkage");
// const checkAgeOverlay = document.querySelector(".checkage_overlay");
// const confirm = document.querySelector(".checkage_wrapper-btn--confirm");
// const cancel = document.querySelector(".checkage_wrapper-btn--cancel");

// function showCheckAgeForm() {
//   checkAgeForm.classList.add("checkage_show");
//   checkAgeOverlay.classList.add("checkage_show");
// }

// setTimeout(showCheckAgeForm, 1000);

// function checkAgeConfirm() {
//   checkAgeForm.classList.remove("checkage_show");
//   checkAgeOverlay.classList.remove("checkage_show");
// }
// confirm.addEventListener("click", checkAgeConfirm);

// function checkAgeCancel() {
//   alert(
//     "Вы несовершеннолетний. Скоро будете перенаправлены на другую страницу."
//   );
//   window.location.href = "http://www.google.com";
// }

// cancel.addEventListener("click", checkAgeCancel);

// Звук утки на кнопке

const duckAudio = new Audio("./sounds/duck.mp3");

document.getElementById("duck-sound-onclick").addEventListener("click", () => {
  duckAudio.play();
});

// Скрытие внутренних ссылок

const headerLink = document.querySelectorAll(".header_nav-menu--links");
for (const link of headerLink) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const sectionId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(sectionId);
    targetSection.scrollIntoView({ behavior: "smooth" });
    history.pushState(null, "", `#${sectionId}`);
    history.replaceState(null, "", " ");
  });
}

// google api maps

function initMap() {
  const destination = { lat: 47.0146631, lng: 28.8558081 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: destination,
  });

  const marker = new google.maps.Marker({
    position: destination,
    map: map,
    title: "TrinkoTattoo",
  });

  const infoWindow = new google.maps.InfoWindow({
    content: `
        <a href="https://www.google.com/maps/place/Atrium/@47.0146631,28.8558081,15z/data=!4m6!3m5!1s0x40c97c1700b09377:0xb2be30290be18925!8m2!3d47.0146631!4d28.8558081!16s%2Fg%2F11b70gr27f?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D" target="_blank">
        <h3 style="padding-bottom: 16px;">TrinkoTattoo</h3>
        <p style="padding-bottom: 16px;">Профессиональный тату салон в Кишиневе: TrinkoTattoo</p>
        <img src="./icons/apple-touch-icon.png" alt="TrinkoTattoo" style="width: 45px; height: auto;"/></a>
    `,
  });
  marker.addListener("click", function () {
    infoWindow.open(map, marker);
  });
  marker.addListener("dblclick", function () {
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${destination.lat},${destination.lng}`;
    window.open(googleMapsUrl, "_blank");
  });
}

window.onload = initMap;

// SWIPERS

// ART

var swiper = new Swiper(".artSwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});

// FANCYBOX

Fancybox.bind("[data-fancybox='gallery']", {
  zoom: true,
});
