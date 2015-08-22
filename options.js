// Saves options to chrome.storage
$("#save").click(function () {
  chrome.storage.sync.set({'prefix': $("#prefix").val()}, function() {
    $("#status").text("Settings saved.");
  });
});
