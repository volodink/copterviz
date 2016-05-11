ymaps.ready(init);
var myMap;

function init() {
    myMap = new ymaps.Map("map", {
        center: map_center,
        zoom: 15,
        type: 'yandex#hybrid',
        controls: ['zoomControl', 'typeSelector']
    });

    myPlacemark = new ymaps.Placemark(map_center, {
        hintContent: 'Cansat 2016',
        balloonContent: 'Cansat 2016: Воздушно-инженерная школа. Версия 5.0'
    });

    myMap.geoObjects.add(myPlacemark);

}