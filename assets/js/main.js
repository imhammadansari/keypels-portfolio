/* ==========================================================================
   KeyPels — main.js
   Zero dependencies. Each behaviour is a small self-contained module that
   no-ops when its target markup isn't on the page.
   ========================================================================== */
(function () {
  'use strict';

  var $  = function (sel, ctx) { return (ctx || document).querySelector(sel); };
  var $$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); };

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var isCoarse = window.matchMedia('(pointer: coarse)').matches;

  /* ------------------------------------------------------------------
     Header: compact on scroll, hide on scroll-down, show on scroll-up
     ------------------------------------------------------------------ */
  function initHeader() {
    var header = $('[data-header]');
    if (!header) return;

    var lastY = window.scrollY;
    var ticking = false;

    function update() {
      var y = window.scrollY;
      header.classList.toggle('is-stuck', y > 24);

      var menuOpen = document.body.classList.contains('is-locked');
      if (!menuOpen && y > 420 && y > lastY + 6) {
        header.classList.add('is-hidden');
      } else if (y < lastY - 6 || y < 200) {
        header.classList.remove('is-hidden');
      }
      lastY = y;
      ticking = false;
    }

    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; window.requestAnimationFrame(update); }
    }, { passive: true });

    update();
  }

  /* ------------------------------------------------------------------
     Scroll progress bar
     ------------------------------------------------------------------ */
  function initScrollProgress() {
    var bar = $('[data-scroll-progress]');
    if (!bar) return;
    var ticking = false;

    function update() {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      var pct = max > 0 ? (window.scrollY / max) * 100 : 0;
      bar.style.width = Math.min(100, Math.max(0, pct)) + '%';
      ticking = false;
    }

    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; window.requestAnimationFrame(update); }
    }, { passive: true });
    window.addEventListener('resize', update);
    update();
  }

  /* ------------------------------------------------------------------
     Mobile menu
     ------------------------------------------------------------------ */
  function initMobileMenu() {
    var toggle = $('[data-nav-toggle]');
    var menu = $('[data-mobile-menu]');
    if (!toggle || !menu) return;

    var lastFocused = null;

    function open() {
      lastFocused = document.activeElement;
      menu.hidden = false;
      // next frame so the transition runs
      window.requestAnimationFrame(function () { menu.classList.add('is-open'); });
      toggle.setAttribute('aria-expanded', 'true');
      toggle.setAttribute('aria-label', 'Close menu');
      document.body.classList.add('is-locked');
    }

    function close() {
      menu.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open menu');
      document.body.classList.remove('is-locked');
      window.setTimeout(function () { menu.hidden = true; }, reduceMotion ? 0 : 380);
      if (lastFocused && lastFocused.focus) lastFocused.focus();
    }

    toggle.addEventListener('click', function () {
      toggle.getAttribute('aria-expanded') === 'true' ? close() : open();
    });

    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) close();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') close();
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 900 && toggle.getAttribute('aria-expanded') === 'true') close();
    });
  }

  /* ------------------------------------------------------------------
     Services mega dropdown (desktop)
     Opens on hover with intent delay, on click, and on keyboard focus.
     ------------------------------------------------------------------ */
  function initDropdown() {
    var items = $$('[data-dropdown]');
    if (!items.length) return;

    var closers = [];

    function closeAll(except) {
      closers.forEach(function (c) { if (c.item !== except) c.close(); });
    }

    items.forEach(function (item) {
      var trigger = $('[data-dropdown-trigger]', item);
      var panel = $('[data-dropdown-panel]', item);
      if (!trigger || !panel) return;

      var closeTimer = null;

      function open() {
        window.clearTimeout(closeTimer);
        closeAll(item);
        item.classList.add('is-open');
        trigger.setAttribute('aria-expanded', 'true');
      }

      function close() {
        window.clearTimeout(closeTimer);
        item.classList.remove('is-open');
        trigger.setAttribute('aria-expanded', 'false');
      }

      function closeSoon() {
        window.clearTimeout(closeTimer);
        closeTimer = window.setTimeout(close, 160);
      }

      closers.push({ item: item, close: close });

      trigger.addEventListener('click', function (e) {
        e.preventDefault();
        item.classList.contains('is-open') ? close() : open();
      });

      if (!isCoarse) {
        item.addEventListener('pointerenter', open);
        item.addEventListener('pointerleave', closeSoon);
      }

      // Keyboard: Escape closes, focus leaving the item closes
      item.addEventListener('keydown', function (e) {
        if (e.key !== 'Escape') return;
        close();
        trigger.focus();
      });
      item.addEventListener('focusin', open);
      item.addEventListener('focusout', function (e) {
        if (!item.contains(e.relatedTarget)) close();
      });

      document.addEventListener('click', function (e) {
        if (!item.contains(e.target)) close();
      });
    });

    window.addEventListener('scroll', function () { closeAll(null); }, { passive: true });
  }

  /* ------------------------------------------------------------------
     Mobile services submenu
     ------------------------------------------------------------------ */
  function initMobileSubmenu() {
    var triggers = $$('[data-msub-trigger]');
    if (!triggers.length) return;

    triggers.forEach(function (trigger) {
      trigger.addEventListener('click', function () {
        var open = trigger.getAttribute('aria-expanded') === 'true';
        // one section open at a time keeps the menu scannable on small screens
        triggers.forEach(function (other) {
          if (other !== trigger) other.setAttribute('aria-expanded', 'false');
        });
        trigger.setAttribute('aria-expanded', String(!open));
      });
    });
  }

  /* ------------------------------------------------------------------
     Service offering tabs
     ------------------------------------------------------------------ */
  function initTabs() {
    $$('[data-tabs]').forEach(function (root) {
      var tabs = $$('[role="tab"]', root);
      var panels = $$('[role="tabpanel"]', root);
      if (!tabs.length) return;

      function select(index, focus) {
        tabs.forEach(function (tab, i) {
          var on = i === index;
          tab.classList.toggle('is-active', on);
          tab.setAttribute('aria-selected', String(on));
          tab.tabIndex = on ? 0 : -1;
        });
        panels.forEach(function (panel, i) {
          var on = i === index;
          panel.hidden = !on;
          panel.classList.toggle('is-active', on);
        });
        if (focus) tabs[index].focus();
      }

      tabs.forEach(function (tab, i) {
        tab.addEventListener('click', function () { select(i); });
      });

      root.addEventListener('keydown', function (e) {
        var idx = tabs.indexOf(document.activeElement);
        if (idx === -1) return;
        var next = null;
        if (e.key === 'ArrowDown' || e.key === 'ArrowRight') next = (idx + 1) % tabs.length;
        if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') next = (idx - 1 + tabs.length) % tabs.length;
        if (e.key === 'Home') next = 0;
        if (e.key === 'End') next = tabs.length - 1;
        if (next === null) return;
        e.preventDefault();
        select(next, true);
      });
    });
  }

  /* ------------------------------------------------------------------
     Scroll reveal (+ hero headline lines)
     ------------------------------------------------------------------ */
  function initReveal() {
    var items = $$('[data-reveal]');
    if (!items.length) return;

    items.forEach(function (el) {
      var d = el.getAttribute('data-delay');
      if (d) el.style.setProperty('--reveal-delay', d + 'ms');
    });

    if (reduceMotion || !('IntersectionObserver' in window)) {
      items.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.12 });

    items.forEach(function (el) { io.observe(el); });
  }

  /* ------------------------------------------------------------------
     Animated counters
     ------------------------------------------------------------------ */
  function initCounters() {
    var counters = $$('[data-count]');
    if (!counters.length) return;

    function run(el) {
      var target = parseFloat(el.getAttribute('data-count')) || 0;
      var suffix = el.getAttribute('data-suffix') || '';
      if (reduceMotion) { el.textContent = target + suffix; return; }

      var duration = 1500;
      var start = null;

      function step(ts) {
        if (start === null) start = ts;
        var p = Math.min((ts - start) / duration, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased) + suffix;
        if (p < 1) window.requestAnimationFrame(step);
      }
      window.requestAnimationFrame(step);
    }

    if (!('IntersectionObserver' in window)) {
      counters.forEach(run);
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        run(entry.target);
        io.unobserve(entry.target);
      });
    }, { threshold: 0.6 });

    counters.forEach(function (el) { io.observe(el); });
  }

  /* ------------------------------------------------------------------
     Process timeline — rail fills as the section scrolls through
     ------------------------------------------------------------------ */
  function initTimeline() {
    var timeline = $('[data-timeline]');
    var fill = $('[data-timeline-fill]');
    if (!timeline || !fill) return;

    var steps = $$('.tl-step', timeline);
    var vertical = window.matchMedia('(max-width: 900px)');
    var ticking = false;

    function update() {
      var rect = timeline.getBoundingClientRect();
      var vh = window.innerHeight;
      var progress = (vh * 0.75 - rect.top) / (rect.height + vh * 0.15);
      progress = Math.min(1, Math.max(0, progress));

      if (vertical.matches) {
        fill.style.height = (progress * 100) + '%';
        fill.style.width = '100%';
      } else {
        fill.style.width = (progress * 100) + '%';
        fill.style.height = '100%';
      }

      steps.forEach(function (step, i) {
        var threshold = (i + 0.4) / steps.length;
        step.classList.toggle('is-reached', progress >= threshold * 0.9);
      });
      ticking = false;
    }

    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; window.requestAnimationFrame(update); }
    }, { passive: true });
    window.addEventListener('resize', update);
    update();
  }

  /* ------------------------------------------------------------------
     About page journey — the spine fills as the section scrolls past,
     and each node lights up once the fill reaches it.
     ------------------------------------------------------------------ */
  function initJourney() {
    var root = $('[data-journey]');
    var fill = $('[data-journey-fill]');
    if (!root || !fill) return;

    var steps = $$('.jstep', root);
    var ticking = false;

    function update() {
      var rect = root.getBoundingClientRect();
      var vh = window.innerHeight;
      var progress = (vh * 0.7 - rect.top) / (rect.height + vh * 0.1);
      progress = Math.min(1, Math.max(0, progress));

      fill.style.height = (progress * 100) + '%';

      steps.forEach(function (step, i) {
        step.classList.toggle('is-reached', progress >= (i + 0.35) / steps.length);
      });
      ticking = false;
    }

    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; window.requestAnimationFrame(update); }
    }, { passive: true });
    window.addEventListener('resize', update);
    update();
  }

  /* ------------------------------------------------------------------
     FAQ accordion
     ------------------------------------------------------------------ */
  function initAccordion() {
    var root = $('[data-accordion]');
    if (!root) return;

    var triggers = $$('.ac-trigger', root);

    triggers.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var item = btn.closest('.ac-item');
        var isOpen = btn.getAttribute('aria-expanded') === 'true';

        // single-open accordion
        triggers.forEach(function (other) {
          if (other === btn) return;
          other.setAttribute('aria-expanded', 'false');
          other.closest('.ac-item').classList.remove('is-open');
        });

        btn.setAttribute('aria-expanded', String(!isOpen));
        item.classList.toggle('is-open', !isOpen);
      });
    });

    // Arrow-key navigation between questions
    root.addEventListener('keydown', function (e) {
      if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;
      var idx = triggers.indexOf(document.activeElement);
      if (idx === -1) return;
      e.preventDefault();
      var next = e.key === 'ArrowDown' ? idx + 1 : idx - 1;
      if (next < 0) next = triggers.length - 1;
      if (next >= triggers.length) next = 0;
      triggers[next].focus();
    });
  }

  /* ------------------------------------------------------------------
     Nav scroll-spy
     ------------------------------------------------------------------ */
  function initScrollSpy() {
    var links = $$('.nav__link');
    if (!links.length || !('IntersectionObserver' in window)) return;

    var map = {};
    var sections = [];
    links.forEach(function (link) {
      var id = link.getAttribute('href');
      if (!id || id.charAt(0) !== '#') return;
      var section = document.querySelector(id);
      if (!section) return;
      map[section.id] = link;
      sections.push(section);
    });

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (l) { l.classList.remove('is-active'); });
        var link = map[entry.target.id];
        if (link) link.classList.add('is-active');
      });
    }, { rootMargin: '-45% 0px -50% 0px' });

    sections.forEach(function (s) { io.observe(s); });
  }

  /* ------------------------------------------------------------------
     Hero parallax on ambient orbs
     ------------------------------------------------------------------ */
  function initParallax() {
    var layers = $$('[data-parallax]');
    if (!layers.length || reduceMotion || isCoarse) return;
    var ticking = false;

    function update() {
      var y = window.scrollY;
      layers.forEach(function (el) {
        var speed = parseFloat(el.getAttribute('data-parallax')) || 0;
        if (y < window.innerHeight * 1.4) {
          el.style.transform = 'translate3d(0,' + (y * speed).toFixed(1) + 'px,0)';
        }
      });
      ticking = false;
    }

    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; window.requestAnimationFrame(update); }
    }, { passive: true });
  }

  /* ------------------------------------------------------------------
     Pointer tilt on the hero stage + service cards
     ------------------------------------------------------------------ */
  function initTilt() {
    var nodes = $$('[data-tilt]');
    if (!nodes.length || reduceMotion || isCoarse) return;

    nodes.forEach(function (el) {
      var max = el.classList.contains('hero__stage') ? 7 : 3.5;

      el.addEventListener('pointermove', function (e) {
        var r = el.getBoundingClientRect();
        var px = (e.clientX - r.left) / r.width;
        var py = (e.clientY - r.top) / r.height;
        el.style.transform =
          'perspective(1000px) rotateY(' + ((px - 0.5) * max * 2).toFixed(2) + 'deg) rotateX(' +
          ((0.5 - py) * max * 2).toFixed(2) + 'deg)';
      });

      el.addEventListener('pointerleave', function () { el.style.transform = ''; });
    });
  }

  /* ------------------------------------------------------------------
     Spotlight follow on bento cards
     ------------------------------------------------------------------ */
  function initSpotlight() {
    var cards = $$('.bento__card, .bcard');
    if (!cards.length || isCoarse) return;

    cards.forEach(function (card) {
      card.addEventListener('pointermove', function (e) {
        var r = card.getBoundingClientRect();
        card.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100).toFixed(1) + '%');
        card.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100).toFixed(1) + '%');
      });
    });
  }

  /* ------------------------------------------------------------------
     Magnetic CTAs
     ------------------------------------------------------------------ */
  function initMagnetic() {
    var nodes = $$('[data-magnetic]');
    if (!nodes.length || reduceMotion || isCoarse) return;

    nodes.forEach(function (el) {
      el.addEventListener('pointermove', function (e) {
        var r = el.getBoundingClientRect();
        var x = (e.clientX - r.left - r.width / 2) * 0.22;
        var y = (e.clientY - r.top - r.height / 2) * 0.32;
        el.style.transform = 'translate3d(' + x.toFixed(1) + 'px,' + y.toFixed(1) + 'px,0)';
      });
      el.addEventListener('pointerleave', function () { el.style.transform = ''; });
    });
  }

  /* ------------------------------------------------------------------
     Contact form: inline validation + submit feedback
     Wire `form.action` to a real endpoint to deliver submissions.
     ------------------------------------------------------------------ */
  function initForm() {
    var form = $('[data-form]');
    if (!form) return;

    var status = $('[data-form-status]', form);
    var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    function fieldOf(input) { return input.closest('.field'); }

    function errorFor(input) {
      var label = (fieldOf(input).querySelector('label') || {}).textContent || 'This field';
      if (input.value.trim() === '') return label + ' is required.';
      if (input.type === 'email' && !emailRe.test(input.value.trim())) return 'Enter a valid email address.';
      if (input.id === 'f-details' && input.value.trim().length < 20) return 'A little more detail helps us reply properly.';
      return '';
    }

    function validate(input) {
      if (!input.hasAttribute('required')) return true;
      var msg = errorFor(input);
      var field = fieldOf(input);
      var slot = form.querySelector('[data-error-for="' + input.id + '"]');
      field.classList.toggle('has-error', !!msg);
      if (slot) slot.textContent = msg;
      return !msg;
    }

    $$('input, select, textarea', form).forEach(function (input) {
      input.addEventListener('blur', function () {
        if (input.value !== '') validate(input);
      });
      input.addEventListener('input', function () {
        if (fieldOf(input).classList.contains('has-error')) validate(input);
      });
      input.addEventListener('change', function () {
        if (input.tagName === 'SELECT') validate(input);
      });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var required = $$('[required]', form);
      var firstInvalid = null;
      required.forEach(function (input) {
        if (!validate(input) && !firstInvalid) firstInvalid = input;
      });

      if (firstInvalid) {
        status.textContent = 'Please fix the highlighted fields and try again.';
        status.classList.add('is-visible', 'is-error');
        firstInvalid.focus();
        return;
      }

      status.classList.remove('is-error');
      status.classList.add('is-visible');

      var name = ($('#f-name', form).value || '').trim().split(' ')[0];
      status.textContent = 'Thanks' + (name ? ', ' + name : '') +
        ' — your inquiry is ready to send. We reply within one business day.';

      /* Replace this block with a real submission, e.g.:
         fetch(form.action, { method: 'POST', body: new FormData(form) }) */
      form.reset();
      $$('.field', form).forEach(function (f) { f.classList.remove('has-error'); });
      $$('[data-error-for]', form).forEach(function (s) { s.textContent = ''; });
    });
  }

  /* ------------------------------------------------------------------
     Smooth anchor scrolling that respects the sticky header
     ------------------------------------------------------------------ */
  function initAnchors() {
    document.addEventListener('click', function (e) {
      var link = e.target.closest('a[href^="#"]');
      if (!link) return;

      var hash = link.getAttribute('href');
      if (!hash || hash === '#') return;

      var target = hash === '#top' ? document.body : document.querySelector(hash);
      if (!target) return;

      e.preventDefault();
      var top = hash === '#top' ? 0 : target.getBoundingClientRect().top + window.scrollY - 84;
      window.scrollTo({ top: top, behavior: reduceMotion ? 'auto' : 'smooth' });

      if (hash !== '#top' && history.replaceState) history.replaceState(null, '', hash);
    });
  }

  /* ------------------------------------------------------------------
     Boot
     ------------------------------------------------------------------ */
  function boot() {
    initHeader();
    initScrollProgress();
    initMobileMenu();
    initDropdown();
    initMobileSubmenu();
    initTabs();
    initReveal();
    initCounters();
    initTimeline();
    initJourney();
    initAccordion();
    initScrollSpy();
    initParallax();
    initTilt();
    initSpotlight();
    initMagnetic();
    initForm();
    initAnchors();
    document.documentElement.classList.add('is-ready');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
