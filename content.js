document.addEventListener('mousedown', function (e) {
  if (e.button != 2) {
    return;
  }

  document.querySelectorAll('[data-hide-element]')
    .forEach(old => old.removeAttribute('data-hide-element'));

  e.target.setAttribute('data-hide-element', 'true');

  chrome.extension.sendRequest({
    hideElement: e.target
  });
});
