(() => {
  const ASSESSMENT_URL = 'https://c5d4e2c0.sibforms.com/serve/MUIFAAERE8V1XN72Ah3ex53fsa2kXv2x9eoiOBdbGd1kj8wHUyqy--9Hnbw6GPuQJzFAtwwhwNFDGuY_pILsdRD5R1exjZUM47BQCtsiVJrLgorLssJSWvqQw1CrPUIlJCme5usBaiMJcGMQ4kcqgTP0wdjirgCwCgnt70Q2AjFhPaXTJXf-f6nsoNqa1gppTK40kQFgFyKlr2huvA==';

  const page = window.location.pathname.split('/').pop() || 'index.html';

  const isActive = (...names) => names.includes(page);
  const activeClass = (...names) => isActive(...names) ? ' aria-current="page"' : '';

  const header = `
    <header class="shared-site-header" data-shared-header>
      <a class="shared-brand" href="index.html#top" aria-label="Blooming Soul Journeys home">
        <img src="logo-transparent.png" alt="Blooming Soul Journeys">
      </a>

      <button class="shared-menu-toggle" type="button" aria-label="Open menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>

      <nav class="shared-site-nav" aria-label="Main navigation">
        <a href="meet-roberta.html"${activeClass('meet-roberta.html')}>Meet Roberta</a>
        <a href="beyond-surviving.html"${activeClass('beyond-surviving.html')}>Beyond Surviving</a>
        <a href="inner-bloom.html"${activeClass('inner-bloom.html')}>Inner Bloom</a>
        <a href="the-freedom-within.html"${activeClass('the-freedom-within.html')}>The Freedom Within</a>
        <a href="conscious-leadership.html"${activeClass('conscious-leadership.html')}>Team Growth</a>
        <a href="${ASSESSMENT_URL}" target="_blank" rel="noopener"${activeClass('how-fulfilled-are-you-really.html')}>Free Assessment</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  `;

  const footer = `
    <footer class="shared-site-footer" id="contact" data-shared-footer>
      <div class="shared-footer-inner">
        <a class="shared-footer-brand" href="index.html#top" aria-label="Blooming Soul Journeys home">
          <img src="footer-logo.png" alt="Blooming Soul Journeys">
        </a>

        <div class="shared-footer-copy">
          <h3>Let’s stay in touch</h3>
          <p>Questions, curiosity, or a sense that one of these spaces may be for you?</p>
        </div>

        <div class="shared-footer-socials" aria-label="Contact and social links">
          <a href="mailto:iamrobertamartin@gmail.com" aria-label="Email Roberta">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5h18v14H3z"/><path d="m3 6 9 7 9-7"/></svg>
          </a>
          <a href="https://www.instagram.com/iam_robertamartin/" target="_blank" rel="noopener" aria-label="Instagram">
            <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg>
          </a>
          <a href="https://www.facebook.com/roberta.martin.568" target="_blank" rel="noopener" aria-label="Facebook">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8h4V3h-4c-3.3 0-6 2.7-6 6v3H4v5h4v4h5v-4h4l1-5h-5V9c0-.6.4-1 1-1z"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/robertaauroremartin/" target="_blank" rel="noopener" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="9" width="4" height="12"/><circle cx="5" cy="5" r="2"/><path d="M11 21V9h4v2c1-1.5 2.5-2.5 4.5-2.5 3 0 4.5 2 4.5 5.5v7h-4v-6c0-1.8-.7-3-2.3-3-1.8 0-2.7 1.2-2.7 3.4V21z"/></svg>
          </a>
        </div>
      </div>
    </footer>
  `;

  const headerMount = document.querySelector('[data-site-header]');
  const footerMount = document.querySelector('[data-site-footer]');

  if (headerMount) headerMount.outerHTML = header;
  if (footerMount) footerMount.outerHTML = footer;

  const siteHeader = document.querySelector('.shared-site-header');
  const toggle = document.querySelector('.shared-menu-toggle');
  const nav = document.querySelector('.shared-site-nav');

  const updateHeader = () => {
    if (siteHeader) siteHeader.classList.toggle('is-scrolled', window.scrollY > 24);
  };

  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
      document.body.classList.toggle('menu-open', open);
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('menu-open');
      });
    });
  }
})();
