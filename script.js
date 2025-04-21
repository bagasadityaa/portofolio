const slides = document.querySelectorAll(".slide");
let currentSlide = 0;
const portofolios = [
  {
    id: 1,
    title: "Ramadhan Kareem",
    image: "images/posterramadhan.svg",
    description: "Aplikasi Web ramadhan",
    date: "2024-02-10",
    link: "https://bagasadityaa.github.io/ramadhankareem/",
  },
  {
    id: 2,
    title: "Anime List ",
    image: "images/posteranime.svg",
    description: "Aplikasi Web ramadhan",
    date: "2024-04-02",
    link: "https://anime-list-bagas-adityas-projects.vercel.app/",
  },
  {
    id: 3,
    title: "List Movie",
    image: "images/postermoviefilm.svg",
    description: "Aplikasi Web ramadhan",
    date: "2024-04-10",
    link: "https://filmnextjs-bagas-adityas-projects.vercel.app/",
  },
  {
    id: 4,
    title: "Gemini Ai",
    image: "images/ai.svg",
    description: "Aplikasi Web ramadhan",
    date: "2024-07-24",
    link: "https://ai-gemini-git-main-bagas-adityas-projects.vercel.app/",
  },
];

const sortedDate = portofolios.sort((a, b) => {
  return new Date(b.date) - new Date(a.date);
});
const container = document.getElementById("portofolio-list");

sortedDate.forEach((item) => {
  container.innerHTML += `
  <a href="${item.link}" >
  <div class="rounded-lg shadow-md py-3 mb-2 sm:mb-20 ">
  <img
    src="${item.image}"
    alt="${item.title}"
    class="w-full h-full object-cover rounded-md mb-2"
    />
  <div class="flex flex-row items-center justify-between">
  <h3 class="text-xl font-semibold text-gray-800">${item.title}</h3>
  <p class="text-xl text-gray-500 ">${item.date}</p>
  </div>
</div>
</a>
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
