'use strict';

$(document).ready(function () {
    // Function for Sparkline Line Chart
    function sparklineLine(id, width, height, lineColor, fillColor, lineWidth, maxSpotColor, minSpotColor, spotColor, spotRadius, hSpotColor, hLineColor) {
        $('.'+id).sparkline('html', {
            type: 'line',
            width: width,
            height: height,
            lineColor: lineColor,
            fillColor: fillColor,
            lineWidth: lineWidth,
            maxSpotColor: maxSpotColor,
            minSpotColor: minSpotColor,
            spotColor: spotColor,
            spotRadius: spotRadius,
            highlightSpotColor: hSpotColor,
            highlightLineColor: hLineColor
        });
    }

    // Function for Sparkline Bar Chart
    function sparklineBar(id, height, barWidth, barColor, barSpacing) {
        $('.'+id).sparkline('html', {
            type: 'bar',
            height: height,
            barWidth: barWidth,
            barColor: barColor,
            barSpacing: barSpacing
        })
    }

    //Sample Sparkline Line Chart
    if ($('.chart-sparkline-line')[0]) {
        sparklineLine(
            'chart-sparkline-line',
            '100%',
            50,
            'rgba(255, 255, 255, 0.2)',
            'rgba(0,0,0,0)', 1.5,
            '#b4bfc3',
            '#b4bfc3',
            '#b4bfc3',
            4,
            '#b4bfc3',
            '#b4bfc3'
        );
    }

    //Sample Sparkline Bar Chart
    if ($('.chart-sparkline-bar')[0]) {
        sparklineBar('chart-sparkline-bar', 40, 3, '#b4bfc3', 2);
    }

    //Sample Sparkline Tristate Chart
    if ($('.chart-sparkline-tristate')[0]) {
        $('.chart-sparkline-tristate').sparkline('html', {
            type: 'tristate',
            height: 40,
            posBarColor: '#b4bfc3',
            zeroBarColor: '#b4bfc3',
            negBarColor: 'rgba(255,255,255,0.08)',
            barWidth: 3,
            barSpacing: 2
        });
    }

    //Sample Sparkline Discrete Chart
    if ($('.chart-sparkline-discrete')[0]) {
        $('.chart-sparkline-discrete').sparkline('html', {
            type: 'discrete',
            height: 40,
            lineColor: '#b4bfc3',
            thresholdColor: 'rgba(255,255,255,0.1)',
            thresholdValue: 4
        });
    }

    //Sample Sparkline Bullet Chart
    if ($('.chart-sparkline-bullet')[0]) {
        $('.chart-sparkline-bullet').sparkline('html', {
            type: 'bullet',
            targetColor: '#ef5350',
            performanceColor: '#edeff0',
            rangeColors: ['rgba(255,255,255,0.08)', 'rgba(255,255,255,0.05)', 'rgba(255,255,255,0.02)'],
            width: '100%',
            height: 50
        });
    }

    //Sample Sparkline Pie Chart
    if ($('.chart-sparkline-pie')[0]) {
        $('.chart-sparkline-pie').sparkline('html', {
            type: 'pie',
            height: 50,
            sliceColors: ['#b4bfc3', '#edeff0', 'rgba(177, 188, 192, 0.47)', 'rgba(177, 188, 192, 0.1)']
        });
    }
});