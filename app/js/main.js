$(function() {
    $(window).scroll(function(e){
        if ($(this).scrollTop() > 1) {
            $('#navbar').css("display", "block");
        } else {
            $('#navbar').css("display", "none");
        }
    });
});