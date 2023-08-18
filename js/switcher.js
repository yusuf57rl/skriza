const themeContainer = document.querySelector(".theme-container");
const light = document.querySelector(".light-btn");
const dark = document.querySelector(".dark-btn");

dark.addEventListener("click", () => {
  activateDarkMode();
  localStorage.setItem("theme", "dark");
});

light.addEventListener("click", () => {
  deactivateDarkMode();
  localStorage.removeItem("theme");
});

window.addEventListener("load", () => {
  if (localStorage.getItem("theme") === "dark") {
    activateDarkMode();
  } else {
    deactivateDarkMode();
  }
  updateTheme(); // Diese Zeile hinzufügen
});


function activateDarkMode() {
  document.body.classList.add("dark-mode");
  themeContainer.style.borderColor = "#fefefe";
  dark.innerHTML = `<i class="fa fa-moon-o" style="font-size:24px; color: #fdd522;"></i>`;
  light.innerHTML = `<div class="light-active"></div>`;
}

function deactivateDarkMode() {
  document.body.classList.remove("dark-mode");
  themeContainer.style.borderColor = "#333";
  light.innerHTML = `<i class="fa fa-sun-o" style="font-size:24px; color: #ff6d05;"></i>`;
  dark.innerHTML = `<div class="dark-active"></div>`;
}
