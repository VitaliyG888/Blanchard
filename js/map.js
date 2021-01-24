let flag = 0;

window.addEventListener('scroll', function () {
	let scrollY = window.scrollY;
	let mapOffset = document.querySelector('#YMapsID').offsetTop;
	if ((scrollY >= mapOffset - 500) && (flag == 0)) {
		ymaps.ready(function () {
			var myMap = new ymaps.Map("YMapsID", {
				center: [55.758747, 37.601187],
				zoom: 17,
				scroll: false,
				controls: []
			});

			var myPlacemark = new ymaps.Placemark([55.758463, 37.601079], {}, {
				iconLayout: 'default#image',
				iconImageHref: '../image/location.png',
				iconImageSize: [30, 42],
				iconImageOffset: [-3, -42]
			});

			myMap.geoObjects.add(myPlacemark); {
				searchControlProvider: 'yandex#search'
			}
		});

		flag = 1;
	}
})
