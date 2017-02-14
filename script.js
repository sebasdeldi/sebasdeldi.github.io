$(function(){
    $(".auto-type").typed({
		strings: ["Web applications.", "Landing pages.", "Rest Apis.", "Hybrid mobile apps.", "Corporate websites."],
		typeSpeed: 30,
		loop: true
    });
});


// handle links with @href started with '#' only
$(document).on('click', 'a[href^="#projects"]', function(e) {
	$("body").click();

    // target element id
    var id = $(this).attr('href');

    // target element
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }

    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();

    // top position relative to the document
    var pos = $id.offset().top;

    // animated top scrolling
    $('body, html').animate({scrollTop: pos});

});

