// Hamburger Menu Animation
const menuBtn = document.querySelector(".nav-btn");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
  }
});

// ********** nav toggle ************
const navBtn = document.getElementById("nav-btn");
const links = document.getElementById("sidebar-links");

// Add Event Listener
navBtn.addEventListener("click", () => {
  links.classList.toggle("show-sidebar");
});

// ********** smooth scroll ************
const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    links.classList.remove("show-sidebar");
    // Remove the open class for nav-btn to change menu animation from X to Menu
    if (!menuOpen) {
      menuBtn.classList.add("open");
      menuOpen = true;
    } else {
      menuBtn.classList.remove("open");
      menuOpen = false;
    }

    const id = e.target.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    let position = element.offsetTop - 100;

    // Window scrollTo
    window.scrollTo({
      left: 0,
      top: position,
      behavior: "smooth",
    });
  });
});

// ********** Navbar Styles on ScrollY ************
window.addEventListener("scroll", function () {
  let nav = document.querySelector("nav");
  let windowPosition = window.scrollY > 0;
  nav.classList.toggle("navbar-fixed", windowPosition);
});

// ********** Animations on Scroll **********

const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");
const scales = document.querySelectorAll(".zoom1,.zoom2,.zoom3");
const appearOptions = {
  threshold: 0,
  rootMargin: "-200px 0px -300px 0px",
};

const appearOnScroll = new IntersectionObserver(function (
  enteries,
  appearOnScroll
) {
  enteries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

sliders.forEach((slider) => {
  appearOnScroll.observe(slider);
});

scales.forEach((scale) => {
  appearOnScroll.observe(scale);
});
