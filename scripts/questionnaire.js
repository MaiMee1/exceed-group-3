$(document).ready(function(){
    $("input[type=radio]").click(function(){
        var index = $(this).index("input[type=radio]");
        console.log(index, window.location.href);
    });
});

