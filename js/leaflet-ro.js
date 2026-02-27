var map = L.map("map", {
  zoomControl: true,
  scrollWheelZoom: false,
}).setView([47.0200287, 28.8473541], 17);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  subdomains: ["a", "b", "c"],
  maxZoom: 19,
}).addTo(map);

var customIcon = L.icon({
  iconUrl: "./logo.png",
  iconSize: [48, 48],
  iconAnchor: [24, -108],
  popupAnchor: [0, 100],
});

L.marker([47.0200287, 28.8473541], { icon: customIcon })
  .addTo(map)
  .bindPopup(
    `<div style="text-align:center; font-family:Montserrat, sans-serif; max-width:240px;">
       <h3 style="margin:0 0 8px 0; font-size:18px; color:#f24342; font-weight:700;">TrinkoTattoo</h3>
       <p style="margin:4px 0; font-size:14px; line-height:1.5;">
          <strong style="color:#f24342;">📍 Ne-am mutat!</strong><br>
          Str. Tighina 65<br>
          (mai jos de Gara Centrală)<br>
          <span style="font-size:13px; color:#aaa;">Reper: stația de autobuz</span><br>
          <span style="font-size:13px;">Intrare: inscripția "icam"</span>
       </p>
       <a href="https://www.google.com/maps/place/TrinkoTattoo/@47.0200287,28.8473541,17z/data=!4m6!3m5!1s0x40c97dfa3f2aeca3:0x506cbca590704cdd!8m2!3d47.0200287!4d28.8473541!16s%2Fg%2F11y98yqlk9?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D" 
          target="_blank" 
          style="display:inline-block; margin-top:10px; background:#f24342; color:#fff; padding:8px 16px; border-radius:6px; font-size:14px; text-decoration:none; font-weight:600; transition:0.3s;">
         🔗 Deschide în Google Maps
       </a>
     </div>`,
  )
  .openPopup();
