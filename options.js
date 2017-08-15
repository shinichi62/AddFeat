$(function(){
  chrome.storage.sync.get({prefix: "feat/", description: ""}, function(items) {
    $("#prefix").val(items.prefix);
    $("#description").val(items.description);
  });
  $("#save").click(function () {
    chrome.storage.sync.set({'prefix': $("#prefix").val(), 'description': $("#description").val()}, function() {
      $("#status").text("Settings saved.");
    });
  });  
});
