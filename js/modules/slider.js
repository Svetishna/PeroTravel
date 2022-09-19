export const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    // loop: true,
    // slidesPerView: 4,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    // breakpoints: {
    //     320: {
    //         slidesPerView: 1,
    //     },
    //     768: {
    //         slidesPerView: 2,
    //     }
    // }
});