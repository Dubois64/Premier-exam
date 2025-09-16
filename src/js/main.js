var burger = document.querySelector(".burger");
var menu = document.querySelector(".menu");

function toggleMenu() {
  menu.classList.toggle("is-active");
}
burger.addEventListener("click", toggleMenu);

const toggleDarkModeBtn = document.querySelector("#dark-mode-btn");
const toggleLightModeBtn = document.querySelector("#light-mode-btn");

toggleDarkModeBtn.addEventListener("click", function () {
  document.querySelector("html").setAttribute("data-theme", "dark");
});

toggleLightModeBtn.addEventListener("click", function () {
  document.querySelector("html").setAttribute("data-theme", "light");
});
