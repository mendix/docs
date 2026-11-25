(function () {
  'use strict';

  var FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

  // Makes a scroll container keyboard accessible only when it actually scrolls
  function updateScrollable(el, label) {
    var scrolls = el.scrollWidth > el.clientWidth || el.scrollHeight > el.clientHeight;
    if (scrolls) {
      el.setAttribute('tabindex', '0');
      el.setAttribute('role', 'region');
      el.setAttribute('aria-label', label);
    } else {
      el.removeAttribute('tabindex');
      el.removeAttribute('role');
      el.removeAttribute('aria-label');
    }
  }

  function tableLabel(wrap) {
    return (wrap.dataset.title || 'Table') + ' (scrollable)';
  }

  function init() {
    document.querySelectorAll('.expandable-table-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var wrap = btn.closest('.expandable-table-wrap');
        var modal = wrap.nextElementSibling;
        openModal(wrap, modal);
      });
    });

    document.querySelectorAll('.expandable-table-wrap').forEach(function (wrap) {
      var inner = wrap.querySelector('.expandable-table-inner');
      var check = function () { updateScrollable(inner, tableLabel(wrap)); };
      check();
      if (window.ResizeObserver) {
        new ResizeObserver(check).observe(inner);
      } else {
        window.addEventListener('resize', check);
      }
    });
  }

  function openModal(wrap, modal) {
    var title = wrap.dataset.title || '';
    modal.querySelector('.expandable-table-title').textContent = title;
    if (title) modal.setAttribute('aria-label', title);

    var body = modal.querySelector('.expandable-table-body');
    body.innerHTML = '';
    var clone = wrap.querySelector('.expandable-table-inner').cloneNode(true);
    // The modal body is the scroll container, so the cloned wrapper must not be a second tab stop
    clone.removeAttribute('tabindex');
    clone.removeAttribute('role');
    clone.removeAttribute('aria-label');
    body.appendChild(clone);

    modal.removeAttribute('hidden');
    document.body.classList.add('expandable-table-open');
    updateScrollable(body, tableLabel(wrap));

    var closeBtn = modal.querySelector('.expandable-table-close');
    closeBtn.focus();

    function close() {
      modal.setAttribute('hidden', '');
      document.body.classList.remove('expandable-table-open');
      btn.focus();
      modal.querySelector('.expandable-table-overlay').removeEventListener('click', close);
      document.removeEventListener('keydown', onKey);
    }

    var btn = wrap.querySelector('.expandable-table-btn');
    closeBtn.onclick = close;
    modal.querySelector('.expandable-table-overlay').addEventListener('click', close);

    function onKey(e) {
      if (e.key === 'Escape') {
        close();
        return;
      }
      if (e.key !== 'Tab') return;

      // Keep focus inside the dialog while it is open
      var items = modal.querySelector('.expandable-table-dialog').querySelectorAll(FOCUSABLE);
      if (!items.length) return;
      var first = items[0];
      var last = items[items.length - 1];
      var active = document.activeElement;
      if (!modal.contains(active)) {
        e.preventDefault();
        first.focus();
      } else if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    }
    document.addEventListener('keydown', onKey);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
