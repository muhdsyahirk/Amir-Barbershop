// LOADING
const loader = document.getElementById("loader");
window.addEventListener("load", () => {
  setTimeout(() => {
    loader.classList.add("loader-hidden");
    scrollInitialiser();

    setTimeout(() => {
      loader.style.display = "none";
    }, 1000);
  }, 500);
});

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

// Scroll -> Reveal Sosmed
const linkWidth = 630;

if (window.innerWidth < linkWidth) {
  const linkTexts = document.querySelectorAll(".barber-link-show-630px");

  const observerLink = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle(
          "barber-link-transition",
          entry.isIntersecting,
        );
        // if (entry.isIntersecting) observerLink.unobserve(entry.target);
      });
    },
    {
      threshold: 1,
    },
  );

  linkTexts.forEach((x) => {
    observerLink.observe(x);
  });
}

// GALLERY INFINITE SCROLL
const scroller = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scroller.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);

    const scrollerInner = scroller.querySelector(".scroller-inner");

    if (scrollerInner) {
      const scrollerContent = Array.from(scrollerInner.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
      });
    }
  });
}

// SCROLL ANIMATION
function scrollInitialiser() {
  const scrollElements = document.querySelectorAll("[data-scroll-class]");

  const scrollObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const className = entry.target.dataset.scrollClass;
          entry.target.classList.add(className);
          scrollObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 },
  );

  scrollElements.forEach((el) => scrollObserver.observe(el));
}

// TYPING ANIMATION
// const text =
//   "Your underrated kedai gunting rambut. Clean cuts, fresh fades, affordable prices. Walk in or book via call or WhatsApp.";
// const element = document.getElementById("typewriter-text");
// let index = 0;

// function typeWriter() {
//   if (index < text.length) {
//     element.textContent += text.charAt(index);
//     index++;
//     setTimeout(typeWriter, 50);
//   } else {
//     setTimeout(() => {
//       element.style.setProperty("--cursor", "none");
//     }, 1000);
//   }
// }
// window.addEventListener("load", () => {
//   setTimeout(typeWriter, 500);
// });
