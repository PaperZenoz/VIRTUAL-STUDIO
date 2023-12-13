$(window).on("load", function () {
    $('#preloader').fadeOut(500)
    $('body').css("opacity", 1)

});


$(document).ready(function () {
    (function($) {
        function setChecked(target) {
            var checked = $(target).find("input[type='checkbox']:checked").length;


            if (checked) { 
                // $(target).find('select option:first').html('Выбрано: ' + checked);
            } else {
                $(target).find('select option:first').html($(target).attr('data-placeholder'));
            }
        }

        $.fn.checkselect = function() {
            this.wrapInner('<div class="checkselect-popup"></div>');
            this.prepend(
                '<div class="checkselect-control">' +
                '<select class="form-control"><option></option></select>' +
                '<div class="checkselect-over"></div>' +
                '</div>'
            );

            this.each(function(){
                setChecked(this);
            });
            this.find('input[type="checkbox"]').click(function(){
                setChecked($(this).parents('.checkselect'));
            });

            this.parent().find('.checkselect-control').on('click', function(){
                $popup = $(this).next();
                $('.checkselect-popup').not($popup).css('display', 'none');
                if ($popup.is(':hidden')) {
                    $popup.css('display', 'block');
                    $(this).find('select').focus();
                } else {
                    $popup.css('display', 'none');
                }
            });

            $('html, body').on('click', function(e){
                if ($(e.target).closest('.checkselect').length == 0){
                    $('.checkselect-popup').css('display', 'none');
                }
            });
        };
    })(jQuery);

    $('.checkselect').checkselect();






    $("#fileUpload").fileUpload();
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

    function instruments_slider() {
        if ($(window).width() < 1440) {
            $('.instruments__list').slick({
                arrows: false,
                dots: true
            })
        } else {
            $('.instruments__list').slick('unslick')
        }
    }


    $('.selectElement').each(function () {
        new SlimSelect({
            select: '.selectElement',
            settings: {
                showSearch: false
            }
        })
    })
    


    function academy_slider() {
        $('.academy__item-header').on('click', function (e) {
            e.preventDefault()
            $(this).toggleClass('open')
            $(this).siblings('.academy__body').slideToggle()
        })
    }

    function academy_page_slider() {
        $('.academy-page__slider').slick({
            arrows: true,
            dots: false,
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

    $('.js--tel').inputmask("+7 (999) 999-9999")


    function sliders() {
        news_slider()
        range_slider()
        videos_slider()
        partners_slider()
        rules_slider()
        documents_slider()
        academy_slider()
        academy_page_slider()
        instruments_slider()
    }


    sliders()

    $(window).resize(function () {
        sliders()
    });

})
