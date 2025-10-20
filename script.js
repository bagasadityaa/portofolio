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
    title: "Food Web",
    image: "images/foodweb.svg",
    description: "Aplikasi Web ramadhan",
    date: "2024-05-26",
    link: "https://foodweb-bagas-adityas-projects.vercel.app/",
  },
  {
    id: 5,
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
  <div data-aos="fade-up" >
  <div class="rounded-lg shadow-md ">
  <img
    src="${item.image}"
    alt="${item.title}"
    class="w-full h-full object-cover rounded-md mb-2"
    />
  <div class="flex flex-row items-center justify-between mx-2 py-2 px-1">
  <h3 class="text-base font-semibold text-gray-800">${item.title}</h3>
  <p class="text-base text-gray-500 ">${item.date}</p>
  </div>
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

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    navbar.classList.add("backdrop-blur-md", "bg-slate-800/40", "shadow-md");
  } else {
    navbar.classList.remove("backdrop-blur-md", "bg-slate-800/40", "shadow-md");
  }
});

const text = ["Web Developer", "Fullstack Software Developer"];
const speed = 100;
const delay = 1500;
let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;
const isMobile = window.innerWidth < 1024;
const targetId = isMobile ? "typewriter-mobile" : "typewriter-desktop";

function type() {
  const targetElement = document.getElementById("typewriter-text");

  currentText = text[i];

  if (isDeleting) {
    targetElement.innerHTML = currentText.substring(0, j--);
  } else {
    targetElement.innerHTML = currentText.substring(0, j++);
  }

  if (!isDeleting && j === currentText.length + 1) {
    isDeleting = true;
    setTimeout(type, delay);
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % text.length;
    setTimeout(type, 500);
  } else {
    setTimeout(type, speed);
  }
}
document.addEventListener("DOMContentLoaded", type);

// percobaan
const name = "Bagas Aditya Abimanyu";
function typewriter() {
  const textElement = document.getElementById("menulis-teks");
  let i = 0;
  function type() {
    if (i < name.length) {
      textElement.innerHTML += name.charAt(i);
      i++;
      setTimeout(type, 100);
    }
  }
  function reset() {
    if (i > name.length) {
      i--;
      textElement.innerHTML = name.subString(0, i);
      setTimeout(reset, 100);
    } else {
      type();
    }
  }
  textElement.innerHTML = "";
  reset();
  type();
}

typewriter();
