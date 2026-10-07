(() => {
  const button = document.querySelector('.menu-toggle');
  const links = document.getElementById('nav-links');
  const mobile = window.matchMedia('(max-width: 760px)');
  if (button && links) {
    button.hidden = false;
    const closeMenu = () => {
      links.hidden = mobile.matches;
      button.setAttribute('aria-expanded', 'false');
    };
    closeMenu();
    mobile.addEventListener('change', closeMenu);
    button.addEventListener('click', () => {
      const open = button.getAttribute('aria-expanded') !== 'true';
      button.setAttribute('aria-expanded', String(open));
      links.hidden = !open;
    });
    links.addEventListener('click', event => {
      if (event.target.closest('a') && mobile.matches) closeMenu();
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && mobile.matches && !links.hidden) {
        closeMenu();
        button.focus();
      }
    });
  }
  if ('IntersectionObserver' in window) {
    const navigation = document.querySelectorAll('.nav-links a');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        navigation.forEach(link => {
          if (link.hash === '#' + entry.target.id) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      });
    }, {rootMargin: '-15% 0px -65% 0px'});
    document.querySelectorAll('article.page section[id]').forEach(section => observer.observe(section));
  }
})();
