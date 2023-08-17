const images = [
  {
    src: "../img/nHHfuj9bIJ.png",
    description: "Skriza's main page: Discover the latest posts, share your thoughts, and initiate SkrizaRooms. An intuitive dashboard to connect with like-minded individuals."
  },
  {
    src: "../img/7QXA3vfDgd.png",
    description: "Advanced search on Skriza: Filter posts by sentiment values, uncover current trends, and explore the latest or most popular posts. A powerful tool to find content tailored to your interests."
  },
  {
    src: "../img/ZpoyMWMNme.png",
    description: "Skriza's notification page: Stay updated with the latest interactions and see recommended SkrizaRooms. The hub for staying engaged, with further enhancements on the way."
  },
  {
    src: "../img/XTodyTZByc.png",
    description: "Your Skriza profile: An overview of your posts, interactions, and soon, an average sentiment score of your posts. A personalized experience showcasing your influence on the platform."
  },
];


let currentImageIndex = 0;
const mainImage = document.getElementById("mainImage");
const fullscreenOverlay = document.getElementById("fullscreenOverlay");
const fullscreenImage = document.getElementById("fullscreenImage");
const imageDescription = document.getElementById("imageDescription");

mainImage.addEventListener("click", function() {
  fullscreenImage.src = mainImage.src;
  imageDescription.innerText = mainImage.getAttribute('data-description');
  fullscreenOverlay.classList.remove("d-none");
  document.body.style.overflow = "hidden";
});

fullscreenImage.addEventListener("click", function() {
  fullscreenOverlay.classList.add("d-none");
  document.body.style.overflow = "auto";
});

fullscreenOverlay.addEventListener("click", function(event) {
  if (event.target === fullscreenOverlay) {
    fullscreenOverlay.classList.add("d-none");
    document.body.style.overflow = "auto";
  }
});

document.getElementById("prevBtn").addEventListener("click", changeImage.bind(null, -1));
document.getElementById("nextBtn").addEventListener("click", changeImage.bind(null, 1));
document.getElementById("fullscreenPrevBtn").addEventListener("click", changeImage.bind(null, -1));
document.getElementById("fullscreenNextBtn").addEventListener("click", changeImage.bind(null, 1));

function changeImage(direction) {
  currentImageIndex = (currentImageIndex + direction + images.length) % images.length;
  updateImage();
}

function updateImage() {
  const currentImage = images[currentImageIndex];
  mainImage.src = currentImage.src;
  mainImage.setAttribute('data-description', currentImage.description);

  // Update fullscreen image too
  fullscreenImage.src = currentImage.src;
  imageDescription.innerText = currentImage.description;

  // Update dots
  dots.forEach((dot, index) => {
    if (index === currentImageIndex) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

const imageNav = document.getElementById("imageNav");
images.forEach((_, index) => {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  dot.addEventListener("click", function() {
    currentImageIndex = index;
    updateImage();
    fullscreenOverlay.classList.remove("d-none");
    document.body.style.overflow = "hidden";
  });
  imageNav.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

let slideInterval;
startAutoSlide();

function startAutoSlide() {
  slideInterval = setInterval(function() {
    changeImage(1);
  }, 5000); // Bildwechsel alle 5 Sekunden
}

function stopAutoSlide() {
  clearInterval(slideInterval);
}
