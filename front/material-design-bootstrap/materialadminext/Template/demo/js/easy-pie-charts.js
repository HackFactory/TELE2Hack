'use strict';

$(document).ready(function () {
    $('.chart-pie').each(function () {
        var value = $(this).data('pie-value');
        var size = $(this).data('pie-size');

        $(this).find('.chart-pie__value').css({
            lineHeight: (size-2)+'px',
            fontSize: (size/4)+'px'
        });

        $(this).easyPieChart ({
            easing: 'easeOutBounce',
            barColor: 'rgba(255,255,255,0.6)',
            trackColor: '#22313a',
            scaleColor: 'rgba(0,0,0,0)',
            lineCap: 'round',
            lineWidth: 2,
            size: size,
            animate: 3000,
            onStep: function(from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
        })
    });
});