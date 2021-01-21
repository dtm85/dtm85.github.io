$(document).ready(function () {
  $(".menu-button").click(function () {
    $("nav ul").toggleClass("active");
    $(".menu-button i").toggleClass("active");
  });
});
