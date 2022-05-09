const burger = document.querySelector(".burger");
const menu = document.querySelector("nav ul");
const logo = document.querySelector(".logo");
const x = document.querySelector(".x");
burger.addEventListener("click", function () {
  menu.classList.add("mobile-view");
  burger.classList.add("burger-none");
  logo.classList.add("logo-none");
  x.classList.add("x-appear");
});
