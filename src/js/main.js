const { default: Swiper } = require("swiper");

// меню бургер
jQuery(function() {
    jQuery('.burger').click(function() {
        jQuery('.burger span').toggleClass("active");
        jQuery('ul.nav-list').toggleClass("animate");
    });

    // слайдер

    var swiper = new Swiper('.slider', {
        pagination: {
            el: '.swiper-pagination',
        },
    });
});