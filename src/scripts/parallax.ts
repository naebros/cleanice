export function initParallax(selector: string, speed = 0.3) {
  function setup() {
    const el = document.querySelector<HTMLElement>(selector);
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let ticking = false;

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          el.style.transform = `translateY(${window.scrollY * speed}px)`;
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  setup();
}

export function initSmoothScroll() {
  document.addEventListener('click', (e) => {
    const link = (e.target as HTMLElement).closest('a[href^="#"]');
    if (!link) return;
    const href = link.getAttribute('href');
    if (!href || href === '#') return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}
