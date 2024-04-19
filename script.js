const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

setInterval(() => {
  slides[currentSlide].classList.add("hidden");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.remove("hidden");
}, 5000);

document.addEventListener("DOMContentLoaded", function () {
  document.body.classList.add("loading-complete"); // Add loading-complete class to body when document is fully loaded
});
