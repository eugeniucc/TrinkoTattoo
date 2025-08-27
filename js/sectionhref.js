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
