$(function(){
    var navOffset = $("nav").outerHeight();

    $("#home").css("margin-top", navOffset);

    $("nav ul li").click(function(){;
        var top = $("#"+$(this).data("target")).offset().top - navOffset;
        $("html, body").animate({
            scrollTop: top
        });
    });
});
