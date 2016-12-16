$(function() {
    $(window).scroll(function(e){
        if ($(this).scrollTop() > 1) {
            $('#navbar').css("display", "block");
        } else {
            $('#navbar').css("display", "block"); // Always display navbar for now.
        }
    });
    $("#navbar li").click(function(e) {
        e.preventDefault();
        var idName = "#" + $(this).attr('id');
        idName = idName.substring(0, idName.length-2);
        console.log(idName);
        $('html, body').animate({
            scrollTop: $(idName).offset().top - 50
        }, 600);
    });
		
});