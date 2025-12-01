// lightbox.js - shared for all pages
document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.ach-card');
  const lightbox = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightboxImg');
  const lbClose = document.getElementById('lbClose');
  const lbCaption = document.getElementById('lbCaption');

  function openLightbox(src, caption) {
    lbImg.src = src;
    lbImg.alt = caption || '';
    lbCaption.textContent = caption || '';
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    lbImg.src = '';
    lbCaption.textContent = '';
  }

  cards.forEach(c => {
    c.addEventListener('click', () => {
      const full = c.getAttribute('data-full') || c.querySelector('img').src;
      const caption = c.getAttribute('data-caption') || '';
      openLightbox(full, caption);
    });
  });

  if (lbClose) lbClose.addEventListener('click', closeLightbox);

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  // close on escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('open')) closeLightbox();
  });
});
