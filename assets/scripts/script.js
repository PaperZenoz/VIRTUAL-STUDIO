$(window).on("load", function () {
    $('#preloader').fadeOut(500)
    $('body').css("opacity", 1)

});



$(document).ready(function() {
    $('.news-slider').slick({
        arrows: true
    })
})
