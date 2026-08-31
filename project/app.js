// My Learning Journal — a tiny bit of JavaScript.
// Kept intentionally simple: no frameworks, no build step.

(function () {
  'use strict';

  // Show the current year in the footer.
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
})();
