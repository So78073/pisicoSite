// Seleciona os elementos
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

// Adiciona o evento de clique
menuToggle.addEventListener('click', () => {
    console.log('Menu toggle clicked');
    navLinks.classList.toggle('active');
  });
  