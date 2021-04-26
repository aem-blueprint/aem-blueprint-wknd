document.addEventListener('DOMContentLoaded', () => {
  const $el = document.getElementById('back-to-top')
  if ($el) $el.addEventListener('click', (e) => window.scrollTo({ top: 0, behavior: 'smooth' }));
});