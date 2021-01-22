const menuBtn = document.querySelector(".menu-btn");
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

const menuIcon = document.querySelector(".menu-burger");
const navbar = document.querySelector(".nav-list");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("change");
});
