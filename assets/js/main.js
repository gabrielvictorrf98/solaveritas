/* ============================================================
   SOLA VERITAS — main.js
   Theme toggle · mobile menu · reading time · search · nav state
   ============================================================ */

(function () {
  'use strict';

  /* ---------- Theme persistence ---------- */
  const root = document.documentElement;
  const THEME_KEY = 'sv-theme';

  function getStoredTheme() {
    try { return localStorage.getItem(THEME_KEY); } catch (_) { return null; }
  }

  function applyTheme(theme) {
    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
    } else {
      root.removeAttribute('data-theme');
    }
    const btn = document.getElementById('themeToggle');
    if (btn) {
      btn.textContent = theme === 'dark' ? '☀' : '☾';
      btn.setAttribute('aria-label',
        theme === 'dark' ? 'Mudar para tema claro' : 'Mudar para tema escuro');
    }
  }

  function initTheme() {
    const stored = getStoredTheme();
    const prefersDark = window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = stored || (prefersDark ? 'dark' : 'light');
    applyTheme(theme);
  }

  function toggleTheme() {
    const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    try { localStorage.setItem(THEME_KEY, next); } catch (_) {}
  }

  /* ---------- Mobile menu ---------- */
  function initMobileMenu() {
    const toggle = document.getElementById('mobileToggle');
    const nav = document.getElementById('primaryNav');
    if (!toggle || !nav) return;
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.addEventListener('click', e => {
      if (e.target.tagName === 'A') nav.classList.remove('open');
    });
  }

  /* ---------- Theme button binding ---------- */
  function initThemeButton() {
    const btn = document.getElementById('themeToggle');
    if (btn) btn.addEventListener('click', toggleTheme);
  }

  /* ---------- Reading time ---------- */
  function calcReadingTime() {
    const article = document.querySelector('.article-content');
    if (!article) return;
    const text = article.innerText || '';
    const words = text.trim().split(/\s+/).length;
    const minutes = Math.max(1, Math.round(words / 220));
    const target = document.getElementById('readingTime');
    if (target) target.textContent = `${minutes} min de leitura`;
  }

  /* ---------- Active nav link ---------- */
  function highlightCurrentNav() {
    const path = location.pathname.replace(/\/$/, '');
    document.querySelectorAll('.nav a').forEach(link => {
      const href = link.getAttribute('href');
      if (!href) return;
      if (href === '/' && (path === '' || path === '/index.html')) {
        link.classList.add('active');
      } else if (href !== '/' && path.endsWith(href.replace(/^\//, ''))) {
        link.classList.add('active');
      }
    });
  }

  /* ---------- Search filter (archive.html) ---------- */
  function applyArchiveFilter(items, years, query, tag) {
    const normalizedQuery = (query || '').trim().toLowerCase();
    const normalizedTag = (tag || '').trim().toLowerCase();

    items.forEach(item => {
      const text = item.innerText.toLowerCase();
      const tags = (item.dataset.tags || '').toLowerCase();
      const matchesQuery = !normalizedQuery || text.includes(normalizedQuery);
      const matchesTag = !normalizedTag || tags.split('|').includes(normalizedTag);
      item.style.display = matchesQuery && matchesTag ? '' : 'none';
    });

    years.forEach(year => {
      let next = year.nextElementSibling;
      let visible = false;
      while (next && !next.classList.contains('archive-year')) {
        if (next.classList.contains('archive-item') && next.style.display !== 'none') {
          visible = true;
        }
        next = next.nextElementSibling;
      }
      year.style.display = visible ? '' : 'none';
    });
  }

  function initSearch() {
    const input = document.getElementById('searchInput');
    if (!input) return;
    const items = Array.from(document.querySelectorAll('.archive-item'));
    const years = Array.from(document.querySelectorAll('.archive-year'));
    const params = new URLSearchParams(window.location.search);
    const selectedTag = (params.get('tag') || '').trim().toLowerCase();

    if (selectedTag) {
      input.value = selectedTag;
      input.setAttribute('aria-label', `Buscar ensaios pela tag ${selectedTag}`);
    }

    applyArchiveFilter(items, years, input.value, selectedTag);

    input.addEventListener('input', () => {
      applyArchiveFilter(items, years, input.value, selectedTag);
    });
  }

  /* ---------- Share links ---------- */
  function initShareLinks() {
    const link = document.querySelector('[data-share-link]');
    if (!link) return;

    link.addEventListener('click', async e => {
      e.preventDefault();
      const shareUrl = link.getAttribute('data-share-url') || window.location.href;
      const originalText = link.textContent;

      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(shareUrl);
        } else {
          const input = document.createElement('input');
          input.value = shareUrl;
          document.body.appendChild(input);
          input.select();
          document.execCommand('copy');
          document.body.removeChild(input);
        }
        link.textContent = 'Link copiado';
      } catch (_) {
        link.textContent = 'Copie pela barra do navegador';
      }

      window.setTimeout(() => {
        link.textContent = originalText;
      }, 1800);
    });
  }

  /* ---------- Boot ---------- */
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initThemeButton();
    initMobileMenu();
    highlightCurrentNav();
    calcReadingTime();
    initSearch();
    initShareLinks();
  });
})();
