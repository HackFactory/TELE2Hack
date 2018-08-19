'use strict';

$(document).ready(function(){

    // Make some random data for Flot Line Chart
    var data1 = [[1,60], [2,30], [3,50], [4,100], [5,10], [6,90], [7,85]];
    var data2 = [[1,20], [2,90], [3,60], [4,40], [5,100], [6,25], [7,65]];
    var data3 = [[1,100], [2,20], [3,60], [4,90], [5,80], [6,10], [7,5]];

    // Create an Array push the data + Draw the bars
    var barData = [
        {
            label: 'Tokyo',
            data: data1,
            color: '#edeff0'
        },
        {
            label: 'Seoul',
            data: data2,
            color: '#8a99a0'
        },
        {
            label: 'Beijing',
            data: data3,
            color: '#415158'
        }
    ]

    // Let's create the chart
    if ($('#chart-line')[0]) {
        $.plot($("#chart-line"), barData, {
            series: {
                shadowSize: 0
            },
            grid : {
                borderWidth: 1,
                borderColor: '#31424b',
                show : true,
                hoverable : true
            },

            yaxis: {
                tickColor: '#31424b',
                tickDecimals: 0,
                font :{
                    lineHeight: 13,
                    style: "normal",
                    color: "#98a7ac"
                },
                shadowSize: 0
            },

            xaxis: {
                tickColor: '#31424b',
                tickDecimals: 0,
                font :{
                    lineHeight: 13,
                    style: "normal",
                    color: "#98a7ac"
                },
                shadowSize: 0
            },

            legend:{
                container: '.flot-chart-legend--line',
                noColumns: 5
            }
        });
    }

    // Tooltips for Flot Charts

    if ($('.flot-chart')[0]) {
        $('.flot-chart').bind('plothover', function (event, pos, item) {
            if (item) {
                var x = item.datapoint[0].toFixed(2),
                    y = item.datapoint[1].toFixed(2);
                $('.flot-tooltip').html(item.series.label + ' of ' + x + ' = ' + y).css({top: item.pageY+5, left: item.pageX+5}).show();
            }
            else {
                $(".flot-tooltip").hide();
            }
        });

        $("<div class='flot-tooltip'></div>").appendTo("body");
    }
});
