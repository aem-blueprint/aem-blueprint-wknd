const NAV_SELECTOR = '.navigation';
const NAV_ITEM_SELECTOR = '.cmp-navigation__item';
const TOGGLE_BEFORE_CLASS = 'navigation--nested-toggle-before';
const TOGGLE_AFTER_CLASS = 'navigation--nested-toggle-after';
const LINK_SELECTOR = '.cmp-navigation__item-link';
const UL_SELECTOR = '.cmp-navigation__group';
const DROPDOWN_SELECTOR = '.cmp-navigation__group .cmp-navigation__group';
const LEVEL_SELECTOR_PREFIX = '.cmp-navigation__item--level-'

/*
  TODO:
  [ ] - blur handler
  [ ] - aria labels?
*/

const setupLIForDropdown = ($li,$nav) => {
  const $a = $li.querySelector(LINK_SELECTOR);
  const $ul = $li.querySelector(UL_SELECTOR);
  const $button = document.createElement('button');
  const $span = document.createElement('span');
  const $arrow = document.createElement('span');
  $button.setAttribute('aria-expanded',false);
  $button.classList.add('dropdown-toggle-split');
  $button.addEventListener('click', toggleChildUL);
  $span.classList.add('sr-only');
  $span.innerText = 'Toggle Dropdown';
  $arrow.classList.add('icon--caret-down-fill','cmp-button__icon');
  $li.classList.add('cmp-navigation--dropdown');
  $ul.classList.add('hidden');
  $button.appendChild($arrow);
  $button.appendChild($span);

  if (!$nav.classList.contains(TOGGLE_BEFORE_CLASS)) {
    $button.classList.add('ml-2')
    $li.insertBefore($button, $ul);
  } else {
    $button.classList.add('mr-2')
    $li.insertBefore($button, $a);
  }
}

const toggleChildUL = (e) => {
  const $button = e.target.nodeName === 'SPAN' ? e.target.parentNode : e.target;
  console.log('button', $button);
  const $li = $button.parentNode;
  const $ul = $li.querySelector(UL_SELECTOR);
  $button.setAttribute('aria-expanded', $button.getAttribute('aria-expanded') === 'true' ? false : true);
  $button.classList.toggle('open');
  $ul.classList.toggle('hidden');
  $ul.classList.toggle('visible');
}

document.addEventListener(
  'DOMContentLoaded', 
  () => {
    document.querySelectorAll(NAV_SELECTOR).forEach($el => {
      if ($el.querySelectorAll(DROPDOWN_SELECTOR).length > 0 && !$el.classList.contains('initialized')) {
        $el.classList.add('initialized');
        $el.querySelectorAll(NAV_ITEM_SELECTOR).forEach(($li) => {
          if ($li.querySelector(UL_SELECTOR)) setupLIForDropdown($li,$el)
        });
      }
    });
  }
);