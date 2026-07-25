/* ============================================================
   The National Satirer — poll widget
   Single piece of state: vote = null | 'dad' | 'father'
   Click a button → swap to fixed result bars (71% / 29%),
   mark chosen option with "★ your vote", persist to localStorage.
   ============================================================ */
(function () {
  'use strict';

  var STORAGE_KEY = 'nat-satirer-poll-vote';
  var YOUR_VOTE = ' ★ your vote';

  var buttonsEl = document.getElementById('poll-buttons');
  var resultsEl = document.getElementById('poll-results');
  var dadLabel    = document.getElementById('dad-label');
  var fatherLabel = document.getElementById('father-label');

  if (!buttonsEl || !resultsEl) return;

  function readVote() {
    try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }
  function writeVote(v) {
    try { localStorage.setItem(STORAGE_KEY, v); } catch (e) { /* ignore */ }
  }

  function render(vote) {
    var hasVote = vote === 'dad' || vote === 'father';
    buttonsEl.hidden = hasVote;
    resultsEl.hidden = !hasVote;
    if (!hasVote) return;
    dadLabel.textContent    = 'Dad Bod'        + (vote === 'dad'    ? YOUR_VOTE : '');
    fatherLabel.textContent = 'Father Figure'  + (vote === 'father' ? YOUR_VOTE : '');
  }

  buttonsEl.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-vote]');
    if (!btn) return;
    var vote = btn.getAttribute('data-vote');
    writeVote(vote);
    render(vote);
  });

  render(readVote());
})();
