const navBar = document.querySelector(".nav");
const navMenu = document.querySelectorAll(".nav-menu-elem");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 40) {
    navBar.classList.add("nav-scrolled");
    navMenu.forEach((x) => {
      x.classList.add("nav-menu-scrolled");
    });
  } else {
    navBar.classList.remove("nav-scrolled");
    navMenu.forEach((x) => {
      x.classList.remove("nav-menu-scrolled");
    });
  }
});

function showSidebar() {
  const navSidebar = document.querySelector(".nav-sidebar");
  navSidebar.style.display = "flex";
}
function hideSidebar() {
  const navSidebar = document.querySelector(".nav-sidebar");
  navSidebar.style.display = "none";
}
