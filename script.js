// Scroll -> Background Nav
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

// Responsive Sidebar
function showSidebar() {
  const navSidebar = document.querySelector(".nav-sidebar");
  navSidebar.style.display = "flex";
}
function hideSidebar() {
  const navSidebar = document.querySelector(".nav-sidebar");
  navSidebar.style.display = "none";
}

// Scroll -> Reveal Sosmed
const linkWidth = 630;

if (window.innerWidth < linkWidth) {
  const linkTexts = document.querySelectorAll(".barber-link-show-630px");

  const observerLink = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle(
          "barber-link-transition",
          entry.isIntersecting
        );
        // if (entry.isIntersecting) observerLink.unobserve(entry.target);
      });
    },
    {
      threshold: 1,
    }
  );

  linkTexts.forEach((x) => {
    observerLink.observe(x);
  });
}

const operatingHours = document.querySelector(".home-in-content-3");

const observerOperatingHours = new IntersectionObserver(
  (entry) => {
    entry.forEach((x) => {
      x.target.classList.toggle("operating-hours-transition", x.isIntersecting);
    });
  },
  {
    threshold: 1,
  }
);
observerOperatingHours.observe(operatingHours);
