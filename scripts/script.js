$(function(){
    var navOffset = $("nav").outerHeight();
    if ($(window).width() <= 600) { // change as necessary (small breakpoint media query)
        navOffset = 0;
    }

    $("#home").css("margin-top", navOffset);

    $("nav ul li").click(function(){
        var top = $("#"+$(this).data("target")).offset().top - navOffset;
        $("html, body").animate({
            scrollTop: top
        });
    });
});
