document.querySelectorAll('details').forEach((detail) => {
  detail.addEventListener('toggle', () => {
    if (detail.open) {
      document.querySelectorAll('details[open]').forEach((other) => {
        if (other !== detail) other.open = false;
      });
    }
  });
});


const beyondMenuToggle = document.querySelector('.shared-header .menu-toggle');
const beyondSiteNav = document.querySelector('.shared-header .site-nav');

if (beyondMenuToggle && beyondSiteNav) {
  beyondMenuToggle.addEventListener('click', () => {
    const isOpen = beyondSiteNav.classList.toggle('open');
    beyondMenuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  beyondSiteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      beyondSiteNav.classList.remove('open');
      beyondMenuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}
