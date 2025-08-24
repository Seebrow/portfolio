// main.js

document.addEventListener("DOMContentLoaded", () => {
  // Sélection de tous les liens internes du menu
  const menuLinks = document.querySelectorAll('a[href^="#"]');

  menuLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // Empêche le saut brutal
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth", // Défilement fluide
          block: "start"      // Aligne le haut de la section
        });
      }
    });
  });
});
