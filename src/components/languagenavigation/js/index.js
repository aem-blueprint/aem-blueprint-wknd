const init = ($el) => {
  const $nav = $el.querySelector('.cmp-languagenavigation');
  const $ul = $el.querySelector('.cmp-languagenavigation__group');
  $ul.setAttribute('aria-expanded',false);
  const $button = document.createElement('button');
  const $text = document.createElement('span');
  const $icon = document.createElement('span');
  $icon.classList.add('cmp-button__icon','cmp-button__icon--globe');
  $text.innerText = $el.querySelector('.cmp-languagenavigation__item--active a').innerText;
  $button.classList.add('button','cmp-button','var:gap-2');
  $button.setAttribute('aria-expanded',false);
  $button.append($icon);
  $button.append($text);

  const clickHandler = (e) => {
    const state = $button.getAttribute('aria-expanded') === 'true';
    $button.setAttribute('aria-expanded', !state); 
    $ul.setAttribute('aria-expanded', !state); 
    document.addEventListener('click', closeHandler);
  }

  const closeHandler = (e) => {
    if (!e.target.closest('.cmp-languagenavigation')) {
      $button.setAttribute('aria-expanded', false); 
      $ul.setAttribute('aria-expanded', false); 
      document.removeEventListener('click', closeHandler);
    }
  }

  $button.addEventListener('click', clickHandler);
  $nav.prepend($button);
}

document.addEventListener('DOMContentLoaded', () => document.querySelectorAll('.languagenavigation').forEach($el => {
  if ($el.classList.contains('languagenavigation:dropdown')) init($el)
}));