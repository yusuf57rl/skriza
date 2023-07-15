document.querySelectorAll(".menuskriza a").forEach(a =>
    a.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelectorAll(".contentskriza").forEach(c =>
            c.style.display = 'none'
        );

        document.querySelector(this.getAttribute('href')).style.display = 'block';
    })
);

// Wählt standardmäßig den ersten Menüpunkt "Eigene Beiträge" aus
document.querySelector(".menuskriza a").click();
