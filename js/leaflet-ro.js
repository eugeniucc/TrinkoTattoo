var map = L.map("map", {
  zoomControl: true,
  scrollWheelZoom: false,
}).setView([47.0146631, 28.8558081], 16);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  subdomains: ["a", "b", "c"],
  maxZoom: 19,
}).addTo(map);

var customIcon = L.icon({
  iconUrl: "./icons/icon.png",
  iconSize: [48, 48],
  iconAnchor: [24, 48],
  popupAnchor: [0, -48],
});

L.marker([47.0146631, 28.8558081], { icon: customIcon })
  .addTo(map)
  .bindPopup(
    `<div style="text-align:center; font-family:Montserrat, sans-serif; max-width:220px;">
       <h3 style="margin:0; font-size:16px; color:#f24342;">TrinkoTattoo</h3>
       <p style="margin:4px 0; font-size:14px;">CC Atrium, str. Albișoara 4, Chișinău</p>
       <a href="https://www.google.com/maps/dir/46.9958656,28.8456704/''/@46.995836,28.7632699,12z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x40c97dfa3f2aeca3:0x506cbca590704cdd!2m2!1d28.8557773!2d47.0147268?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D" 
          target="_blank" 
          style="display:inline-block; margin-top:6px; background:#f24342; color:#fff; padding:6px 12px; border-radius:4px; font-size:14px; text-decoration:none; font-weight:600;">
         Pornește ruta
       </a>
     </div>`
  )
  .openPopup();
