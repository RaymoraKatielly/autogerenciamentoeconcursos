// script.js

// MENU MOBILE
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Fecha o menu ao clicar em um link
  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// DESTACAR LINK ATIVO AO ROLAR / CLICAR
const sections = document.querySelectorAll("main section");
const navLinks = document.querySelectorAll(".nav-link");

function setActiveLink() {
  let currentId = "";

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 80 && rect.bottom >= 80) {
      currentId = section.id;
    }
  });

  navLinks.forEach((link) => {
    if (link.getAttribute("href") === `#${currentId}`) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", setActiveLink);
window.addEventListener("load", setActiveLink);
