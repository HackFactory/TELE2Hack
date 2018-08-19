'use strict';

$(document).ready(function(){
    
    /* Make some random data*/
    
    var data = [];
    var totalPoints = 300;
    var updateInterval = 30;

    function getRandomData() {
        if (data.length > 0)
            data = data.slice(1);

        while (data.length < totalPoints) {
    
            var prev = data.length > 0 ? data[data.length - 1] : 50,
                y = prev + Math.random() * 10 - 5;
            if (y < 0) {
                y = 0;
            } else if (y > 90) {
                y = 90;
            }

            data.push(y);
        }

        var res = [];
        for (var i = 0; i < data.length; ++i) {
            res.push([i, data[i]])
        }

        return res;
    }

    /* Update chart */
    function update() {
        plot.setData([getRandomData()]);
        // Since the axes don't change, we don't need to call plot.setupGrid()

        plot.draw();
        setTimeout(update, updateInterval);
    }

    /* Create Chart */
    
    if ($('#chart-dynamic')[0]) {
        var plot = $.plot("#chart-dynamic", [ getRandomData() ], {
            series: {
                label: "Server Process Data",
                lines: {
                    show: true,
                    lineWidth: 0.2,
                    fill: 0.8
                },
    
                color: '#edeff0',
                shadowSize: 0
            },
            yaxis: {
                min: 0,
                max: 100,
                tickColor: '#31424b',
                font :{
                    lineHeight: 13,
                    style: "normal",
                    color: "#98a7ac"
                },
                shadowSize: 0
    
            },
            xaxis: {
                tickColor: '#31424b',
                show: true,
                font :{
                    lineHeight: 13,
                    style: "normal",
                    color: "#98a7ac"
                },
                shadowSize: 0,
                min: 0,
                max: 250
            },
            grid: {
                borderWidth: 1,
                borderColor: '#31424b',
                labelMargin:10,
                mouseActiveRadius:6
            },
            legend:{
                show: false
            }
        });

        update();
    }
});