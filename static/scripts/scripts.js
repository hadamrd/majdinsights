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

    $('.tp-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: $('.slick-next-btn'),
        prevArrow: $('.slick-prev-btn'),
        responsive: [
            {
                breakpoint: 870,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    });

});


