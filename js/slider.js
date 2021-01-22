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

	breakpoints: {
		750: {
			slidesPerView: 2,
			slidesPerColumn: 2,
			spaceBetween: 34,
			slidesPerGroup: 2,
			observer: true,
		},
		1430: {
			slidesPerView: 3,
			slidesPerColumn: 2,
			spaceBetween: 50,
			slidesPerGroup: 3,
			observer: true,
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

let mySwiper2 = function () {
	if (window.innerWidth >= 750) {
		var swiper2 = new Swiper('#slider2', {

			breakpoints: {
				750: {
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

		swiper2.on('resize', function () {
			if (innerWidth < 750) {
				swiper2.destroy();
			}
		});
	}
}

window.addEventListener('resize', () => {
	mySwiper2();
})
mySwiper2();





var swiper3 = new Swiper('#slider3', {
	slidesPerView: 1,
	spaceBetween: 34,
	loop: true,

	breakpoints: {
		750: {
			slidesPerView: 2,
			spaceBetween: 34,
			observer: true,
		},
		970: {
			slidesPerView: 2,
			spaceBetween: 50,
			observer: true,
		},
		1430: {
			slidesPerView: 3,
			slidesPerColumn: 1,
			slidesPerGroup: 1,
			spaceBetween: 50,
			observer: true,
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
