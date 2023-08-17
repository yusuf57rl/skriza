const main = document.querySelector("#main");
const themeContainer = document.querySelector(".theme-container");
const light = document.querySelector(".light-btn");
const dark = document.querySelector(".dark-btn");
let darkMode = false;

dark.addEventListener("click", () => {
  darkMode = true;
  if (darkMode) {
    document.body.style.backgroundColor = "#333";  // Ändern Sie den Hintergrund des gesamten Körpers
    themeContainer.style.borderColor = "#fefefe";
    dark.innerHTML = `<i class="fa fa-moon-o" style="font-size:24px; color: #fdd522;"></i>`;
    light.innerHTML = `<div class="light-active"></div>`;
  }
});

light.addEventListener("click", () => {
  darkMode = false;
  if (!darkMode) {
    document.body.style.backgroundColor = "#fefefe";  // Ändern Sie den Hintergrund des gesamten Körpers
    themeContainer.style.borderColor = "#333";
    light.innerHTML = `<i class="fa fa-sun-o" style="font-size:24px; color: #ff6d05;"></i>`;
    dark.innerHTML = `<div class="dark-active"></div>`;
  }
});

window.addEventListener("load", () => {
  document.body.style.backgroundColor = "#fefefe";  // Ändern Sie den Hintergrund des gesamten Körpers
  themeContainer.style.borderColor = "#333";
  light.innerHTML = `<i class="fa fa-sun-o" style="font-size:24px; color: #ff6d05;"></i>`;
  dark.innerHTML = `<div class="dark-active"></div>`;
});
dark.addEventListener("click", () => {
  darkMode = true;
  if (darkMode) {
    document.body.style.backgroundColor = "#333";  // Ändern Sie den Hintergrund des gesamten Körpers
    themeContainer.style.borderColor = "#fefefe";
    dark.innerHTML = `<i class="fa fa-moon-o" style="font-size:24px; color: #fdd522;"></i>`;
    light.innerHTML = `<div class="light-active"></div>`;

    // Änderungen im Container für den Dark Mode
    let container = document.getElementById("main");
    container.style.backgroundColor = "#2c2c2c";
    container.style.color = "#fefefe";
    let links = container.querySelectorAll("a");
    links.forEach(link => link.style.color = "#c5c5c5");
  }
});

light.addEventListener("click", () => {
  darkMode = false;
  if (!darkMode) {
    document.body.style.backgroundColor = "#fefefe";  // Ändern Sie den Hintergrund des gesamten Körpers
    themeContainer.style.borderColor = "#333";
    light.innerHTML = `<i class="fa fa-sun-o" style="font-size:24px; color: #ff6d05;"></i>`;
    dark.innerHTML = `<div class="dark-active"></div>`;

    // Änderungen im Container für den Light Mode
    let container = document.getElementById("main");
    container.style.backgroundColor = "#ffffff";
    container.style.color = "#333";
    let links = container.querySelectorAll("a");
    links.forEach(link => link.style.color = "#007bff");  // Standard Bootstrap Link-Farbe
  }
});

window.addEventListener("load", () => {
  document.body.style.backgroundColor = "#fefefe";  // Ändern Sie den Hintergrund des gesamten Körpers
  themeContainer.style.borderColor = "#333";
  light.innerHTML = `<i class="fa fa-sun-o" style="font-size:24px; color: #ff6d05;"></i>`;
  dark.innerHTML = `<div class="dark-active"></div>`;
});
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
});

function activateDarkMode() {
  document.body.style.backgroundColor = "#333";
  themeContainer.style.borderColor = "#fefefe";
  dark.innerHTML = `<i class="fa fa-moon-o" style="font-size:24px; color: #fdd522;"></i>`;
  light.innerHTML = `<div class="light-active"></div>`;

  // Änderungen im Container für den Dark Mode
  let container = document.querySelector(".container");
  container.style.backgroundColor = "#2c2c2c";
  container.style.color = "#fefefe";
  let links = container.querySelectorAll("a");
  links.forEach(link => link.style.color = "#ffffff");
}

function deactivateDarkMode() {
  document.body.style.backgroundColor = "#fefefe";
  themeContainer.style.borderColor = "#333";
  light.innerHTML = `<i class="fa fa-sun-o" style="font-size:24px; color: #ff6d05;"></i>`;
  dark.innerHTML = `<div class="dark-active"></div>`;

  // Änderungen im Container für den Light Mode
  let container = document.querySelector(".container");
  container.style.backgroundColor = "#ffffff";
  container.style.color = "#333";
  let links = container.querySelectorAll("a");
  links.forEach(link => link.style.color = "#ffffff");  // Standard Bootstrap Link-Farbe
}
