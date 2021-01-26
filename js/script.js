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

// Sticky Navbar

// Smooth Scroll
const body = document.getElementsByClassName("content-wrapper")[0],
  scrollWrap = document.getElementsByClassName("smooth-scroll-wrapper")[0],
  height = scrollWrap.getBoundingClientRect().height - 1,
  speed = 0.04;

var offset = 0;
body.style.height = Math.floor(height) + "px";

function smoothScroll() {
  offset += (window.pageYOffset - offset) * speed;

  var scroll = "translateY(-" + offset + "px) translateZ(0)";
  scrollWrap.style.transform = scroll;

  callScroll = requestAnimationFrame(smoothScroll);
}

smoothScroll();

// When the modal is hidden...
const scrollY = document.body.style.top;
document.body.style.position = "";
document.body.style.top = "";
window.scrollTo(0, parseInt(scrollY || "0") * -1);
