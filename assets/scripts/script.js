$(window).on("load", function () {
    $('#preloader').fadeOut(500)
    $('body').css("opacity", 1)

});



$(document).ready(function() {
    $('.news-slider').slick({
        arrows: true,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
    })






    if ($(window).width() < 1440) {
       $('.range__list').slick({
           arrows: false,
           dots: true
       })
    }

    if ($(window).width() < 1440) {
        $('.videos__list').slick({
            arrows: false,
            dots: true
        })
    }
})
