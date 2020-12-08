var swiper0 = new Swiper('#slider0', {
    slidesPerView: 1,

    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },
});


var swiper1 = new Swiper('#slider1', {

    slidesPerView: 1,
    slidesPerColumn: 1,
    spaceBetween: 34,
    slidesPerGroup: 1,

    breakpoints: {
        550: {
            slidesPerView: 2,
            slidesPerColumn: 2,
            spaceBetween: 34,
            slidesPerGroup: 2,
        },
        1400: {
            slidesPerView: 3,
            slidesPerColumn: 2,
            spaceBetween: 50,
            slidesPerGroup: 3,
        },
    },

    loop: true,

    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },

    navigation: {
        nextEl: '.button1-next.swiper-button-next',
        prevEl: '.button1-prev.swiper-button-prev',
    },


    pagination: {
        el: '.pagination1.swiper-pagination',
        clickable: true,
        type: 'fraction',
    },
});

var swiper2 = new Swiper('#slider2', {

    slidesPerView: 1,
    spaceBetween: 34,

    breakpoints: {
        550: {
            slidesPerView: 2,
            spaceBetween: 34,
        },
        1400: {
            slidesPerView: 3,
            slidesPerColumn: 1,
            slidesPerGroup: 1,
            spaceBetween: 50,
        },
    },
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },

    navigation: {
        nextEl: '.button2-next.swiper-button-next',
        prevEl: '.button2-prev.swiper-button-prev',
    },


    pagination: {
        el: '.pagination2.swiper-pagination',
        clickable: true,
        type: 'fraction',
    },
});

var swiper2 = new Swiper('#slider3', {
    slidesPerView: 1,
    spaceBetween: 34,

    breakpoints: {
        550: {
            slidesPerView: 2,
            spaceBetween: 34,
        },
        1400: {
            slidesPerView: 3,
            slidesPerColumn: 1,
            slidesPerGroup: 1,
            spaceBetween: 50,
        },
    },

    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },

    navigation: {
        nextEl: '.button3-next.swiper-button-next',
        prevEl: '.button3-prev.swiper-button-prev',
    },


    pagination: {
        el: '.pagination3.swiper-pagination',
        clickable: true,
        type: 'fraction',
    },
});