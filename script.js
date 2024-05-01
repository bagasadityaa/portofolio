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

// const openBtn = document.getElementById(["openBtn"], ["openBtn1"]);
// const closeBtn = document.getElementById(["closeBtn"], ["closeBtn1"]);
// const popup = document.getElementById(["popup"], ["popup1"]);

// // Tambahkan event listener untuk tombol pembuka
// openBtn.addEventListener("click", () => {
//   popup.classList.remove("hidden"); // Tampilkan pop-up saat tombol pembuka diklik
// });

// // Tambahkan event listener untuk tombol penutup
// closeBtn.addEventListener("click", () => {
//   popup.classList.add("hidden"); // Sembunyikan pop-up saat tombol penutup diklik
// });

// Dapatkan semua tombol pembuka dan tombol penutup
const openBtns = document.querySelectorAll(".openBtn");
const closeBtns = document.querySelectorAll(".closeBtn");

// Tambahkan event listener untuk setiap tombol pembuka
openBtns.forEach((openBtn) => {
  openBtn.addEventListener("click", () => {
    const targetId = openBtn.getAttribute("data-target"); // Dapatkan ID pop-up target dari atribut data-target
    const popup = document.getElementById(targetId);
    popup.classList.remove("hidden"); // Tampilkan pop-up
  });
});

// Tambahkan event listener untuk setiap tombol penutup
closeBtns.forEach((closeBtn) => {
  closeBtn.addEventListener("click", () => {
    const popup = closeBtn.closest(".popup");
    popup.classList.add("hidden"); // Sembunyikan pop-up saat tombol penutup diklik
  });
});
