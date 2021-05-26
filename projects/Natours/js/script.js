// ********** Measure LCP **********
// new PerformanceObserver((entryList) => {
//   for (const entry of entryList.getEntries()) {
//     console.log("LCP candidate:", entry.startTime, entry);
//   }
// }).observe({ type: "largest-contentful-paint", buffered: true });

// ********** Lazy Loading **********
const images = [
  `/dtm85.github.io/projects/Natours/media/images/nat-4-small.jpeg`,
  `/dtm85.github.io/projects/Natours/media/images/nat-4.jpg`,
];

const elements = document.querySelectorAll(".lazy");

const observerOptions = {
  threshold: 0,
  rootMargin: "200px",
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

for (const element of elements) {
  observer.observe(element);
}

function observerCallback(entries, observer) {
  entries.forEach((entry) => {
    const { isIntersecting, target } = entry;

    if (!isIntersecting) {
      return;
    }

    const targetIndex = [...elements].indexOf(target);

    target.style.backgroundImage = `url("${images[targetIndex]}")`;

    observer.unobserve(target);
  });
}

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
