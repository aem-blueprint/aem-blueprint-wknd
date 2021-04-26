// dark-mode media query matched or not
let matched = window.matchMedia('(prefers-color-scheme: dark)').matches;

document.addEventListener('DOMContentLoaded', () => {
  if (matched) document.documentElement.classList.add('dark');
  else document.documentElement.classList.add('light');
})