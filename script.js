$(function(){
  chrome.storage.sync.get({prefix: "feat/", description: ""}, function(items) {
    if ($("#id_branch_name").val() != undefined) {
      if ($("#id_branch_name").val().indexOf(items.prefix) === -1) {
        $("#id_branch_name").val(items.prefix + $("#id_branch_name").val());
      }
    }
    if ($("#id_description").val() != undefined && $("#id_description").val() == "") {
      $("#id_description").val(items.description)
    }
  });
});
