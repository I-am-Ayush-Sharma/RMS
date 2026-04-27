const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".navbar__link");

// Toggle mobile navigation without using any external libraries.
menuToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("navbar__menu--open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

// Close the mobile menu after a link is selected for a smoother user experience.
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("navbar__menu--open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});
