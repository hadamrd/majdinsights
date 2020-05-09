$(document).ready(function () {
    $('.post-module').hover(
        function () {
            $(this).find('.description').stop().animate({
                height: "toggle",
                opacity: "toggle"
            }, 300);
        }
    );

    $('.toggle-bar').on("click", function () {
        $('.nav-list').toggleClass("shown");
    });

    $('.post-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        nextArrow: $('.slick-next-btn'),
        prevArrow: $('.slick-prev-btn')
    });

});


