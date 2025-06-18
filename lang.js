let currentLang = 'ru';

document.querySelector('a[href="#lang"]').addEventListener('click', () => {
  currentLang = currentLang === 'ru' ? 'kz' : 'ru';

  document.querySelectorAll('[data-ru]').forEach(el => {
    el.textContent = el.dataset[currentLang];
  });
});
