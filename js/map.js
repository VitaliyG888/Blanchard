ymaps.ready(function () {
    var myMap = new ymaps.Map("YMapsID", {
        center: [55.758747, 37.601187],
        zoom: 17,
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