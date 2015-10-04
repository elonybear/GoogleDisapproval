var incognito = false;

function main() {
    var fs = window.RequestFileSystem || window.webkitRequestFileSystem;
    if (!fs) {
        result.textContent = "check failed?";
        return;
    }
    fs(window.TEMPORARY, 100, function(fs) {
      incognito = false;
  }, function(err) {
      incognito = true;
  });
}
main();

chrome.browserAction.onClicked.addListener(function(tab) {
  // Send a message to the active tab
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
  });
});