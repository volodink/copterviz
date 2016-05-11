ymaps.ready(init);
var myMap;

function init() {
    myMap = new ymaps.Map("map", {
        center: map_center,
        zoom: 2,
        type: 'yandex#hybrid',
        controls: ['zoomControl', 'typeSelector']
    });

    /*
    for (var i = 0; i < 3600*3; i++) {
        myPlacemark = new ymaps.Placemark([lat_array[i], lon_array[i]], {
            hintContent: 'Cansat 2016',
            balloonContent: 'Cansat 2016: Воздушно-инженерная школа. Версия 5.0'
        });

        myMap.geoObjects.add(myPlacemark);
    }
    */


}