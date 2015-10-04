// content.js


// content.js
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      var pathname = window.location.href;
      if(pathname == "https://www.google.com/?gws_rd=ssl" || pathname == "http://www.google.com/?gws_rd=ssl"){
        $("#hplogo").attr("src", chrome.extension.getURL("googleDisapproval.png"));
      }
    }
  }
);