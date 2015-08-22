$(function(){
  chrome.storage.sync.get({prefix: "feat/"}, function(items) {
    if ($("#id_branch_name").val().indexOf(items.prefix) === -1) {
      $("#id_branch_name").val(items.prefix + $("#id_branch_name").val());
    }
  });
});
