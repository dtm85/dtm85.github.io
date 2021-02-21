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

const menuIcon = document.querySelector(".nav-btn");
const navbar = document.querySelector(".nav-list");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("change");
});

// Navbar Styles applied on Scroll Y
window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  let windowPosition = window.scrollY > 0;
  header.classList.toggle("scrolling-active", windowPosition);
});
