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
  // Überprüfen Sie, ob der Dark-Modus bereits in localStorage gesetzt ist
  if (localStorage.getItem("theme") === "dark") {
    activateDarkMode();
  } else {
    deactivateDarkMode();
  }
  updateTheme();
});

function updateTheme() {
  const isDarkMode = document.body.classList.contains("dark-mode");
  const allTextElements = document.querySelectorAll("h1, h2, p, a, li");
  const largeIcons = document.querySelectorAll(".fas.fa-comments, .fas.fa-brain, .fas.fa-users");

  if (isDarkMode) {
    allTextElements.forEach(el => el.style.color = "white");
    largeIcons.forEach(icon => icon.style.color = "white");  // Im Dark Mode weiß
    document.body.style.backgroundColor = "#333";
  } else {
    allTextElements.forEach(el => el.style.color = "black");
    largeIcons.forEach(icon => icon.style.color = "black");  // Im Light Mode schwarz
    document.body.style.backgroundColor = "#ffffff";
  }
}


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

const themeSwitcher = document.querySelector('.theme-switcher');

themeSwitcher.classList.add('vibrate'); // Beginnen Sie mit der Vibration

themeSwitcher.addEventListener('click', function() {
  this.classList.remove('vibrate');  // Stoppt die Vibration
});
