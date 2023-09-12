document.addEventListener("DOMContentLoaded", function() {
  // Überprüfen, ob das Popup bereits geschlossen wurde
  let isClosed = localStorage.getItem("hacktoberfestPopupClosed");
  let closedTime = localStorage.getItem("hacktoberfestPopupClosedTime");

  // Überprüfen, ob 3 Tage vergangen sind
  let now = new Date().getTime();
  if (closedTime && (now - closedTime < 3 * 24 * 60 * 60 * 1000)) {
    isClosed = "true";
  }

  // Popup anzeigen, wenn es noch nicht geschlossen wurde
  setTimeout(function() {
    if (!isClosed) {
      document.getElementById("hacktoberfestPopup").style.display = "flex"; // flex für vertikale Ausrichtung
    }
  }, 5000); // Nach 5 Sekunden

  // Event-Handler für das Schließen des Popups
  const closePopup = document.getElementById("closePopup");
  closePopup.addEventListener("click", function() {
    document.getElementById("hacktoberfestPopup").style.display = "none";
    localStorage.setItem("hacktoberfestPopupClosed", "true");
    localStorage.setItem("hacktoberfestPopupClosedTime", new Date().getTime()); // Speichern der Zeit
  });

  // Popup schließen, wenn außerhalb des Inhalts geklickt wird
  const hacktoberfestPopup = document.getElementById('hacktoberfestPopup');
  hacktoberfestPopup.addEventListener('click', function(event) {
    if (event.target === hacktoberfestPopup) {
      hacktoberfestPopup.style.display = 'none';
      localStorage.setItem("hacktoberfestPopupClosed", "true");
      localStorage.setItem("hacktoberfestPopupClosedTime", new Date().getTime()); // Speichern der Zeit
    }
  });
});
