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

const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const popup = document.getElementById("popup");

// Tambahkan event listener untuk tombol pembuka
openBtn.addEventListener("click", () => {
  popup.classList.remove("hidden"); // Tampilkan pop-up saat tombol pembuka diklik
});

// Tambahkan event listener untuk tombol penutup
closeBtn.addEventListener("click", () => {
  popup.classList.add("hidden"); // Sembunyikan pop-up saat tombol penutup diklik
});
