const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 1,
    speed: 1000,
    spaceBetween: 30,

    autoplay: {
        delay: 4000,
    },
    pagination: {
        el: '.swiper-pagination',
    },
    breakpoints: {
        800: {
            slidesPerView: 3,
        },
    }
});