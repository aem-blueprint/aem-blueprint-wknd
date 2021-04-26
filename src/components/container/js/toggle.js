const BUTTON_OPEN_SELECTOR = '.cmp-container .button--toggle\\:open';
const BUTTON_CLOSED_SELECTOR = '.cmp-container .button--toggle\\:closed';
const NAV_SELECTOR = '.cmp-container > .container';

const init = ($el) => {
  $el.classList.add('initialized');

  const $buttonOpen = $el.querySelector(BUTTON_OPEN_SELECTOR); 
  const $buttonClose = $el.querySelector(BUTTON_CLOSED_SELECTOR);
  const $nav = $el.querySelector(NAV_SELECTOR);
  $nav.classList.add('hidden');
  // collapse($nav);
  hide($nav);

  if (!$buttonOpen || !$buttonClose || !$nav) {
    console.warn('Navbar cannot initalize correctly due to missing elements');
    console.warn('Navbar Open Button:',$buttonOpen);
    console.warn('Navbar Close Button:',$buttonClose);
    console.warn('Navbar Nav:',$nav);

    return false;
  }

  $buttonOpen.addEventListener('click', toggle);
  $buttonClose.classList.add('hidden');
  $buttonClose.addEventListener('click', toggle);
}

const toggle = (e) => {
  const $el = e.target.closest('[class*="container--toggle"]');
  const $buttonOpen = $el.querySelector(BUTTON_OPEN_SELECTOR); 
  const $buttonClose = $el.querySelector(BUTTON_CLOSED_SELECTOR);
  const $nav = $el.querySelector(NAV_SELECTOR);
  const open = $nav.getAttribute('data-collapsed') === 'false';
  const $toFocus = open ? $buttonClose : $buttonOpen;

  $buttonOpen.classList.toggle('hidden');
  $buttonClose.classList.toggle('hidden');
  if (open) collapse($nav);
  else expand($nav);

  requestAnimationFrame(() => $toFocus.focus());
}

const hide = ($el) => {
  $el.style.height = 0 + 'px';
  $el.setAttribute('data-collapsed', 'true');
  setTimeout(() => $el.classList.add('hidden'), 350);
}


const collapse = ($el) => {
  var sectionHeight = $el.scrollHeight;
  var elementTransition = $el.style.transition;
  $el.style.transition = '';
  $el.classList.add('overflow-hidden');
  
  requestAnimationFrame(() => {
    $el.style.height = sectionHeight + 'px';
    $el.style.transition = elementTransition;
    requestAnimationFrame(() => hide($el)); 
  });
}

const expand = ($el) => {
  $el.classList.remove('hidden');
  $el.classList.add('overflow-hidden');
  requestAnimationFrame(() => {
    var sectionHeight = $el.scrollHeight;
    $el.style.height = sectionHeight + 'px';

    $el.addEventListener('transitionend', (e) => {
      $el.removeEventListener('transitionend', arguments.callee);
      $el.style.height = null;
    });
    
    $el.setAttribute('data-collapsed', 'false');
    setTimeout(() => $el.classList.remove('overflow-hidden'), 350);
  });
}


document.addEventListener(
  'DOMContentLoaded', 
  () => {
    document.querySelectorAll('[class*="container--toggle"]').forEach($el => {
      if (
        $el.querySelector(BUTTON_OPEN_SELECTOR) && 
        $el.querySelector(BUTTON_CLOSED_SELECTOR) && 
        !$el.classList.contains('initialized') &&
        $el.querySelector(NAV_SELECTOR)
      ) {
        init($el);
      }
    });
  }
);