$(window).on("load", function () {
    $('#preloader').fadeOut(500)
    $('body').css("opacity", 1)

});


$(document).ready(function () {

    function news_slider() {
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
    }

    function range_slider() {
        if ($(window).width() < 1440) {
            $('.range__list').slick({
                arrows: false,
                dots: true
            })
        } else {
            $('.range__list').slick('unslick')
        }
    }

    function videos_slider() {
        if ($(window).width() < 1440) {
            $('.videos__list').slick({
                arrows: false,
                dots: true
            })
        } else {
            $('.videos__wrap').slick('unslick')
        }
    }

    function partners_slider() {
        if ($(window).width() < 1440) {
            $('.partners__wrap').slick({
                arrows: false,
                dots: true
            })
        } else {
            $('.partners__wrap').slick('unslick')
        }
    }


    function rules_slider() {
        if ($(window).width() < 1440) {
            $('.rules__wrap').slick({
                arrows: false,
                dots: true
            })
        } else {
            $('.rules__wrap').slick('unslick')
        }
    }

    function documents_slider() {
        if ($(window).width() < 1440) {
            $('.your-documents__wrap').slick({
                arrows: false,
                dots: true
            })
        } else {
            $('.your-documents__wrap').slick('unslick')
        }
    }

    new SlimSelect({
        select: '#selectElement',
        settings: {
            showSearch: false
        }

    })


    function sliders() {
        news_slider()
        range_slider()
        videos_slider()
        partners_slider()
        rules_slider()
        documents_slider()

    }


    sliders()

    $(window).resize(function () {
            sliders()
    });

})
