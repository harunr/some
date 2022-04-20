;
(function ($) {
    $(function () {

        if ($(window).width() > 767) {
            var $header = $("header"),
                $clone = $header.before($header.clone().addClass("fixedTop"));

            $(window).on("scroll", function () {
                var fromTop = $(window).scrollTop();
                $("body").toggleClass("down", (fromTop > 300));

            });

        }
        stickyFooter('.main-content-wrap');


        var input = $('input:text, input:password,input[type="email"],input[type="tel"],input[type="number"],input[type="search"], textarea');

        $(input).each(function () {
            var inputText = $(this).attr('placeholder')
            $(this).focus(function () {
                if ($(this).val().length === 0) {
                    $(this).attr('placeholder', '');
                }
            }).blur(function () {
                if ($(this).val().length === 0) {
                    $(this).attr('placeholder', inputText);
                    $(this).parent().removeClass('has-value');
                } else if ($(this).val().length > 0) {
                    $(this).parent().addClass('has-value');
                }
            })
        })



        //sticky-footer
        function stickyFooter(selector) {
            var getFooterHeight = $(selector).parents('body').find('footer').outerHeight();

            function stickyfun(selector) {
                if (selector.length && $(window).width() > 767) {
                    $(selector).parents('html').addClass('sticky');
                    $(selector).parents('html').find('.main-wrap').css({
                        'padding-bottom': getFooterHeight
                    })
                }
            }
            stickyfun(selector);
            $(window).resize(function () {
                var footerHeight = $('.sticky').find('footer').outerHeight();
                $('.sticky').find('.main-wrap').css({
                    'padding-bottom': footerHeight
                });

                if ($(window).width() < 767) {
                    $('.sticky').find('.main-wrap').css({
                        'padding-bottom': 0
                    });
                }
            })
        }

        //call like this
        stickyFooter('.main-content-wrap');


        //phone-nav
        $('.phone-nav').on('click', function () {
            $(this).toggleClass('open');
            $('.nav-wrap').slideToggle();
        })


        $('.modal-trigger').on('click', function (e) {
            e.stopPropagation();
            e.preventDefault();
            $('.modal-section').fadeIn();
        })

        /* modal close */
        $('.close-icon').on('click', function () {
            $('.modal-section').fadeOut();
        });

        if ($(window).width() > 767) {

            $('body').on('click', function () {
                $('.modal-section').fadeOut();
            });

            $('.modal-content').on('click', function (e) {
                e.stopPropagation();
            })

        }




        if ($('.client-carousel').length && $('.quote-carousel').length) {
            $('.client-carousel').on('init', function (event, slick) {
                $('.slick-slide').removeClass('prevSlide');
                $('.slick-slide').removeClass('nextSlide');
                $('.slick-active').prev().addClass('prevSlide');
                $('.slick-active').next().addClass('nextSlide');;
            });

            $('.client-carousel').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: false,
                asNavFor: '.quote-carousel',
                vertical: true,
                verticalSwiping: true,
                focusOnSelect: true,
                centerMode: true,
                adaptiveHeight: true,
                infinite: true,
                initialSlide: 1,
                autoPlay: true,
                dots: false,
                responsive: [
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            vertical: false,
                            verticalSwiping: false,
                            centerPadding: '65px',
                            adaptiveHeight: false,
                        }
    },
                    {
                        breakpoint: 350,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            vertical: false,
                            verticalSwiping: false,
                            centerPadding: '45px',
                            adaptiveHeight: false,
                        }
    },

  ]
            });


            $('.quote-carousel').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                asNavFor: '.client-carousel',
                dots: false,
                fade: true,
                focusOnSelect: true,
                infinite: true,
                adaptiveHeight: true,
                initialSlide: 1,

            });

            $('.prev').click(function (e) {
                e.preventDefault();
                $('.slick-prev').trigger('click');
            })

            $('.next').click(function (e) {
                e.preventDefault();
                $('.slick-next').trigger('click');
            })

            $('.client-carousel').on('afterChange', function (event, slick, currentSlide, nextSlide) {
                $('.slick-slide').removeClass('prevSlide');
                $('.slick-slide').removeClass('nextSlide');
                $('.slick-active').prev().addClass('prevSlide');
                $('.slick-active').next().addClass('nextSlide');;
            });
        }



    }) // End ready function.


    $(window).on('load', function () {

        var slider = $('#graphcis-carousel');
        if ($(slider).length === 0) return false;
        $(slider).flexslider({
            animation: "fade",
            slideshow: true,
            directionNav: true,
            controlNav: true,
            slideshowSpeed: 10000,
            animationSpeed: 0,
            manualControls: '.app-feature-content-wrap ul > li',
            animationLoop: false,
            /*controlsContainer: ".custom-slide-nav",*/
            useCSS: false,
            start: function (slider) {
                $('#graphcis-carousel .slides > li.flex-active-slide').next().addClass('after-slide');

            },
            after: function (slider) {
                $('#graphcis-carousel .slides > li').each(function (i) {
                    if ($(this).hasClass('flex-active-slide')) {
                        $('#graphcis-carousel .slides > li').removeClass('after-slide');
                        $('#graphcis-carousel .slides > li').removeClass('before-slide');
                        $(this).prev().addClass('before-slide');
                        $(this).next().addClass('after-slide');
                    }
                })
            },
            animationLoop: true,
            pauseOnAction: false, // default setting

            /*after: function (slider) {

            }*/
        })

        $('.app-feature-content-wrap ul li').each(function () {
            $(this).mouseenter(function () {
                $(this).trigger('click');
            });
            $(this).on('touchend', function () {
                $(this).trigger('click');
            })
        })

        $('.prev').click(function (e) {
            e.preventDefault();
            $('.flex-prev').trigger('click');
        })

        $('.next').click(function (e) {
            e.preventDefault();
            $('.flex-next').trigger('click');
        })



    });


})(jQuery)