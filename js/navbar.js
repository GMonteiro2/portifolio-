/* ============================================
   NAVBAR — Scroll behavior + Mobile menu
   ============================================ */

const navbar      = document.getElementById('navbar');
const toggle      = document.getElementById('navbar-toggle');
const nav         = document.getElementById('navbar-nav');
const navLinks    = nav.querySelectorAll('.navbar__link');

// --- Efeito glassmorphism ao rolar ---
const handleScroll = () => {
  if (window.scrollY > 20) {
    navbar.classList.add('navbar--scrolled');
  } else {
    navbar.classList.remove('navbar--scrolled');
  }
};

window.addEventListener('scroll', handleScroll, { passive: true });

// --- Menu hamburguer ---
const toggleMenu = () => {
  const isOpen = nav.classList.toggle('is-open');
  toggle.classList.toggle('is-active');
  toggle.setAttribute('aria-expanded', isOpen);

  // Trava o scroll do body quando menu está aberto
  document.body.style.overflow = isOpen ? 'hidden' : '';
};

toggle.addEventListener('click', toggleMenu);

// --- Fecha o menu ao clicar em um link ---
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    toggle.classList.remove('is-active');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});