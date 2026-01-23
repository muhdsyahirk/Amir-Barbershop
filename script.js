// Scroll -> Background Nav
// const navBar = document.querySelector(".nav");
// const navMenu = document.querySelectorAll(".nav-menu-elem");

// window.addEventListener("scroll", () => {
//   if (window.scrollY >= 40) {
//     navBar.classList.add("nav-scrolled");
//     navMenu.forEach((x) => {
//       x.classList.add("nav-menu-scrolled");
//     });
//   } else {
//     navBar.classList.remove("nav-scrolled");
//     navMenu.forEach((x) => {
//       x.classList.remove("nav-menu-scrolled");
//     });
//   }
// });

// Responsive Sidebar
// function showSidebar() {
//   const navSidebar = document.querySelector(".nav-sidebar");
//   navSidebar.style.display = "flex";
// }
// function hideSidebar() {
//   const navSidebar = document.querySelector(".nav-sidebar");
//   navSidebar.style.display = "none";
// }

// Scroll -> Reveal Sosmed
// const linkWidth = 630;

// if (window.innerWidth < linkWidth) {
//   const linkTexts = document.querySelectorAll(".barber-link-show-630px");

//   const observerLink = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         entry.target.classList.toggle(
//           "barber-link-transition",
//           entry.isIntersecting
//         );
//         // if (entry.isIntersecting) observerLink.unobserve(entry.target);
//       });
//     },
//     {
//       threshold: 1,
//     }
//   );

//   linkTexts.forEach((x) => {
//     observerLink.observe(x);
//   });
// }

// Scroll -> Border
// const operatingHours = document.querySelector(".home-in-content-3");

// const observerOperatingHours = new IntersectionObserver(
//   (entry) => {
//     entry.forEach((x) => {
//       x.target.classList.toggle("operating-hours-transition", x.isIntersecting);
//     });
//   },
//   {
//     threshold: 1,
//   }
// );
// observerOperatingHours.observe(operatingHours);

// Scroll -> Title
// const titles = document.querySelectorAll(".titles");

// const observerTitle = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       entry.target.classList.toggle("titles-show", entry.isIntersecting);
//       // if (entry.isIntersecting) observerTitle.unobserve(entry.target);
//     });
//   },
//   {
//     threshold: 1,
//   }
// );

// titles.forEach((x) => {
//   observerTitle.observe(x);
// });

// NAV
const navBurger = document.querySelector(".nav-burger");
const burger_cross = navBurger.querySelector("i");
const navItem = document.querySelector(".nav-item");

navBurger.addEventListener("click", () => {
  navItem.classList.toggle("nav-item-mobile");
  changeBurgerCross();
});

const navLinks = document.querySelectorAll(".nav-item li a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navItem.classList.remove("nav-item-mobile");
    changeBurgerCross();
  });
});

document.addEventListener("click", (event) => {
  if (!navBurger.contains(event.target) && !navItem.contains(event.target)) {
    navItem.classList.remove("nav-item-mobile");
    if (burger_cross.classList.contains("fa-times")) {
      burger_cross.classList.replace("fa-times", "fa-bars");
    }
  }
});

function changeBurgerCross() {
  if (burger_cross.classList.contains("fa-bars")) {
    burger_cross.classList.replace("fa-bars", "fa-times");
  } else {
    burger_cross.classList.replace("fa-times", "fa-bars");
  }
}
