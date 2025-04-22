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

window.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  const nextSection = document.querySelector("section");
  const navbarHeight = navbar.offsetHeight;

  if (window.innerWidth <= 1024) {
    // Mobile: tambahkan paddingTop ke section
    nextSection.style.paddingTop = navbarHeight + "px";
  }
});

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    navbar.classList.add("backdrop-blur-lg", "bg-slate-800/40", "shadow-md");
  } else {
    navbar.classList.remove("backdrop-blur-md", "bg-slate-800/40", "shadow-md");
  }
});
