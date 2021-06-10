// Hamburger Menu Animation
const menuBtn = document.querySelector(".navbar__menu-btn");
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

const menuIcon = document.querySelector(".navbar__menu-btn");
const navbar = document.querySelector(".navbar__nav-links");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("change");
});

// Navbar Styles applied on Scroll Y
window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  let windowPosition = window.scrollY > 0;
  header.classList.toggle("scrolling-active", windowPosition);
});

// Typewriter Font
const TypeWriter = function (txtElement, words, wait = 2500) {
  this.txtElement = txtElement;
  this.words = words;
  this.txt = "";
  this.wordIndex = 0;
  this.wait = parseInt(wait, 10);
  this.type();
  this.isDeleting = false;
};

// Type Method
TypeWriter.prototype.type = function () {
  // Current Index of Word
  const current = this.wordIndex % this.words.length;

  // Get Full text of Current Word
  const fullTxt = this.words[current];

  // Check if deleting
  if (this.isDeleting) {
    // Remove characters
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    // Add characters
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  // Insert txt into element
  this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

  // Initial Type Speed
  let typeSpeed = 250;

  if (this.isDeleting) {
    typeSpeed /= 2;
  }

  // If word is complete
  if (!this.isDeleting && this.txt === fullTxt) {
    // Make pause at the end of the word
    typeSpeed = this.wait;

    // Set delete to true
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    // Move to the next word
    this.wordIndex++;
    // Pause before start typing
    typeSpeed = 500;
  }

  setTimeout(() => this.type(), typeSpeed);
};

// Init on DOM Load
document.addEventListener("DOMContentLoaded", init);

// Init App
function init() {
  const txtElement = document.querySelector(".text-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");

  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}

// Smooth Scroll
