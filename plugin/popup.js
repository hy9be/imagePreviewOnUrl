$("#btn_inject").click(function() {
  chrome.extension.getBackgroundPage().preview();
});
