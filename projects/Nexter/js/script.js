// Hamburger Menu Animation
// const menuBtn = document.getElementById("nav-btn");
// let menuOpen = false;
// menuBtn.addEventListener("click", () => {
//   if (!menuOpen) {
//     menuBtn.classList.add("open");
//     menuOpen = true;
//   } else {
//     menuBtn.classList.remove("open");
//     menuOpen = false;
//   }
// });

// ********** nav toggle ************
// const navBtn = document.getElementById("nav-btn");
// const links = document.getElementById("sidebar-links");

// Add Event Listener
// navBtn.addEventListener("click", () => {
//   links.classList.toggle("show-sidebar");
// });

// ********** Smooth Scroll **********
const smoothScroll = document.querySelectorAll(".smooth-scroll");

smoothScroll.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    // links.classList.remove("show-sidebar");
    // Remove the open class for nav-btn to change menu animation from X to Menu
    // if (!menuOpen) {
    //   menuBtn.classList.add("open");
    //   menuOpen = true;
    // } else {
    //   menuBtn.classList.remove("open");
    //   menuOpen = false;
    // }

    const id = e.target.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    let position = element.offsetTop - 53;

    // Window scrollTo
    window.scrollTo({
      left: 0,
      top: position,
      behavior: "smooth",
    });
  });
});

// Navbar Styles applied on Scroll Y
// window.addEventListener("scroll", function () {
//   let header = document.querySelector("nav");
//   let windowPosition = window.scrollY > 0;
//   header.classList.toggle("scrolling-active", windowPosition);
// });

// Typewriter Font
// const TypeWriter = function (txtElement, words, wait = 2500) {
//   this.txtElement = txtElement;
//   this.words = words;
//   this.txt = "";
//   this.wordIndex = 0;
//   this.wait = parseInt(wait, 10);
//   this.type();
//   this.isDeleting = false;
// };

// Type Method
// TypeWriter.prototype.type = function () {
// Current Index of Word
// const current = this.wordIndex % this.words.length;

// Get Full text of Current Word
// const fullTxt = this.words[current];

// Check if deleting
// if (this.isDeleting) {
// Remove characters
// this.txt = fullTxt.substring(0, this.txt.length - 1);
// } else {
// Add characters
// this.txt = fullTxt.substring(0, this.txt.length + 1);
// }

// Insert txt into element
// this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

// Initial Type Speed
// let typeSpeed = 250;

// if (this.isDeleting) {
// typeSpeed /= 2;
// }

// If word is complete
// if (!this.isDeleting && this.txt === fullTxt) {
// Make pause at the end of the word
// typeSpeed = this.wait;

// Set delete to true
//   this.isDeleting = true;
// } else if (this.isDeleting && this.txt === "") {
//   this.isDeleting = false;
// Move to the next word
// this.wordIndex++;
// Pause before start typing
//     typeSpeed = 500;
//   }

//   setTimeout(() => this.type(), typeSpeed);
// };

// Init on DOM Load
// document.addEventListener("DOMContentLoaded", init);

// Init App
// function init() {
//   const txtElement = document.querySelector(".header__description--typewriter");
//   const words = JSON.parse(txtElement.getAttribute("data-words"));
//   const wait = txtElement.getAttribute("data-wait");

// Init TypeWriter
//   new TypeWriter(txtElement, words, wait);
// }
