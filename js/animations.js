/* ============================================
   ANIMATIONS — Intersection Observer
   Fade-up suave ao entrar na viewport
   ============================================ */

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.12
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target); // anima só uma vez
    }
  });
}, observerOptions);

// Elementos que vão animar
const animatedElements = document.querySelectorAll(
  '.about__inner, .terminal, .project-card, .contact-item, .contact__text'
);

animatedElements.forEach((el, index) => {
  el.classList.add('fade-up');
  // Delay escalonado para cards filhos
  el.style.transitionDelay = `${index * 60}ms`;
  observer.observe(el);
});