document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#accept').addEventListener('click', onclick_accept, false)
    document.querySelector('#reject').addEventListener('click', onclick_reject, false)
    function onclick_accept() {
          chrome.tabs.query({currentWindow: true, active: true},
          function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, '+')
          })
    }
    function onclick_reject() {
          chrome.tabs.query({currentWindow: true, active: true},
          function (tabs) {
		chrome.tabs.sendMessage(tabs[0].id, '-')
          })
    }

}, false);