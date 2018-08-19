'use strict';

var animationDuration;

$(window).load(function(){
    //Welcome Message (not for login page)
    function notify(message, type){
        $.notify({
            message: message
        },{
            type: type,
            allow_dismiss: false,
            label: 'Cancel',
            className: 'btn-xs btn-default',
            placement: {
                from: 'bottom',
                align: 'left'
            },
            delay: 2500,
            animate: {
                    enter: 'animated fadeInUp',
                    exit: 'animated fadeOutDown'
            },
            offset: {
                x: 30,
                y: 30
            }
        });
    }

    if (!$('.login, .four-zero')[0]) {
        notify('Welcome back Mallinda Hollaway', '-light');
    }
});

$(document).ready(function() {
    /*--------------------------------------
        Animation
    ---------------------------------------*/
    $('body').on('click', '.animation-demo .btn', function(){
        var animation = $(this).text();
        var cardImg = $(this).closest('.card').find('img');
        if (animation === "hinge") {
            animationDuration = 2100;
        }
        else {
            animationDuration = 1200;
        }

        cardImg.removeAttr('class');
        cardImg.addClass('animated '+animation);

        setTimeout(function(){
            cardImg.removeClass(animation);
        }, animationDuration);
    });


    /*--------------------------------------
         Bootstrap Notify Notifications
     ---------------------------------------*/
    function notify(from, align, icon, type, animIn, animOut){
        $.notify({
            icon: icon,
            title: ' Bootstrap Notify',
            message: 'Turning standard Bootstrap alerts into awesome notifications',
            url: ''
        },{
            element: 'body',
            type: type,
            allow_dismiss: true,
            placement: {
                from: from,
                align: align
            },
            offset: {
                x: 30,
                y: 30
            },
            spacing: 10,
            z_index: 1031,
            delay: 2500,
            timer: 1000,
            url_target: '_blank',
            mouse_over: false,
            animate: {
                enter: animIn,
                exit: animOut
            },
            template:   '<div data-notify="container" class="alert alert-dismissible alert-{0}" role="alert">' +
                            '<button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span></button>' +
                            '<span data-notify="icon"></span> ' +
                            '<span data-notify="title">{1}</span> ' +
                            '<span data-notify="message">{2}</span>' +
                            '<div class="progress" data-notify="progressbar">' +
                                '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                            '</div>' +
                            '<a href="{3}" target="{4}" data-notify="url"></a>' +
                        '</div>'
        });
    }

    $('.notifications > div > .btn').click(function(e){
        e.preventDefault();
        var nFrom = $(this).attr('data-from');
        var nAlign = $(this).attr('data-align');
        var nIcons = $(this).attr('data-icon');
        var nType = $(this).attr('data-type');
        var nAnimIn = $(this).attr('data-animation-in');
        var nAnimOut = $(this).attr('data-animation-out');

        notify(nFrom, nAlign, nIcons, nType, nAnimIn, nAnimOut);
    });


    /*--------------------------------------
        Sweet Alert Dialogs
    ---------------------------------------*/

    //Basic
    $('#sa-basic').click(function(){
        swal("Here's a message!");
    });

    //A title with a text under
    $('#sa-title').click(function(){
        swal(
            "Here's a message!",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem erat, tincidunt vitae ipsum et, pellentesque maximus enim. Mauris eleifend ex semper, lobortis purus sed, pharetra felis"
        )
    });

    //Success Message
    $('#sa-success').click(function(){
        swal(
            "Good job!",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem erat, tincidunt vitae ipsum et, pellentesque maximus enim. Mauris eleifend ex semper, lobortis purus sed, pharetra felis",
            "success"
        )
    });

    //Warning Message
    $('#sa-warning').click(function(){
        swal(
            "Not a good sign...",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem erat, tincidunt vitae ipsum et, pellentesque maximus enim. Mauris eleifend ex semper, lobortis purus sed, pharetra felis",
            "warning"
        )
    });

    //Question Message
    $('#sa-question').click(function(){
        swal(
            "Hmm.. what did you say?",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem erat, tincidunt vitae ipsum et, pellentesque maximus enim. Mauris eleifend ex semper, lobortis purus sed, pharetra felis",
            "question"
        )
    });

    //Warning Message with function
    $('#sa-function').click(function(){
        swal({
            title: "Are you sure?",
            text: "You will not be able to recover this imaginary file!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes, delete it!"
        }).then(function(){
            swal(
                "Deleted!",
                "Your imaginary file has been deleted.",
                "success"
            );
        });
    });

    //Custom Image
    $('#sa-image').click(function(){
        swal({
            title: "Sweet!",
            text: "Here's a custom image.",
            imageUrl: "demo/img/thumbs-up.png"
        });
    });

    //Auto Close Timer
    $('#sa-close').click(function(){
        swal({
            title: "Auto close alert!",
            text: "I will close in 2 seconds.",
            timer: 2000,
            showConfirmButton: false
        });
    });


    /*---------------------------------------------------------
        NoUiSlider
    ----------------------------------------------------------*/
    //Basic
    if($('#slider-basic')[0]) {
        var sliderBasic = document.getElementById('slider-basic');
        noUiSlider.create(sliderBasic, {
            start: 100,
            connect: true,
            range: {
                'min': 0,
                'max': 1000
            }
        });
    }

    //Range Slider
    if($('#slider-range')[0]) {
        var sliderRange = document.getElementById('slider-range');
        noUiSlider.create(sliderRange, {
            start: [20, 80],
            connect: true,
            range: {
                'min': 0,
                'max': 100
            }
        });
    }

    //Output Values
    if($('#slider-complete')[0]) {
        var sliderComplete = document.getElementById('slider-complete');
        var sliderCompleteValues = [
            document.getElementById('slider-complete-upper'),
            document.getElementById('slider-complete-lower')
        ]

        noUiSlider.create (sliderComplete, {
            start: [12000, 70000],
            connect: true,
            range: {
                'min': 12000,
                'max': 70000
            }
        });

        sliderComplete.noUiSlider.on('update', function( values, handle ) {
            sliderCompleteValues[handle].innerHTML = values[handle];
        });
    }

});

