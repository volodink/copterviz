$(function () {
    $("#slider").slider({
        range: 'min',
        min: 0,
        max: 3600 * 3 - 1,
        value: 1000,
        slide: function (event, ui) {
            plotData(ui.value);
        },
        create: function (event, ui) {
            prepareData();
            plotData(ui.value);
        }

    });
});