jQuery(function(){
    var navOffset = jQuery("nav").outerHeight();

    jQuery("#home").css("margin-top", navOffset);

    jQuery("nav ul li").click(function(){;
        var top = jQuery("#"+jQuery(this).data("target")).offset().top - navOffset;
        jQuery("html, body").animate({
            scrollTop: top
        });
    });
});
