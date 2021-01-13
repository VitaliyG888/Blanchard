const slider = document.querySelector('#slider4');

let mobileSlider = function () {
	if (window.innerWidth <= 750) {
		mySwiper4 = new Swiper('#slider4', {
			sliderPerView: 1,
			spaceBetween: 30,
			sliderClass: 'card__slider4',

			autoplay: {
				delay: 5000,
				disableOnInteraction: false,
			},

			pagination: {
				el: '.pagination4.swiper-pagination',
				clickable: true,
			},

			on: {
				init: function () {
					if (window.innerWidth > 750) {
						slider.dataset.mobile == 'false'
						if (slider.classList.contains('swiper-container-initialized')) {
							mySwiper4.destroy();
						}
					}
				},
			},
		});

		slider.dataset.mobile = 'true';





	}
};

mobileSlider();

window.addEventListener('resize', () => {
	mobileSlider();
});
