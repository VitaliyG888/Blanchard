var swiper0 = new Swiper('#slider0', {
	slidesPerView: 1,
	spaceBetween: 10,

	autoplay: {
		delay: 10000,
	},
	effect: 'fade',
	preloadImages: false,
	lazy: true
});


var swiper1 = new Swiper('#slider1', {

	slidesPerView: 1,
	slidesPerColumn: 1,
	spaceBetween: 34,
	slidesPerGroup: 1,
	observer: true,

	breakpoints: {
		550: {
			slidesPerView: 2,
			slidesPerColumn: 2,
			spaceBetween: 34,
			slidesPerGroup: 2,
		},
		1430: {
			slidesPerView: 3,
			slidesPerColumn: 2,
			spaceBetween: 50,
			slidesPerGroup: 3,
		},
	},

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
	spaceBetween: 50,
	watchOverflow: true,
	observer: true,
	loop: true,

	breakpoints: {
		550: {
			slidesPerView: 2,
			spaceBetween: 34,
		},
		970: {
			slidesPerView: 2,
			spaceBetween: 50,
		},
		1430: {
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

var swiper3 = new Swiper('#slider3', {
	slidesPerView: 1,
	spaceBetween: 34,
	observer: true,
	loop: true,

	breakpoints: {
		550: {
			slidesPerView: 2,
			spaceBetween: 34,
		},
		970: {
			slidesPerView: 2,
			spaceBetween: 50,
		},
		1430: {
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
});
