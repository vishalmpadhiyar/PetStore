const menuBtn = document.querySelector("#menuBtn");
const navlinks = document.querySelector("#navLinks");
const menubtnIcon = document.querySelector("#menuBtn i");

menuBtn.addEventListener("click", (e) => {
  navlinks.classList.toggle("open");
  const isOpen = navlinks.classList.contains("open");
  menubtnIcon.setAttribute(
    "class",
    isOpen ? "fa-solid fa-x" : "fa-solid fa-bars"
  );
});

navlinks.addEventListener("click", (e) => {
  navlinks.classList.remove("open");
  menubtnIcon.setAttribute("class", "fa-solid fa-bars");
});

const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,

  breakpoints: {
    540: {
      slidesPerView: 2,
    },
  },
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".head-content h4", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".head-content h1", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".head-content h2", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".head-content p", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".head-btn", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".intro-card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(
  ".about-row:nth-child(3) .about-img img, .about-row:nth-child(5) .    about-img img",
  {
    ...scrollRevealOption,
    origin: "left",
  }
);

ScrollReveal().reveal(".about-row:nth-child(4) .about-img img", {
  ...scrollRevealOption,
  origin: "right",
});

ScrollReveal().reveal(".about-content span", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about-content h4", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about-content p", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".pro-card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".ser-card", {
  duration: 1000,
  interval: 500,
});

ScrollReveal().reveal(".insta-grid img", {
    duration: 1000,
    interval: 500,
});

