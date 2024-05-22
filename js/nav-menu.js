window.addEventListener("scroll", () => {
  const navMenu = document.querySelector(".header");
  const scrollPosition = window.scrollY || window.pageYOffset;
  const documentHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercentage = (scrollPosition / documentHeight) * 100;
  if (scrollPercentage >= 5) {
    navMenu.classList.add("stickyactive");
  } else {
    navMenu.classList.remove("stickyactive");
  }
});
