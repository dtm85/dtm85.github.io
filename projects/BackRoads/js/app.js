// ********** nav toggle ************
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
const navbar = document.querySelector(".nav-links");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("show-links");
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent default
    e.preventDefault();
    links.classList.remove("show-links");

    const id = e.target.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    //
    let position = element.offsetTop - 62;

    window.scrollTo({
      left: 0,
      // top: element.offsetTop,
      top: position,
      behavior: "smooth",
    });
  });
});

// ********** Navbar Styles on Scroll Y ************
// Navbar Styles applied on Scroll Y
window.addEventListener("scroll", function () {
  let header = document.querySelector(".navbar");
  let windowPosition = window.scrollY > 0;
  header.classList.toggle("scrolling-active", windowPosition);
});
