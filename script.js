$(function(){
    if ($("#id_branch_name").val().indexOf("feat/") === -1) {
        $("#id_branch_name").val("feat/"+$("#id_branch_name").val());
    }
});
