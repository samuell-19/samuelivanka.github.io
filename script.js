/* ===================================================
   SAMUEL IVANKA — PORTFOLIO SCRIPT
   IIFE — no external dependencies
   =================================================== */
(function () {
  'use strict';

  /* ---- Language Toggle ---- */
  function applyPageMeta(lang) {
    var html = document.documentElement;
    var title = html.getAttribute('data-title-' + lang);
    var desc  = html.getAttribute('data-desc-'  + lang);
    if (title) document.title = title;
    if (desc) {
      var metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', desc);
    }
  }

  function applyLang(lang) {
    var html = document.documentElement;
    html.classList.remove('lang-en', 'lang-da');
    html.classList.add('lang-' + lang);
    html.lang = lang;

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    applyPageMeta(lang);
  }

  function initLang() {
    var saved = localStorage.getItem('si-lang') || 'en';
    applyLang(saved);

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var lang = this.dataset.lang;
        applyLang(lang);
        localStorage.setItem('si-lang', lang);
      });
    });
  }

  /* ---- Professional / Personal Mode Toggle (About page) ---- */
  function initModeToggle() {
    var modeBtns = document.querySelectorAll('.mode-btn[data-mode]');
    if (!modeBtns.length) return;

    // Reflect current body class on buttons
    function syncButtons() {
      var current = Array.from(document.body.classList)
        .find(function (c) { return c.startsWith('mode-'); });
      if (!current) return;
      var activeMode = current.replace('mode-', '');
      modeBtns.forEach(function (b) {
        b.classList.toggle('active', b.dataset.mode === activeMode);
      });
    }

    syncButtons();

    modeBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var mode = this.dataset.mode;
        // Replace any existing mode-* class
        document.body.className = document.body.className
          .replace(/\bmode-\S+/g, '').trim();
        document.body.classList.add('mode-' + mode);
        syncButtons();
        // Scroll smoothly to top of content
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    });
  }

  /* ---- Scroll Animations (IntersectionObserver) ---- */
  function initScrollAnimations() {
    if (!window.IntersectionObserver) {
      // Fallback: make all elements visible immediately
      document.querySelectorAll('.fade-up, .pipeline-step').forEach(function (el) {
        el.classList.add('visible');
      });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var delay = parseInt(el.dataset.delay || 0, 10);
        setTimeout(function () {
          el.classList.add('visible');
        }, delay);
        observer.unobserve(el);
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    // Observe fade-up elements
    document.querySelectorAll('.fade-up').forEach(function (el) {
      observer.observe(el);
    });

    // Observe pipeline steps with staggered delay
    document.querySelectorAll('.pipeline-step').forEach(function (el, i) {
      if (!el.dataset.delay) {
        el.dataset.delay = i * 150;
      }
      observer.observe(el);
    });
  }

  /* ---- Mobile Nav ---- */
  function initMobileNav() {
    var hamburger = document.querySelector('.nav-hamburger');
    var navLinks  = document.querySelector('.nav-links');
    if (!hamburger || !navLinks) return;

    hamburger.addEventListener('click', function () {
      var isOpen = navLinks.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
    });

    // Close on link click
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---- Active Nav ---- */
  function initActiveNav() {
    var path = window.location.pathname;

    document.querySelectorAll('.nav-links a[href]').forEach(function (a) {
      var href = a.getAttribute('href');
      if (!href || href.startsWith('mailto:')) return;

      try {
        var linkPath = new URL(href, window.location.href).pathname;

        // Exact match
        if (path === linkPath) {
          a.classList.add('active');
          return;
        }

        // Highlight "Projects" link when on a sub-page of /projects/
        if (path.includes('/projects/') && linkPath.endsWith('projects.html')) {
          a.classList.add('active');
        }
      } catch (e) { /* ignore */ }
    });
  }

  /* ---- Boot ---- */
  document.addEventListener('DOMContentLoaded', function () {
    initLang();
    initModeToggle();
    initScrollAnimations();
    initMobileNav();
    initActiveNav();
  });
}());
