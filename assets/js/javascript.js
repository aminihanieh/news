//scroll
(function ($) {
    $(window).on("load", function () {

        $("body").mCustomScrollbar({
            theme: "minimal"
        });

    });
})(jQuery);

$(document).ready(function () {
    var owl = $('.owl-carouselImpoNews');
    owl.owlCarousel({
        items: 4,
        slideBy: 1,
        dots: false,
        loop: true,
        nav: true,
        lazyLoad: true,
        margin: 0,
        video: true,
        responsiveClass: true,
        autoplay: false,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 2
            },
            900: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });

    $('.owl-next').html('<i class="fa fa-caret-right"></i>');
    $('.owl-prev').html('<i class="fa fa-caret-left"></i>');
});

$(document).ready(function () {
    var owl = $('.owl-carouselSlider');
    owl.owlCarousel({
        items: 1,
        slideBy: 1,
        dots: true,
        loop: true,
        nav: false,
        lazyLoad: true,
        margin: 0,
        video: true,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 4000
    });


});

$(document).ready(function () {
    var owl = $('.owl-carouselLastMedia');
    owl.owlCarousel({
        items: 1,
        slideBy: 1,
        dots: true,
        loop: true,
        nav: true,
        lazyLoad: true,
        margin: 0,
        video: true,
        responsiveClass: true,
        autoplay: false,
        autoplayTimeout: 4000
    });

    $('.owl-next').html('<i class="fa fa-caret-right"></i>');
    $('.owl-prev').html('<i class="fa fa-caret-left"></i>');
});

$(document).ready(function () {
    var owl = $('.owl-carouselMediaCat');
    owl.owlCarousel({
        items: 1,
        slideBy: 1,
        dots: true,
        loop: true,
        nav: true,
        lazyLoad: true,
        margin: 0,
        video: true,
        responsiveClass: true,
        autoplay: false,
        autoplayTimeout: 4000
    });

    $('.owl-next').html('<i class="fas fa-angle-right"></i>');
    $('.owl-prev').html('<i class="fas fa-angle-left"></i>');
});
