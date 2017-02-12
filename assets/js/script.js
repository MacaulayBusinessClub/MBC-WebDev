var change = true;
$(document).ready(function () {
    $("li").click(function(){
    	$("#caret").toggle("glyphicon-chevron-up", change);
    	$("#caret").toggle("glyphicon-chevron-down", change);
    })
});