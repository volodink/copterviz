/**
 * Created by dmage on 10.05.2016.
 */

// yandex map center
map_center = [56.72666666666667, 37.716944444444444];



x_array = [];
//[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

y_array = [];
//[1, 2, 3, 4, 25, 26, 28, 27, 29, 30, 31, 30, 28, 27, 28, 15];

function prepareData() {
    for (var i = 0; i < 3600*3; i++)
    {
        x_array.push(i);
        y_array.push(Math.random());
    }
}

