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
  function initSearch() {
    const input = document.getElementById('searchInput');
    if (!input) return;
    const items = Array.from(document.querySelectorAll('.archive-item'));
    const years = Array.from(document.querySelectorAll('.archive-year'));
    input.addEventListener('input', () => {
      const q = input.value.trim().toLowerCase();
      items.forEach(item => {
        const text = item.innerText.toLowerCase();
        item.style.display = !q || text.includes(q) ? '' : 'none';
      });
      // hide year headers if all items under them are hidden
      years.forEach(year => {
        let next = year.nextElementSibling;
        let visible = false;
        while (next && !next.classList.contains('archive-year')) {
          if (next.classList.contains('archive-item') &&
              next.style.display !== 'none') visible = true;
          next = next.nextElementSibling;
        }
        year.style.display = visible ? '' : 'none';
      });
    });
  }

  /* ---------- Newsletter form (demo) ---------- */
  function initNewsletter() {
    const form = document.querySelector('.newsletter-form');
    if (!form) return;
    form.addEventListener('submit', e => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      if (!input || !input.value) return;
      form.innerHTML =
        '<p class="muted" style="margin:0;font-style:italic;">Obrigado. Você receberá os próximos ensaios.</p>';
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
    initNewsletter();
  });
})();
