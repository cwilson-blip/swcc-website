// SWCC site search — client-side, no backend. Loads assets/search-index.json
// on first open and ranks matches by where the query hits (title > description > body).
(function () {
  var overlay = document.getElementById('search-overlay');
  var toggle = document.getElementById('search-toggle');
  var closeBtn = document.getElementById('search-close');
  var input = document.getElementById('search-input');
  var resultsEl = document.getElementById('search-results');
  if (!overlay || !toggle || !input || !resultsEl) return;

  var index = null;
  var indexPromise = null;
  var activeIndex = -1;
  var currentResults = [];

  function loadIndex() {
    if (indexPromise) return indexPromise;
    indexPromise = fetch('assets/search-index.json')
      .then(function (r) { return r.json(); })
      .then(function (data) { index = data; return data; })
      .catch(function () { index = []; return index; });
    return indexPromise;
  }

  function escapeHtml(s) {
    return s.replace(/[&<>]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c];
    });
  }

  function highlight(text, query) {
    var idx = text.toLowerCase().indexOf(query.toLowerCase());
    if (idx === -1) return escapeHtml(text);
    return (
      escapeHtml(text.slice(0, idx)) +
      '<mark>' + escapeHtml(text.slice(idx, idx + query.length)) + '</mark>' +
      escapeHtml(text.slice(idx + query.length))
    );
  }

  function snippet(text, query, radius) {
    var lower = text.toLowerCase();
    var idx = lower.indexOf(query.toLowerCase());
    if (idx === -1) return text.slice(0, radius * 2);
    var start = Math.max(0, idx - radius);
    var end = Math.min(text.length, idx + query.length + radius);
    return (start > 0 ? '…' : '') + text.slice(start, end) + (end < text.length ? '…' : '');
  }

  function search(query) {
    var q = query.trim().toLowerCase();
    if (!q || !index) return [];
    var scored = [];
    for (var i = 0; i < index.length; i++) {
      var page = index[i];
      var titleLower = page.title.toLowerCase();
      var descLower = page.description.toLowerCase();
      var textLower = page.text.toLowerCase();
      var score = 0;
      if (titleLower === q) score = 100;
      else if (titleLower.indexOf(q) === 0) score = 80;
      else if (titleLower.indexOf(q) !== -1) score = 60;
      else if (descLower.indexOf(q) !== -1) score = 40;
      else if (textLower.indexOf(q) !== -1) score = 20;
      if (score > 0) scored.push({ page: page, score: score });
    }
    scored.sort(function (a, b) { return b.score - a.score; });
    return scored.slice(0, 8).map(function (s) { return s.page; });
  }

  function render(query) {
    var q = query.trim();
    if (!q) {
      resultsEl.innerHTML = '<div class="search-hint">Try &ldquo;scholarships&rdquo;, &ldquo;housing&rdquo;, or &ldquo;financial aid&rdquo;</div>';
      currentResults = [];
      activeIndex = -1;
      return;
    }
    currentResults = search(q);
    activeIndex = -1;
    if (currentResults.length === 0) {
      resultsEl.innerHTML = '<div class="search-empty">No results for &ldquo;' + escapeHtml(q) + '&rdquo;</div>';
      return;
    }
    resultsEl.innerHTML = currentResults.map(function (page) {
      var titleHtml = highlight(page.title, q);
      var descSource = page.description.toLowerCase().indexOf(q.toLowerCase()) !== -1 ? page.description : page.text;
      var descHtml = highlight(snippet(descSource, q, 60), q);
      return (
        '<a class="search-result" href="' + page.url + '">' +
        '<h4>' + titleHtml + '</h4>' +
        '<p>' + descHtml + '</p>' +
        '</a>'
      );
    }).join('');
  }

  function open() {
    overlay.classList.add('is-open');
    document.body.classList.add('nav-locked');
    loadIndex().then(function () { render(input.value); });
    setTimeout(function () { input.focus(); }, 10);
  }

  function close() {
    overlay.classList.remove('is-open');
    document.body.classList.remove('nav-locked');
  }

  toggle.addEventListener('click', open);
  closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) close();
  });

  input.addEventListener('input', function () { render(input.value); });

  document.addEventListener('keydown', function (e) {
    if ((e.key === '/' && document.activeElement !== input) || ((e.metaKey || e.ctrlKey) && e.key === 'k')) {
      e.preventDefault();
      open();
      return;
    }
    if (!overlay.classList.contains('is-open')) return;
    if (e.key === 'Escape') {
      close();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (currentResults.length === 0) return;
      activeIndex = Math.min(activeIndex + 1, currentResults.length - 1);
      highlightActive();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (currentResults.length === 0) return;
      activeIndex = Math.max(activeIndex - 1, 0);
      highlightActive();
    } else if (e.key === 'Enter') {
      var links = resultsEl.querySelectorAll('.search-result');
      if (activeIndex >= 0 && links[activeIndex]) {
        window.location.href = links[activeIndex].getAttribute('href');
      } else if (links.length > 0) {
        window.location.href = links[0].getAttribute('href');
      }
    }
  });

  function highlightActive() {
    var links = resultsEl.querySelectorAll('.search-result');
    links.forEach(function (el, i) {
      el.classList.toggle('is-active', i === activeIndex);
    });
    if (links[activeIndex]) links[activeIndex].scrollIntoView({ block: 'nearest' });
  }
})();
