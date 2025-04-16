const slides = document.querySelectorAll(".slide");
let currentSlide = 0;
const portofolios = [
  {
    id: 1,
    title: "Ramadhan Kareem",
    image: "images/posterramadhan.svg",
    description: "Aplikasi Web ramadhan",
    date: "2024-02-10",
  },
  {
    id: 2,
    title: "My Anime List ",
    image: "images/posterramadhan.svg",
    description: "Aplikasi Web ramadhan",
    date: "2024-03-01",
  },
];

const container = document.getElementById("portofolio-list");

portofolios.forEach((item) => {
  container.innerHTML += `
<div class="rounded-lg shadow-md p-4">
  <img
    src="${item.image}"
    alt="${item.title}"
    class="w-full h-40 object-cover rounded-md mb-2"
  />
  <h3 class="text-xl font-semibold text-gray-800">${item.title}</h3>
  <p class="text-sm text-gray-500 mb-1">${item.date}</p>
  <p class="text-gray-700">${item.description}</p>
</div>
`;
});
setInterval(() => {
  slides[currentSlide].classList.add("hidden");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.remove("hidden");
}, 5000);

document.addEventListener("DOMContentLoaded", function () {
  document.body.classList.add("loading-complete"); // Add loading-complete class to body when document is fully loaded
});

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
