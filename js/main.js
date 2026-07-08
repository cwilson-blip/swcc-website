// SWCC site — nav interactions (mobile toggle, dropdown menus, reveal-on-scroll)
(function () {
  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      document.body.classList.toggle('nav-locked', isOpen);
    });
  }

  document.querySelectorAll('.main-nav > ul > li').forEach(function (li) {
    var btn = li.querySelector(':scope > button');
    if (!btn) return;
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var wasOpen = li.classList.contains('open');
      document.querySelectorAll('.main-nav > ul > li.open').forEach(function (other) {
        other.classList.remove('open');
        var b = other.querySelector(':scope > button');
        if (b) b.setAttribute('aria-expanded', 'false');
      });
      if (!wasOpen) {
        li.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  document.addEventListener('click', function () {
    document.querySelectorAll('.main-nav > ul > li.open').forEach(function (li) {
      li.classList.remove('open');
      var b = li.querySelector(':scope > button');
      if (b) b.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('.main-nav > ul > li.open').forEach(function (li) {
        li.classList.remove('open');
      });
      if (nav && nav.classList.contains('nav-open')) {
        nav.classList.remove('nav-open');
        document.body.classList.remove('nav-locked');
        toggle.setAttribute('aria-expanded', 'false');
      }
    }
  });

  // shrink header on scroll
  var lastY = 0;
  window.addEventListener('scroll', function () {
    if (!header) return;
    var y = window.scrollY;
    header.classList.toggle('is-scrolled', y > 12);
    lastY = y;
  }, { passive: true });

  // scroll-reveal
  var revealEls = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }
})();
