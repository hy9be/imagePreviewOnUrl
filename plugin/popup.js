$("#btn_inject").click(function() {
  //chrome.extension.getBackgroundPage().preview();
  chrome.tabs.getSelected(null, function(tab) {
    chrome.tabs.sendRequest(tab.id, {action: "inject"}, function(response) {
       //alert(response.res);
    });
   });
});
