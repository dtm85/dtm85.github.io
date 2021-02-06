// Hamburger Menu Animation
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

const menuIcon = document.querySelector(".menu-btn");
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

// No Background Scroll when Menu is Open
// $(".menu-burger").on("click", function () {
//   $("body").toggleClass("no-scroll");
// });

// $(".menu-burger.open").on("click", function () {
//   $("body").removeClass("no-scroll");
// });

// Smooth Scroll
// const body = document.body,
//   scrollWrap = document.getElementsByClassName("smooth-scroll-wrapper")[0],
//   height = scrollWrap.getBoundingClientRect().height - 1,
//   speed = 0.04;

// var offset = 0;

// body.style.height = Math.floor(height) + "px";

// function smoothScroll() {
//   offset += (window.pageYOffset - offset) * speed;

//   var scroll = "translateY(-" + offset + "px) translateZ(0)";
//   scrollWrap.style.transform = scroll;

//   callScroll = requestAnimationFrame(smoothScroll);
// }

// smoothScroll();

// TEST
// const body = document.body,
//   scrollWrap = document.getElementsByClassName("smooth-scroll-wrapper")[0],
//   height = scrollWrap.getBoundingClientRect().height - 1,
//   speed = 0.04;

// var offset = 0;

// body.style.height = Math.floor(height) + "px";

// function smoothScroll() {
//   offset += (window.pageYOffset - offset) * speed;

//   var scroll = "translateY(-" + offset + "px) translateZ(0)";
//   scrollWrap.style.transform = scroll;

//   callScroll = requestAnimationFrame(smoothScroll);
// }

// smoothScroll();
