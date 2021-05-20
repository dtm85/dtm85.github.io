// ********** Animations on Scroll **********

const faders = document.querySelectorAll(".fade--in");
const sliders = document.querySelectorAll(".slide--in");
const scales = document.querySelectorAll(".zoom1,.zoom2,.zoom3");
const appearOptions = {
  threshold: 0,
  // rootMargin: "-200px 0px -300px 0px",
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
