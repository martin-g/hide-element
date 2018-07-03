(function() {
  var menu = chrome.contextMenus.create({
    title: "Hide element",
    contexts: [ "all" ],
    enabled: false,
    onclick: function() {}
  });

  chrome.extension.onRequest.addListener(function (request) {
    if (request.hasOwnProperty('hideElement')) {
      chrome.contextMenus.update(menu, {
        enabled: true,
        title: "Hide element",
        onclick: function () {
          chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.executeScript(
                tabs[0].id,
                {code: 'document.querySelector("[data-hide-element=true]").style.display="none";'});
          });

        }
      });
    }
  });
})();

