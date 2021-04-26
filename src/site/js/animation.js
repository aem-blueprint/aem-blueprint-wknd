const animateIn = () => {
  const $items = document.querySelectorAll('.animate-in');
  const animate = (changes) => {
    changes.forEach(change => { if (change.isIntersecting) change.target.classList.add('animated'); });
  }
  const observer = new IntersectionObserver(animate, { root: null, rootMargin: '0px', threshold: 0.5 });
  $items.forEach($item => observer.observe($item));
}

document.addEventListener('DOMContentLoaded', animateIn);