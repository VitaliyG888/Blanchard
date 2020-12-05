var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    slidesPerColumn: 2,
    spaceBetween: 50,
    slidesPerGroup: 3,

    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'fraction',
    },
});