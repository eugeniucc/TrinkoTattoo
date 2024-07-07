var map = L.map("map").setView([47.0146631, 28.8558081], 16);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([47.0146631, 28.8558081])
  .addTo(map)
  .bindPopup("Salonul de tatuaje - TrinkoTattoo în Chișinău")
  .openPopup();
