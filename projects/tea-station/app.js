// setup nav
// const navBtn = document.getElementById("nav-btn");
// const navbar = document.getElementById("navbar");
// const navClose = document.getElementById("nav-close");
// show nav
// navBtn.addEventListener("click", () => {
//   navbar.classList.add("showNav");
// });
// close nav
// navClose.addEventListener("click", () => {
//   navbar.classList.remove("showNav");
// });

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

//setup date
// const date = (document.getElementById(
//   "date"
// ).innerHTML = new Date().getFullYear());
