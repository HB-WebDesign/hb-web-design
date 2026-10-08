/* ============================================================
   HB Web Design — main.js (file 8 of 8)
   Theme toggle, mobile nav, and small form enhancement.
   Vanilla JS, no dependencies.
   ============================================================ */
(function () {
  'use strict';

  /* ---------- Theme toggle ---------- */
  var toggle = document.querySelector('.theme-toggle');
  var root = document.documentElement;

  function currentTheme() {
    return root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  }

  function paintToggle() {
    if (!toggle) return;
    var isDark = currentTheme() === 'dark';
    // Sun in dark mode (click to go light), moon in light mode
    toggle.textContent = isDark ? '☀' : '☾';
    toggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    toggle.setAttribute('aria-pressed', isDark ? 'true' : 'false');
  }

  if (toggle) {
    paintToggle();
    toggle.addEventListener('click', function () {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('hb-theme', next); } catch (e) {}
      paintToggle();
    });
  }

  /* ---------- Mobile nav ---------- */
  var navToggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');

  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      navToggle.textContent = open ? '✕' : '☰';
    });

    // Close the menu when a link is tapped
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a') && nav.classList.contains('open')) {
        nav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Open menu');
        navToggle.textContent = '☰';
      }
    });
  }

  /* ---------- Keyboard accessibility ---------- */
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && nav && navToggle && nav.classList.contains('open')) {
      nav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Open menu');
      navToggle.textContent = '☰';
      navToggle.focus();
    }
  });

  /* ---------- Contact form: prevent double-submit ---------- */
  var form = document.querySelector('form[action*="formspree"]:not([data-form-status="setup-required"])');
  if (form) {
    form.addEventListener('submit', function () {
      var btn = form.querySelector('button[type="submit"]');
      if (btn && !btn.disabled) {
        btn.disabled = true;
        btn.textContent = 'Sending…';
      }
    });
  }

  /* ---------- Footer year stays current ---------- */
  var year = new Date().getFullYear();
  document.querySelectorAll('.footer-bottom span:first-child').forEach(function (el) {
    el.textContent = el.textContent.replace(/\u00a9 \d{4}/, '© ' + year);
  });
})();
