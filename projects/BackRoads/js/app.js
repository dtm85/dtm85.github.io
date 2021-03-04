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
const links = document.getElementById("nav-links");

// Add Event Listener
navBtn.addEventListener("click", () => {
  links.classList.toggle("show-links");
});

// ********** smooth scroll ************
const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    links.classList.remove("show-links");
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

    let position = element.offsetTop - 62;

    // Window scrollTo
    window.scrollTo({
      left: 0,
      top: position,
      behavior: "smooth",
    });
  });
});

// ********** Smooth Scroll on Footer Links ************
const smoothScroll = document.querySelectorAll(".smooth-scroll");

smoothScroll.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const id = e.target.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    let position = element.offsetTop - 62;

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
  let header = document.querySelector(".navbar");
  let windowPosition = window.scrollY > 0;
  header.classList.toggle("scrolling-active", windowPosition);
});

// Navbar Hide on Top - Shows on scroll down
const nav = document.querySelector(".navbar");
let prevScrollpos = window.pageYOffset;

window.addEventListener("scroll", () => {
  let currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    nav.classList.add("hide");
  } else {
    nav.classList.remove("hide");
  }

  prevScrollpos = currentScrollPos;
});
