document.addEventListener("DOMContentLoaded", function() {
  // Elemente auswählen
  const hacktoberfestBanner = document.getElementById("hacktoberfestBanner");
  const fullscreenOverlay = document.createElement("div");
  const fullscreenImage = document.createElement("img");

  fullscreenOverlay.className = 'fullscreen-overlay';
  fullscreenImage.className = 'fullscreen-image';

  document.body.appendChild(fullscreenOverlay);
  fullscreenOverlay.appendChild(fullscreenImage);

  hacktoberfestBanner.addEventListener("click", function() {
    fullscreenImage.src = hacktoberfestBanner.src;
    fullscreenOverlay.style.display = "flex";
  });

  fullscreenOverlay.addEventListener("click", function() {
    fullscreenOverlay.style.display = "none";
  });
});
