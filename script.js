// ─── MENU MOBILE (hambúrguer) ───────────────────────────────────────────────
const toggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ─── SCROLL REVEAL ───────────────────────────────────────────────────────────
const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 60);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => revealObserver.observe(el));

// ─── SCROLL SPY (link ativo na nav) ─────────────────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navAs = document.querySelectorAll('.nav-links a');

const scrollSpy = () => {
  let current = '';

  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 120) {
      current = section.id;
    }
  });

  navAs.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current
      ? 'var(--text)'
      : '';
  });
};

window.addEventListener('scroll', scrollSpy, { passive: true });

// ─── FORMULÁRIO DE CONTATO ───────────────────────────────────────────────────
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  this.style.display = 'none';
  document.getElementById('formSuccess').style.display = 'block';
});