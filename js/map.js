ymaps.ready(function () {
    var myMap = new ymaps.Map("YMapsID", {
        center: [55.753215, 37.622504],
        zoom: 17,
        controls: []
    });

    var myPlacemark = new ymaps.Placemark([55.753215, 37.622504], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'location.png',
        iconImageSize: [30, 42],
        iconImageOffset: [-3, -42]
    });

    myMap.geoObjects.add(myPlacemark); {
        searchControlProvider: 'yandex#search'
    }
});