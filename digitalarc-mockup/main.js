/* ─── DARK MODE ─────────────────────────────────────────────────── */
const html = document.documentElement;
const toggleBtn = document.getElementById('themeToggle');

const savedTheme = localStorage.getItem('da-theme') || 'light';
html.dataset.theme = savedTheme;
updateToggleIcon(savedTheme);

if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    const next = html.dataset.theme === 'dark' ? 'light' : 'dark';
    html.dataset.theme = next;
    localStorage.setItem('da-theme', next);
    updateToggleIcon(next);
  });
}

function updateToggleIcon(theme) {
  if (!toggleBtn) return;
  toggleBtn.textContent = theme === 'dark' ? '☀' : '☾';
  toggleBtn.title = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
}

/* ─── FAQ ACCORDION ─────────────────────────────────────────────── */
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

/* ─── TESTIMONIAL CAROUSEL ──────────────────────────────────────── */
const testimonials = document.querySelectorAll('.testimonial-item');
let currentTestimonial = 0;

function showTestimonial(index) {
  testimonials.forEach((t, i) => {
    t.classList.toggle('active', i === index);
  });
}

if (testimonials.length > 0) {
  showTestimonial(0);

  const prevBtn = document.getElementById('testimonialPrev');
  const nextBtn = document.getElementById('testimonialNext');

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
      showTestimonial(currentTestimonial);
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentTestimonial = (currentTestimonial + 1) % testimonials.length;
      showTestimonial(currentTestimonial);
    });
  }
}

/* ─── SCROLL TO TOP ─────────────────────────────────────────────── */
const scrollTopBtn = document.getElementById('scrollTop');

if (scrollTopBtn) {
  window.addEventListener('scroll', () => {
    scrollTopBtn.classList.toggle('visible', window.scrollY > 300);
  }, { passive: true });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ─── MOBILE NAV DRAWER ──────────────────────────────────────────── */
const navDrawer = document.getElementById('navDrawer');
const navHamburger = document.getElementById('navHamburger');
const navClose = document.getElementById('navClose');
const navOverlay = document.getElementById('navOverlay');

function openDrawer() {
  if (!navDrawer) return;
  navDrawer.classList.add('open');
  navDrawer.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}
function closeDrawer() {
  if (!navDrawer) return;
  navDrawer.classList.remove('open');
  navDrawer.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

if (navHamburger) navHamburger.addEventListener('click', openDrawer);
if (navClose) navClose.addEventListener('click', closeDrawer);
if (navOverlay) navOverlay.addEventListener('click', closeDrawer);

/* ─── ACTIVE NAV LINK ────────────────────────────────────────────── */
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.navbar__nav a, .footer__nav a, .nav-drawer__nav a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});
