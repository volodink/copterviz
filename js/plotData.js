/**
 * Created by dmage on 11.05.2016.
 */

function plotData(val) {

    TESTER = document.getElementById('tester');

    x_array_local = [];
    y_array_local = [];

    for (var i = 0; i < val; i++) {
        x_array_local.push(x_array[i]);
        y_array_local.push(y_array[i]);
    }

    var trace1 = [{
        x: x_array_local,
        y: y_array_local,
        marker: {
            color: 'rgb(142, 124, 195)',
            size: 12
        }
    }];

    var layout = {
        title: 'Высота коптера',
        xaxis:{
            title: 'Временные метки (timestamp))'
        },
        yaxis:{
            title: 'Высота'
        },
        margin: {
            t:25,
            l:40,
            r:20,
            b:35
        }
    };

    Plotly.newPlot(
        TESTER,
        trace1,
        layout
    );
}

plotData();
