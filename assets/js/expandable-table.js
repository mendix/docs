(function () {
  'use strict';

  function init() {
    document.querySelectorAll('.expandable-table-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var wrap = btn.closest('.expandable-table-wrap');
        var modal = wrap.nextElementSibling;
        openModal(wrap, modal);
      });
    });
  }

  function openModal(wrap, modal) {
    var body = modal.querySelector('.expandable-table-body');
    body.innerHTML = '';
    body.appendChild(wrap.querySelector('.expandable-table-inner').cloneNode(true));

    modal.removeAttribute('hidden');
    document.body.classList.add('expandable-table-open');

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

    function onKey(e) { if (e.key === 'Escape') close(); }
    document.addEventListener('keydown', onKey);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
