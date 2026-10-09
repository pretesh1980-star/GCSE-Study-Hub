/* Presentation only: leave navigation actions and saved progress to app.js. */
(() => {
  const toggle = document.querySelector('.mobile-menu-toggle');
  const nav = document.getElementById('nav');
  if (!toggle || !nav) return;
  function setOpen(open) {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? 'Close menu' : 'Menu';
    nav.classList.toggle('menu-open', open);
  }
  toggle.addEventListener('click', () => {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });
  nav.addEventListener('click', event => {
    if (event.target.closest('button') && matchMedia('(max-width: 820px)').matches) {
      setOpen(false);
      toggle.focus();
    }
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      toggle.focus();
    }
  });
})();
