const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#primary-nav');

// The review flag eagerly resolves native lazy-loading for full-page visual QA.
if (new URLSearchParams(window.location.search).has('review')) {
  document.querySelectorAll('img[loading="lazy"]').forEach((image) => {
    image.loading = 'eager';
  });
}

function closeMenu() {
  menuButton?.setAttribute('aria-expanded', 'false');
  nav?.removeAttribute('data-open');
  document.body.classList.remove('menu-open');
}

menuButton?.addEventListener('click', () => {
  const willOpen = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(willOpen));
  nav.toggleAttribute('data-open', willOpen);
  document.body.classList.toggle('menu-open', willOpen);
});

nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
window.addEventListener('resize', () => {
  if (window.innerWidth > 980) closeMenu();
});

const lightbox = document.querySelector('[data-lightbox]');
const lightboxImage = document.querySelector('[data-lightbox-image]');
const lightboxCaption = document.querySelector('[data-lightbox-caption]');

document.querySelectorAll('[data-gallery-src]').forEach((button) => {
  button.addEventListener('click', () => {
    if (!lightbox || !lightboxImage || !lightboxCaption) return;
    lightboxImage.src = button.dataset.gallerySrc;
    lightboxImage.alt = button.dataset.galleryAlt;
    lightboxCaption.textContent = button.querySelector('span')?.textContent || '';
    lightbox.showModal();
  });
});

document.querySelector('[data-lightbox-close]')?.addEventListener('click', () => lightbox?.close());
lightbox?.addEventListener('click', (event) => {
  if (event.target === lightbox) lightbox.close();
});

document.querySelectorAll('[data-year]').forEach((node) => {
  node.textContent = String(new Date().getFullYear());
});
